"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * EXCLUIR LEAD
 * Remove o lead do banco de dados Neon e atualiza o cache da página.
 */
export async function deleteLeadAction(id: string) {
  try {
    await prisma.lead.delete({
      where: { id: id },
    });

    // Força o Next.js a atualizar os componentes que usam esses dados
    revalidatePath("/admin/leads");
    return { success: true };
  } catch (error) {
    console.error("Erro ao deletar lead:", error);
    return { success: false, error: "Erro ao deletar o registro." };
  }
}

/**
 * BUSCAR LEADS E SESSÕES ATUALIZADOS (Para o Auto-Refresh / Polling)
 * Esta função agora retorna o total de sessões para calcular a conversão no Dashboard.
 */
export async function getUpdatedLeadsAction() {
  try {
    // Busca todos os leads e o total de sessões simultaneamente (melhor performance)
    const [leads, totalSessions] = await Promise.all([
      prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.chatSession.count(), // Conta quantas pessoas iniciaram chat com a IA
    ]);

    return {
      success: true,
      totalSessions, // Novo campo para o dashboard
      leads: leads.map((lead) => ({
        ...lead,
        createdAt: lead.createdAt,
      })),
    };
  } catch (error) {
    console.error("Erro ao buscar leads atualizados:", error);
    return {
      success: false,
      leads: [],
      totalSessions: 0,
      error: "Falha na sincronização com o banco.",
    };
  }
}
