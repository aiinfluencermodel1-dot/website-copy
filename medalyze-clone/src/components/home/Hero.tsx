"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import {
  Brain,
  Activity,
  FileText,
  Shield,
  BarChart3,
  Stethoscope,
  CreditCard,
  Scan,
  HeartPulse,
  Microscope,
} from "lucide-react";

const ringIcons = [
  { Icon: Brain, label: "AI" },
  { Icon: Activity, label: "RCM" },
  { Icon: FileText, label: "Scribe" },
  { Icon: Shield, label: "Compliance" },
  { Icon: BarChart3, label: "Analytics" },
  { Icon: Stethoscope, label: "Clinical" },
  { Icon: CreditCard, label: "Billing" },
  { Icon: Scan, label: "Claims" },
  { Icon: HeartPulse, label: "Patient" },
  { Icon: Microscope, label: "Lab" },
];

const heroPills = [
  "8+ Years in Business",
  "50 States Covered",
  "30+ Health Specialties",
  "4.8 Google Rating",
];

const HERO_VIDEO =
  "https://cdn.prod.website-files.com/66fb0f1ec709d05e0d47be37%2F696fbe0ad0c11b9f2f37eb51_compressed-video_mp4.mp4";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: 0.1 + i * 0.12,
            ease: "power3.out",
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!ring1Ref.current || !ring2Ref.current) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const tokens1 = ring1Ref.current.querySelectorAll<HTMLElement>(
      ".ring-icon-badge"
    );
    const tokens2 = ring2Ref.current.querySelectorAll<HTMLElement>(
      ".ring-icon-badge"
    );

    const ctx = gsap.context(() => {
      tokens1.forEach((el) => {
        const start = parseFloat(el.dataset.start || "0");
        gsap.fromTo(
          el,
          { offsetDistance: `${start}%` },
          {
            offsetDistance: `${start + 100}%`,
            duration: 80,
            ease: "none",
            repeat: -1,
          }
        );
      });
      tokens2.forEach((el) => {
        const start = parseFloat(el.dataset.start || "0");
        gsap.fromTo(
          el,
          { offsetDistance: `${start}%` },
          {
            offsetDistance: `${start - 100}%`,
            duration: 100,
            ease: "none",
            repeat: -1,
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-black pt-40 pb-24 text-center"
    >
      {/* Rotating ring composition behind hero content */}
      <div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center overflow-hidden">
        {/* Dark elliptical background disc */}
        <div
          className="absolute"
          style={{
            width: "110rem",
            height: "80rem",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, #0d1117 0%, #080c12 40%, #000000 70%)",
          }}
        />
        {/* Subtle lighting glow on the disc */}
        <div
          className="absolute"
          style={{
            width: "110rem",
            height: "80rem",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(168,244,255,0.08) 0%, rgba(168,244,255,0.02) 35%, transparent 60%)",
          }}
        />

        {/* Ring 1 - outer ellipse (forward orbit) */}
        <div
          ref={ring1Ref}
          className="absolute"
          style={{ width: "100rem", height: "70rem" }}
        >
          {/* Elliptical ring line */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          />
          {/* Icon badges on outer ring */}
          {ringIcons.map((item, i) => {
            const startPct = (i / ringIcons.length) * 100;
            const { Icon, label } = item;
            return (
              <span
                key={label}
                data-start={startPct}
                className="ring-icon-badge absolute flex items-center justify-center"
                style={{
                  width: "2.6rem",
                  height: "2.6rem",
                  offsetPath:
                    "ellipse(50% 35.5% at 50% 50%)",
                  offsetRotate: "0deg",
                }}
              >
                <span
                  className="flex h-full w-full items-center justify-center rounded-full border border-white/15 bg-black/70 backdrop-blur-sm"
                  title={label}
                >
                  <Icon className="h-4 w-4 text-[#a8f4ff]" strokeWidth={1.5} />
                </span>
              </span>
            );
          })}
        </div>

        {/* Ring 2 - inner ellipse (reverse orbit) */}
        <div
          ref={ring2Ref}
          className="absolute"
          style={{ width: "80rem", height: "56rem" }}
        >
          {/* Elliptical ring line */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          {/* Icon badges on inner ring */}
          {ringIcons.slice(0, 6).map((item, i) => {
            const startPct = (i / 6) * 100;
            const { Icon, label } = item;
            return (
              <span
                key={`inner-${label}`}
                data-start={startPct}
                className="ring-icon-badge absolute flex items-center justify-center"
                style={{
                  width: "2.2rem",
                  height: "2.2rem",
                  offsetPath:
                    "ellipse(50% 35.5% at 50% 50%)",
                  offsetRotate: "0deg",
                }}
              >
                <span
                  className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-sm"
                  title={label}
                >
                  <Icon
                    className="h-3.5 w-3.5 text-white/50"
                    strokeWidth={1.5}
                  />
                </span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="container-page relative z-10">
        <div data-fade>
          <h1 className="heading-h1 mx-auto max-w-5xl !text-[#d9d9d9]">
            The AI-Native Enterprise RCM &amp; Billing Platform
          </h1>
        </div>

        <p
          data-fade
          className="text-medium mx-auto mt-6 max-w-2xl text-[#d9d9d9]"
        >
          Turn labor into software with AI-powered intake, documentation,
          coding, claims, and payment solutions for medical and dental
          practices.
        </p>

        {/* Stat pills */}
        <div
          data-fade
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {heroPills.map((p) => (
            <span key={p} className="pill-border">
              <span className="pill !text-[#d9d9d9]">{p}</span>
            </span>
          ))}
        </div>

        {/* Hero video */}
        <div data-fade className="mx-auto mt-16 max-w-[46.875rem]">
          <div className="relative aspect-video w-full overflow-hidden rounded-[0.625rem]">
            <video
              muted
              loop
              autoPlay
              playsInline
              src={HERO_VIDEO}
              poster="https://medalyzeus.com/wp-content/uploads/2026/03/mazdoc1.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          data-fade
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn btn-v2">
            30 Days Free Trial
          </Link>
          <Link href="/ai-medical-scribe" className="btn btn-v2 btn-outline">
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
