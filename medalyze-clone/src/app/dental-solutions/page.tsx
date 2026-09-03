import Link from "next/link";
import { services } from "@/lib/constants";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Check,
  ShieldCheck,
  TrendingUp,
  Activity,
  BookOpenCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Dental-Specific Workflows",
    description:
      "Optimized for dental practices, from 3D imaging to treatment plans, so your front and back office run smoothly.",
  },
  {
    icon: BookOpenCheck,
    title: "CDT Coding Expertise",
    description:
      "Certified dental coders with deep CDT code knowledge ensure accurate submissions and maximum reimbursement.",
  },
  {
    icon: TrendingUp,
    title: "Practice Growth",
    description:
      "Faster payments, fewer denials, and smarter scheduling let your practice focus on growth and patient care.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description:
      "Payer-aware workflows and HIPAA-aligned processes keep your dental practice protected and compliant.",
  },
];

export default function DentalSolutionsPage() {
  const { description, features } = services.dentalSolutions;

  return (
    <main>
      {/* Hero Section */}
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
              Dental RCM
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">DENTAL RCM SOLUTIONS</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-white">
              Dental Billing That Maximizes Chair Time
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              {description}
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn btn-v2">
                Schedule A Demo
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-black py-24">
        <Container size="lg">
          <div className="max-w-3xl">
            <h2 className="heading-h3 !text-white">
              Dental RCM Features
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              Every step of your dental revenue cycle, tailored to your
              practice.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(features ?? []).map((feature) => (
              <div key={feature.title} className="hairline">
                <div className="hairline-inner p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a8f4ff]/10 text-[#a8f4ff]">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#d9d9d9]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="bg-black py-24">
        <Container size="lg">
          <div className="max-w-3xl">
            <h2 className="heading-h3 !text-white">
              Tailored Dental Revenue Management
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              Purpose-built dental RCM that fits how your practice actually
              works.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="hairline">
                  <div className="hairline-inner p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a8f4ff]/10 text-[#a8f4ff]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#d9d9d9]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
