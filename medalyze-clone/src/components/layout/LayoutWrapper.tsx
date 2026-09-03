"use client";

import React, { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactPanel from "./ContactPanel";
import PageLoader from "./PageLoader";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <PageLoader />
      <Navbar onContactOpen={() => setContactOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer onContactOpen={() => setContactOpen(true)} />
      <ContactPanel
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
