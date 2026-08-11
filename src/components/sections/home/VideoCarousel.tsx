"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal from "@/src/components/ui/Reveal";
import { videos } from "@/src/data/videos";

export default function VideoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.42, behavior: "smooth" });
  };

  return (
    <Section tone="raised">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Watch & Learn"
          title="Coaching, on demand."
          description="15 technique breakdowns and full-session walkthroughs from our coaching staff."
        />
        <Reveal direction="fade" delay={0.15} className="hidden shrink-0 gap-2 sm:flex">
          <button
            aria-label="Scroll videos left"
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className="flex size-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors duration-200 hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Scroll videos right"
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className="flex size-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors duration-200 hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-5" />
          </button>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-hidden mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {videos.map((video, i) => (
          <Reveal
            key={video.id}
            delay={Math.min(i, 5) * 0.05}
            direction="fade"
            className="group w-[78%] shrink-0 snap-start sm:w-[46%] md:w-[31%] lg:w-[23%] xl:w-[19%]"
          >
            <button className="block w-full text-left">
              <div className="bg-grid relative flex aspect-[9/12] items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface-1">
                <div className="absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
                <video.icon
                  className="relative size-10 text-white/20"
                  strokeWidth={1.25}
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-accent/90 text-accent-foreground shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110">
                    <Play className="size-6 translate-x-0.5" fill="currentColor" />
                  </span>
                </span>
                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm">
                  {video.category}
                </span>
                <span className="absolute bottom-3 right-3 rounded-md bg-background/80 px-2 py-0.5 text-[11px] font-medium text-foreground/90 backdrop-blur-sm">
                  {video.duration}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-foreground/90 transition-colors duration-200 group-hover:text-accent">
                {video.title}
              </h3>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal direction="fade" className="mt-6 flex justify-center gap-2 sm:hidden">
        <button
          aria-label="Scroll videos left"
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          className="flex size-11 items-center justify-center rounded-full border border-border-strong text-foreground disabled:opacity-30"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          aria-label="Scroll videos right"
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          className="flex size-11 items-center justify-center rounded-full border border-border-strong text-foreground disabled:opacity-30"
        >
          <ChevronRight className="size-5" />
        </button>
      </Reveal>
    </Section>
  );
}
