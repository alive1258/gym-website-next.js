import { Award, Star } from "lucide-react";
import Section from "@/src/components/ui/Section";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import { trainers } from "@/src/data/trainers";

export default function TrainersGrid() {
  return (
    <Section tone="raised">
      <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {trainers.map((trainer, i) => (
          <Reveal
            key={trainer.id}
            delay={(i % 3) * 0.08}
            className="group overflow-hidden rounded-3xl border border-border bg-surface-1 transition-colors duration-300 hover:border-accent/40"
          >
            <div className="bg-grid relative flex aspect-[4/3] items-center justify-center overflow-hidden">
              <div className="absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
              <trainer.icon
                className="relative size-16 text-accent transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.25}
              />
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                <Star className="size-3 fill-accent text-accent" />
                {trainer.experience}
              </span>
            </div>

            <div className="p-7">
              <h3 className="text-xl font-semibold">{trainer.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {trainer.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {trainer.bio}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {trainer.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border pt-4">
                {trainer.certifications.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 text-xs text-muted"
                  >
                    <Award className="size-3.5 text-muted" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
