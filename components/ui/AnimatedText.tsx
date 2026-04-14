// components/ui/AnimatedText.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
  delayBeforeStart?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  phrases,
  className,
  delayBeforeStart = 0,
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Efeito de piscar do cursor
  useEffect(() => {
    const cursorTimer = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(cursorTimer);
  }, [blink]);

  // Efeito principal de digitação/exclusão
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // 1. Lógica para Digitar
    if (subIndex < phrases[index].length && !isDeleting) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 100);
    }
    // 2. Lógica para Excluir
    else if (subIndex > 0 && isDeleting) {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, 50);
    }
    // 3. Fim da Digitação (Pausa)
    else if (!isDeleting && subIndex === phrases[index].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true); // Começa a excluir
      }, 1500);
    }
    // 4. Fim da Exclusão (Transição para Próxima Frase)
    else if (isDeleting && subIndex === 0) {
      // Usamos setTimeout=0 para que a transição de estado seja assíncrona
      // e saia do escopo síncrono do useEffect, resolvendo o warning.
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, phrases]); // Removido delayBeforeStart pois não afeta o loop interno

  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {phrases[index].substring(0, subIndex)}
      <motion.span
        className="font-light inline-block"
        animate={{ opacity: blink ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        |
      </motion.span>
    </motion.h1>
  );
};

export default AnimatedText;
