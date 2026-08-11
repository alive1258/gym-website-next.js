import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import FaqAccordion from "@/src/components/ui/FaqAccordion";
import PricingTable from "@/src/components/sections/pricing/PricingTable";
import CtaBanner from "@/src/components/sections/CtaBanner";
import { pricingFaqs } from "@/src/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, honest membership pricing at PulseForge — no joining fees, no lock-in contracts.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership Plans"
        title="Pricing that respects you."
        description="No joining fees, no lock-in contracts, no surprise charges. Choose monthly or save with yearly billing."
      />
      <PricingTable />
      <Section>
        <SectionHeading
          eyebrow="Questions"
          title="Membership FAQ."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14">
          <FaqAccordion items={pricingFaqs} />
        </div>
      </Section>
      <CtaBanner
        tone="raised"
        title="Ready to get started?"
        description="Every plan starts with a free trial class — see the coaching and community before you commit."
      />
    </>
  );
}
