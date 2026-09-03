import Link from "next/link";
import { testimonials } from "@/lib/constants";
import { Star } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import Container from "@/components/ui/Container";

const resultMetrics = [
  { value: "99.9%", label: "First-pass success rate" },
  { value: "40%", label: "Faster payment cycles" },
  { value: "50+", label: "States covered" },
  { value: "24/7", label: "Support" },
];

export default function TestimonialsPage() {
  return (
    <main>
      <section className="bg-black py-24 lg:py-32">
        <Container size="lg">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#7b7b7b]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Testimonials
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-h3 !text-white">
              Real People. Real Impact.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d9d9d9]">
              See what medical and dental practices are saying about working
              with Medalyze.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-black py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <figure
                key={i}
                className="hairline"
              >
                <div className="hairline-inner flex h-full flex-col justify-between p-8">
                  <div>
                    <div className="mb-5 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="h-5 w-5 fill-[#a8f4ff] text-[#a8f4ff]"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg leading-relaxed text-[#d9d9d9]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 border-t border-white/10 pt-6">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-sm text-[#7b7b7b]">
                      {testimonial.title}
                    </p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-24">
        <Container size="lg">
          <div className="max-w-3xl">
            <h2 className="heading-h3 !text-white">
              Proven Results in Action
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#d9d9d9]">
              The numbers speak for themselves. Our clients consistently see
              measurable improvements across their revenue cycle.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {resultMetrics.map((metric) => (
              <div key={metric.label} className="hairline">
                <div className="hairline-inner p-8">
                  <p className="heading-h2 !text-[#a8f4ff]">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm text-[#d9d9d9]">{metric.label}</p>
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
