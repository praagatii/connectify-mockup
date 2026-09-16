"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  MessageSquareText,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

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
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                end: "top 70%",
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
      className="relative z-10 overflow-hidden bg-black px-6 py-16"
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-[0.25em] text-[#e9d5ff]/70">
              Our Process
            </p>
            <h2 className="mt-6 max-w-xl font-inter text-4xl font-extrabold leading-[1.02] tracking-tight text-[#ffffff] sm:text-5xl">
              Transforming Ideas into{" "}
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#e9d5ff]/80">
            At Connectify, we don&apos;t just write code — our approach combines
            in-depth industry knowledge, innovative thinking, and a client-centric
            methodology. We partner with you every step of the way to ensure your
            business reaches its full potential.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              data-process-reveal
              className="group flex flex-col rounded-2xl border border-[#ffffff]/15 bg-[#ffffff]/[0.05] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-brand/[0.12] hover:shadow-[0_20px_60px_-30px_rgba(139,92,246,0.6)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-[#ffffff] transition-transform duration-300 group-hover:scale-105">
                <step.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 font-inter text-xl font-bold tracking-tight text-[#ffffff]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#e9d5ff]/70">
                {step.body}
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-brand/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}