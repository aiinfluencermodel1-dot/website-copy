import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="container-page py-20 lg:py-28">
          <nav className="mb-8 flex items-center gap-2 text-sm text-[#7b7b7b]">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/legal" className="transition-colors hover:text-white">
              Legal
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Privacy Policy</span>
          </nav>

          <h1 className="heading-h3">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[#7b7b7b]">Last updated: September 3, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-black py-16 lg:py-24">
        <div className="container-page max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-[#d9d9d9]">
              Medalyze Medtech LLC (&quot;Medalyze,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit
              our website and use our services.
            </p>

            <h2 className="mt-12 heading-h4 !text-white">
              Information We Collect
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>
                We may collect information that you provide directly to us, including
                when you fill out a contact form, request a consultation, subscribe to
                our communications, or otherwise interact with our website.
              </p>
              <p>This information may include:</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Full name, email address, phone number, and mailing address</li>
                <li>Company name, job title, and professional role</li>
                <li>Practice type, specialty, and patient volume details</li>
                <li>Communications you send to us (questions, feedback, support requests)</li>
              </ul>
              <p>
                We also automatically collect certain technical information when you
                visit our website, such as IP address, browser type, operating system,
                referring URLs, pages viewed, and time spent on pages. We use cookies
                and similar tracking technologies to enhance your experience and gather
                analytical data.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              How We Use Your Information
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver and improve our revenue cycle management services</li>
                <li>Send administrative communications (service updates, billing notices)</li>
                <li>Send marketing communications with your consent</li>
                <li>Analyze website usage to improve user experience and functionality</li>
                <li>Comply with legal obligations and protect against fraud</li>
                <li>Process transactions and manage your account</li>
              </ul>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Information Sharing
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>
                We do not sell your personal information. We may share your information
                with:
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  <strong>Service providers</strong> who perform services on our behalf,
                  such as hosting providers, analytics services, and email platforms,
                  bound by contractual obligations to protect your data.
                </li>
                <li>
                  <strong>Healthcare partners</strong> when necessary to fulfill the
                  revenue cycle management services you have engaged us to provide.
                </li>
                <li>
                  <strong>Legal authorities</strong> when required by law, regulation,
                  legal process, or enforceable governmental request.
                </li>
                <li>
                  <strong>Business transfers</strong> in connection with a merger,
                  acquisition, or sale of all or a portion of our assets, with notice
                  provided as required by applicable law.
                </li>
              </ul>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Data Security
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>
                We implement industry-standard administrative, technical, and physical
                safeguards designed to protect your personal information. These include
                encryption of data in transit and at rest, access controls, regular
                security assessments, and employee training on data protection practices.
              </p>
              <p>
                While we take reasonable precautions, no method of electronic
                transmission or storage is completely secure. We cannot guarantee the
                absolute security of your information.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Your Rights
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the information
                below. We will respond to your request within a reasonable timeframe
                and in accordance with applicable law.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Contact Information
            </h2>
            <div className="mt-4 text-[#d9d9d9] leading-relaxed">
              <p>
                If you have questions about this Privacy Policy or wish to exercise
                your rights, please contact us:
              </p>
              <p className="mt-3">
                <strong>Medalyze Medtech LLC</strong>
                <br />
                7901, 4th St N, STE #300
                <br />
                St Petersburg, FL 33702
                <br />
                Email:{" "}
                <a
                  href="mailto:info@medalyzeus.com"
                  className="text-[#a8f4ff] underline underline-offset-2 hover:text-[#a8f4ff]/80"
                >
                  info@medalyzeus.com
                </a>
                <br />
                Phone:{" "}
                <a
                  href="tel:+17272085953"
                  className="text-[#a8f4ff] underline underline-offset-2 hover:text-[#a8f4ff]/80"
                >
                  +1 (727) 208 5953
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
