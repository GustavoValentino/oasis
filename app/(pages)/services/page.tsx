"use client";
import React from "react";
import Services from "./Services";
import Counts from "@/components/sections/CountsSection";
import { countsData } from "@/constants/stats";
import Image from "next/image";
import serviceicon1 from "@/public/images/service-icon1.png";
import serviceicon2 from "@/public/images/service-icon2.png";
import serviceicon3 from "@/public/images/service-icon3.png";
import serviceicon4 from "@/public/images/service-icon4.png";
import serviceicon5 from "@/public/images/service-icon5.png";
import { motion } from "framer-motion";
import Contact from "@/components/sections/ContactSection";
import Brands from "@/components/sections/BrandSection";
import { brandsData } from "@/constants/brands";

// export const metadata = {
//   title: "Serviços | Braincore Audiovisual",
//   description: "Soluções completas em produção de vídeo, design e marketing.",
// };

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
  };
  return (
    <>
      <Services />
      <Counts counts={countsData} />
      <div className="service py-[2%] px-[2%] md:px-[8%] xl:px-[12%]">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="service-content"
        >
          <span className="text-white bg-primary px-2 py-3 font-semibold text-xl rounded-sm">
            O que fazemos?
          </span>
          <h2 className="text-2xl sm:text-6xl font-semibold max-w-3xl mt-5 leading-tight text-white">
            Somos uma agência completa em design e audiovisual.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="border-b border-white/10"
        >
          {[
            {
              id: "01",
              title: "Brand Strategy",
              icon: serviceicon1,
              desc: "Posicionamento de mercado para marcas de luxo e tecnologia.",
            },
            {
              id: "02",
              title: "Social Media Campaign",
              icon: serviceicon2,
              desc: "Engajamento visceral através de conteúdo de alta fidelidade.",
            },
            {
              id: "03",
              title: "Creative Direction",
              icon: serviceicon3,
              desc: "Liderança artística para projetos que demandam originalidade.",
            },
            {
              id: "04",
              title: "Machine Learning | AI",
              icon: serviceicon4,
              desc: "Inteligência artificial aplicada ao fluxo criativo moderno.",
            },
            {
              id: "05",
              title: "Visual Identity",
              icon: serviceicon5,
              desc: "Sistemas visuais escaláveis e esteticamente superiores.",
            },
          ].map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group relative flex flex-col md:flex-row justify-between items-center py-16 border-t border-white/10 hover:bg-white/[0.02] transition-all duration-500 px-8 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center z-10 w-full">
                <span className="text-xl font-mono text-primary/40 group-hover:text-primary transition-colors italic">
                  {service.id}
                </span>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 group-hover:translate-x-4 transition-transform duration-500">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 max-w-md group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="relative mt-8 md:mt-0 w-27 h-25 flex items-center justify-center border border-white/5 rounded-2xl group-hover:border-primary/50 group-hover:rotate-[15deg] transition-all duration-500 bg-[#111]">
                <Image
                  src={service.icon}
                  alt="icon"
                  width={60}
                  height={60}
                  className="invert grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Contact />
      <Brands brands={brandsData} />
    </>
  );
}
