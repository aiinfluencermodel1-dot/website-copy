import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Activity,
  TrendingUp,
  PieChart,
  Users,
  DollarSign,
  BarChart,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Patient Metrics",
    description:
      "Track patient volume, visit types, referral sources, and demographic trends to understand who your practice serves and how to grow.",
  },
  {
    icon: DollarSign,
    title: "Revenue Tracking",
    description:
      "Monitor revenue streams by service line, provider, and location with real-time dashboards that highlight opportunities and risks.",
  },
  {
    icon: Activity,
    title: "Provider Productivity",
    description:
      "Measure provider efficiency with metrics on patients seen, procedures performed, and revenue generated per provider per day.",
  },
  {
    icon: BarChart,
    title: "Financial Health",
    description:
      "Analyze claim submission velocity, clean claim rates, days in A/R, and collection ratios to optimize your billing operations.",
  },
  {
    icon: PieChart,
    title: "Insurance Mix",
    description:
      "Define and track the key performance indicators that matter most to your practice with fully customizable metric dashboards.",
  },
  {
    icon: TrendingUp,
    title: "Custom Dashboards",
    description:
      "Surface bottlenecks in scheduling, staffing, and workflow to drive operational improvements that directly impact your bottom line.",
  },
];

const stats = [
  { value: "360°", label: "practice view" },
  { value: "AI-Powered", label: "intelligent insights" },
  { value: "100%", label: "HIPAA compliant" },
];

export default function PracticeAnalyticsPage() {
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
              Practice Analytics
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">ADVANCED SOLUTIONS</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-white">
              Practice &amp; Hospital Analytics
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              Get a 360-degree view of your practice or hospital performance
              with real-time analytics that track patient metrics, revenue,
              provider productivity, and operational efficiency—all in one
              place.
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
              Every Metric That Matters
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              Comprehensive analytics built for practices and hospitals that
              want complete visibility into clinical, financial, and
              operational performance.
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
