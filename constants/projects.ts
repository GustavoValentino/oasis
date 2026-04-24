import proj1 from "@/public/images/project01.jpg";
import proj2 from "@/public/images/project02.jpg";
import proj3 from "@/public/images/project03.jpg";
import proj4 from "@/public/images/project04.jpg";
import proj5 from "@/public/images/project05.jpg";
import proj6 from "@/public/images/project06.webp";

import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Abastecimento Residencial",
    category: "Residencial",
    image: proj1,
    description:
      "Entrega ágil para caixas d'água e cisternas com mangueiras de longo alcance e máxima higiene.",
  },
  {
    id: 2,
    title: "Enchimento de Piscinas",
    category: "Lazer & Bem-estar",
    image: proj2,
    description:
      "Água cristalina e tratada para sua piscina. Enchimento rápido para garantir o seu lazer.",
  },
  {
    id: 3,
    title: "Plantão Emergencial 24h",
    category: "Urgência",
    image: proj3,
    description:
      "Atendimento prioritário para falta de água em condomínios, hospitais e comércios a qualquer hora.",
  },

  {
    id: 4,
    title: "Irrigação de Áreas Verdes",
    category: "Paisagismo",
    image: proj4,
    description:
      "Manutenção de jardins e projetos de paisagismo com aspersão controlada e economia hídrica.",
  },
  {
    id: 5,
    title: "Indústrias e Obras",
    category: "Corporativo",
    image: proj5,
    description:
      "Suporte hídrico estratégico para processos industriais, caldeiras e controle de poeira em obras.",
  },
  {
    id: 6,
    title: "Lavagem de Pátios e Vias",
    category: "Infraestrutura",
    image: proj6,
    description:
      "Limpeza de alta pressão para grandes pátios, galpões e vias com máxima eficiência hídrica.",
  },
];
