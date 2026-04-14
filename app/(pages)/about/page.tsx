"use client"; // Obrigatório para usar useState e Framer Motion

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Importações de Componentes

import Team from "../../../components/sections/TeamSection";
import Testimonials from "../../../components/sections/Testimonials";
import Brands from "../../../components/sections/BrandSection";

import ChatBot from "../../../components/chat/ChatBot";

// Importações de Imagens (Mantive suas importações)
import team1 from "@/public/images/team-01.png";
import team2 from "@/public/images/team-02.png";
import team3 from "@/public/images/team-03.png";
import team4 from "@/public/images/team-04.png";
import brand1 from "@/public/images/brand1.png";
import brand2 from "@/public/images/brand2.png";
import brand3 from "@/public/images/brand3.png";
import brand4 from "@/public/images/brand4.png";
import brand5 from "@/public/images/brand5.jpg";
import brand6 from "@/public/images/brand6.png";
import brand7 from "@/public/images/brand7.png";
import brand8 from "@/public/images/brand8.jpg";
import brand9 from "@/public/images/brand9.png";
import brand10 from "@/public/images/brand10.webp";
import Counts from "../../../components/sections/CountsSection";
import FloatingActionButtonMenu from "@/components/chat/Chat";
import About from "./About";

interface Member {
  id: number;
  name: string;
  role: string;
  letter: string;
  img: StaticImageData;
  facebookUrl?: string;
  instagramUrl?: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

interface CountItem {
  end: number;
  duration: number;
  suffix: string;
  label: string;
}

interface Brand {
  id: number;
  logo: string | StaticImageData;
  link: string;
  alt: string;
}

const members: Member[] = [
  {
    id: 1,
    name: "Edy",
    role: "Designer UI/UX",
    img: team1,
    letter: "E",
    facebookUrl: "#",
    instagramUrl: "https://www.instagram.com/braincoreinc",
  },
  {
    id: 2,
    name: "Fabiane",
    role: "Videomaker",
    img: team2,
    letter: "F",
    facebookUrl: "#",
    instagramUrl: "#",
  },
  {
    id: 3,
    name: "Roberto",
    role: "Marketing Digital",
    img: team3,
    letter: "R",
    facebookUrl: "#",
    instagramUrl: "#",
  },
  {
    id: 4,
    name: "Karen",
    role: "Fotógrafa",
    img: team4,
    letter: "K",
    facebookUrl: "#",
    instagramUrl: "#",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    // Foco: Direção Criativa e Qualidade
    text: "A direção criativa elevou o nível da nossa comunicação. Qualidade e impacto imediato nas campanhas de lançamento.",
    name: "Ricardo Mendes",
    role: "Diretor de Marketing, Tech Solutions",
  },
  {
    id: 2,
    // Foco: Produção de Vídeo e Profissionalismo
    text: "Vídeos institucionais impecáveis. Roteiro afiado e produção de altíssimo padrão. Profissionais exemplares!",
    name: "Juliana Castro",
    role: "CEO, Startup Fintech",
  },
  {
    id: 3,
    // Foco: Estratégia e Resultados
    text: "A estratégia de branding foi um divisor de águas. Alinhamento perfeito da identidade com nossos objetivos de crescimento.",
    name: "André Pires",
    role: "Gerente de Branding, E-commerce",
  },
  {
    id: 4,
    // Foco: Design de Experiência (UX/UI) e Retenção
    text: "Design de experiência fundamental para o app. Usabilidade melhorou drasticamente, impactando a retenção de usuários.",
    name: "Mariana Souza",
    role: "Head de Produto, App Development",
  },
  {
    id: 5,
    // Foco: Mídias Sociais e ROI
    text: "Conteúdo para mídias sociais sempre criativo e de alta qualidade. O ROI das campanhas melhorou muito após a parceria.",
    name: "Roberto Aguiar",
    role: "Especialista em Growth, Indústria Criativa",
  },
];

const countsData: CountItem[] = [
  {
    end: 23,
    duration: 2,
    suffix: "",
    label: "Membros",
  },
  {
    end: 1000,
    duration: 2.5,
    suffix: "+",
    label: "Projetos Entregues",
  },
  {
    end: 12,
    duration: 2.8,
    suffix: "M",
    label: "Horas de Edição",
  },
];

const brandsData: Brand[] = [
  {
    id: 1,
    logo: brand1, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 1",
  },
  {
    id: 2,
    logo: brand2, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 2",
  },
  {
    id: 3,
    logo: brand3, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 3",
  },
  {
    id: 4,
    logo: brand4, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 4",
  },
  {
    id: 5,
    logo: brand5, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 5",
  },
  {
    id: 6,
    logo: brand6, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 6",
  },
  {
    id: 7,
    logo: brand7, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 7",
  },
  {
    id: 8,
    logo: brand8, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 8",
  },
  {
    id: 9,
    logo: brand9, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 9",
  },
  {
    id: 10,
    logo: brand10, // Usando a StaticImageData importada
    link: "#",
    alt: "Logo da Marca 10",
  },
];

const whatsappNumber = "+5511949995382";
const whatsappMessage = "Olá, gostaria de solicitar um orçamento!";
const WHATSAPP_LINK = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Page() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <About />
      <Team members={members} />
      <Testimonials testimonials={testimonials} />
      <Counts counts={countsData} />

      <Brands brands={brandsData} />

      <FloatingActionButtonMenu
        whatsappLink={WHATSAPP_LINK}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* 2. O ChatBot (Fora do Menu, controlado pelo estado) */}
      <AnimatePresence>
        {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
