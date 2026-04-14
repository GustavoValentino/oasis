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

    revalidatePath("/admin/leads");
    return { success: true };
  } catch (error) {
    console.error("Erro ao deletar lead:", error);
    return { success: false, error: "Erro ao deletar o registro." };
  }
}

/**
 * BUSCAR LEADS E SESSÕES ATUALIZADOS (Para o Auto-Refresh / Polling)
 */
export async function getUpdatedLeadsAction() {
  try {
    const [leads, totalSessions] = await Promise.all([
      prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.chatSession.count(),
    ]);

    return {
      success: true,
      totalSessions,
      // Adicionado o tipo 'any' para ignorar a verificação estrita do TS no build
      leads: leads.map((lead: { createdAt: Date }) => ({
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
