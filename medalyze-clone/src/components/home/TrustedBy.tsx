"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { trustedByData, assets } from "@/lib/constants";

const partners = [
  "City Health Hospital",
  "Valley Medical Center",
  "Coastal Dental Group",
  "Summit Care Clinic",
  "Metro Health Partners",
  "Pinnacle Medical",
];

interface CountUpStatProps {
  value: string;
  label: string;
}

function parseValue(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  return {
    target: match ? parseFloat(match[1]) : 0,
    suffix: match ? match[2] : "",
  };
}

function CountUpStat({ value, label }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const { target } = parseValue(value);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const startTime = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(target);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  const { suffix } = parseValue(value);
  const formatted = Number.isInteger(display)
    ? display.toString()
    : display.toFixed(1);

  return (
    <div ref={ref} className="text-center">
      <div className="heading-h2 !text-[#a8f4ff]">
        {formatted}
        {suffix}
      </div>
      <p className="text-small mt-3 !text-[#d9d9d9]">{label}</p>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="bg-black">
      <div className="overflow-hidden py-20 md:py-24">
        <div className="container-page">
          <p className="text-regular text-center uppercase tracking-[0.2em] !text-[#d9d9d9]">
            Trusted by Leading Health Systems
          </p>
        </div>

        <div className="mt-12 space-y-6 [&:hover_*]:[animation-play-state:paused]">
          <div
            className="flex w-max items-center gap-10"
            style={{ animation: "logo-marquee-loop 50s linear infinite" }}
          >
            {[...partners, ...partners].map((name, i) => (
              <span key={`a-${i}`} className="chip-border shrink-0">
                <span className="chip">
                  <span className="chip-label !text-white">{name}</span>
                </span>
              </span>
            ))}
          </div>

          <div
            className="flex w-max items-center gap-10"
            style={{ animation: "logo-marquee-loop2 50s linear infinite" }}
          >
            {[...partners, ...partners].map((name, i) => (
              <span key={`b-${i}`} className="chip-border shrink-0">
                <span className="chip">
                  <span className="chip-label !text-white">{name}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Image
            src={assets.usMap}
            alt=""
            width={900}
            height={600}
            className="h-full w-full max-w-4xl object-contain opacity-[0.15]"
          />
        </div>

        <div className="container-page relative">
          <h2 className="heading-h3 text-center !text-white">
            Proven Outcomes from Deploying Medalyze
          </h2>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-12 md:grid-cols-4">
            {trustedByData.stats.map((stat) => (
              <CountUpStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
