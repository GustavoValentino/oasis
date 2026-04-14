import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Brand {
  id: number;
  logo: string | StaticImageData;
  link: string;
  alt: string;
}

interface BrandsProps {
  brands: Brand[];
}

const Brands: React.FC<BrandsProps> = ({ brands }) => {
  return (
    <div className="brand py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
      <div className="brand-content w-full lg:w-[60%] mb-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-primary" />
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic">
            nossos parceiros
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold sm:max-w-5xl mt-5 leading-tight text-white">
          Temos Tido o Prazer de Colaborar com Alguns Clientes.
        </h2>
      </div>

      <div className="brand-wrapper grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-item cursor-pointer border border-gray-50/20 p-3 rounded-lg relative flex flex-col justify-center items-center h-full transition-all duration-300 hover:scale-[1.02] hover:border-primary group"
          >
            <div className="relative w-full h-16 mb-2 flex justify-center items-center">
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={100}
                height={64}
                className="object-contain w-full max-w-[100px] h-16"
              />
            </div>
            <span>Acessar Site</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
