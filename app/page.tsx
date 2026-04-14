"use client";
import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { AnimatePresence } from "framer-motion";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/ServicesSection";
import About from "../components/sections/AboutSection";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Team from "../components/sections/TeamSection";
import Testimonials from "../components/sections/Testimonials";
import Counts from "../components/sections/CountsSection";
import Contact from "../components/sections/ContactSection";
import Blog from "../components/sections/BlogSection";
import Brands from "../components/sections/BrandSection";
import { blogPosts } from "@/constants/blog";
import ChatBot from "../components/chat/ChatBot";

import FloatingActionButtonMenu from "../components/chat/Chat";
import { brandsData } from "@/constants/brands";
import { projects } from "@/constants/projects";

import { countsData } from "@/constants/stats";
import { TEAM_MEMBERS } from "@/constants/team";
import { testimonials } from "@/constants/testimonials";
import { servicesData } from "@/constants/services";

interface Service {
  id: number;
  title: string;
  img: StaticImageData;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
}

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

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string | StaticImageData;
  description: string;
}

interface Brand {
  id: number;
  logo: string | StaticImageData;
  link: string;
  alt: string;
}

const whatsappNumber = "+5511949995382";
const whatsappMessage = "Olá, gostaria de solicitar um orçamento!";
const WHATSAPP_LINK = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const CHAT_ASSISTANT_LINK = "https://link.do.seu.assistente.com";

const items = ["- Direção Criatividade, Conceito & Estratégia de Marca"];

const marqueeContent = (
  <div className="flex space-x-12">
    {items.map((text, index) => (
      <span
        key={index}
        className="text-[10vw] font-bold uppercase whitespace-nowrap"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #fff",
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

  const homeMembers = TEAM_MEMBERS.slice(0, 4);

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

      <Team members={homeMembers} />

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
