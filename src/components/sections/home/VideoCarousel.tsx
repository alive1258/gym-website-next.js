"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal from "@/src/components/ui/Reveal";
import { videos, type GymVideo } from "@/src/data/videos";

function VideoModal({
  video,
  onClose,
}: {
  video: GymVideo;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="video-modal-title" className="sr-only">
          {video.title}
        </h2>
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute -top-11 right-0 flex size-9 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          <X className="size-5" />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black shadow-2xl">
          <iframe
            className="size-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function VideoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeVideo, setActiveVideo] = useState<GymVideo | null>(null);

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
          description="Real training vlogs and full-session walkthroughs — no scripts, just the work."
        />
        <Reveal
          direction="fade"
          delay={0.15}
          className="hidden shrink-0 gap-2 sm:flex"
        >
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
            <button
              type="button"
              onClick={() => setActiveVideo(video)}
              aria-haspopup="dialog"
              className="block w-full text-left"
            >
              <div className="bg-grid relative flex aspect-8/12 items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface-1">
                <Image
                  src={video.thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 19vw, (min-width: 1024px) 23vw, (min-width: 768px) 31vw, (min-width: 640px) 46vw, 78vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-accent/90 text-accent-foreground shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110">
                    <Play
                      className="size-6 translate-x-0.5"
                      fill="currentColor"
                    />
                  </span>
                </span>
              </div>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-foreground/90 transition-colors duration-200 group-hover:text-accent">
                {video.title}
              </h3>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal
        direction="fade"
        className="mt-6 flex justify-center gap-2 sm:hidden"
      >
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

      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </Section>
  );
}
