import Link from "next/link";
import CTASection from "@/components/home/CTASection";
import {
  ShieldCheck,
  Lock,
  FileCheck,
  Server,
  Eye,
  KeyRound,
  ChevronRight,
} from "lucide-react";

const complianceFeatures = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliance",
    description:
      "Adherence to HIPAA regulations ensuring protected health information is handled with the highest standards of confidentiality and integrity.",
  },
  {
    icon: FileCheck,
    title: "SOC 2 Type II",
    description:
      "Audited controls across security, availability, and confidentiality, validated by independent third-party examination of our systems.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description:
      "End-to-end encryption for data in transit and at rest, using industry-standard cryptographic protocols to protect sensitive information.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Enterprise-grade hosting with redundancy, intrusion detection, and continuous monitoring across our entire infrastructure.",
  },
  {
    icon: KeyRound,
    title: "Access Controls",
    description:
      "Role-based access, least-privilege principles, and multi-factor authentication ensuring only authorized personnel reach your data.",
  },
  {
    icon: Eye,
    title: "Auditing & Monitoring",
    description:
      "Comprehensive logging, real-time monitoring, and regular security assessments to detect and respond to threats proactively.",
  },
];

const securityFeatures = [
  {
    title: "Business Associate Agreements",
    description:
      "We execute BAAs with every client, formally documenting our obligations to safeguard protected health information on your behalf.",
  },
  {
    title: "Secure PHI Handling",
    description:
      "Protected health information is processed, transmitted, and stored using secure workflows designed around strict data minimization.",
  },
  {
    title: "Employee Security Training",
    description:
      "Our team undergoes regular, mandatory security and privacy training to maintain a security-first culture across the organization.",
  },
  {
    title: "Incident Response",
    description:
      "A defined incident response plan ensures timely detection, containment, and notification in the unlikely event of a security event.",
  },
];

export default function CompliancePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="container-page py-20 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-[#7b7b7b]"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Trust Center</span>
          </nav>

          <div className="max-w-3xl">
            <span className="chip-border">
              <span className="chip">
                <span className="chip-label">Trust Center</span>
              </span>
            </span>
            <h1 className="mt-6 heading-h3">
              Security, Privacy, and Compliance
            </h1>
            <p className="mt-6 text-medium text-[#d9d9d9]">
              Your patient data deserves enterprise-grade protection. We build
              compliance, security, and privacy into every layer of our
              platform—so you can focus on care, not risk.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="bg-black py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complianceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="hairline group"
                >
                  <div className="hairline-inner p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a8f4ff]/10 text-[#a8f4ff] transition-colors group-hover:bg-[#a8f4ff] group-hover:text-black">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#d9d9d9]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Details */}
      <section className="bg-black py-20 lg:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="heading-h3 !text-white">
              Enterprise-grade security built into every layer
            </h2>
            <p className="mt-6 text-medium text-[#d9d9d9]">
              Medalyze processes sensitive protected health information (PHI)
              on behalf of healthcare providers. That responsibility drives
              every decision we make. We maintain strict HIPAA compliance,
              apply robust data protection measures, and ensure that every
              member of our team is trained and accountable for safeguarding
              patient data—from intake through final reimbursement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="hairline"
              >
                <div className="hairline-inner p-7">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#a8f4ff]" />
                    <h3 className="font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#d9d9d9]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
