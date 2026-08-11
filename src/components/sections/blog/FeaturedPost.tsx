import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import Reveal from "@/src/components/ui/Reveal";
import { blogPosts } from "@/src/data/blog";

export default function FeaturedPost() {
  const post = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  return (
    <Section tone="raised" className="pt-0 sm:pt-0 lg:pt-0">
      <Reveal direction="zoom">
        <Link
          href={`/blog/${post.slug}`}
          className="group relative grid gap-8 overflow-hidden rounded-[2rem] border border-border bg-surface-1 p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16"
        >
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
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
        </Link>
      </Reveal>
    </Section>
  );
}
