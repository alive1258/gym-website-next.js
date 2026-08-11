"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/src/components/ui/Section";
import { products, productCategories, type ProductCategory } from "@/src/data/products";

const badgeColor: Record<string, string> = {
  New: "bg-accent text-accent-foreground",
  Bestseller: "bg-white/10 text-foreground",
  Limited: "bg-white/10 text-foreground",
};

export default function ProductsGrid() {
  const [active, setActive] = useState<ProductCategory | "All">("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <Section tone="raised">
      <div className="flex flex-wrap gap-2">
        {(["All", ...productCategories] as const).map((cat) => (
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
                layoutId="product-filter-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{cat}</span>
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface-1 transition-colors duration-300 hover:border-accent/40"
            >
              <div className="bg-grid relative flex aspect-square items-center justify-center overflow-hidden">
                <div className="absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
                <product.icon
                  className="relative size-12 text-accent transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.25}
                />
                {product.badge && (
                  <span
                    className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${badgeColor[product.badge]}`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {product.category}
                </span>
                <h3 className="mt-2 text-base font-semibold leading-snug">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <p className="font-display mt-4 text-2xl text-accent">
                  ${product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
