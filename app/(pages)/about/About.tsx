"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import title_icon from "@/public/images/title_icon.svg";
import aboutlogo from "@/public/images/novo-about-logo.png";
import serviceicon1 from "@/public/images/service-icon1.png";
import serviceicon2 from "@/public/images/service-icon2.png";
import serviceicon3 from "@/public/images/service-icon3.png";
import serviceicon4 from "@/public/images/service-icon4.png";
import serviceicon5 from "@/public/images/service-icon5.png";

export default function About() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl =
    "https://www.youtube.com/embed/3v6bk1UcMkE?si=HO1w8iqyaHhKsx0K";

  // Variantes de animação
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
    <main className="min-h-screen text-white bg-[#0a0a0a]">
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative section-banner min-h-[550px] bg-[#0a0a0a] px-[4%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start w-full overflow-hidden"
      >
        {/* Gradiente Radial Sofisticado */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-transparent to-transparent opacity-60" />

        <div className="relative z-10 w-full mb-20">
          {/* Label Superior (Seguindo o padrão do Team) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic">
              Nossa essência
            </span>
          </motion.div>

          {/* Título Principal Imponente */}
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-bold w-full lg:max-w-4xl relative pb-6 tracking-tighter leading-none"
          >
            Sobre <span className="italic font-light text-gray-400">Nós</span>
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
          </motion.h2>

          {/* Linha Divisora Animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="origin-left h-[1px] w-full bg-gradient-to-r from-gray-500 via-gray-800 to-transparent mb-10"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
            {/* Descrição em Itálico */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="max-w-xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed italic"
            >
              Onde a <span className="text-white font-medium">estratégia</span>{" "}
              e <span className="text-white font-medium">criatividade</span> se
              encontram, e seu futuro se transforma em{" "}
              <span className="text-white font-medium">realidade</span>.
            </motion.p>

            {/* Breadcrumbs / Menu de Navegação da Página */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex gap-8 py-2 border-l border-primary/30 pl-8"
            >
              <li>
                <Link
                  href="/"
                  className="group relative font-medium text-gray-500 text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group relative font-medium text-white text-sm uppercase tracking-widest transition-colors"
                >
                  Sobre
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary" />
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>

        {/* Linha decorativa vertical lateral */}
        <div className="absolute left-[2%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />
      </motion.div>

      {/* Intro Section */}
      <div className="about py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="about-content w-full lg:w-[60%]"
        >
          <span className="text-white bg-primary px-4 py-2 font-semibold text-md sm:text-xl rounded-sm">
            Seja Bem-Vindo(a)
          </span>
          <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-6 leading-tight">
            Design estratégico. Audiovisual de alto impacto.
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Não somos apenas uma agência. Somos curadores de experiências
            digitais. Nosso objetivo é transformar a visão dos nossos clientes
            em um legado visual inesquecível.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[40%] flex justify-center items-center"
        >
          <div className="flex items-center justify-center w-[250px] h-[250px] relative">
            <Image
              src={aboutlogo}
              alt="about-logo"
              className="invert brightness-0"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>

      {/* Video Section */}
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
        <div className="mt-32 border-t border-white/10 pt-20">
          <ul className="flex flex-col gap-24">
            {/* Item: Missão */}
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-20"
            >
              <div className="flex flex-col gap-4 min-w-[300px]">
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                  Nossa Missão
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-400 font-light italic">
                  Desde a nossa gênese, transcendemos o comum para arquitetar
                  soluções que definem indústrias. Nossa missão é fundir{" "}
                  <span className="text-white">estratégia e criatividade</span>{" "}
                  para elevar marcas ao status de ícones digitais, cultivando
                  experiências que permanecem no tempo.
                </p>
              </div>
            </motion.li>

            {/* Item: Visão/Objetivo */}
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-20"
            >
              <div className="flex flex-col gap-4 min-w-[300px]">
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                  Nosso Horizonte
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-400 font-light italic">
                  Projetamos um futuro onde a tecnologia e a arte convergem em
                  absoluta harmonia. Nosso objetivo é moldar a cultura digital,
                  entregando valor estratégico excepcional para líderes em{" "}
                  <span className="text-white">
                    tecnologia, entretenimento e arte
                  </span>{" "}
                  mundial.
                </p>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Services List */}
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
    </main>
  );
}
