import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import CtaBanner from "@/src/components/sections/CtaBanner";
import { blogPosts } from "@/src/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const sameCategory = blogPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );
  const related = (
    sameCategory.length > 0
      ? sameCategory
      : blogPosts.filter((p) => p.slug !== post.slug)
  ).slice(0, 3);

  return (
    <>
      <section className="bg-grid relative overflow-hidden bg-surface-1 pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />
        <div className="container relative">
          <Reveal direction="fade">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted transition-colors duration-300 hover:text-accent"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              {post.category}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-5 max-w-3xl text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-wide text-muted">
              <span className="text-foreground/80">{post.author}</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <Section tone="raised" className="pt-0 sm:pt-0 lg:pt-0">
        <Reveal
          direction="zoom"
          className="relative aspect-16/9 w-full overflow-hidden rounded-3xl border border-border"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-2xl">
          {post.sections.map((section, i) => (
            <Reveal key={i} direction="fade" delay={Math.min(i, 4) * 0.05}>
              {section.heading && (
                <h2 className="font-display mt-10 text-2xl sm:text-3xl">
                  {section.heading}
                </h2>
              )}
              <p
                className={`text-base leading-relaxed text-muted sm:text-lg ${
                  section.heading ? "mt-4" : ""
                }`}
              >
                {section.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Keep Reading"
            title="More from the journal."
            align="center"
            className="mx-auto"
          />

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-3">
            {related.map((p, i) => (
              <Reveal
                key={p.id}
                delay={i * 0.08}
                className="group h-full"
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-1 transition-colors duration-300 hover:border-accent/40"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 640px) 31vw, 92vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-base font-semibold leading-snug">
                      {p.title}
                    </h3>
                    <div className="mt-4 flex flex-1 items-end justify-between border-t border-border pt-4 text-xs uppercase tracking-wide text-muted">
                      <span>{p.readTime}</span>
                      <ArrowUpRight className="size-4 text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </Section>
      )}

      <CtaBanner
        tone="raised"
        title="Ready to put this into practice?"
        description="Reading about training is a start. A coach watching your form is what makes it stick."
      />
    </>
  );
}
