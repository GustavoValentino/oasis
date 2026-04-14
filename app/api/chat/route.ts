import { streamText, tool, CoreMessage } from "ai";
import { google } from "@ai-sdk/google"; // Mudança de provedor
import z from "zod";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export const POST = async (request: NextRequest) => {
  try {
    const { sessionId, message } = await request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "Mensagem vazia" }), {
        status: 400,
      });
    }

    // 1. RECUPERAR SESSÃO E LIMITAR HISTÓRICO (Janela Deslizante de 6 mensagens)
    let session = await prisma.chatSession.findUnique({
      where: { id: sessionId || "" },
      include: {
        messages: {
          orderBy: { createdAt: "desc" },
          take: 6,
        },
      },
    });

    let currentSessionId = sessionId;
    if (!session) {
      const newSession = await prisma.chatSession.create({ data: {} });
      currentSessionId = newSession.id;
      session = { ...newSession, messages: [] };
    }

    // Convertendo o histórico do Prisma para o tipo CoreMessage[]
    const history: CoreMessage[] = session.messages.reverse().map((msg) => ({
      role: (msg.role === "assistant" || msg.role === "gemini"
        ? "assistant"
        : "user") as "assistant" | "user",
      content: msg.content,
    }));

    const fullHistoryForTool: CoreMessage[] = [
      ...history,
      { role: "user", content: message },
    ];

    // 2. FERRAMENTAS BRAINCORE
    const tools = {
      searchAgencyServices: tool({
        description:
          "Busca serviços de audiovisual, design e marketing da Braincore.",
        inputSchema: z.object({
          name: z.string().optional().describe("Nome do serviço"),
        }),
        execute: async ({ name }) => {
          const services = await prisma.agencyService.findMany({
            where: {
              OR: [
                { name: { contains: name || "", mode: "insensitive" } },
                { description: { contains: name || "", mode: "insensitive" } },
              ],
            },
          });
          return JSON.stringify(services);
        },
      }),
      saveLead: tool({
        description: "Salva contato de cliente (Lead) com intenção de projeto.",
        inputSchema: z.object({
          name: z.string().describe("Nome do lead"),
          phone: z.string().describe("WhatsApp do lead"),
          intentSummary: z
            .string()
            .describe("Resumo: Serviço + Assunto + Horário"),
          bestTime: z
            .string()
            .optional()
            .describe("Melhor horário para contato"),
        }),
        execute: async ({ name, phone, intentSummary, bestTime }) => {
          const summary = bestTime
            ? `${intentSummary} | Contato: ${bestTime}`
            : intentSummary;

          await prisma.lead.create({
            data: {
              name,
              phone,
              aiSummary: summary,
              status: "Novo",
            },
          });

          return `Sucesso! O lead ${name} foi registrado no sistema Braincore.`;
        },
      }),
    };

    // 3. EXECUÇÃO COM GOOGLE GEMINI 1.5 FLASH
    const result = await streamText({
      model: google("gemini-2.5-flash"), // Alterado para Gemini
      // maxSteps: 5,
      system: `Você é o estrategista comercial da Braincore.ai. 
      Sua meta é captar leads oferecendo orçamentos irresistíveis com valores de entrada.

      TABELA DE ESTIMATIVAS (VALORES INICIAIS):
      - Identidade Visual/Logos: A partir de R$ 297,00
      - Edição de Vídeos/Reels: A partir de R$ 150,00
      - Vídeo Clipe Musical: A partir de R$ 990,00
      - Fotografia de Eventos: A partir de R$ 450,00
      - Branding Completo: A partir de R$ 1.200,00
      Nota: Informe que os valores são "a partir de" e dependem da complexidade.

      DADOS OBRIGATÓRIOS PARA CAPTAÇÃO:
      Solicite sempre: 1. Nome | 2. WhatsApp | 3. Assunto | 4. Melhor Horário.

      FECHAMENTO (CLOSER MODE):
      1. Apresente o preço e diga que para garantir o valor promocional precisa formalizar o pedido.
      2. Informe que o time entrará em contato em até 24 horas.
      3. Se o usuário der só o nome, insista no WhatsApp para enviar o portfólio.

      REGRAS:
      - Respostas curtas com Bullet Points.
      - Chame 'saveLead' IMEDIATAMENTE após receber Nome e WhatsApp.`,
      messages: fullHistoryForTool,
      tools: tools,
      onFinish: async ({ text }) => {
        if (text?.trim() && currentSessionId) {
          await prisma.message.createMany({
            data: [
              { sessionId: currentSessionId, role: "user", content: message },
              { sessionId: currentSessionId, role: "assistant", content: text },
            ],
          });
        }
      },
    });

    return result.toTextStreamResponse({
      headers: {
        "X-Session-ID": currentSessionId ?? "",
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Erro Braincore Gemini Route:", error);
    return new Response(JSON.stringify({ error: "Erro interno no servidor" }), {
      status: 500,
    });
  }
};
