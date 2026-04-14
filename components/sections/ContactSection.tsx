// components/pages/home/Contact.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { FaTiktok } from "react-icons/fa";
import { motion, Variants } from "framer-motion"; // Importações adicionadas

// --- Definição das Variantes (Mantidas) ---

// Transição padrão
const defaultTransition = {
  duration: 0.7,
  ease: [0, 0, 0.2, 1],
};

// Variantes para o Contêiner Principal da Seção
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Variantes para o Bloco de Título e Formulário (Slide-up em Bloco)
const contentBlockVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Variantes para os Ícones Sociais (Contêiner)
const socialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

// Variantes para CADA Item Social (Slide-in da Direita)
const socialItemVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
      duration: 0.5,
    },
  },
};

const Contact: React.FC = () => {
  return (
    <motion.div
      className="py-[8%]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // ALTERADO para 'false' para repetir a animação
      variants={sectionVariants}
    >
      <div className="contact py-[8%] px-[2%] md:px-[8%] h-[800px] relative">
        {/* Bloco de Título e Formulário */}
        <motion.div
          className="team-content w-full lg:w-[60%] mb-10 xl:pr-[20%] relative z-1"
          variants={contentBlockVariants}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic">
              fale comigo
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-4xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white pb-6">
            Conte-nos Sobre Seu Projeto.
          </h2>

          {/* Formulário */}
          <div className="form-area p-8 bg-black/50 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome Completo"
                  className="w-full p-3 border border-gray-600/50 rounded-lg bg-transparent text-white placeholder-gray-500 transition duration-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-base"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Telefone"
                  className="w-full p-3 border border-gray-600/50 rounded-lg bg-transparent text-white placeholder-gray-500 transition duration-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-base"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="w-full p-3 border border-gray-600/50 rounded-lg bg-transparent text-white placeholder-gray-500 transition duration-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-base"
                  required
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Descreva brevemente o seu projeto e seus objetivos."
                  className="w-full p-3 border border-gray-600/50 rounded-lg bg-transparent text-white placeholder-gray-500 transition duration-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none text-base"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-full text-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition-opacity duration-300 py-3 mt-4 flex items-center justify-center font-bold"
              >
                <span>Enviar</span>
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bloco Lateral (Círculos e Ícones Sociais) */}
        <div className="contact-image">
          {/* Círculos de Fundo */}
          <div className="cat-img-circle img-circle--1"></div>
          <div className="cat-img-circle img-circle--2"></div>
          <div className="cat-img-circle img-circle--3"></div>

          {/* Ícones Sociais */}
          <motion.ul
            className="text-white grid grid-cols-2 gap-10 absolute right-0 bottom-60 social-icons"
            variants={socialContainerVariants}
          >
            {[
              { icon: "mdi:whatsapp", name: "Whatsapp" },
              { icon: "ri:linkedin-fill", name: "LinkedIn" },
              { icon: "ri:facebook-fill", name: "Facebook" },
              { icon: "iconoir:instagram", name: "Instagram" },
              { iconComponent: FaTiktok, name: "TikTok" },
              { icon: "ri:youtube-fill", name: "YouTube" },
            ].map((social, index) => (
              <motion.li key={index} variants={socialItemVariants}>
                <Link
                  href="/"
                  className="social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center"
                >
                  {social.iconComponent ? (
                    <social.iconComponent
                      size={44}
                      className=" text-black bg-white p-2 rounded-full"
                    />
                  ) : (
                    <Icon
                      icon={social.icon || ""}
                      width="44"
                      height="44"
                      className=" text-black bg-white p-2 rounded-full"
                    />
                  )}
                  <span>{social.name}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
