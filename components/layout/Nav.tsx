"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import LogoImage from "@/public/images/logo_oasis02.svg";
import DropdownItem from "./DropdownItem";

interface SubLink {
  name: string;
  to: string;
}

interface NavLink {
  name: string;
  to: string;
  stateKey: string;
  sublinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { name: "Home", to: "/", stateKey: "home" },
  { name: "Sobre nós", to: "/about", stateKey: "about" },
  {
    name: "Soluções",
    to: "#",
    stateKey: "services",
    sublinks: [
      { name: "Abastecimento Ágil", to: "/services" },
      { name: "Piscinas e Obras", to: "/services" },
      { name: "Demandas Industriais", to: "/services" },
      { name: "Segurança Hídrica", to: "/seguranca" }, // Mudado de "Laudos" para o benefício final
    ],
  },
  // "Frota" agora é "Parceiros", reforçando que você conecta a uma rede
  { name: "Rede de Parceiros", to: "/partners", stateKey: "partners" },
  { name: "Blog", to: "/blog", stateKey: "blogs" },
  { name: "Contato", to: "/contact", stateKey: "contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = menuOpen ? "hidden" : "unset";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const glassmorphismClasses =
    "backdrop-blur-md bg-black/40 shadow-xl text-white border-b border-white/10";
  const transparentClasses = "bg-transparent text-white";

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={`navbar h-[80px] flex justify-between items-center px-[2%] md:px-[8%] xl:px-[12%] fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${navBg ? glassmorphismClasses : transparentClasses}
        `}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="flex flex-col items-center lg:items-start group transition-all duration-500"
        >
          <Image
            src={LogoImage}
            alt="Oásis - Inteligência em Água Potável"
            width={180}
            height={60}
            priority
            className="h-10 md:h-12 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />

          <span className="text-[7.8px] font-bold uppercase tracking-[0.15em] mt-1 text-white leading-tight">
            fornecimento de água potável
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <DropdownItem
                key={link.name}
                link={link}
                isMobile={false}
                closeMenu={closeMenu}
              />
            ))}
          </ul>

          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-40 py-1 pl-3 pr-10 text-sm rounded-full bg-white/10 text-white border border-transparent 
                focus:w-56 focus:border-blue-500 focus:bg-white/20 
                transition-all duration-300 placeholder-white/70 outline-none"
            />
            <Icon
              icon="lucide:search"
              width="18"
              height="18"
              className="absolute right-3 text-white/70"
            />
          </div>
        </div>

        <div
          className="lg:hidden cursor-pointer z-40 space-y-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-8 h-0.5 transition-all duration-500 rounded-full bg-white ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-500 rounded-full bg-white ${menuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block w-8 h-0.5 transition-all duration-500 rounded-full bg-white ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          ></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen lg:hidden 
          backdrop-blur-sm bg-black/95 text-white p-4 md:p-8 z-40 flex flex-col justify-start 
          transform transition-all duration-700 ease-in-out
          ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <div className="w-full mx-auto overflow-y-auto max-h-full pt-24">
          <ul className="space-y-4 text-center">
            {navLinks.map((link) => (
              <DropdownItem
                key={link.name}
                link={link}
                isMobile={true}
                closeMenu={closeMenu}
              />
            ))}
          </ul>

          <div className="flex justify-center gap-6 mt-12">
            <Link
              href="#"
              className="text-white/50 border border-white/20 rounded-full w-12 h-12 flex justify-center items-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Icon icon="mdi:whatsapp" width="24" height="24" />
            </Link>
            <Link
              href="#"
              className="text-white/50 border border-white/20 rounded-full w-12 h-12 flex justify-center items-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Icon icon="mdi:instagram" width="24" height="24" />
            </Link>
          </div>

          <div className="text-center mt-12 mb-8 text-xs font-medium text-white/30">
            <p>
              © 2026 Oásis - Inteligência em Águas. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
