"use client";

import { motion } from "framer-motion";
import { Dumbbell, Flame, Timer, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import Badge from "@/src/components/ui/Badge";
import StatCounter from "@/src/components/ui/StatCounter";

const floaters = [
  { icon: Dumbbell, className: "left-[6%] top-[18%]", delay: 0 },
  { icon: Flame, className: "right-[8%] top-[28%]", delay: 0.5 },
  { icon: Timer, className: "left-[12%] bottom-[16%]", delay: 1 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Image
        src="/images/Gym_12.23-19.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/60 via-background/75 to-background" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-176 -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]" />

      {floaters.map(({ icon: Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute hidden lg:flex size-14 items-center justify-center rounded-2xl border border-border bg-surface-1/80 backdrop-blur-sm ${className}`}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 5,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="size-6 text-accent" strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="container relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge>Now enrolling — Fall 2026</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display mt-8 max-w-4xl text-6xl leading-[0.92] sm:text-7xl lg:text-8xl"
        >
          TRAIN HARDER.
          <br />
          <span className="text-gradient-accent">BECOME UNSTOPPABLE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Strength coaching, high-intensity conditioning, and a community that
          shows up before sunrise. This is where real progress happens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/pricing">Start Your Trial</Button>
          <Link
            href="/classes"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground"
          >
            Explore Classes
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-border pt-10 sm:gap-10"
        >
          {[
            { value: 12, suffix: "+", label: "Years" },
            { value: 3200, suffix: "+", label: "Members" },
            { value: 40, suffix: "+", label: "Classes / wk" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl sm:text-4xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
