import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Check,
  ShieldCheck,
  Zap,
  Search,
  TrendingUp,
  BellRing,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Verification",
    description:
      "Verify patient eligibility instantly at the point of service, eliminating delays and ensuring coverage is confirmed before care begins.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Coverage Details",
    description:
      "Get comprehensive breakdowns of copays, deductibles, coinsurance, and out-of-pocket maximums for every patient in seconds.",
  },
  {
    icon: Search,
    title: "Pre-Claim Checks",
    description:
      "Catch coverage gaps, authorization requirements, and plan exclusions before claims are ever submitted.",
  },
  {
    icon: BellRing,
    title: "EHR Integration",
    description:
      "Seamlessly connects with your existing electronic health record system for automated eligibility checks without workflow disruption.",
  },
  {
    icon: Check,
    title: "Patient Transparency",
    description:
      "Give patients clear, upfront estimates of their financial responsibility, building trust and reducing billing surprises.",
  },
  {
    icon: TrendingUp,
    title: "Denial Prevention",
    description:
      "Proactively identify issues that lead to claim denials and resolve them before they impact your revenue cycle.",
  },
];

const stats = [
  { value: "100%", label: "real-time verification" },
  { value: "0", label: "eligibility denials" },
  { value: "60%", label: "faster patient intake" },
];

export default function LiveEligibilityVerificationPage() {
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
              Live Eligibility Verification
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">ADVANCED SOLUTIONS</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-white">
              Instant Eligibility Verification. Zero Denials.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              Confirm patient insurance eligibility in real time before care
              begins. Reduce denials, speed up intake, and give patients
              transparent cost estimates with zero manual verification.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-v2">
                Get Assessment
              </Link>
              <a href="#features" className="btn btn-v2 btn-outline">
                Explore Features
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="features" className="bg-black py-24">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h3 !text-white">
              Complete Eligibility Intelligence
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              Powerful verification tools designed to eliminate denials and
              streamline patient intake from the very first interaction.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="hairline">
                  <div className="hairline-inner p-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#a8f4ff]/10 text-[#a8f4ff]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#d9d9d9]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-black py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-bold tracking-tight text-white lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-lg text-[#7b7b7b]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
