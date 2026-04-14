// components/ui/FloatingActionButtonMenu.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FloatingActionButtonMenuProps {
  onOpenChat: () => void; // Ação para abrir o modal ChatBot
  whatsappLink: string;
}

// 1. Variantes para o Container Principal (Menu Aberto/Fechado)
const menuVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// 2. Variantes para os Botões Individuais (Slide Up)
const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const FloatingActionButtonMenu: React.FC<FloatingActionButtonMenuProps> = ({
  onOpenChat,
  whatsappLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle do menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Função para abrir o chat e fechar o menu flutuante
  const handleOpenChat = () => {
    onOpenChat();
    setIsOpen(false); // Fecha o menu flutuante ao abrir o chat
  };

  // Função para lidar com o clique no WhatsApp (apenas fecha o menu)
  const handleWhatsappClick = () => {
    setIsOpen(false); // Fecha o menu flutuante
    // O Link cuidará da navegação
  };

  const baseButtonClass =
    "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300";

  // O ícone principal alterna entre Chat e Fechar
  const mainIcon = isOpen ? "mdi:close" : "mdi:chat";

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      {/* MENU DE OPÇÕES (WhatsApp e Assistente) */}
      <motion.div
        variants={menuVariants}
        className="flex flex-col items-end gap-3"
      >
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Opção 1: Assistente Virtual (Abre o Modal ChatBot) */}
              <motion.div variants={itemVariants}>
                <button
                  onClick={handleOpenChat}
                  aria-label="Abrir Chat com Assistente Virtual"
                  className={`${baseButtonClass} border border-white text-white hover:bg-secondary/90`}
                >
                  <Icon icon="mdi:robot-happy" width="24" height="24" />
                </button>
              </motion.div>

              {/* Opção 2: WhatsApp (Link de Navegação) */}
              <motion.div variants={itemVariants}>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fale pelo WhatsApp"
                  className={`${baseButtonClass} bg-[#25D366] text-white hover:bg-[#1DA851]`}
                  onClick={handleWhatsappClick}
                >
                  <Icon icon="mdi:whatsapp" width="24" height="24" />
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* BOTÃO PRINCIPAL (Toggle) */}
      <motion.button
        onClick={toggleMenu}
        aria-label={
          isOpen ? "Fechar Menu de Contato" : "Abrir Opções de Contato"
        }
        className={`${baseButtonClass} bg-primary text-white`}
        // Rotação sutil no ícone
        animate={{ rotate: isOpen ? 90 : 0 }} // Usando 45 graus para o "X"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon icon={mainIcon} width="28" height="28" />
      </motion.button>

      {/* O botão de "três pontos" foi removido */}
    </motion.div>
  );
};

export default FloatingActionButtonMenu;
