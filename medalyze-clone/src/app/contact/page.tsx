import Link from "next/link";
import { contactInfo } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import ContactForm from "./ContactForm";
import CTASection from "@/components/home/CTASection";
import Container from "@/components/ui/Container";

const contactCards = [
  { icon: MapPin, label: "Address", value: contactInfo.address },
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Clock, label: "Working Hours", value: contactInfo.workingHours },
];

const features = [
  "End-to-end revenue cycle management",
  "AI-powered billing automation",
  "99.9% claim accuracy rate",
  "Real-time revenue analytics",
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-black text-white">
        <Container size="lg" className="py-20 lg:py-28">
          <nav className="mb-8 flex items-center gap-2 text-sm text-[#7b7b7b]">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-h3 !text-white">
              Get in Touch
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              We&apos;d love to hear from you. Our team is ready to help optimize your
              revenue cycle.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <div className="hairline">
                  <div className="hairline-inner flex items-start gap-4 p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#a8f4ff]/10 text-[#a8f4ff]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#7b7b7b]">{card.label}</p>
                      <p className="mt-1 text-sm leading-snug text-white">{card.value}</p>
                    </div>
                  </div>
                </div>
              );

              if (card.href) {
                return (
                  <a key={card.label} href={card.href} className="block">
                    {inner}
                  </a>
                );
              }
              return <div key={card.label}>{inner}</div>;
            })}
          </div>
        </Container>
      </section>

      <section className="bg-black py-20 lg:py-28">
        <Container size="lg">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="heading-h4 !text-white">
                Let&apos;s Start a Conversation
              </h2>
              <p className="mt-4 text-lg text-[#d9d9d9]">
                Based in St. Petersburg, FL, Medalyze serves healthcare providers
                across all 50 states. Reach out to learn how we can streamline your
                revenue cycle.
              </p>

              <div className="mt-10 space-y-6">
                <div className="hairline">
                  <div className="hairline-inner flex items-start gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#a8f4ff]/10 text-[#a8f4ff]">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Based in St. Petersburg, FL
                      </p>
                      <p className="mt-1 text-sm text-[#7b7b7b]">
                        Serving healthcare providers across all 50 states
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hairline">
                  <div className="hairline-inner p-5">
                    <p className="text-sm font-semibold text-white">
                      What We Offer
                    </p>
                    <ul className="mt-3 space-y-2">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#d9d9d9]">
                          <svg
                            className="h-4 w-4 shrink-0 text-[#a8f4ff]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#7b7b7b]">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-[#a8f4ff]"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-[#a8f4ff]"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
