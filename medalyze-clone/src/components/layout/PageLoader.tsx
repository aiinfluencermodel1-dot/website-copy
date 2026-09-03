"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { logoUrl } from "@/lib/constants";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white transition-opacity duration-500">
      <Image
        src={logoUrl}
        alt="Medalyze"
        width={200}
        height={56}
        className="mb-8 h-14 w-auto"
        priority
      />

      <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-full origin-left rounded-full bg-blue-600 animate-[loader_1.5s_ease-in-out_infinite]" />
      </div>

      <style jsx>{`
        @keyframes loader {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          50.01% {
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }
      `}</style>
    </div>
  );
}
