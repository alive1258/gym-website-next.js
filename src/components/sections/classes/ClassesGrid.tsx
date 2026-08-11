"use client";

import { useState } from "react";
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
              className="flex h-full flex-col rounded-3xl border border-border bg-surface-1 p-8 transition-colors duration-300 hover:border-accent/40"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <item.icon className="size-7" strokeWidth={1.5} />
              </span>
              <h3 className="font-display mt-6 text-2xl">{item.name}</h3>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                {item.category}
              </span>
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
