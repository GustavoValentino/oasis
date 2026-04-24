import { StaticImageData } from "next/image";

export interface Service {
  id: number;
  title: string;
  icon: string;
  desc: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
  description?: string;
}

export interface Member {
  id: number;
  name: string;
  role: string;
  letter: string;
  img: StaticImageData;
  age?: string;
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
  slug: string;
  category: string;
  date: string;
  image: string | StaticImageData;
  description: string;
  author?: string;
}

export interface Brand {
  id: number;
  logo: string | StaticImageData;
  link: string;
  alt: string;
}
