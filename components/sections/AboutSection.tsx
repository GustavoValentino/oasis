"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { FaPlay } from "react-icons/fa";
import { styles } from "@/app/styles/styles";
import { motion } from "framer-motion";

interface AboutProps {
  isVideoModalOpen: boolean;
  setIsVideoModalOpen: (isOpen: boolean) => void;
  videoUrl: string;
  marqueeContent: React.ReactNode;
}

const About: React.FC<AboutProps> = ({
  isVideoModalOpen,
  setIsVideoModalOpen,
  videoUrl,
  marqueeContent,
}) => {
  return (
    <>
      <div className="about py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10">
        <div className="about-content w-full lg:w-[60%]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className=" tracking-[0.4em] text-xs font-bold text-primary italic text-blue-500">
              NOSSA TRAJETÓRIA
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-bold sm:max-w-4xl my-6 leading-[1.1] text-white tracking-tighter">
            Compromisso com a <span className="text-blue-600">Qualidade</span> e
            a <span className="text-blue-600">Segurança</span> em cada gota.
          </h2>

          <div className="flex xl:flex-nowrap flex-wrap gap-10 mt-12">
            <div className="w-full xl:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  icon="ph:target-bold"
                  className="text-blue-500 text-3xl"
                />
                <span className="font-bold text-2xl text-white tracking-tight">
                  Nossa Missão
                </span>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">
                Garantir o acesso à água potável com excelência logística,
                atendendo rigorosos padrões de saúde e segurança para suprir as
                necessidades de toda grande São Paulo.
              </p>
            </div>

            <div className="w-full xl:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Icon icon="ph:eye-bold" className="text-blue-500 text-3xl" />
                <span className="font-bold text-2xl text-white tracking-tight">
                  Nossa Visão
                </span>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Ser reconhecida como a transportadora de água mais confiável do
                estado, inovando em frota e processos para oferecer o melhor
                custo-benefício com impacto ambiental positivo.
              </p>
              <Link href="/about" className={`${styles.button}`}>
                <Icon icon="vaadin:plus" width="30" height="30" />
                <span>Saiba Mais</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <div className="flex items-center justify-center w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative">
            <svg
              viewBox="0 0 300 300"
              className="absolute w-full h-full animate-[spin_20s_linear_infinite]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                ></path>
              </defs>
              <text
                fill="#3b82f6"
                className="text-[14px] font-bold uppercase tracking-[5px]"
              >
                <textPath href="#circlePath" startOffset="0">
                  • ÁGUA POTÁVEL • FONTE DE ALTA QUALIDADE • LOGÍSTICA 24 HORAS
                </textPath>
              </text>
            </svg>

            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="relative z-10 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-blue-600 rounded-full transition-all duration-500 shadow-[0_0_50px_rgba(37,99,235,0.3)] hover:shadow-[0_0_70px_rgba(37,99,235,0.6)] group cursor-pointer"
            >
              <div className="absolute inset-0 rounded-full border border-white/20 scale-125 group-hover:scale-150 transition-transform duration-700 opacity-50"></div>
              <FaPlay className="text-white text-4xl md:text-5xl translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute left-1/2 -translate-x-1/2 -top-[4rem] z-50 h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition transform hover:scale-110 cursor-pointer"
              aria-label="Fechar vídeo"
            >
              <Icon icon="ph:x-bold" className="h-6 w-6 text-gray-200" />
            </button>

            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="py-[2%] flex justify-center items-center">
        <div className="w-full overflow-hidden border-t border-white/10 border-b border-white/10 flex justify-center items-center h-full">
          <div className="flex w-[200%] animate-marquee">
            {marqueeContent}
            {marqueeContent}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
