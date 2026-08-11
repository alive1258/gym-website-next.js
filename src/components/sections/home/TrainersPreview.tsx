import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import { trainers } from "@/src/data/trainers";

export default function TrainersPreview() {
  const featured = trainers.slice(0, 4);

  return (
    <Section tone="raised">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Coaching Staff"
          title="Coaches who actually coach."
          description="Certified, experienced, and invested in your progress — not just running the clock."
        />
        <Reveal direction="fade" delay={0.15}>
          <Link
            href="/trainers"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent sm:inline-flex"
          >
            Meet The Team
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((trainer, i) => (
          <Reveal key={trainer.id} delay={i * 0.08}>
            <Link
              href="/trainers"
              className="group block overflow-hidden rounded-3xl border border-border bg-surface-1 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/0 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{trainer.name}</h3>
                <p className="mt-1 text-sm text-accent">{trainer.role}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
