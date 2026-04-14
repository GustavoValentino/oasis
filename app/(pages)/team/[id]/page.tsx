import { TEAM_MEMBERS } from "@/constants/team";
import { notFound } from "next/navigation";
import TeamDetails from "../TeamDetails"; // Verifique se o nome é TeamDetails ou TeamDetailsClient

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Em versões novas do Next.js, params é uma Promise
  const { id } = await params;

  // Encontra o membro comparando como string para evitar erro de tipo (1 vs "1")
  const member = TEAM_MEMBERS.find((m) => m.id.toString() === id);

  if (!member) {
    return notFound();
  }

  return (
    <>
      <TeamDetails member={member} />
    </>
  );
}
