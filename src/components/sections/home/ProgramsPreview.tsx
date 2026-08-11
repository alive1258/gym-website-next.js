import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import { classes } from "@/src/data/classes";

export default function ProgramsPreview() {
  const featured = classes.slice(0, 3);

  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Programs"
          title="Training for every goal."
          description="From raw strength to fight conditioning, every program is coached, scaled, and built to progress."
        />
        <Reveal direction="fade" delay={0.15}>
          <Link
            href="/classes"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent sm:inline-flex"
          >
            View All Classes
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.08} className="h-full">
            <Link
              href="/classes"
              className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-surface-1 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
            >
              <div>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="size-7" strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-6 text-2xl">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-xs uppercase tracking-wide text-muted">
                <span>{item.duration}</span>
                <span className="text-accent">{item.intensity} intensity</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </RevealGroup>

      <Reveal direction="fade" className="mt-10 sm:hidden">
        <Link
          href="/classes"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground"
        >
          View All Classes
          <ArrowUpRight className="size-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
