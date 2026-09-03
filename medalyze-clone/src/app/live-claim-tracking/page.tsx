import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Search,
  Activity,
  TrendingUp,
  Eye,
  AlertTriangle,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Status",
    description:
      "Track every claim from submission to payment with live status updates at every stage of the revenue cycle.",
  },
  {
    icon: Eye,
    title: "Patient Portal",
    description:
      "Give patients a transparent view of their claims, balances, and payer communications in one simple dashboard.",
  },
  {
    icon: Search,
    title: "Provider Dashboard",
    description:
      "A consolidated dashboard lets providers monitor claims, spot bottlenecks, and drill into details instantly.",
  },
  {
    icon: AlertTriangle,
    title: "Alerts & Notifications",
    description:
      "Proactive alerts flag denials, processing delays, and pending actions so nothing slips through the cracks.",
  },
  {
    icon: TrendingUp,
    title: "Reporting",
    description:
      "Comprehensive analytics and exportable reports deliver insight into performance, trends, and revenue opportunities.",
  },
  {
    icon: Check,
    title: "Transparency",
    description:
      "Full end-to-end visibility gives both providers and patients confidence that every claim is accounted for.",
  },
];

const stats = [
  { value: "24/7", label: "live tracking" },
  { value: "100%", label: "visibility" },
  { value: "0", label: "missed claims" },
];

export default function LiveClaimTrackingPage() {
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
              Live Claim Tracking
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">ADVANCED SOLUTIONS</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-white">
              Real-Time Claim Tracking for Providers &amp; Patients
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              Gain complete, real-time visibility into every claim across its
              lifecycle. From submission to approval and payment, stay informed
              with transparent dashboards and proactive alerts.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-v2">
                Get In Touch
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
              Complete Claim Visibility, End to End
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              Powerful tracking tools designed to keep providers and patients
              informed at every step of the revenue cycle.
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
