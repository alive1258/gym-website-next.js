"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Section from "@/src/components/ui/Section";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import Button from "@/src/components/ui/Button";
import { pricingPlans } from "@/src/data/pricing";

export default function PricingTable() {
  const [yearly, setYearly] = useState(false);

  return (
    <Section tone="raised">
      <Reveal direction="fade" className="flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-1 p-1.5">
          {["Monthly", "Yearly"].map((label, i) => {
            const isYearly = i === 1;
            const isActive = yearly === isYearly;
            return (
              <button
                key={label}
                onClick={() => setYearly(isYearly)}
                className="relative rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-300"
              >
                {isActive && (
                  <motion.span
                    layoutId="pricing-toggle-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative ${
                    isActive ? "text-accent-foreground" : "text-muted"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
          <span className="mr-2 hidden rounded-full bg-white/5 px-2.5 py-1 text-xs font-semibold text-accent sm:inline-block">
            Save ~15%
          </span>
        </div>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 0.08} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-8 sm:p-10 ${
                plan.popular
                  ? "border-accent bg-surface-1 shadow-[0_0_60px_-15px_rgba(215,251,63,0.35)]"
                  : "border-border bg-surface-1"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm text-muted">
                  / {yearly ? "year" : "month"}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={plan.popular ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
