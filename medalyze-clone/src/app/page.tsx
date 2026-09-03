import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import ServiceCategories from "@/components/home/ServiceCategories";
import Testimonials from "@/components/home/Testimonials";
import LatestContent from "@/components/home/LatestContent";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <ServiceCategories />
      <Testimonials />
      <LatestContent />
      <FAQSection />
      <CTASection />
    </main>
  );
}
