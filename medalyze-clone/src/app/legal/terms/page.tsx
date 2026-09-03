import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TermsAndConditionsPage() {
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
            <span className="text-white">Terms &amp; Conditions</span>
          </nav>

          <h1 className="heading-h3">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-[#7b7b7b]">Last updated: September 3, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-black py-16 lg:py-24">
        <div className="container-page max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-[#d9d9d9]">
              Welcome to Medalyze Medtech LLC (&quot;Medalyze,&quot; &quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;). These Terms and Conditions govern your use of our website
              and services. By accessing or using our website or engaging our services,
              you agree to be bound by these Terms.
            </p>

            <h2 className="mt-12 heading-h4 !text-white">
              Acceptance of Terms
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>
                By accessing our website, submitting a form, or engaging our services,
                you acknowledge that you have read, understood, and agree to be bound
                by these Terms and Conditions and our Privacy Policy. If you do not
                agree to these Terms, you must not access or use our website or
                services.
              </p>
              <p>
                You represent that you have the legal authority to enter into these
                Terms on behalf of yourself or the entity you represent.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Services Description
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>
                Medalyze provides end-to-end revenue cycle management (RCM) solutions
                for medical and dental practices, including but not limited to:
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>Provider credentialing and enrollment</li>
                <li>Patient scheduling and registration</li>
                <li>Eligibility and benefits verification</li>
                <li>Medical and dental coding</li>
                <li>Claim creation and submission</li>
                <li>Accounts receivable follow-ups</li>
                <li>Denial management</li>
                <li>Payment posting</li>
                <li>Patient billing and collections</li>
                <li>AI-powered medical scribe and analytics</li>
              </ul>
              <p>
                Service-specific terms, deliverables, and pricing are outlined in
                individual service agreements or statements of work executed between
                Medalyze and the client.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Use of Services
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>You agree to:</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Provide accurate and complete information necessary for the
                  delivery of services
                </li>
                <li>
                  Maintain the confidentiality of your account credentials and
                  notify us immediately of any unauthorized access
                </li>
                <li>
                  Use our services in compliance with all applicable federal, state,
                  and local laws and regulations, including HIPAA
                </li>
                <li>
                  Cooperate promptly with requests for information or documentation
                  required to perform our services
                </li>
              </ul>
              <p>
                You agree not to use our services for any unlawful purpose or in any
                manner that could damage, disable, overburden, or impair our website
                or operations.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Intellectual Property
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>
                All content on this website, including text, graphics, logos, icons,
                images, software, and documentation, is the property of Medalyze
                Medtech LLC or its licensors and is protected by United States and
                international copyright, trademark, and other intellectual property
                laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable license to
                access and use our website for informational purposes. You may not
                reproduce, distribute, modify, create derivative works of, publicly
                display, or exploit any content from our website without prior written
                consent from Medalyze.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Limitation of Liability
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, Medalyze Medtech
                LLC shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss
                of profits, data, business opportunities, or goodwill, arising out of
                or related to your use of our website or services.
              </p>
              <p>
                Our total aggregate liability for any claims arising out of or related
                to these Terms or our services shall not exceed the amount you paid to
                Medalyze during the twelve (12) months immediately preceding the event
                giving rise to the claim.
              </p>
              <p>
                These limitations apply regardless of the theory of liability, whether
                based on warranty, contract, tort, strict liability, or any other
                legal theory.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Governing Law
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of the State of Florida, without regard to
                its conflict of law provisions. Any disputes arising under these Terms
                shall be resolved exclusively in the state or federal courts located
                in Pinellas County, Florida, and you consent to the personal
                jurisdiction of such courts.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Changes to These Terms
            </h2>
            <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
              <p>
                We reserve the right to modify these Terms and Conditions at any time.
                Changes will be effective when posted on this page with an updated
                &quot;Last updated&quot; date. Your continued use of our website or services
                after any changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <h2 className="mt-12 heading-h4 !text-white">
              Contact Information
            </h2>
            <div className="mt-4 text-[#d9d9d9] leading-relaxed">
              <p>
                If you have questions about these Terms and Conditions, please contact
                us:
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
