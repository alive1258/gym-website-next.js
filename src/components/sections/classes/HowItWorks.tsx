import { CalendarCheck, Footprints, TrendingUp } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book a Class",
    description:
      "Reserve your spot through the member app — walk-ins welcome when space allows.",
  },
  {
    icon: Footprints,
    step: "02",
    title: "Show Up & Train",
    description:
      "Arrive ten minutes early for a quick warm-up briefing with your coach.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Track Your Progress",
    description:
      "Every session logs to your profile so you can see strength and consistency build over time.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How It Works"
        title="Getting started takes three steps."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-16 grid gap-8 sm:grid-cols-3">
        {steps.map((s) => (
          <Reveal key={s.step} direction="up" className="relative text-center">
            <span className="font-display block text-7xl text-white/5">
              {s.step}
            </span>
            <span className="mx-auto -mt-10 flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <s.icon className="size-7" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {s.description}
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
