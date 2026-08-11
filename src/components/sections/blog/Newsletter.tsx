"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import Reveal from "@/src/components/ui/Reveal";

interface FormValues {
  email: string;
}

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  return (
    <section className="bg-surface-2 py-20 sm:py-24">
      <div className="container">
        <Reveal direction="zoom">
          <div className="bg-grid relative overflow-hidden rounded-[2rem] border border-border-strong bg-surface-1 px-6 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute -top-1/2 left-1/2 h-full w-2/3 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
            <div className="relative mx-auto max-w-lg">
              <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Mail className="size-6" strokeWidth={1.5} />
              </span>
              <h2 className="font-display mt-5 text-3xl sm:text-4xl">
                Training tips, weekly.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                One email a week — programming insights, recovery tips, and
                member stories. No spam, unsubscribe anytime.
              </p>

              {submitted ? (
                <div className="mt-7 flex items-center justify-center gap-2 text-sm font-medium text-accent">
                  <CheckCircle2 className="size-5" />
                  You&apos;re subscribed — welcome in.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mt-7 flex flex-col gap-3 sm:flex-row"
                >
                  <div className="flex-1 text-left">
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-full border border-border-strong bg-background px-5 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-2 pl-2 text-xs text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors duration-300 hover:bg-accent-dark"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
