"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// Assets
import title_icon from "@/public/images/title_icon.svg";
import { styles } from "@/app/styles/styles";

const pricingData = [
  {
    id: 1,
    title: "Social Media & Vídeo",
    price: "150",
    description:
      "Edição profissional para Reels, TikTok e vídeos curtos de alto impacto.",
    features: [
      "Edição Dinâmica",
      "Legendas Animadas",
      "Color Grading",
      "Ajuste de Áudio",
      "Entrega em até 48h",
    ],
    highlight: false,
    icon: "ph:video-camera-bold",
  },
  {
    id: 2,
    title: "Identidade Visual",
    price: "297",
    description:
      "Design estratégico para marcas que buscam um posicionamento de elite.",
    features: [
      "Logotipo Exclusivo",
      "Paleta de Cores",
      "Tipografia Selecionada",
      "Manual da Marca",
      "Suporte VIP",
    ],
    highlight: true,
    icon: "ph:pen-nib-bold",
  },
  {
    id: 3,
    title: "Produção Musical",
    price: "990",
    description:
      "Vídeo clipes cinematográficos para artistas e bandas profissionais.",
    features: [
      "Roteiro Criativo",
      "Direção de Fotografia",
      "Edição Avançada",
      "Finalização 4K",
      "Garantia de Qualidade",
    ],
    highlight: false,
    icon: "ph:music-notes-bold",
  },
  //   {
  //     id: 4,
  //     title: "Branding Completo",
  //     price: "1.200",
  //     description:
  //       "A solução definitiva para empresas que querem dominar o mercado.",
  //     features: [
  //       "Estratégia de Marca",
  //       "Identidade Visual",
  //       "Consultoria de Design",
  //       "Suporte 24h",
  //       "Prioridade na Agenda",
  //     ],
  //     highlight: true,
  //     icon: "ph:crown-bold",
  //   },
];

export default function Price() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* BANNER REFINADO (Padrão Braincore) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative section-banner min-h-[550px] bg-[#0a0a0a] px-[4%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-transparent to-transparent opacity-60" />

        <div className="relative z-10 w-full mb-20">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic">
              Investimento
            </span>
          </motion.div>

          {/* Título Principal Imponente */}
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-bold w-full lg:max-w-4xl relative pb-6 tracking-tighter leading-none"
          >
            Preços
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
              Valores
              <span className="text-white font-medium">
                {" "}
                transparentes
              </span>{" "}
              para
              <span className="text-white font-medium"> projetos</span> que
              exigem o{" "}
              <span className="text-white font-medium">máximo desempenho</span>.
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
                  href="/price  "
                  className="group relative font-medium text-white text-sm uppercase tracking-widest transition-colors"
                >
                  Preços
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary" />
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>

        {/* Linha decorativa vertical lateral */}
        <div className="absolute left-[2%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />
      </motion.div>

      {/* GRID DE PREÇOS */}
      <section className="py-24 px-[4%] md:px-[8%] xl:px-[12%]">
        <div className="py-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {pricingData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.id * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-500 flex flex-col ${
                item.highlight
                  ? "bg-gradient-to-b from-[#151515] to-[#0a0a0a] border-blue-500/30 shadow-[0_20px_50px_rgba(59,130,246,0.1)] scale-105 z-10"
                  : "bg-[#0f0f0f] border-white/5 hover:border-white/20"
              }`}
            >
              {item.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1 rounded-full text-white">
                  Mais Procurado
                </span>
              )}

              <div className="mb-8">
                <Icon
                  icon={item.icon}
                  className="text-primary mb-4"
                  width="32"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-gray-400 text-sm font-medium italic">
                  A partir de
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-gray-400 text-lg">R$</span>
                  <span className="text-5xl font-bold tracking-tighter text-white">
                    {item.price}
                  </span>
                  <span className="text-gray-500 text-sm">,00</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon
                      icon="ph:check-circle-fill"
                      className="text-primary/60"
                      width="18"
                    />
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              {/* <div className="mt-auto">
                <Link
                  href="/services"
                  className={`${styles.button} w-full inline-flex items-center gap-2`}
                >
                  <Icon icon="vaadin:plus" width="20" height="20" />
                  <span>solicitar orçamento</span>
                </Link>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16 text-gray-500 text-sm italic italic"
        >
          * Os valores apresentados são estimativas iniciais e podem variar
          conforme a complexidade e prazos do projeto.
        </motion.p> */}
      </section>
    </main>
  );
}
