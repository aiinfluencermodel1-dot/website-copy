import Link from "next/link";
import { contactInfo } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="bg-black py-24">
      <div className="container-page">
        <div
          className="mx-auto max-w-6xl p-1 rounded-[1.25rem]"
          style={{ background: "linear-gradient(#d3f9ff,#a8f4ff)" }}
        >
          <div className="rounded-[1.1rem] bg-black px-8 py-16 text-center md:py-24">
            <h3 className="heading-h4 mx-auto max-w-3xl !text-white">
              Ready to bring AI to your revenue cycle?
            </h3>
            <p className="text-medium mt-4 text-[#d9d9d9]">
              Drop in your information below and we&apos;ll be in touch.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-v2">
                Get Assessment
              </Link>
              <Link href="/contact" className="btn btn-v2 btn-outline">
                Talk to Sales
              </Link>
            </div>

            <p className="mt-10 text-[#a8f4ff]">{contactInfo.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
