import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import Story from "@/src/components/sections/about/Story";
import Values from "@/src/components/sections/about/Values";
import Timeline from "@/src/components/sections/about/Timeline";
import CtaBanner from "@/src/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how PulseForge grew from a garage gym into a 3,200-member strength and conditioning community.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PulseForge"
        title="Built by lifters, for lifters."
        description="Twelve years of honest coaching, real programming, and a community that shows up — this is the story behind PulseForge."
      />
      <Story />
      <Values />
      <Timeline />
      <CtaBanner
        title="Come see it for yourself."
        description="Book a free tour and trial class — no pressure, just an honest look at how we train."
      />
    </>
  );
}
