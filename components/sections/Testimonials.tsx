"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

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
        <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-5 leading-tight text-white">
          O que nossos clientes dizem:
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

      <div className="w-full lg:w-1/2 border-l border-white ps-10">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          slidesPerView={1}
          loop={true}
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={false}
          pagination={false}
          speed={800}
          className="h-full"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="text-white">
                <p className="text-gray-400 text-2xl md:text-3xl max-w-2xl leading-tight mb-6 font-medium">
                  {t.text}
                </p>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {t.name}
                  </h3>
                  <span className="text-gray-300">{t.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
