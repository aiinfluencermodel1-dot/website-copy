import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

export const metadata: Metadata = {
  title: "Medalyze - The AI-Native Enterprise RCM & Ambient Platform",
  description:
    "Turn labor into software with AI-powered intake, documentation, coding, claims, and payment solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased bg-black">
      <body className="font-body min-h-screen flex flex-col bg-black text-[#d9d9d9]">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
