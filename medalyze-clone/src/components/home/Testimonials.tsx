"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-black py-24">
      <div className="container-page">
        <div className="text-center">
          <h2 className="heading-h3 !text-white">
            Real People. Real Impact.
          </h2>
          <p className="text-regular mt-4 text-[#d9d9d9]">
            Read what Medalyze customers are saying about our interconnected
            platform of AI solutions.
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "2.5rem" }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="hairline h-full">
                  <div className="hairline-inner flex h-full flex-col justify-between p-8">
                    <div>
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: t.rating }).map((_, s) => (
                          <Star
                            key={s}
                            className="h-5 w-5"
                            fill="#a8f4ff"
                            color="#a8f4ff"
                          />
                        ))}
                      </div>
                      <p className="text-regular !text-[#d9d9d9]">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                    <div>
                      <div className="my-4 border-t border-white/10" />
                      <p className="text-small font-bold !text-white">
                        {t.name}
                      </p>
                      <p className="text-small mt-1 text-[#7b7b7b]">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
