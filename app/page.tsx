"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Importe os componentes
import Hero from "../components/sections/Hero";
import Services from "../components/sections/ServicesSection";
import About from "../components/sections/AboutSection";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Testimonials from "../components/sections/Testimonials";
import Counts from "../components/sections/CountsSection";
import Contact from "../components/sections/ContactSection";
import Blog from "../components/sections/BlogSection";
import Brands from "../components/sections/BrandSection";
import ChatBot from "../components/chat/ChatBot";
import FloatingActionButtonMenu from "../components/chat/Chat";

// Importe as constantes
import { blogPosts } from "@/constants/blog";
import { brandsData } from "@/constants/brands";
import { projects } from "@/constants/projects";
import { countsData } from "@/constants/stats";
import { testimonials } from "@/constants/testimonials";
import { servicesData } from "@/constants/services";

// --- CONFIGURAÇÕES ---
const whatsappNumber = "+5511949995382";
const whatsappMessage = "Olá, gostaria de solicitar um orçamento!";
const WHATSAPP_LINK = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

// Marquee corrigido para não cortar
const items = [" • Qualidade • Atendimento 24h • Logística eficiente "];
const marqueeContent = (
  <div className="flex items-center py-10">
    {" "}
    {/* Padding aumentado para a onda não cortar */}
    {items.map((text, index) => (
      <span
        key={index}
        className="text-[10vw] font-bold uppercase whitespace-nowrap inline-block px-12 italic"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
          lineHeight: "1.2",
        }}
      >
        {text}
      </span>
    ))}
  </div>
);

const heroVideoPath = "";
const videoUrl =
  "https://www.youtube.com/embed/3v6bk1UcMkE?si=HO1w8iqyaHhKsx0K";

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Hero whatsappLink={WHATSAPP_LINK} videoSource={heroVideoPath} />

      <Services services={servicesData} />

      <About
        isVideoModalOpen={isVideoModalOpen}
        setIsVideoModalOpen={setIsVideoModalOpen}
        videoUrl={videoUrl}
        marqueeContent={marqueeContent}
      />

      <FeaturedProjects projects={projects} />

      <Testimonials testimonials={testimonials} />

      <Counts counts={countsData} />

      <Contact />

      <Blog blogs={blogPosts} />

      <Brands brands={brandsData} />

      <FloatingActionButtonMenu
        whatsappLink={WHATSAPP_LINK}
        onOpenChat={() => setIsChatOpen(true)}
      />

      <AnimatePresence>
        {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
