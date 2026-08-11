import { ArrowUpRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import Reveal from "@/src/components/ui/Reveal";
import { blogPosts } from "@/src/data/blog";

export default function FeaturedPost() {
  const post = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  return (
    <Section tone="raised" className="pt-0 sm:pt-0 lg:pt-0">
      <Reveal direction="zoom">
        <article className="group relative grid gap-8 overflow-hidden rounded-[2rem] border border-border bg-surface-1 p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <div className="bg-grid relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl border border-border">
            <div className="absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
            <post.icon className="relative size-20 text-accent" strokeWidth={1.25} />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              Featured · {post.category}
            </span>
            <h2 className="font-display mt-5 text-3xl leading-[0.95] sm:text-4xl lg:text-5xl">
              {post.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-wide text-muted">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-accent">
              Read Article
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
