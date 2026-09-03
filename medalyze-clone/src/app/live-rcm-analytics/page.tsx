import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  BarChart,
  TrendingUp,
  PieChart,
  Activity,
  Eye,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Dashboards",
    description:
      "Monitor revenue cycle performance with live dashboards that update every second, giving you an always-current view of your financial health.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Forecasting",
    description:
      "AI-powered predictive models forecast revenue trends, cash flow patterns, and seasonal shifts to keep you ahead of the curve.",
  },
  {
    icon: PieChart,
    title: "Denial Analysis",
    description:
      "Deep-dive into denial patterns by payer, procedure, and reason code to identify root causes and implement targeted fixes.",
  },
  {
    icon: BarChart,
    title: "Performance Metrics",
    description:
      "Track KPIs like days in A/R, clean claim rate, first-pass resolution, and collection rate across your entire organization.",
  },
  {
    icon: FileText,
    title: "Custom Reports",
    description:
      "Build, schedule, and export custom reports tailored to your team's needs—from executive summaries to department-level drill-downs.",
  },
  {
    icon: Eye,
    title: "Data-Driven Decisions",
    description:
      "Transform raw billing data into actionable insights that drive smarter staffing, payer negotiations, and operational improvements.",
  },
];

const stats = [
  { value: "24/7", label: "live insights" },
  { value: "100%", label: "data visibility" },
  { value: "30%", label: "faster reporting" },
];

export default function LiveRcmAnalyticsPage() {
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
              Live RCM Analytics
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">ADVANCED SOLUTIONS</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-white">
              Live RCM Analytics &amp; Intelligent Dashboards
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              Gain real-time visibility into every dimension of your revenue
              cycle. From claim submission to payment posting, our intelligent
              dashboards surface the insights you need to optimize performance
              and maximize revenue.
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
              Analytics That Drive Revenue
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              Purpose-built tools to track performance, uncover trends, and turn
              complex revenue cycle data into clear, actionable intelligence.
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
