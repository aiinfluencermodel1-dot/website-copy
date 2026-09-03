import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  ShieldCheck,
  FileCheck,
  Clock,
  CheckCircle,
  UserCheck,
  Award,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Payer Enrollment",
    description:
      "Streamlined enrollment with commercial, Medicare, Medicaid, and managed care payers across all 50 states.",
  },
  {
    icon: FileCheck,
    title: "State Licensing",
    description:
      "Expert guidance through state medical board applications, license renewals, and multi-state credentialing requirements.",
  },
  {
    icon: Clock,
    title: "Re-Credentialing",
    description:
      "Automated tracking and timely submission of re-credentialing applications to prevent any lapse in active status.",
  },
  {
    icon: CheckCircle,
    title: "CAQH Setup",
    description:
      "Complete CAQH profile creation and maintenance, ensuring your provider data is always current and accessible to payers.",
  },
  {
    icon: UserCheck,
    title: "Hospital Privileging",
    description:
      "Navigate hospital credentialing and privileging processes with expert support for expedited approvals.",
  },
  {
    icon: Award,
    title: "Continuous Monitoring",
    description:
      "Ongoing verification of CAQH, NPDB, OIG, and SAM checks to ensure full compliance before payer submission.",
  },
];

const stats = [
  { value: "500+", label: "Providers Credentialed" },
  { value: "45 days", label: "Average Turnaround" },
  { value: "98%", label: "First-Pass Success Rate" },
  { value: "24/7", label: "Monitoring & Support" },
];

export default function ProviderCredentialingPage() {
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
              Provider Credentialing
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">PROVIDER CREDENTIALING</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-white">
              Fast-Track Provider Credentialing
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              Get credentialed faster with expert support across all payers and
              states. Our team handles the complexity so you can start billing
              sooner.
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

      {/* Features Section */}
      <section id="features" className="bg-black py-24">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-h3 !text-white">
              End-to-End Credentialing
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              From initial enrollment to ongoing compliance, we manage every
              step of the credentialing lifecycle so providers can focus on
              patient care.
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

      {/* Stats Section */}
      <section className="bg-black py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="hairline">
                <div className="hairline-inner p-8 text-center">
                  <p className="text-5xl font-bold tracking-tight text-[#a8f4ff] lg:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-lg text-[#7b7b7b]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
