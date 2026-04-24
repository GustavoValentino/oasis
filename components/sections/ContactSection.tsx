// components/pages/home/Contact.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { FaTiktok } from "react-icons/fa";
import { motion, Variants } from "framer-motion"; // Importações adicionadas
import { styles } from "@/app/styles/styles";

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
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="contact py-[8%] px-[2%] md:px-[8%] h-auto lg:h-[850px] relative overflow-hidden">
        <motion.div
          className="team-content w-full lg:w-[60%] mb-10 xl:pr-[15%] relative z-10"
          variants={contentBlockVariants}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-blue-600" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-blue-500 italic">
              Solicite um Orçamento
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold sm:max-w-3xl mt-5 leading-tight text-white pb-6 tracking-tighter">
            Pronto para garantir seu{" "}
            <span className="text-blue-600">Abastecimento?</span>
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
                  placeholder="Telefone/Whatsapp"
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
                className={`${styles.button} important w-full`}
              >
                <Icon icon="mdi:send" width="30" height="30" />
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
            className="text-white flex flex-col gap-10 absolute right-0 bottom-[35%] items-end z-20"
            variants={socialContainerVariants}
          >
            {[
              {
                icon: "mdi:whatsapp",
                name: "WhatsApp",
                color: "bg-green-500",
                link: "#",
              },
              {
                icon: "mdi:instagram",
                name: "Instagram",
                color: "bg-pink-600",
                link: "#",
              },
              {
                icon: "ri:facebook-fill",
                name: "Facebook",
                color: "bg-blue-600",
                link: "#",
              },
              {
                icon: "ri:linkedin-fill",
                name: "LinkedIn",
                color: "bg-blue-700",
                link: "#",
              },
            ].map((social, index) => (
              <motion.li
                key={index}
                variants={socialItemVariants}
                className="w-fit"
              >
                <Link
                  href={social.link}
                  className="group relative flex items-center"
                >
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 pl-8 pr-3 rounded-full flex items-center gap-4 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 -mr-6 hover:-mr-2">
                    <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs">
                      {social.name}
                    </span>
                    <div
                      className={`${social.color} p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon icon={social.icon} width="22" height="22" />
                    </div>
                  </div>
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
