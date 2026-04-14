import { prisma } from "@/lib/prisma";
import LeadsPageClient from "./LeadsPageClient";

// Força o Next.js a buscar dados novos do Neon em cada acesso
export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Page() {
  // Busca os leads e o total de sessões simultaneamente no servidor (mais rápido)
  const [leads, totalSessions] = await Promise.all([
    prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.chatSession.count(), // Conta o total de sessões para o cálculo da conversão
  ]);

  // Passa os dados para o componente de cliente
  return (
    <LeadsPageClient
      initialLeads={leads}
      initialTotalSessions={totalSessions}
    />
  );
}
