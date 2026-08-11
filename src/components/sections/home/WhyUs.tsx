import { Target, Users, LineChart, ShieldCheck } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";

const points = [
  {
    icon: Target,
    title: "Coached, Not Just Counted",
    description:
      "Every session is led by a certified coach watching form, not a screen counting reps.",
  },
  {
    icon: LineChart,
    title: "Programming That Progresses",
    description:
      "Structured cycles that build week over week — no random workouts, no plateaus.",
  },
  {
    icon: Users,
    title: "A Community That Shows Up",
    description:
      "Train alongside members who push each other, from first-timers to competitive athletes.",
  },
  {
    icon: ShieldCheck,
    title: "No Lock-In Contracts",
    description:
      "Freeze, switch, or cancel anytime. We keep members through results, not fine print.",
  },
];

export default function WhyUs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why PulseForge"
        title="Built different, on purpose."
        description="Everything here is designed around one outcome: members who keep coming back because it works."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <Reveal
            key={point.title}
            direction="fade"
            className="group bg-surface-1 p-8 transition-colors duration-300 hover:bg-surface-2"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <point.icon className="size-6" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {point.description}
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
