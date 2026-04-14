// src/components/Footer.tsx
// NENHUMA diretiva 'use client' é necessária, pois este é um Server Component simples.

import Link from "next/link"; // MUDANÇA: Link do Next.js
import Image from "next/image"; // RECOMENDADO: Componente Image do Next.js
import { Icon } from "@iconify/react";

// Importação das imagens da galeria.
// No Next.js, você pode importar o asset diretamente e ele fará o tratamento (necessita de width/height)
// Certifique-se de que os caminhos (ex: '@/assets/Images/post1.jpg') estão corretos.
import gallery1 from "@/public/images/post1.jpg";
import gallery2 from "@/public/images/post2.jpg";
import gallery3 from "@/public/images/post3.jpg";
import gallery4 from "@/public/images/post4.jpg";
import gallery5 from "@/public/images/post5.jpg";
import gallery6 from "@/public/images/post6.jpg";

export default function Footer() {
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  // Definir tamanhos fixos ou proporções para Next/Image é necessário.
  const IMAGE_WIDTH = 90;
  const IMAGE_HEIGHT = 70;

  return (
    <footer className="bg-black text-gray-300 pt-10 pb-5 px-[2%] md:px-[8%] xl:px-[12%]">
      <div className="max-w-7xl mx-auto border-t border-gray-600">
        <div className="grid md:grid-cols-3 gap-10 py-15">
          {/* Informações */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-3">
              Informações
            </h3>
            <p className="text-gray-400">
              Desde a fundação, o nosso compromisso é com soluções excepcionais{" "}
              <strong>para o seu negócio.</strong>
            </p>
          </div>

          {/* Fale Conosco */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-3">
              Fale Conosco
            </h3>
            <p className="text-gray-400 mb-1">
              Baird House, 15–17 St Cross St <br /> London EC1N 8UW
            </p>
            <p className="text-gray-400 mb-1">11949999999</p>
            <p className="text-gray-400">username@domain.com</p>
          </div>

          {/* Galeria de Imagens */}
          <div className="flex flex-wrap gap-3 justify-start md:justify-end">
            <h3 className="text-white text-2xl font-semibold mb-3 w-full">
              Galeria
            </h3>
            {galleryImages.map((img, index) => (
              // MUDANÇA: Substituímos <img> por <Image>
              <Image
                key={index}
                src={img}
                alt={`gallery-${index}`}
                width={IMAGE_WIDTH} // OBRIGATÓRIO
                height={IMAGE_HEIGHT} // OBRIGATÓRIO
                className="rounded w-[90px] h-[70px] object-cover"
              />
            ))}
          </div>
        </div>
        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 {/* MUDANÇA: 'to' vira 'href' */}
            <Link
              href="#"
              target="_blank"
              className="text-white hover:underline"
            >
              Braincore
            </Link>{" "}
            Todos os direitos reservados.
          </p>

          {/* Links Sociais */}
          <div className="flex gap-4">
            {/* MUDANÇA: 'to' vira 'href' */}
            <Link
              href="https://wa.me/seu-numero" // Mude '#' para o link real
              target="_blank"
              className="text-white border border-gray-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <Icon icon="mdi:whatsapp" width="22" height="22" />
            </Link>
            <Link
              href="https://facebook.com/seu-perfil"
              target="_blank"
              className="text-white border border-gray-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <Icon icon="mdi:facebook" width="22" height="22" />
            </Link>
            <Link
              href="https://instagram.com/seu-perfil"
              target="_blank"
              className="text-white border border-gray-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <Icon icon="mdi:instagram" width="22" height="22" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
