"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/constants";

export default function LatestContent() {
  const posts = blogPosts.slice(0, 6);

  return (
    <section className="bg-black py-24">
      <div className="container-page">
        <div className="text-center">
          <h2 className="heading-h3 !text-white">
            Insights for Better Revenue
          </h2>
          <p className="text-regular mt-4 text-[#d9d9d9]">
            Stay informed with the latest trends and strategies in revenue
            cycle management.
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
            {posts.map((post) => (
              <SwiperSlide key={post.slug} className="h-auto">
                <div className="hairline h-full">
                  <div className="hairline-inner flex h-full flex-col p-6">
                    <div className="overflow-hidden rounded-[0.625rem]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={500}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>

                    <div className="mt-5 flex flex-1 flex-col">
                      <div>
                        <span className="chip-border">
                          <span className="chip">
                            <span className="chip-label">{post.category}</span>
                          </span>
                        </span>
                      </div>

                      <Link
                        href={"/blog/" + post.slug}
                        className="text-large font-display mt-4 font-bold !text-white transition-colors hover:!text-[#a8f4ff]"
                      >
                        {post.title}
                      </Link>

                      <p className="text-small mt-3 flex-1 text-[#7b7b7b]">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-small text-[#7b7b7b]">
                          {post.date}
                        </span>
                        <Link
                          href={"/blog/" + post.slug}
                          className="text-small font-bold !text-[#a8f4ff]"
                        >
                          Read more
                        </Link>
                      </div>
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
