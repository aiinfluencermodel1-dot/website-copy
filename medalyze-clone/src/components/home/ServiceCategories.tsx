"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceCategories } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const visuals = [
  "https://medalyzeus.com/wp-content/uploads/2026/01/1.png",
  "https://medalyzeus.com/wp-content/uploads/2026/03/mazdoc1.jpg",
  "https://medalyzeus.com/wp-content/uploads/2026/01/Your-paragraph-text.png",
];

function DashedConnector({ index }: { index: number }) {
  const goRight = index % 2 === 1;
  return (
    <div className="relative py-8" aria-hidden>
      <svg
        className="mx-auto"
        style={{ width: "70%", height: "7rem" }}
        viewBox="0 0 700 110"
        fill="none"
      >
        <path
          d={goRight
            ? "M 50 0 L 500 0 L 500 90"
            : "M 650 0 L 200 0 L 200 90"
          }
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
        <path
          d={goRight
            ? "M 493 84 L 500 96 L 507 84"
            : "M 193 84 L 200 96 L 207 84"
          }
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function ServiceCategories() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal]",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-black py-24 md:py-32"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <h2 className="heading-h3 !text-white">
            One Data Model. End-to-End RCM Automation.
          </h2>
          <p className="text-medium mx-auto mt-6 max-w-2xl !text-[#d9d9d9]">
            Connect the patient&apos;s first call and the doctor&apos;s note
            directly to the ledger. Integrated across 60+ EHR platforms.
          </p>
        </div>

        <div className="mt-20 md:mt-28">
          {serviceCategories.categories.map((category, i) => {
            const flipped = i % 2 === 1;
            return (
              <div key={category.title}>
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <div
                    className={flipped ? "md:order-2" : "md:order-1"}
                    data-reveal
                  >
                    <h3 className="text-xlarge !text-white">
                      {category.title}
                    </h3>
                    <p className="text-medium mt-6 max-w-xl !text-[#d9d9d9]">
                      {category.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {category.items.map((item) => (
                        <span className="chip-border" key={item}>
                          <span className="chip">
                            <span className="chip-label !text-white">
                              {item}
                            </span>
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={flipped ? "md:order-1" : "md:order-2"}
                    data-reveal
                  >
                    <div className="hairline">
                      <div className="hairline-inner overflow-hidden">
                        <Image
                          src={visuals[i]}
                          alt={category.title}
                          width={800}
                          height={600}
                          className="w-full object-cover rounded-[0.625rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* L-shaped connector right after this category */}
                {i < serviceCategories.categories.length - 1 && (
                  <div data-reveal>
                    <DashedConnector index={i} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
