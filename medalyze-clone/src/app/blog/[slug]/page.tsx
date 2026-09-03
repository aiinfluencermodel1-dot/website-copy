import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/constants";
import { ArrowLeft, ChevronRight, CalendarDays } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Medalyze Blog`,
    description: post.excerpt,
  };
}

const categorySections: Record<
  string,
  { heading: string; paragraphs: string[] }[]
> = {
  RCM: [
    {
      heading: "The Revenue Cycle, End to End",
      paragraphs: [
        "A healthy revenue cycle begins long before a claim is submitted. From patient registration and eligibility verification to coding, claim submission, and final payment posting, every stage affects how quickly—and how completely—providers get reimbursed for the care they deliver.",
        "Organizations that treat the revenue cycle as a connected, end-to-end process rather than isolated steps consistently outperform those that manage each function in silos. When patient access, clinical documentation, and revenue integrity are aligned, cash flow becomes more predictable and administrative burden drops significantly.",
      ],
    },
    {
      heading: "Automating the Billing Workflow",
      paragraphs: [
        "Automation is transforming each step of the billing workflow. Eligibility checks that once took minutes can now be verified in real time. Claims can be scrubbed against payer rules before submission, catching errors that previously led to costly rework and denials.",
        "By reducing manual, repetitive tasks, automation lets your billing team focus on the exceptions that genuinely require human judgment—complex appeals, high-dollar accounts, and patient inquiries. The result is a leaner operation that moves more claims through with greater accuracy.",
      ],
    },
    {
      heading: "Measuring What Matters",
      paragraphs: [
        "Sustainable revenue cycle performance depends on tracking the right metrics. Days in accounts receivable, first-pass claim rate, denial rate, and cost to collect offer a clear view of financial health and reveal where improvement efforts will have the greatest impact.",
        "When these metrics are monitored continuously and acted upon, providers can identify bottlenecks early, streamline workflows, and steadily reduce the time between service delivery and payment.",
      ],
    },
    {
      heading: "Building a Foundation for Growth",
      paragraphs: [
        "A well-optimized revenue cycle is a foundation for growth. Practices that streamline their billing operations can take on more patients, expand into new specialties, and scale without proportionally increasing back-office overhead.",
        "The most successful organizations view revenue cycle management as a strategic investment—one that directly supports their ability to deliver high-quality patient care.",
      ],
    },
  ],
  "Denial Management": [
    {
      heading: "Understanding Why Claims Are Denied",
      paragraphs: [
        "Claim denials are on the rise across the healthcare industry, and most are preventable. Common causes include eligibility errors, missing or inaccurate coding, prior authorization gaps, and submission mistakes. Understanding the root of each denial is the first step toward preventing it.",
        "Rather than treating denials as one-off events, leading organizations analyze them as a pattern. By categorizing denials by reason and by payer, it becomes possible to identify systemic issues and address them at the source.",
      ],
    },
    {
      heading: "Prevention Over Correction",
      paragraphs: [
        "The most effective denial management strategy is prevention. Verifying eligibility at the time of scheduling, validating benefits before the visit, and scrubbing claims against payer requirements before submission all reduce the volume of denials that ever reach your desk.",
        "Predictive analytics takes this a step further. By learning from historical claim and denial data, intelligent systems can flag high-risk claims early, so they are corrected or resubmitted before they become lost revenue.",
      ],
    },
    {
      heading: "A Streamlined Appeals Process",
      paragraphs: [
        "When denials do occur, a structured appeals process keeps them from becoming write-offs. Clear documentation, timely submission, and an organized approach to payer requirements maximize the chances of overturning an improper denial.",
        "Automated tracking ensures no appeal is missed and every denial is followed through to resolution, helping recover revenue that might otherwise be lost.",
      ],
    },
    {
      heading: "The Financial Impact of Preparedness",
      paragraphs: [
        "Effective denial management has a direct impact on the bottom line. Fewer denials mean fewer write-offs, faster reimbursement, and lower administrative costs. For many practices, a well-run denial management program is one of the highest-return improvements available.",
      ],
    },
  ],
  AI: [
    {
      heading: "The Rise of Intelligent Automation",
      paragraphs: [
        "Artificial intelligence is moving from the experimental to the essential in healthcare revenue cycle management. From ambient clinical documentation to automated coding and predictive denial detection, AI is helping organizations reduce cost and improve accuracy at scale.",
        "The most valuable AI applications don&apos;t replace people—they augment them. By handling high-volume, rules-based tasks, AI frees clinicians and billing staff to focus on the complex, judgment-driven work that only humans can do.",
      ],
    },
    {
      heading: "Transforming the Billing Operation",
      paragraphs: [
        "In medical billing, AI is being applied to everything from coding assistance to claim status prediction. Machine learning models trained on millions of claims can detect anomalies, anticipate denials, and recommend corrections before submission.",
        "The practical result is a more efficient billing operation with higher first-pass rates, reduced rework, and faster reimbursement—all while easing the workload on your team.",
      ],
    },
    {
      heading: "AI Across Healthcare Operations",
      paragraphs: [
        "Beyond billing, AI is reshaping healthcare operations broadly. Ambient scribes reduce documentation burden at the point of care. Predictive scheduling optimizes patient flow. Revenue analytics surfaces insights that guide strategic decisions in real time.",
        "For organizations that embrace this shift deliberately, AI offers a meaningful competitive advantage—improving both the patient experience and the practice&apos;s financial performance.",
      ],
    },
    {
      heading: "A Responsible Path Forward",
      paragraphs: [
        "Adopting AI responsibly means pairing technology with strong governance, clear data controls, and rigorous oversight. When organizations combine proven automation with human expertise, they build a foundation for sustained improvement and growth.",
      ],
    },
  ],
  Dental: [
    {
      heading: "A Specialized Approach to Dental Billing",
      paragraphs: [
        "Dental billing has its own complexity. Between CDT coding, dental-specific payer rules, and the nuances of benefits interpretation, practices face challenges that general medical billing solutions often overlook.",
        "A specialized approach accounts for these differences—from plan creation and eligibility verification to claim submission and follow-up—so dental practices are reimbursed accurately and on time.",
      ],
    },
    {
      heading: "Streamlining the Practice Workflow",
      paragraphs: [
        "Efficient dental billing starts at the front desk. Verifying benefits at scheduling, confirming treatment estimates, and capturing complete patient information the first time set the stage for clean claims and fewer denials.",
        "Standardized processes and expert coding minimize errors, while proactive follow-up keeps accounts receivable from aging.",
      ],
    },
    {
      heading: "Preventing Denials Before They Happen",
      paragraphs: [
        "Many dental claim denials trace back to incomplete documentation or incorrect codes. Clean-claim audits before submission catch these issues early, dramatically improving first-pass acceptance rates.",
        "When denials do occur, understanding the specific reason and payer requirement allows for prompt, accurate appeals that recover revenue faster.",
      ],
    },
    {
      heading: "Optimizing for Patient Satisfaction",
      paragraphs: [
        "Clear, accurate patient statements and flexible payment options improve the financial experience and reduce friction at the time of collection. A smooth billing process keeps patients satisfied and helps practices collect more of what they&apos;re owed.",
      ],
    },
  ],
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const sections = categorySections[post.category] ?? categorySections.RCM;
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main>
      {/* Hero / Banner */}
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
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="truncate text-white">{post.title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="chip-border">
                <span className="chip">
                  <span className="chip-label">{post.category}</span>
                </span>
              </span>
            </div>
            <h1 className="mt-6 heading-h3">{post.title}</h1>
            <span className="mt-4 flex items-center gap-1.5 text-sm text-[#7b7b7b]">
              <CalendarDays className="h-4 w-4" />
              {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-black pb-8 lg:pb-12">
        <div className="container-page">
          <div className="hairline">
            <div className="hairline-inner overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-black py-12 lg:py-16">
        <div className="container-page max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-medium text-[#d9d9d9]">
            {post.excerpt}
          </p>

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="heading-h4 !text-white">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[#d9d9d9] leading-relaxed">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-medium text-[#a8f4ff] transition-colors hover:text-[#a8f4ff]/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-black py-20 lg:py-24">
        <div className="container-page">
          <h2 className="heading-h3 !text-white">
            Related Posts
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="group hairline flex flex-col"
              >
                <div className="hairline-inner flex flex-1 flex-col p-6">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden rounded-[0.55rem]"
                  >
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col pt-4">
                    <div className="flex items-center gap-3">
                      <span className="chip-border">
                        <span className="chip">
                          <span className="chip-label">{related.category}</span>
                        </span>
                      </span>
                      <span className="text-sm text-[#7b7b7b]">
                        {related.date}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="transition-colors group-hover:text-[#a8f4ff]"
                      >
                        {related.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-[#d9d9d9]">
                      {related.excerpt}
                    </p>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#a8f4ff]"
                    >
                      Read More
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
