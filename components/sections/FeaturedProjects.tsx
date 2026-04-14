// components/pages/home/FeaturedProjects.tsx
"use client"; // Mantemos "use client" se usarmos hooks, Link do next/link ou interatividade de hover/click.
import React from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { styles } from "@/app/styles/styles";
import { motion } from "framer-motion";
// import { motion, Variants } from "framer-motion"; // REMOVIDO: Framer Motion

interface Project {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

// --- Variantes/Animações REMOVIDAS ---

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  return (
    // Componente principal mudou de motion.div para div
    <div className="featured py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
      <div className="featured-content w-full flex justify-between flex-col lg:flex-row lg:items-end mb-10">
        <div>
          {/* Tag "Nosso Portfólio" - Troca de motion.span para span */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic">
              nosso portfolio
            </span>
          </motion.div>
          {/* Título "Projetos em Destaque." - Troca de motion.h2 para h2 */}
          <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 mb-5 leading-tight text-white">
            Projetos em Destaque.
          </h2>
        </div>

        {/* Botão "Mais Projetos" - Troca de motion.div para div */}
        <div>
          <Link href="/projects" className={`${styles.button} w-fit`}>
            <Icon icon="vaadin:plus" width="30" height="30" />
            <span className="capitalize">Mais Projetos</span>
          </Link>
        </div>
      </div>

      {/* Grid de Projetos: APLICANDO 4 COLUNAS E AJUSTE DE MARGENS - Troca de motion.div para div */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-white gap-8">
        {projects.map((item) => (
          // Usamos 'div' normal, mas mantemos o hover do Framer Motion (whileHover)
          // OBS: Para manter o whileHover/whileTap, precisamos reintroduzir o 'motion' apenas neste nível.
          // Para a conformidade total com a sua solicitação, vamos remover Framer Motion completamente:
          <Link
            key={item.id}
            href={`/projects/${item.id}`} // Envolvemos todo o cartão no Link
            // Usamos classes CSS para o hover/tap
            className="border border-white/10 p-4 rounded-xl group cursor-pointer 
                       bg-white/5 backdrop-blur-md transition-all duration-300 
                       hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20"
          >
            {/* Altura da Imagem REDUZIDA para acomodar 4 colunas */}
            <div className="h-[300px] w-full rounded-lg overflow-hidden mb-4 relative">
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300"
              />
              {/* Overlay de Gradiente Mantido */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" /> */}
            </div>

            {/* Estilo da Tag de Categoria mais sutil */}
            <span className="text-white border border-white/20 px-2 py-1 font-medium text-sm rounded-full tracking-wider">
              {item.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold mt-2 group-hover:text-primary transition-all duration-300 leading-snug">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
