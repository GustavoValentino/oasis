"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/constants/team";
import { Member } from "@/types"; // Importação adicionada para resolver o erro
import title_icon from "@/public/images/title_icon.svg";

export default function Team() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* BANNER REFINADO */}
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
              Especialistas
            </span>
          </motion.div>

          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-bold w-full lg:max-w-4xl relative pb-6 tracking-tighter leading-none"
          >
            Nosso <span className="italic font-light text-gray-400">Time</span>
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

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="origin-left h-[1px] w-full bg-gradient-to-r from-gray-500 via-gray-800 to-transparent mb-10"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="max-w-xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed italic"
            >
              Mentes <span className="text-white font-medium">brilhantes</span>{" "}
              unidas pela obsessão por detalhes e inovação constante.
            </motion.p>

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
                  href="/team"
                  className="group relative font-medium text-white text-sm uppercase tracking-widest transition-colors"
                >
                  Time
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary" />
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>
      </motion.div>

      {/* GRID DE MEMBROS */}
      <section className="py-[10%] px-[4%] md:px-[8%] xl:px-[12%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
          {/* Alterado de TeamMember para Member conforme seu types/index.ts */}
          {TEAM_MEMBERS.map((member: Member, index: number) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href={`/team/${member.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111] rounded-xl border border-white/5 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />

                  <span className="absolute top-4 right-6 text-4xl font-bold opacity-10 text-white group-hover:opacity-30 transition-opacity z-20">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-8 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-[1px] w-0 bg-primary transition-all duration-500 group-hover:w-8" />
                    <h4 className="text-2xl font-bold text-white tracking-tighter transition-all duration-500 group-hover:text-primary">
                      {member.name}
                    </h4>
                  </div>
                  <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold pl-0 group-hover:pl-1 transition-all duration-500">
                    {member.role}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
