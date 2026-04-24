"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brand } from "@/types";

interface BrandsProps {
  brands: Brand[];
}

const Brands: React.FC<BrandsProps> = ({ brands }) => {
  return (
    <div className="brand py-[8%] px-[2%] md:px-[8%] xl:px-[12%] bg-black/40">
      <div className="brand-content w-full lg:w-[60%] mb-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-blue-600" />
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-blue-500 italic">
            Rede de Confiança
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold sm:max-w-5xl mt-5 leading-tight text-white tracking-tighter">
          Conectando as <span className="text-blue-600">melhores frotas</span>{" "}
          aos grandes projetos.
        </h2>
      </div>

      <div className="brand-wrapper grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-item group relative flex flex-col justify-center items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.05] hover:border-blue-500/30 overflow-hidden"
          >
            {/* Efeito de brilho ao passar o mouse */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 w-full h-12 flex justify-center items-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={120}
                height={48}
                className="object-contain max-h-full"
              />
            </div>

            {/* Tooltip discreto em vez de texto fixo */}
            <span className="absolute bottom-2 text-[8px] uppercase tracking-[0.2em] text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 font-bold">
              Visitar Website
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
