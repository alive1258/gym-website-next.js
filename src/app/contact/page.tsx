import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import FaqAccordion from "@/src/components/ui/FaqAccordion";
import ContactForm from "@/src/components/sections/contact/ContactForm";
import ContactInfo from "@/src/components/sections/contact/ContactInfo";
import { faqs } from "@/src/data/testimonials";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PulseForge — ask a question, book a tour, or start your free trial class.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's start your training."
        description="Questions about programming, pricing, or your first visit? Send a message or stop by — we'll respond within a business day."
      />
      <Section tone="raised" className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
      <Section>
        <SectionHeading
          eyebrow="Questions"
          title="Before you reach out."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14">
          <FaqAccordion items={faqs} />
        </div>
      </Section>
    </>
  );
}
