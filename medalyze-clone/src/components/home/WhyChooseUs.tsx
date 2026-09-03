import { whyChooseUs } from "@/lib/constants";
import Container from "@/components/ui/Container";
import {
  ShieldCheck,
  TrendingUp,
  Handshake,
} from "lucide-react";

const icons = [ShieldCheck, ShieldCheck, TrendingUp, Handshake];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container size="lg">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0F1E] sm:text-4xl lg:text-5xl">
              A Smarter Way to Manage Healthcare Revenue
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              Our integrated platform combines AI automation with expert
              human oversight to deliver faster reimbursements, fewer
              denials, and complete visibility into your revenue cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A0F1E]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
