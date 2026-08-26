"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollExpand from "./ScrollExpand";

export default function Hero() {
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const p = Math.min(window.scrollY / (vh * 0.5), 1);
      setHeroOpacity(1 - p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-svh">
      <ScrollExpand
        src="/newhero-1080.mp4"
        mediaType="video"
        poster="/hero-poster.jpg"
        alt="Connectify"
        scrollHint="Scroll"
        useWindowScroll
        startWidth={50}
        startHeight={28}
        startRadius={20}
        endRadius={0}
        mediaZoom={1.2}
        scrollDistance={1.5}
        holdDistance={0.35}
        overlayScrim={0.5}
      >
        <h2 className="font-inter text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
          What We Build
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Full-stack digital products, platforms, and technology consulting —
          from web and mobile to cloud, AI and investment advisory.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["Digital Solutions", "Technology Services", "Business Advisory", "Investment Consulting"].map(
            (s) => (
              <span
                key={s}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm"
              >
                {s}
              </span>
            )
          )}
        </div>
      </ScrollExpand>

      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-30 flex h-screen items-center justify-center px-6 pt-24"
        style={{ opacity: heroOpacity }}
      >
        <div className="max-w-3xl text-center">
          <h1 className="whitespace-nowrap font-inter text-6xl font-extrabold leading-[0.95] tracking-tight text-black sm:text-[100px] sm:leading-[0.92] lg:text-[120px]">
            Build What&apos;s{" "}
            <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">
              Next.
            </span>
          </h1>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pointer-events-auto">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full btn-glow px-8 py-4 font-inter text-sm font-semibold"
            >
              What We Build
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
              className="group inline-flex items-center gap-2 font-inter text-sm font-semibold text-black underline decoration-brand/60 decoration-2 underline-offset-8 transition-colors hover:decoration-brand"
            >
              View Our Work
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
    </section>
  );
}
