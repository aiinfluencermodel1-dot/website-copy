import Image from "next/image";
import Link from "next/link";
import { companyData, logoUrl, assets } from "@/lib/constants";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";

const heroStats = [
  { value: "8+", label: "Years of Business" },
  { value: "50", label: "States Covered" },
  { value: "30+", label: "Health Specialties" },
];

const rcmServices = [
  "Patient intake",
  "Eligibility checks",
  "Claim creation & submission",
  "Denial management",
  "Accounts receivable follow-ups",
  "Payment posting",
  "Revenue analytics",
];

const missionVisionValues = [
  { title: "Mission", text: companyData.mission },
  { title: "Vision", text: companyData.vision },
  { title: "Values", text: companyData.values },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black py-24 lg:py-32">
        <Image
          src="https://medalyzeus.com/wp-content/uploads/2026/03/mazdoc1.jpg"
          alt="Healthcare professionals providing care"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

        <Container size="lg" className="relative">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#7b7b7b]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                About Us
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-6 flex items-center">
              <Image
                src={logoUrl}
                alt="Medalyze logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="ml-3 text-sm font-medium text-[#a8f4ff]">
                About Medalyze
              </span>
            </div>
            <h1 className="heading-h3 !text-white">
              {companyData.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              {companyData.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-black py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="heading-h2 !text-[#a8f4ff]">
                  {stat.value}
                </p>
                <p className="mt-2 text-lg text-[#7b7b7b]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="hairline">
              <div className="hairline-inner overflow-hidden rounded-[0.625rem]">
                <Image
                  src={assets.aboutPoster}
                  alt="Medalyze social media poster highlighting revenue cycle solutions"
                  width={720}
                  height={720}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="heading-h4 !text-white">
                End-to-End Revenue Cycle Management
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#d9d9d9]">
                {companyData.philosophy}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {rcmServices.map((service) => (
                  <div key={service} className="chip-border">
                    <div className="chip">
                      <span className="chip-label">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-black py-24">
        <Container size="lg">
          <div className="max-w-3xl">
            <h2 className="heading-h3 !text-white">
              Inspirational Growth - Our Vision and Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#d9d9d9]">
              We are driven by a shared purpose to transform healthcare
              revenue operations through the careful combination of advanced
              technology and human expertise.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {missionVisionValues.map((item) => (
              <div key={item.title} className="hairline">
                <div className="hairline-inner p-8">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#d9d9d9]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
