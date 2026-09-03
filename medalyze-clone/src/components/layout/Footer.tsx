import Link from "next/link";
import Image from "next/image";
import { footerData, contactInfo, logoUrl } from "@/lib/constants";

const footerCols = [
  {
    title: "Solutions",
    links: [
      { label: "Medical RCM", href: "/medical-solutions" },
      { label: "Dental RCM", href: "/dental-solutions" },
      { label: "AI Medical Scribe", href: "/ai-medical-scribe" },
      { label: "Live Claim Tracking", href: "/live-claim-tracking" },
      { label: "Denial Management", href: "/denial-management" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Compliance", href: "/compliance" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms & Conditions", href: "/legal/terms" },
    ],
  },
];

export default function Footer({ onContactOpen }: { onContactOpen?: () => void }) {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="container-page py-20">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-tiny text-w-[#7b7b7b] uppercase tracking-widest" style={{ color: "#7b7b7b" }}>
              Medalyze Medtech LLC
            </p>
            <h2 className="heading-h4 mt-2 max-w-xl">
              Analyze, Automate, Accelerate
            </h2>
          </div>

          <button onClick={onContactOpen} className="btn btn-animated is-small">
            <span className="btn_text-wrap text-[#a8f4ff]" style={{ color: "#a8f4ff" }}>
              <span className="btn_text">Let&apos;s Talk</span>
            </span>
          </button>
        </div>

        <div className="my-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src={logoUrl}
              alt="Medalyze"
              width={150}
              height={40}
              className="h-9 w-auto object-contain"
              unoptimized
            />
            <p className="mt-5 text-small text-[#7b7b7b]" style={{ color: "#7b7b7b" }}>
              {footerData.tagline}
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-small font-black uppercase tracking-wider text-white">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-small text-[#7b7b7b] transition-colors hover:text-[#a8f4ff]"
                      style={{ color: "#7b7b7b" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="flex flex-col flex-wrap gap-x-10 gap-y-2 border-t border-white/10 pt-8 text-small text-[#7b7b7b]" style={{ color: "#7b7b7b" }}>
          <span>{contactInfo.address}</span>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-[#a8f4ff]">
            US: {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="hover:text-[#a8f4ff]">
            {contactInfo.email}
          </a>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-tiny text-[#7b7b7b] sm:flex-row" style={{ color: "#7b7b7b" }}>
          <p>
            Copyright © {new Date().getFullYear()} Medalyze Medtech LLC. All
            rights reserved.
          </p>
          <p>
            {contactInfo.workingHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
