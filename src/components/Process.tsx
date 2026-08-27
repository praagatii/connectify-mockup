"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import BorderGlow from "./BorderGlow";

const steps = [
  {
    title: "Consultation",
    body: "We understand your goals, challenges, and target audience to define the scope.",
  },
  {
    title: "Strategy & Design",
    body: "Crafting intuitive UX/UI and architecture plans before writing a single line of code.",
  },
  {
    title: "Implementation",
    body: "Writing clean, scalable code wrapped in robust security architectures.",
  },
  {
    title: "Deployment",
    body: "Rigorous testing and seamless deployment, followed by 24/7 maintenance.",
  },
];

export default function Process() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-process-reveal]");

      els.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "top 70%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          el,
          { opacity: 1, y: 0 },
          {
            opacity: 0.15,
            y: -12,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: "bottom 30%",
              end: "bottom 5%",
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
      className="relative z-10 py-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand/[0.04] blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p
          data-process-reveal
          className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-muted"
        >
          Our Process
        </p>
        <h2
          data-process-reveal
          className="mt-4 max-w-3xl font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl"
        >
          Transforming Ideas into{" "}
          <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h2>
        <p
          data-process-reveal
          className="mt-6 max-w-3xl leading-relaxed text-muted"
        >
          At Connectify, we don&apos;t just write code — our approach combines
          in-depth industry knowledge, innovative thinking, and a client-centric
          methodology. We partner with you every step of the way to ensure your
          business reaches its full potential.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div data-process-reveal key={step.title}>
              <BorderGlow
                backgroundColor="#ffffff"
                borderRadius={14}
                glowColor="263 83 60"
                glowRadius={22}
                glowIntensity={0.85}
                edgeSensitivity={35}
                colors={["#8f00ff", "#5228b9", "#c084fc"]}
              >
                <div className="flex h-full flex-col rounded-xl bg-white p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/[0.08] font-inter text-sm font-extrabold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-inter text-base font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
