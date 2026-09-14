"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageSquareText, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "Consultation",
    body: "We understand your goals, challenges, and target audience to define the scope.",
  },
  {
    icon: PenTool,
    title: "Strategy & Design",
    body: "Crafting intuitive UX/UI and architecture plans before writing a single line of code.",
  },
  {
    icon: Code2,
    title: "Implementation",
    body: "Writing clean, scalable code wrapped in robust security architectures.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    body: "Rigorous testing and seamless deployment, followed by 24/7 maintenance.",
  },
];

export default function Process() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-process-reveal]")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                end: "top 72%",
                scrub: true,
              },
            }
          );
        });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="process"
      className="relative z-10 overflow-hidden py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky left spine */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="flex items-center gap-2.5 font-inter text-xs font-medium uppercase tracking-[0.25em] text-muted">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                Our Process
              </p>
              <h2 className="mt-6 font-inter text-4xl font-extrabold leading-[1.02] tracking-tight text-black sm:text-5xl">
                Transforming Ideas into{" "}
                <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                We partner with you every step of the way to ensure your
                business reaches its full potential.
              </p>
              <ul className="mt-10 hidden lg:block">
                {steps.map((step, i) => (
                  <li
                    key={step.title}
                    className="group flex items-center gap-4 border-b border-black/10 py-4"
                  >
                    <span className="font-mono text-sm text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-inter text-lg font-bold tracking-tight text-black transition-colors group-hover:text-brand">
                      {step.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stacked feature cards */}
          <div className="flex flex-col gap-6 lg:col-span-8">
            {steps.map((step) => (
              <article
                key={step.title}
                data-process-reveal
                className="group flex flex-col gap-6 rounded-2xl border border-black/10 bg-surface p-8 transition-colors duration-300 hover:border-brand/50 sm:flex-row sm:items-start sm:p-10"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white">
                  <step.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-inter text-2xl font-bold tracking-tight text-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}