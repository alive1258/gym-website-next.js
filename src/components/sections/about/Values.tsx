import { Handshake, TrendingUp, Users2, Sparkles } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";

const values = [
  {
    icon: Handshake,
    title: "Honesty Over Hype",
    description:
      "No gimmick programs or 30-day transformations. Just consistent, evidence-based training that compounds.",
  },
  {
    icon: TrendingUp,
    title: "Progress Is Tracked",
    description:
      "Every member's lifts, attendance, and goals are tracked — because what gets measured gets improved.",
  },
  {
    icon: Users2,
    title: "Community First",
    description:
      "We build class sizes and gym-floor culture around people knowing each other's names.",
  },
  {
    icon: Sparkles,
    title: "Coaching Never Stops",
    description:
      "From your first session to your hundredth, a coach is watching your form and adjusting your plan.",
  },
];

export default function Values() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What We Stand For"
        title="Our values, not just posters on a wall."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <Reveal
            key={value.title}
            direction="up"
            className="rounded-3xl border border-border bg-surface-1 p-8 text-center transition-colors duration-300 hover:border-accent/40"
          >
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <value.icon className="size-7" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {value.description}
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
