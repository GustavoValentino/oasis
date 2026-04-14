"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import title_icon from "@/public/images/title_icon.svg";
import { FaPlay } from "react-icons/fa";
import { servicesData } from "@/constants/services";

export default function Services() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl =
    "https://www.youtube.com/embed/3v6bk1UcMkE?si=HO1w8iqyaHhKsx0K";

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* BANNER REFINADO (Padrão Braincore) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative section-banner min-h-[550px] bg-[#0a0a0a] px-[4%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start w-full overflow-hidden pb-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-transparent to-transparent opacity-60" />

        <div className="relative z-10 w-full">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic">
              Nossas Soluções
            </span>
          </motion.div>

          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-bold w-full lg:max-w-4xl relative pb-6 tracking-tighter leading-none"
          >
            Serviços{" "}
            <span className="italic font-light text-gray-400">Elite</span>
            <span className="absolute sm:inline-block top-0 ml-4 opacity-20">
              <Image
                src={title_icon}
                alt="icon"
                width={30}
                height={30}
                // Adicionada a classe animate-spin
                className="grayscale animate-spin"
                style={{ animationDuration: "8s" }} // Dica: define uma velocidade mais lenta e luxuosa
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-[1px] w-full bg-gradient-to-r from-gray-500 via-gray-800 to-transparent mb-10 origin-left"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
            <p className="max-w-xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed italic">
              Transformamos{" "}
              <span className="text-white font-medium">ideias</span> em
              experiências visuais{" "}
              <span className="text-white font-medium">imponentes</span> através
              do audiovisual de ponta.
            </p>

            <nav className="flex gap-8 py-2 border-l border-primary/30 pl-8">
              <Link
                href="/"
                className="group relative font-medium text-gray-500 text-sm uppercase tracking-widest hover:text-white transition-colors"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              <span className="relative font-medium text-white text-sm uppercase tracking-widest">
                Serviços
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary" />
              </span>
            </nav>
          </div>
        </div>
      </motion.div>

      {/* GRID DE SERVIÇOS (Impacto Visual) */}
      <section className="py-24 px-[4%] md:px-[8%] xl:px-[12%] bg-[#0a0a0a]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="bg-[#0a0a0a] p-12 flex flex-col gap-6 transition-all duration-500 group"
            >
              <div className="w-14 h-14 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-primary group-hover:text-primary transition-all duration-500">
                {/* Aqui chamamos o ícone dinamicamente */}
                <Icon icon={service.icon} width="30" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight">
                {service.title}
              </h3>

              <p className="text-gray-500 font-light leading-relaxed">
                {service.desc}
              </p>

              <Link
                href="/contact"
                className="mt-4 flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-gray-400 group-hover:text-primary transition-colors"
              >
                Saiba Mais <Icon icon="ph:arrow-right" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="w-full py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="banner bg-cover object-bottom bg-center h-[800px] relative rounded-2xl"
        >
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center z-10">
            <div className="flex items-center justify-center w-[250px] h-[250px] relative border-[2px] border-primary rounded-full">
              <svg
                viewBox="0 0 300 300"
                className="absolute w-full h-full animate-[spin_40s_linear_infinite]"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                  ></path>
                </defs>
                <text
                  fill="#fff"
                  fontSize="16"
                  fontWeight="600"
                  letterSpacing="4"
                  textLength="2250"
                >
                  <textPath href="#circlePath" startOffset="0">
                    DÉCADAS DE EXPERIÊNCIA EM INOVAÇÃO DIGITAL • DÉCADAS DE
                    EXPERIÊNCIA EM INOVAÇÃO DIGITAL • DÉCADAS DE EXPERIÊNCIA EM
                    INOVAÇÃO DIGITAL •
                  </textPath>
                </text>
              </svg>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="relative z-10 flex items-center justify-center w-40 h-40 border-[2px] border-primary rounded-full bg-transparent transition-all cursor-pointer"
                aria-label="Reproduzir vídeo da empresa"
              >
                <FaPlay className="text-white text-6xl" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Modal Video com AnimatePresence */}
        <AnimatePresence>
          {isVideoModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 -top-[4rem] z-50 h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src={`${videoUrl}&autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
