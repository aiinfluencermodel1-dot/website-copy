"use client";

import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  value: string;
  label: string;
  className?: string;
  theme?: "light" | "dark";
}

export default function StatsCounter({ value, label, className = "", theme = "light" }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  function animateValue() {
    const numericPart = value.replace(/[^0-9.]/g, "");
    const suffix = value.replace(/[0-9.]/g, "");
    const target = parseFloat(numericPart);

    if (isNaN(target)) {
      setDisplayed(value);
      return;
    }

    const duration = 2000;
    const startTime = performance.now();
    const isDecimal = numericPart.includes(".");
    const decimals = isDecimal ? numericPart.split(".")[1].length : 0;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setDisplayed(
        (isDecimal ? current.toFixed(decimals) : Math.floor(current).toString()) + suffix
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  const valueColor = theme === "dark" ? "text-white" : "text-[#0A0F1E]";
  const labelColor = theme === "dark" ? "text-gray-400" : "text-gray-500";

  return (
    <div ref={ref} className={`flex flex-col items-center ${className}`}>
      <span className={`text-4xl font-bold tracking-tight sm:text-5xl ${valueColor}`}>
        {displayed}
      </span>
      <span className={`mt-2 text-sm ${labelColor}`}>{label}</span>
    </div>
  );
}
