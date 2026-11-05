import type { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import FeaturedDemo from "@/components/landing/FeaturedDemo";
import ProblemSection from "@/components/landing/ProblemSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorks from "@/components/landing/HowItWorks";
import OwnershipSection from "@/components/landing/OwnershipSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";

export const metadata: Metadata = {
  title:
    "RazeStore — Own a customized online shop for your electronics business",
  description:
    "RazeStore is a customizable e-commerce website for Kenyan electronics shops. Own your storefront, admin, and reports. M-Pesa checkout available once configured and tested.",
};

export default function Home() {
  return (
    <div className="flex-1 w-full bg-white text-slate-900">
      <Hero />
      <FeaturedDemo />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <OwnershipSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}