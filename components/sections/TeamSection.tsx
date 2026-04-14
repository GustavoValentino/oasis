import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Member {
  id: number;
  name: string;
  role: string;
  letter: string;
  img: StaticImageData;
  facebookUrl?: string;
  instagramUrl?: string;
}

interface TeamProps {
  members: Member[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <div className="team py-[8%] px-[2%] md:px-[8%] xl:px-[12%]">
      <div className="team-content w-full lg:w-[60%] mb-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-primary" />
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic">
            equipe de especialistas
          </span>
        </motion.div>
        <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white">
          Criamos Soluções Incríveis para Nossos Clientes.
        </h2>
      </div>

      <div className="team-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="team-item relative overflow-hidden text-white border border-gray-50/20 h-[600px]
                                  md:h-[740px] group flex flex-col justify-between cursor-pointer"
          >
            <div className="desc p-6 md:p-8 z-10">
              <div className="mb-4">
                <span className="block text-3xl md:text-5xl group-hover:text-white font-bold leading-tight transition-colors duration-300">
                  {member.name}
                </span>
                <span className="block font-semibold text-gray-100 text-sm md:text-md group-hover:text-white transition-colors duration-300">
                  {member.role}
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href={member.facebookUrl || "#"}
                  target="_blank"
                  className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-white transition-colors duration-300"
                >
                  <Icon
                    icon="ri:facebook-fill"
                    width="24"
                    height="24"
                    className="group-hover:text-white transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>

                <Link
                  href={member.instagramUrl || "#"}
                  target="_blank"
                  className="border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-white transition-colors duration-300"
                >
                  <Icon
                    icon="mdi:instagram"
                    width="24"
                    height="24"
                    className="group-hover:text-white transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
            </div>

            <div className="image relative w-full h-full">
              <Image
                src={member.img}
                alt={member.name}
                width={100}
                height={100}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-auto scale-100 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)] object-cover"
              />
              <div
                className="num absolute -right-3 md:-right-5 bottom-0 text-[180px] sm:text-[220px] md:text-[300px] font-bold leading-[0.5] group-hover:text-primary pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)] z-20"
                style={{
                  textShadow:
                    "1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
                }}
              >
                <span>{member.letter}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
