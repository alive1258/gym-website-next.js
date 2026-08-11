import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import ClassesGrid from "@/src/components/sections/classes/ClassesGrid";
import HowItWorks from "@/src/components/sections/classes/HowItWorks";
import CtaBanner from "@/src/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Browse PulseForge's strength, conditioning, combat, cardio, and recovery classes — filter by category and find your schedule.",
  alternates: { canonical: "/classes" },
};

export default function ClassesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Classes"
        title="Find your training style."
        description="Six programs, forty-plus weekly sessions. Filter by category to find the class that fits your goal."
      />
      <ClassesGrid />
      <HowItWorks />
      <CtaBanner
        tone="raised"
        title="Not sure where to start?"
        description="Book a free assessment and a coach will build your first four weeks for you."
      />
    </>
  );
}
