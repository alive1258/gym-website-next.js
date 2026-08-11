import Link from "next/link";
import { ArrowUpRight, Shirt, FlaskConical, Dumbbell, Backpack } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import { products, type ProductCategory } from "@/src/data/products";

const categoryMeta: Record<ProductCategory, { icon: typeof Shirt; description: string }> = {
  Apparel: { icon: Shirt, description: "Training tees, shorts, and hoodies built to move." },
  Supplements: { icon: FlaskConical, description: "Protein, pre-workout, and recovery essentials." },
  Equipment: { icon: Dumbbell, description: "Kettlebells, bands, belts, and jump ropes." },
  Accessories: { icon: Backpack, description: "Bags, shakers, wraps, and training tech." },
};

export default function ShopPreview() {
  const categories = Object.keys(categoryMeta) as ProductCategory[];

  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Gym Shop"
          title="Gear built for training."
          description="Apparel, supplements, and equipment picked by our coaching team — available in-store and by request."
        />
        <Reveal direction="fade" delay={0.15}>
          <Link
            href="/shop"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent sm:inline-flex"
          >
            Shop All Products
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => {
          const meta = categoryMeta[cat];
          const count = products.filter((p) => p.category === cat).length;
          return (
            <Reveal key={cat} delay={i * 0.08}>
              <Link
                href="/shop"
                className="group block h-full rounded-3xl border border-border bg-surface-1 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <meta.icon className="size-7" strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-6 text-2xl">{cat}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {meta.description}
                </p>
                <span className="mt-6 inline-block text-xs uppercase tracking-wide text-accent">
                  {count} products
                </span>
              </Link>
            </Reveal>
          );
        })}
      </RevealGroup>

      <Reveal direction="fade" className="mt-10 sm:hidden">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground"
        >
          Shop All Products
          <ArrowUpRight className="size-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
