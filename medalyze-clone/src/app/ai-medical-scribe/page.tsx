import Link from "next/link";
import { services } from "@/lib/constants";
import {
  Mic,
  FileText,
  Brain,
  Clock,
  Zap,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";

const benefitIcons = [Mic, FileText, Brain, Clock, Zap, ShieldCheck, Clock];

export default function AiMedicalScribePage() {
  return (
    <main>
      <section className="bg-black py-20 lg:py-28">
        <Container size="lg">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-[#7b7b7b]"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-white">
              AI Medical Scribe
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">AI MEDICAL SCRIBE</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-white">
              Intelligent Clinical Documentation, Without the Effort
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              {services.aiMedicalScribe.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-v2">
                Get In Touch
              </Link>
              <a href="#benefits" className="btn btn-v2 btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="benefits" className="bg-black py-24">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h3 !text-white">
              Key Benefits of AI Medical Scribe
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              Discover how ambient AI documentation transforms the way care
              teams capture, structure, and use clinical notes.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.aiMedicalScribe.benefits?.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              return (
                <div key={benefit.title} className="hairline">
                  <div className="hairline-inner p-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#a8f4ff]/10 text-[#a8f4ff]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#d9d9d9]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
