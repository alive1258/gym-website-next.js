"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CalendarDays } from "lucide-react";
import Section from "@/src/components/ui/Section";
import Reveal from "@/src/components/ui/Reveal";
import { classes, categories, type ClassCategory } from "@/src/data/classes";

const intensityColor: Record<string, string> = {
  Low: "text-emerald-400",
  Moderate: "text-amber-400",
  High: "text-accent",
};

export default function ClassesGrid() {
  const [active, setActive] = useState<ClassCategory | "All">("All");

  const filtered =
    active === "All" ? classes : classes.filter((c) => c.category === active);

  return (
    <Section tone="raised">
      <Reveal direction="fade">
        <div className="flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                active === cat
                  ? "text-accent-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="class-filter-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-1 transition-colors duration-300 hover:border-accent/40"
            >
              <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/0 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-2xl">{item.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-wide text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {item.duration}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 ${intensityColor[item.intensity]}`}
                  >
                    {item.intensity}
                  </span>
                </div>

                <div className="mt-6 space-y-2 border-t border-border pt-5">
                  {item.schedule.map((s) => (
                    <div
                      key={s.day + s.time}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="inline-flex items-center gap-2 text-foreground/80">
                        <CalendarDays className="size-3.5 text-muted" />
                        {s.day}
                      </span>
                      <span className="text-muted">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
