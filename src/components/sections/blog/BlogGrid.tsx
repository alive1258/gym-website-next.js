"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import { blogPosts, blogCategories } from "@/src/data/blog";

export default function BlogGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === active);

  return (
    <Section>
      <div className="flex flex-wrap gap-2">
        {blogCategories.map((cat) => (
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
                layoutId="blog-filter-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{cat}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-1 transition-colors duration-300 hover:border-accent/40"
            >
              <div className="bg-grid relative flex aspect-[16/10] items-center justify-center overflow-hidden">
                <div className="absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
                <post.icon
                  className="relative size-12 text-accent transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.25}
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs uppercase tracking-wide text-muted">
                  <span>
                    {post.date} · {post.readTime}
                  </span>
                  <ArrowUpRight className="size-4 text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
