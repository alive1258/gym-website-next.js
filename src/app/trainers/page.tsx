import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import TrainersGrid from "@/src/components/sections/trainers/TrainersGrid";
import CtaBanner from "@/src/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Trainers",
  description:
    "Meet the certified coaching staff behind PulseForge's strength, conditioning, combat, and recovery programs.",
  alternates: { canonical: "/trainers" },
};

export default function TrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching Staff"
        title="Meet the coaches."
        description="Six certified coaches, one shared standard: watch your form, adjust your plan, keep you progressing."
      />
      <TrainersGrid />
      <CtaBanner
        title="Train 1:1 with a coach."
        description="Performance members get dedicated personal training sessions every month — see plans and pricing."
        primaryLabel="View Pricing"
        primaryHref="/pricing"
      />
    </>
  );
}
