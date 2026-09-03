"use client";

import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
  className?: string;
  reverse?: boolean;
}

export default function LogoMarquee({ logos, className = "", reverse = false }: LogoMarqueeProps) {
  const doubled = [...logos, ...logos];

  return (
    <div
      className={`group overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}
    >
      <div
        className="flex w-max gap-12 px-6 group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${logos.length * 3}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {doubled.map((logo, i) => (
          <div key={`${logo.alt}-${i}`} className="flex shrink-0 items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-10 w-auto object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}
