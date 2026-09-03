import Link from "next/link";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import {
  Calendar,
  Clock,
  BellRing,
  ShieldCheck,
  TrendingUp,
  Check,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "No-Show Prevention",
    description:
      "Smart booking safeguards against no-shows with intelligent reminders, waitlists, and rescheduling options that keep your schedule full.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "AI optimizes appointment slots based on provider availability, visit type, and patient preferences to maximize utilization.",
  },
  {
    icon: BellRing,
    title: "Automated Reminders",
    description:
      "Multichannel reminders via text, email, and voice keep patients informed and show up on time, every time.",
  },
  {
    icon: Clock,
    title: "Patient Convenience",
    description:
      "Patients can book, reschedule, or cancel appointments 24/7 from any device—no phone calls or hold time required.",
  },
  {
    icon: TrendingUp,
    title: "Staff Efficiency",
    description:
      "Automate time-consuming scheduling tasks so front-office staff can focus on more valuable patient interactions.",
  },
  {
    icon: Check,
    title: "Seamless Integration",
    description:
      "Integrates with your EHR and practice management system for a single, unified scheduling workflow.",
  },
];

const stats = [
  { value: "0%", label: "no-shows" },
  { value: "3x", label: "booking speed" },
  { value: "24/7", label: "availability" },
];

export default function AiPoweredAppointmentsPage() {
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
              AI-Powered Appointments
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">ADVANCED SOLUTIONS</span>
              </span>
            </span>
            <h1 className="heading-h3 mt-6 !text-white">
              AI-Powered Appointments That Never Miss
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              Our intelligent scheduling platform combines AI-driven booking,
              automated reminders, and predictive no-show prevention to keep
              your practice full and your patients engaged.
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
              Everything Your Schedule Needs
            </h2>
            <p className="mt-4 text-lg text-[#d9d9d9]">
              Built to reduce no-shows, speed up booking, and deliver a
              frictionless experience for patients and staff alike.
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
