"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface SwiperCarouselProps {
  children: ReactNode[];
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  pagination?: boolean;
  loop?: boolean;
}

export default function SwiperCarousel({
  children,
  className = "",
  spaceBetween = 24,
  pagination = true,
  loop = false,
}: SwiperCarouselProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      pagination={pagination ? { clickable: true } : false}
      loop={loop}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className={className}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {children.map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
