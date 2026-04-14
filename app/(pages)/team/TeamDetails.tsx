"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Member } from "@/types";
import title_icon from "@/public/images/title_icon.svg";

import serviceicon1 from "@/public/images/service-icon1.png";
import serviceicon2 from "@/public/images/service-icon2.png";
import serviceicon3 from "@/public/images/service-icon3.png";
import serviceicon4 from "@/public/images/service-icon4.png";
import serviceicon5 from "@/public/images/service-icon5.png";

interface Props {
  member: Member;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

export default function TeamDetails({ member }: Props) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* BANNER REFINADO (Padrão Braincore) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="section-banner relative min-h-[550px] bg-[#0a0a0a] px-[4%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start w-full overflow-hidden pb-16"
      >
        {/* Gradiente de profundidade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-transparent to-transparent opacity-60" />

        <div className="relative z-10 w-full">
          {/* Label Superior Estilo Elite */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic">
              Team Member
            </span>
          </motion.div>

          {/* Nome do Membro com Tipografia Imponente */}
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-bold w-full lg:max-w-4xl relative pb-6 tracking-tighter leading-none"
          >
            {member.name}
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

          {/* Linha Divisória com Gradiente (Igual ao About/Team) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-[1px] w-full bg-gradient-to-r from-gray-500 via-gray-800 to-transparent mb-10 origin-left"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="max-w-xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed italic"
            >
              Membro vital do nosso time, focado em{" "}
              <span className="text-white font-medium">excelência</span> e na
              construção de experiências{" "}
              <span className="text-white font-medium">memoráveis</span>.
            </motion.p>

            {/* Navegação com Underline Animado */}
            <nav className="flex gap-8 py-2 border-l border-primary/30 pl-8">
              {[
                { name: "Home", href: "/" },
                { name: "Time", href: "/team" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative font-medium text-gray-500 text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <span className="relative font-medium text-white text-sm uppercase tracking-widest">
                {member.name.split(" ")[0]}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary" />
              </span>
            </nav>
          </div>
        </div>
      </motion.div>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="py-20 px-[4%] md:px-[8%] xl:px-[12%]">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          {/* Foto do Membro com Moldura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="xl:col-span-5 relative aspect-[4/5] w-full border border-white/10 p-4 bg-[#111]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-sm">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Dados e Info */}
          <div className="xl:col-span-7 space-y-8">
            <div>
              <h3 className="text-5xl font-bold tracking-tighter text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-2xl text-gray-500 font-light">{member.role}</p>
            </div>

            <ul className="space-y-4">
              {[
                { label: "Idade", value: member.age },
                { label: "Localização", value: member.location },
                { label: "Email", value: member.email },
                { label: "Telefone", value: member.phone },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between py-4 border-b border-white/5 group"
                >
                  <span className="text-lg font-medium text-gray-400 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="text-lg text-white/80">
                    {item.value || "N/A"}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <Link
                href="#"
                className="p-3 border border-white/10 rounded-full hover:bg-primary hover:border-primary transition-all"
              >
                <Icon icon="ri:facebook-line" width="24" />
              </Link>
              <Link
                href="#"
                className="p-3 border border-white/10 rounded-full hover:bg-primary hover:border-primary transition-all"
              >
                <Icon icon="flowbite:linkedin-solid" width="24" />
              </Link>
            </div>

            <div className="prose prose-invert max-w-none pt-8 border-t border-white/5">
              <p className="text-gray-400 leading-relaxed text-lg">
                {/* Aqui futuramente você pode adicionar um campo 'bio' no seu Team.ts */}
                Especialista em transformar visões complexas em experiências
                digitais memoráveis. Com anos de experiência no mercado,{" "}
                {member.name} lidera processos criativos com foco em resultados
                e inovação constante.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services List */}
      <div className="service py-[2%] px-[2%] md:px-[8%] xl:px-[12%]">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="service-content"
        >
          <span className="text-white bg-primary px-2 py-3 font-semibold text-xl rounded-sm">
            O que fazemos?
          </span>
          <h2 className="text-2xl sm:text-6xl font-semibold max-w-3xl mt-5 leading-tight text-white">
            Somos uma agência completa em design e audiovisual.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="border-b border-white/10"
        >
          {[
            {
              id: "01",
              title: "Brand Strategy",
              icon: serviceicon1,
              desc: "Posicionamento de mercado para marcas de luxo e tecnologia.",
            },
            {
              id: "02",
              title: "Social Media Campaign",
              icon: serviceicon2,
              desc: "Engajamento visceral através de conteúdo de alta fidelidade.",
            },
            {
              id: "03",
              title: "Creative Direction",
              icon: serviceicon3,
              desc: "Liderança artística para projetos que demandam originalidade.",
            },
            {
              id: "04",
              title: "Machine Learning | AI",
              icon: serviceicon4,
              desc: "Inteligência artificial aplicada ao fluxo criativo moderno.",
            },
            {
              id: "05",
              title: "Visual Identity",
              icon: serviceicon5,
              desc: "Sistemas visuais escaláveis e esteticamente superiores.",
            },
          ].map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group relative flex flex-col md:flex-row justify-between items-center py-16 border-t border-white/10 hover:bg-white/[0.02] transition-all duration-500 px-8 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center z-10 w-full">
                <span className="text-xl font-mono text-primary/40 group-hover:text-primary transition-colors italic">
                  {service.id}
                </span>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 group-hover:translate-x-4 transition-transform duration-500">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 max-w-md group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="relative mt-8 md:mt-0 w-27 h-25 flex items-center justify-center border border-white/5 rounded-2xl group-hover:border-primary/50 group-hover:rotate-[15deg] transition-all duration-500 bg-[#111]">
                <Image
                  src={service.icon}
                  alt="icon"
                  width={60}
                  height={60}
                  className="invert grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
