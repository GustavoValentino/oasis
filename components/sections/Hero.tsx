"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { styles } from "@/app/styles/styles";
import AnimatedText from "@/components/ui/AnimatedText";

interface HeroProps {
  whatsappLink: string;
  videoSource: string;
}

const HERO_PHRASES = [
  "Buscando o melhor fornecedor?",
  "Conectamos você à água potável.",
  "Sua rede inteligente de abastecimento.",
  "As melhores fornecedoras em um só lugar.",
];

const Hero: React.FC<HeroProps> = ({ whatsappLink, videoSource }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-slate-900">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-10 scale-105"
        src="/images/caminhao.jpg"
        alt="Rede de Abastecimento Oásis"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-700/30 via-black/50 to-slate-900 z-[1]"></div>

      <motion.div
        className="hero-content w-full max-w-5xl px-[4%] text-center text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-200">
            Rede Homologada • Atendimento Personalizado
          </span>
        </motion.div>

        <AnimatedText
          phrases={HERO_PHRASES}
          className="text-4xl sm:text-7xl md:text-8xl font-bold leading-tight mb-6"
          delayBeforeStart={0.5}
        />

        <motion.p
          className="text-blue-50/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          variants={itemVariants}
        >
          A Oásis simplifica sua busca por água potável. Mediamos a conexão
          entre clientes e os fornecedores mais confiáveis de São Paulo,
          garantindo agilidade, preços competitivos e total suporte na sua
          cotação.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button}`}
          >
            <Icon icon="mdi:whatsapp" width="24" height="24" />
            <span>Fale com um especialista</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
