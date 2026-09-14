"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
  { text: "Build", className: "hero-word text-brand" },
  {
    text: "What's",
    className:
      "hero-word bg-gradient-to-r from-brand via-brand-deep to-black bg-clip-text text-transparent",
  },
  { text: "Next", className: "hero-word text-black" },
];

const leftImages = [
  "/case-studies/cloud-kitchen-pos.jpg",
  "/case-studies/bobo-ride-hailing.jpg",
  "/case-studies/mascons.jpg",
  "/case-studies/via-carte.jpg",
];

const rightImages = [
  "/case-studies/stackintel.jpg",
  "/case-studies/finfan.jpg",
  "/case-studies/enqupay.jpg",
  "/case-studies/road-scope.jpg",
];

function EdgeColumn({
  images,
  side,
  duration,
}: {
  images: string[];
  side: "left" | "right";
  duration: number;
}) {
  const posClass =
    side === "left" ? "left-[2.5%] lg:left-[4%]" : "right-[2.5%] lg:right-[4%]";
  const offsets = [-18, 0, 20, -10, 14, -20, 8, 18, -12, 0, 18, -16];
  const baseOffset = side === "left" ? -28 : 28;
  return (
    <div
      className={`hero-fade pointer-events-none absolute inset-y-0 ${posClass} hidden flex-col justify-center overflow-hidden z-0 w-28 lg:flex lg:w-36`}
      style={{ opacity: 0 }}
    >
      <div
        className="flex w-full flex-col items-center"
        style={{
          animation: `marqueeUp ${duration}s linear infinite`,
        }}
      >
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            draggable={false}
            className="w-full rounded-2xl object-cover my-10"
            style={{
              aspectRatio: "4 / 5",
              marginLeft: baseOffset + offsets[i % offsets.length],
              marginRight: -(baseOffset + offsets[i % offsets.length]),
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(".hero-fade, .hero-line, .hero-desc, .hero-cta", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-fade",
        { opacity: 0 },
        { opacity: 1, duration: 1, stagger: 0.15, ease: "power2.out" },
        0.15
      );

      tl.fromTo(
        ".hero-line",
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "expo.inOut" },
        0.4
      );

      tl.fromTo(
        ".hero-desc",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.6
      );

      tl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
        0.75
      );

      const st = {
        trigger: rootRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };
      gsap.to(".hero-headline", { y: -30, ease: "none", scrollTrigger: st });
      gsap.to(".hero-desc-wrap", {
        y: -40,
        ease: "none",
        scrollTrigger: st,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-white pb-20 pt-32"
    >
      <EdgeColumn images={leftImages} side="left" duration={26} />
      <EdgeColumn images={rightImages} side="right" duration={30} />

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h1 className="hero-headline flex select-none flex-col whitespace-nowrap font-inter text-[clamp(44px,6.5vw,104px)] font-extrabold leading-[0.9] tracking-tight">
              {words.map((w) => (
                <span key={w.text} className="block overflow-hidden py-[0.06em]">
                  <span className={`hero-line block ${w.className}`}>
                    {w.text}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="hero-desc max-w-md text-lg leading-relaxed text-muted">
              We design, build, and scale digital platforms backed by strategic
              business and capital advisory.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="hero-cta group inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-deep px-8 font-inter text-base font-semibold text-white"
              >
                View Projects
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="hero-cta group inline-flex h-14 items-center gap-2 rounded-full border border-black/15 bg-white px-8 font-inter text-base font-semibold text-black transition-colors hover:border-brand"
              >
                Case Studies
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}