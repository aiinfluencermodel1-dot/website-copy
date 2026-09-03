// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

type NavLink = NavItem;

interface HeroStat {
  value: string;
  label: string;
}

interface HeroData {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  stats: HeroStat[];
}

interface ServiceCategory {
  title: string;
  description: string;
  items: string[];
  links: string[];
}

interface ServiceCategories {
  heading: string;
  subheading: string;
  description: string;
  categories: ServiceCategory[];
}

interface TrustedByStat {
  value: string;
  label: string;
}

interface TrustedByData {
  heading: string;
  stats: TrustedByStat[];
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

interface WhyChooseUsItem {
  title: string;
  description: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePage {
  title: string;
  subtitle: string;
  description: string;
  features?: ServiceFeature[];
  benefits?: ServiceFeature[];
}

interface Services {
  medicalSolutions: ServicePage;
  dentalSolutions: ServicePage;
  aiMedicalScribe: ServicePage;
}

interface CompanyData {
  tagline: string;
  description: string;
  philosophy: string;
  mission: string;
  vision: string;
  values: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  tagline: string;
  rating: string;
  ratingCount: string;
  quickLinks: FooterLink[];
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/medical-solutions",
    children: [
      {
        label: "Medical RCM Services",
        href: "/medical-solutions",
        children: [
          { label: "Provider Credentialing", href: "/provider-credentialing" },
          { label: "Patient Scheduling", href: "/medical-solutions" },
          { label: "Eligibility Verification", href: "/live-eligibility-verification" },
          { label: "Medical Coding", href: "/medical-solutions" },
          { label: "Claim Creation", href: "/medical-solutions" },
          { label: "AR Follow-ups", href: "/medical-solutions" },
          { label: "Denial Management", href: "/denial-management" },
          { label: "Payment Posting", href: "/medical-solutions" },
          { label: "Patient Billing", href: "/medical-solutions" },
        ],
      },
      {
        label: "Dental RCM Services",
        href: "/dental-solutions",
        children: [
          { label: "Patient Scheduling & Demos", href: "/dental-solutions" },
          { label: "Credentialing", href: "/dental-solutions" },
          { label: "Eligibility Verification", href: "/dental-solutions" },
          { label: "Plan Creation", href: "/dental-solutions" },
          { label: "Dental Coding", href: "/dental-solutions" },
          { label: "Claim Creation", href: "/dental-solutions" },
          { label: "AR Follow-ups", href: "/dental-solutions" },
          { label: "Denial Management", href: "/dental-solutions" },
          { label: "Payment Posting", href: "/dental-solutions" },
          { label: "Patient Billing", href: "/dental-solutions" },
        ],
      },
      {
        label: "Advanced Solutions",
        href: "/practice-analytics",
        children: [
          { label: "AI-Powered Appointments", href: "/ai-powered-appointments" },
          { label: "Live Claim Tracking", href: "/live-claim-tracking" },
          { label: "Live Eligibility Verification", href: "/live-eligibility-verification" },
          { label: "Live RCM Analytics", href: "/live-rcm-analytics" },
          { label: "Practice Analytics", href: "/practice-analytics" },
          { label: "AI Medical Scribe", href: "/ai-medical-scribe" },
        ],
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

// ─── Announcement Bar ─────────────────────────────────────────────────────────

export const announcementText =
  "Medalyze Raises Revenue for 50+ States Across the US → Learn More";

// ─── Hero Section ─────────────────────────────────────────────────────────────

export const heroData: HeroData = {
  heading: "Analyze Automate Accelerate",
  subheading:
    "Accelerate revenue and ease administrative burdens with forward-thinking revenue cycle management solutions, giving you the freedom to focus on exceptional patient care and scaling your practice.",
  ctaText: "30 Days Free Trial",
  ctaLink: "/contact",
  stats: [
    { value: "8+", label: "Years in Business" },
    { value: "50", label: "States Covered" },
    { value: "30+", label: "Health Specialties" },
    { value: "4.8", label: "Google Rating" },
  ],
};

// ─── Service Categories ───────────────────────────────────────────────────────

export const serviceCategories: ServiceCategories = {
  heading: "End-to-End Revenue Cycle Management",
  subheading: "One Platform. Complete Revenue Cycle.",
  description:
    "Our software powers real-time, AI-driven operations across your revenue cycle, from patient intake through final payment posting.",
  categories: [
    {
      title: "Front End: Patient Access",
      description: "Improve access to care by removing friction before the visit.",
      items: [
        "Provider Credentialing & Enrollment",
        "Patient Scheduling & Registration",
        "Eligibility Benefits Verification",
      ],
      links: [
        "/provider-credentialing",
        "/patient-scheduling",
        "/eligibility-verification",
      ],
    },
    {
      title: "Mid Cycle: Clinical Intelligence",
      description:
        "Support clinical encounters with intelligent documentation and coding tools.",
      items: ["Medical Coding", "Dental Coding", "AI Medical Scribe"],
      links: ["/medical-solutions", "/dental-solutions", "/ai-medical-scribe"],
    },
    {
      title: "Back End: Revenue Integrity",
      description:
        "Connect clinical activity directly to reimbursement with automated workflows.",
      items: [
        "Claim Creation & Submission",
        "AR Follow-ups",
        "Denial Management",
        "Payment Posting",
      ],
      links: [
        "/medical-solutions",
        "/medical-solutions",
        "/medical-solutions",
        "/medical-solutions",
      ],
    },
  ],
};

// ─── Trusted By ───────────────────────────────────────────────────────────────

export const trustedByData: TrustedByData = {
  heading: "Trusted by Healthcare Providers Nationwide",
  stats: [
    { value: "500+", label: "Providers Served" },
    { value: "$500M+", label: "Claims Processed" },
    { value: "50", label: "States Covered" },
    { value: "99.9%", label: "Accuracy Rate" },
  ],
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote:
      "The AI-driven approach really sets Medalyze apart. Their automation reduced manual errors and saved our staff countless hours every week.",
    name: "Operations Director",
    title: "Medical Practice",
    rating: 5,
  },
  {
    quote:
      "Thanks to Medalyze, our billing process is finally organized and transparent. We now have clear visibility into our revenue cycle.",
    name: "Clinic Manager",
    title: "Healthcare Group",
    rating: 5,
  },
  {
    quote:
      "Medalyze transformed our revenue cycle operations. Claim accuracy improved significantly, denials dropped, and payments started coming in faster.",
    name: "Practice Administrator",
    title: "Multi-Specialty Clinic",
    rating: 5,
  },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "RCM Specialists",
    description:
      "Experienced professionals managing every stage of your revenue cycle with precision.",
  },
  {
    title: "Compliance Focused",
    description:
      "Processes aligned with payer rules and healthcare regulations to reduce risk.",
  },
  {
    title: "Proven Results",
    description:
      "Faster reimbursements, fewer denials, and improved cash flow.",
  },
  {
    title: "Trusted Partner",
    description: "Reliable support that grows with your practice.",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    slug: "end-to-end-rcm-automation",
    title: "End-to-End Revenue Cycle Management: How Automation Accelerates",
    excerpt:
      "Discover how AI-driven automation is transforming revenue cycle management, reducing manual errors, and accelerating reimbursements.",
    date: "July 18, 2025",
    category: "RCM",
    image:
      "https://medalyzeus.com/wp-content/uploads/2025/07/Untitled-design-10-600x420.png",
  },
  {
    slug: "medical-claim-denials-rising",
    title: "Top Reasons Medical Claim Denials Are Rising—and How to Stop Them",
    excerpt:
      "Claim denials are increasing across the industry. Learn the top causes and how to prevent them with intelligent automation.",
    date: "July 18, 2025",
    category: "Denial Management",
    image:
      "https://medalyzeus.com/wp-content/uploads/2025/07/2-600x420.png",
  },
  {
    slug: "ai-driven-medical-billing",
    title: "How AI-Driven Medical Billing Is Transforming Revenue Cycles",
    excerpt:
      "Explore how artificial intelligence is revolutionizing medical billing, from automated coding to predictive denial detection.",
    date: "July 18, 2025",
    category: "AI",
    image:
      "https://medalyzeus.com/wp-content/uploads/2025/07/1-600x420.png",
  },
  {
    slug: "how-ai-is-transforming-healthcare-operations",
    title: "How AI Is Transforming Healthcare Operations in 2026",
    excerpt:
      "From ambient documentation to revenue integrity, AI is reshaping how health systems operate. Here's what's changing.",
    date: "August 12, 2026",
    category: "AI",
    image:
      "https://medalyzeus.com/wp-content/uploads/2025/07/Untitled-design-10-600x420.png",
  },
  {
    slug: "dental-billing-best-practices",
    title: "Dental Billing Best Practices for 2026",
    excerpt:
      "Master dental billing with these best practices for claim submission, denial prevention, and revenue optimization.",
    date: "August 4, 2026",
    category: "Dental",
    image:
      "https://medalyzeus.com/wp-content/uploads/2025/07/2-600x420.png",
  },
  {
    slug: "complete-guide-to-revenue-cycle-management",
    title: "The Complete Guide to Revenue Cycle Management",
    excerpt:
      "Everything you need to know about RCM—from patient intake to final payment posting—and how to optimize each stage.",
    date: "July 31, 2026",
    category: "RCM",
    image:
      "https://medalyzeus.com/wp-content/uploads/2025/07/1-600x420.png",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: "What services does Medalyze provide?",
    answer:
      "Medalyze offers end-to-end Revenue Cycle Management (RCM) services, including patient scheduling, eligibility verification, medical and dental coding, claim creation and submission, accounts receivable follow-ups, denial management, payment posting, patient billing, and advanced revenue analytics.",
  },
  {
    question: "Is your service scalable as our practice grows?",
    answer:
      "Absolutely. Our solutions are designed to scale with your practice, adapting to increased volume, new specialties, and evolving billing requirements.",
  },
  {
    question: "Do you work with both medical and dental practices?",
    answer:
      "Yes. Medalyze supports both medical and dental practices, tailoring workflows, coding standards, and payer processes to meet the specific requirements of each specialty.",
  },
  {
    question: "What services do you offer under revenue cycle management?",
    answer:
      "We provide end-to-end RCM services including medical and dental billing, coding support, claim submission, denial management, payment posting, and revenue cycle consulting.",
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: Services = {
  medicalSolutions: {
    title: "Medical RCM Solutions",
    subtitle: "Comprehensive Medical Billing & Revenue Cycle Management",
    description:
      "Credentialing, Scheduling/Registrations, Coding, Claims, AR Follow-ups, Denials, Posting, and Patient Billing—all compliant, scalable, and fast.",
    features: [
      {
        title: "Provider Credentialing & Enrollment",
        description:
          "Get credentialed faster with expert support across all payers and states.",
      },
      {
        title: "Patient Scheduling & Registration",
        description:
          "Streamlined intake workflows that reduce no-shows and improve patient experience.",
      },
      {
        title: "Eligibility Benefits Verification",
        description:
          "Real-time insurance verification to prevent claim denials before they happen.",
      },
      {
        title: "Medical Coding",
        description:
          "Accurate ICD-10, CPT, and HCPCS coding by certified professionals with 99.9% accuracy.",
      },
      {
        title: "Claim Creation & Submission",
        description:
          "Automated claims processing with same-day submission and real-time tracking.",
      },
      {
        title: "Accounts Receivable Follow-ups",
        description:
          "Proactive AR management to accelerate collections and reduce aging.",
      },
      {
        title: "Denial Management",
        description:
          "AI-powered denial detection, root cause analysis, and automated appeals.",
      },
      {
        title: "Payment Posting",
        description:
          "Automated payment posting and reconciliation across all payment types.",
      },
      {
        title: "Patient Billing & Collections",
        description:
          "Clear, patient-friendly statements with flexible payment options.",
      },
    ],
  },
  dentalSolutions: {
    title: "Dental RCM Solutions",
    subtitle: "Specialized Dental Billing & Revenue Cycle Management",
    description:
      "Streamline dental scheduling with intelligent workflows that maximize chair time, cut no-shows, and boost staff efficiency—while interactive demos empower your team for seamless operations.",
    features: [
      {
        title: "Patient Scheduling & Demos",
        description:
          "Optimized scheduling workflows designed for dental practice efficiency.",
      },
      {
        title: "Credentialing & Enrollment",
        description:
          "Dental-specific credentialing across all major insurance carriers.",
      },
      {
        title: "Eligibility & Benefits Verification",
        description:
          "Instant verification of dental benefits and coverage details.",
      },
      {
        title: "Plan Creation",
        description:
          "Customized treatment plans with accurate cost estimates for patients.",
      },
      {
        title: "Dental Coding",
        description:
          "Expert dental coding including CDT codes with compliance assurance.",
      },
      {
        title: "Claim Creation & Submission",
        description:
          "Fast, accurate dental claim submission with electronic processing.",
      },
      {
        title: "Accounts Receivable Follow-ups",
        description:
          "Dental-specific AR management to maximize collections.",
      },
      {
        title: "Denial Management",
        description:
          "Specialized dental denial resolution and prevention strategies.",
      },
      {
        title: "Payment Posting",
        description:
          "Automated dental payment posting and reconciliation.",
      },
      {
        title: "Patient Billing & Collections",
        description:
          "Patient-friendly billing with flexible payment plan options.",
      },
    ],
  },
  aiMedicalScribe: {
    title: "AI Medical Scribe",
    subtitle: "Intelligent Clinical Documentation",
    description:
      "Accurate and timely documentation is critical in healthcare, but manual record-keeping can be time-consuming and detract from patient care. Our AI Medical Scribe leverages advanced artificial intelligence to automatically capture, structure, and summarize patient encounters.",
    benefits: [
      {
        title: "Accurate Patient Documentation",
        description:
          "The AI listens to or processes provider-patient interactions and generates detailed, structured clinical notes.",
      },
      {
        title: "Time-Saving Automation",
        description:
          "Automate the documentation process, reducing hours spent on charting each week.",
      },
      {
        title: "EHR Integration",
        description:
          "Seamlessly integrates with most Electronic Health Record systems.",
      },
      {
        title: "Customizable Templates",
        description:
          "Supports specialty-specific note formats and customizable templates.",
      },
      {
        title: "Enhanced Compliance",
        description:
          "Helps maintain regulatory compliance by capturing all required documentation elements.",
      },
      {
        title: "Real-Time or Post-Visit Notes",
        description:
          "Generate documentation in real-time or process recordings afterward.",
      },
      {
        title: "Improved Provider Experience",
        description:
          "Reduces administrative burden and documentation fatigue.",
      },
    ],
  },
};

// ─── Company Data ─────────────────────────────────────────────────────────────

export const companyData: CompanyData = {
  tagline: "We care more than just your revenue",
  description:
    "Since 2017, we've been supporting medical and dental providers with reliable, compliant, and performance-driven revenue cycle management services. Our goal is simple: help practices maintain financial stability while delivering uninterrupted patient care.",
  philosophy:
    "Technology must be co-developed with health systems. We believe in radical collaboration between technologists and healthcare leaders to deliver solutions that actually work.",
  mission:
    "To simplify and optimize medical billing and revenue cycle management using AI-driven automation, reducing administrative burden and enabling healthcare providers to get paid faster, with accuracy and confidence.",
  vision:
    "To become a trusted global leader in AI-powered RCM solutions—setting new standards for efficiency, compliance, and financial performance across the healthcare ecosystem.",
  values:
    "We are guided by integrity, innovation, and accountability. Our commitment to data security, regulatory compliance, transparency, and continuous improvement ensures long-term value for both providers and patients.",
};

// ─── Contact Info ─────────────────────────────────────────────────────────────

export const contactInfo: ContactInfo = {
  address:
    "MEDALYZE MEDTECH LLC: 7901, 4th St N, STE #300, St Petersburg FL 33702",
  phone: "+1 (727) 208 5953",
  email: "info@medalyzeus.com",
  workingHours: "Mon – Fri 9:00 AM to 5:00 PM",
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footerData: FooterData = {
  tagline:
    "Medalyze delivers end-to-end medical billing and RCM services, managing the entire revenue cycle—from patient intake to final payment posting.",
  rating: "4.8",
  ratingCount: "12k+",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
  ],
};

// ─── Logo ─────────────────────────────────────────────────────────────────────

export const logoUrl =
  "https://medalyzeus.com/wp-content/uploads/2026/01/ChatGPT-Image-Jan-27-2026-11_18_19-PM.png";

// ─── Real Media Assets (verified from medalyzeus.com) ────────────────────────

export const assets = {
  favicon:
    "https://medalyzeus.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-18-at-3.00.19-PM-Medalyze-Medtech.jpeg",
  heroDoctor:
    "https://medalyzeus.com/wp-content/uploads/2026/03/mazdoc1.jpg",
  heroStats: "https://medalyzeus.com/wp-content/uploads/2026/01/1.png",
  heroDashboard:
    "https://medalyzeus.com/wp-content/uploads/2026/01/Your-paragraph-text.png",
  aboutPoster:
    "https://medalyzeus.com/wp-content/uploads/2026/01/SOCIAL-MEDIA-POST-FOR-HOM-COLLECTIVE.png",
  aboutSecondary: "https://medalyzeus.com/wp-content/uploads/2025/08/k1.jpg",
  usMap: "https://medalyzeus.com/wp-content/uploads/2026/01/united-states-1.png",
  faqImage: "https://medalyzeus.com/wp-content/uploads/2025/07/faq-image.png",
  icon1: "https://medalyzeus.com/wp-content/uploads/2025/07/icon1.png",
  icon3: "https://medalyzeus.com/wp-content/uploads/2025/07/icon3.png",
  icon: "https://medalyzeus.com/wp-content/uploads/2025/07/icon.png",
  icon5: "https://medalyzeus.com/wp-content/uploads/2025/07/icon5.png",
  appointment1:
    "https://medalyzeus.com/wp-content/uploads/2025/07/appointment1.png",
  appointmentFloating:
    "https://medalyzeus.com/wp-content/uploads/2025/07/appointment-img-e1770027884714.png",
  avatar1: "https://medalyzeus.com/wp-content/uploads/2025/07/avatar1.webp",
  avatar2: "https://medalyzeus.com/wp-content/uploads/2025/07/avatar2.webp",
  avatar3: "https://medalyzeus.com/wp-content/uploads/2025/07/avatar3.webp",
  avatar4: "https://medalyzeus.com/wp-content/uploads/2025/07/avatar4.webp",
  avatar5: "https://medalyzeus.com/wp-content/uploads/2025/07/avatar5.webp",
  testi1: "https://medalyzeus.com/wp-content/uploads/2025/07/testi-1.webp",
  testi2: "https://medalyzeus.com/wp-content/uploads/2025/07/testi-2.webp",
  testi4: "https://medalyzeus.com/wp-content/uploads/2025/07/testi-4.webp",
};

// ─── Advanced Solutions Copy (verified from medalyzeus.com) ──────────────────

export const advancedSolutionsIntro =
  "Transform your revenue cycle with AI-Powered Appointments for no-show-proof scheduling, Live Claim Tracking for real-time transparency, and instant Eligibility Verification for denial-free billing.";
