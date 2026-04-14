"use client";
import Contact from "@/components/sections/ContactSection";
import Price from "./Price";
import Brands from "@/components/sections/BrandSection";
import { brandsData } from "@/constants/brands";

// export const metadata = {
//   title: "Preços | Braincore Audiovisual",
//   description:
//     "Confira nossa tabela de investimentos para serviços de audiovisual, design e branding.",
// };

export default function PricePage() {
  return (
    <>
      <Price />
      <Contact />
      <Brands brands={brandsData} />
    </>
  );
}
