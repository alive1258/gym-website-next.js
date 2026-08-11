import { Camera } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import { galleryPhotos } from "@/src/data/gallery";

const spanClass: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export default function PhotoGallery() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Inside PulseForge"
        title="Life on the gym floor."
        description="Real sessions, real members — a look at what a week at PulseForge actually looks like."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[200px] lg:grid-cols-4">
        {galleryPhotos.map((photo, i) => (
          <Reveal
            key={photo.id}
            direction="fade"
            delay={(i % 4) * 0.06}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-surface-1 ${spanClass[photo.span]}`}
          >
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <photo.icon
                className="size-9 text-accent/70 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.25}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/90">
                {photo.caption}
              </p>
            </div>
          </Reveal>
        ))}
      </RevealGroup>

      <Reveal direction="fade" className="mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-wide text-muted">
        <Camera className="size-3.5" />
        Placeholder gallery — swap in real gym photos here
      </Reveal>
    </Section>
  );
}
