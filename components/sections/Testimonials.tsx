"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="testimonials py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col lg:flex-row justify-between items-start gap-10">
      <div className="tst-content w-full lg:w-1/2 text-white">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-primary" />
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary italic text-blue-500">
            Depoimentos
          </span>
        </motion.div>
        <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-[1.1] tracking-tighter">
          Confiança de quem <br /> utiliza{" "}
          <span className="text-blue-600">Nossa Rede.</span>
        </h2>
        <div className="font-normal text-xl flex items-center">
          4.5{" "}
          <span className="flex text-yellow-400 ml-2">
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="ic:round-star-half" width="24" height="24" />
          </span>
        </div>
        Avaliação dos clientes
      </div>

      <div className="w-full lg:w-1/2 relative">
        <Icon
          icon="ri:double-quotes-l"
          className="absolute -top-10 -left-1 text-blue-600/20 w-24 h-24 z-0"
        />

        <div className="relative z-10 border-l-2 border-blue-600/50 ps-10">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect={"fade"}
            slidesPerView={1}
            loop={true}
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            className="h-full"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="text-white">
                  <p className="text-gray-300 text-xl md:text-2xl max-w-2xl italic leading-relaxed mb-8">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-1 bg-blue-600"></div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                        {t.name}
                      </h3>
                      <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
