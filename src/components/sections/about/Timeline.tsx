import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal from "@/src/components/ui/Reveal";

const milestones = [
  {
    year: "2014",
    title: "A garage, four barbells",
    description: "PulseForge opens as a small strength-training space for a handful of dedicated lifters.",
  },
  {
    year: "2017",
    title: "First real facility",
    description: "We move into a 6,000 sq ft warehouse and launch our first group class programs.",
  },
  {
    year: "2020",
    title: "1,000th member",
    description: "The community crosses a thousand active members despite a challenging year for gyms.",
  },
  {
    year: "2023",
    title: "Recovery suite opens",
    description: "Mobility, breathwork, and recovery programming added as a core part of every membership.",
  },
  {
    year: "2026",
    title: "3,200+ members strong",
    description: "PulseForge runs 40+ weekly classes across strength, conditioning, combat, and recovery.",
  },
];

export default function Timeline() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Our Journey"
        title="Twelve years, one principle."
        align="center"
        className="mx-auto"
      />

      <div className="relative mt-16 max-w-3xl mx-auto">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-1/2" />
        <div className="space-y-12">
          {milestones.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal
                key={m.year}
                direction={isEven ? "left" : "right"}
                className={`relative flex flex-col gap-2 pl-8 sm:w-1/2 sm:pl-0 ${
                  isEven
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                }`}
              >
                <span
                  className={`absolute left-0 top-1.5 size-4 rounded-full border-2 border-accent bg-background sm:left-auto ${
                    isEven ? "sm:-right-[9px]" : "sm:-left-[9px]"
                  }`}
                />
                <span className="font-display text-3xl text-accent">
                  {m.year}
                </span>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {m.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
