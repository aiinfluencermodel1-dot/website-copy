"use client";

import { useState } from "react";
import { faqs } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
export const dynamic = "force-static";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="bg-black py-24">
      <div className="container-page">
        <h2 className="heading-h3 mx-auto max-w-3xl text-center !text-white">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="hairline"
                role="region"
                aria-expanded={isOpen}
              >
                <div className="hairline-inner overflow-hidden">
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-regular font-medium !text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#a8f4ff] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? "300px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="px-6 pb-5 text-small leading-relaxed text-[#d9d9d9]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
