"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { styles } from "@/app/styles/styles";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  return (
    <div className="featured py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
      <div className="featured-content w-full flex justify-between flex-col lg:flex-row lg:items-end mb-10">
        <div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic text-blue-500">
              Nossas Conexões
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-bold sm:max-w-3xl mt-5 mb-5 leading-tight text-white tracking-tighter">
            Soluções que movem <br />{" "}
            <span className="text-blue-600">grandes estruturas.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Conectamos os setores mais exigentes de São Paulo aos parceiros
            logísticos ideais para cada necessidade de abastecimento.
          </p>
        </div>

        <div>
          <Link href="/projects" className={`${styles.button} w-fit`}>
            <Icon icon="vaadin:plus" width="30" height="30" />
            <span className="capitalize">Mais Projetos</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-white gap-8">
        {projects.map((item) => (
          <Link
            key={item.id}
            href={`/projects/${item.id}`}
            className="border border-white/10 p-4 rounded-xl group cursor-pointer 
                       bg-white/5 backdrop-blur-md transition-all duration-300 
                       hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="h-[300px] w-full rounded-lg overflow-hidden mb-4 relative">
              <Image
                src={item.image}
                alt={item.title}
                height={100}
                width={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                className="w-full h-full group-hover:scale-110 object-cover transition-all duration-300"
              />
            </div>

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
