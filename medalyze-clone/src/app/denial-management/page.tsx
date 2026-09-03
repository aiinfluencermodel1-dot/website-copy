import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  ShieldAlert,
  TrendingUp,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  BarChart,
} from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "Root Cause Analysis",
    description:
      "AI-powered analysis identifies the exact reason behind every denial—whether coding errors, missing documentation, or payer policy changes.",
  },
  {
    icon: RefreshCw,
    title: "Automated Appeals",
    description:
      "Generate and submit appeal letters automatically with supporting documentation, reducing manual work and accelerating reimbursement.",
  },
  {
    icon: ShieldAlert,
    title: "Predictive Prevention",
    description:
      "Machine learning models flag claims at high risk of denial before submission, enabling corrections that prevent denials entirely.",
  },
  {
    icon: TrendingUp,
    title: "Pattern Recognition",
    description:
      "Monitor every denied claim's status from identification through resolution with live dashboards and proactive status updates.",
  },
  {
    icon: BarChart,
    title: "Performance Tracking",
    description:
      "Resubmit batches of corrected claims in one action, dramatically reducing the time and effort needed to recover lost revenue.",
  },
  {
    icon: CheckCircle,
    title: "Payer Intelligence",
    description:
      "Comprehensive audit trails and denial reports ensure compliance with payer requirements and internal governance standards.",
  },
];

const stats = [
  { value: "95%", label: "appeal success rate" },
  { value: "40%", label: "fewer denials" },
  { value: "3x", label: "faster resolution" },
];

export default function DenialManagementPage() {
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
              Denial Management
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">REVENUE INTEGRITY</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-white">
              AI-Powered Denial Management
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              Never make the same mistake twice. Predict, prevent, and appeal
              denials with intelligent automation that recovers revenue and
              strengthens your claims process.
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
              Fight Denials with Intelligence
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              A complete denial management platform that finds root causes,
              automates appeals, and prevents future denials before they happen.
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
