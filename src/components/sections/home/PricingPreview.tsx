import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import Button from "@/src/components/ui/Button";
import { pricingPlans } from "@/src/data/pricing";

export default function PricingPreview() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Membership"
        title="Simple, honest pricing."
        description="No joining fees, no lock-in contracts. Pick the plan that matches how often you train."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 0.08} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-8 ${
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
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl">
                  ${plan.monthlyPrice}
                </span>
                <span className="text-sm text-muted">/ month</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/pricing"
                variant={plan.popular ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </RevealGroup>

      <Reveal direction="fade" className="mt-10 flex justify-center">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent"
        >
          Compare All Plans
          <ArrowUpRight className="size-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
