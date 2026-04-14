import React from "react";
import Team from "./Team";
// Importe o componente visual que organizamos
// Ajuste o caminho se o seu arquivo estiver em outro local

// Definimos o título da página para SEO (Opcional mas recomendado)
export const metadata = {
  title: "Nosso Time | Braincore",
  description:
    "Conheça as mentes brilhantes por trás da inovação na Braincore.",
};

export default function TeamPage() {
  return (
    <>
      {/* Chamamos o componente que contém todo o design e o grid de membros */}
      <Team />
    </>
  );
}
