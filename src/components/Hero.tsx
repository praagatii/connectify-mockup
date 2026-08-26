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
        <h2 className="font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
          Our{" "}
          <span className="bg-gradient-to-r from-[#c084fc] to-white bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <ol className="mt-8 grid grid-cols-3 gap-3">
          {[
            { n: "01", title: "Digital Solutions", href: "/services#digital-solutions" },
            { n: "02", title: "Technology Services", href: "/services#technology-services" },
            { n: "03", title: "Business Advisory", href: "/services#business-advisory" },
            { n: "04", title: "Investment Consulting", href: "/services#investment-consulting" },
            { n: "05", title: "Brand Experience", href: "/services#brand-experience" },
            { n: "06", title: "Data & AI", href: "/services#data-ai" },
          ].map((item) => (
            <li key={item.n}>
              <a
                href={item.href}
                className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
              >
                <span className="font-mono text-xs text-white/50">{item.n}</span>
                <span className="font-inter text-xl font-semibold text-white transition-colors group-hover:text-[#c084fc]">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </ScrollExpand>

      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex h-screen items-center justify-center px-6 pt-24"
        style={{ opacity: heroOpacity }}
      >
        <div className="text-center">
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
