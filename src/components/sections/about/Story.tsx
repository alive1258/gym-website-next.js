import { Flame } from "lucide-react";
import Section from "@/src/components/ui/Section";
import Reveal from "@/src/components/ui/Reveal";
import VisualPanel from "@/src/components/ui/VisualPanel";

export default function Story() {
  return (
    <Section tone="raised">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <VisualPanel icon={Flame} label="Est. 2014" className="aspect-[4/5] w-full" />
        </Reveal>

        <div>
          <Reveal direction="fade">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-6 bg-accent" />
              Our Story
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] sm:text-5xl">
              Started in a garage.
              <br />
              Built into a community.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                PulseForge started in 2014 as four barbells and a squat rack
                in a rented garage. Our founder, a former competitive
                powerlifter, was frustrated with gyms that sold memberships
                and forgot about coaching.
              </p>
              <p>
                Twelve years later, that same principle runs the entire
                gym: every member gets real coaching, real programming, and
                a community that notices when you stop showing up.
              </p>
              <p>
                Today we train over 3,200 members across strength,
                conditioning, combat, and recovery programs — still coached
                by people who actually lift.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
