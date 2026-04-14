// types/index.ts
import { StaticImageData } from "next/image";

export interface Service {
  id: number;
  title: string;
  icon: string; // Mudamos de 'img' para 'icon'
  desc: string; // Adicionamos a descrição para os cards
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
}

export interface Member {
  id: number;
  name: string;
  role: string;
  letter: string;
  img: StaticImageData;
  age?: string; // O "?" torna o campo opcional
  location?: string;
  email?: string;
  phone?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

export interface CountItem {
  end: number;
  duration: number;
  suffix: string;
  label: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string; // Adicionado para URLs amigáveis (ex: /blog/o-futuro-do-design)
  category: string;
  date: string;
  image: string | StaticImageData;
  description: string;
  author?: string; // Adicionado para identificação de autoria (opcional)
}

export interface Brand {
  id: number;
  logo: string | StaticImageData;
  link: string;
  alt: string;
}
