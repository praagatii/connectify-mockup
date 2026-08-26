"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollExpand from "./ScrollExpand";

export default function Hero() {
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const p = Math.min(window.scrollY / (vh * 0.4), 1);
      setHeroOpacity(1 - p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-svh bg-white">
      <ScrollExpand
        src="/newhero-1080.mp4"
        mediaType="video"
        poster="/hero-poster.jpg"
        alt="Connectify"
        useWindowScroll
        startWidth={60}
        startHeight={35}
        startRadius={20}
        endRadius={20}
        mediaZoom={1.2}
        maxExpand={0.95}
        scrollDistance={1.2}
        holdDistance={0}
        overlayScrim={0}
      >
        <h2 className="font-inter text-6xl font-extrabold leading-[1.05] tracking-tight sm:text-8xl">
          <span className="bg-gradient-to-r from-black via-brand to-brand-deep bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        <ol className="mt-12 grid grid-cols-3 gap-5">
          {[
            { title: "Digital Solutions", href: "/services#digital-solutions" },
            { title: "Technology Services", href: "/services#technology-services" },
            { title: "Business Advisory", href: "/services#business-advisory" },
            { title: "Investment Consulting", href: "/services#investment-consulting" },
            { title: "Brand Experience", href: "/services#brand-experience" },
            { title: "Data & AI", href: "/services#data-ai" },
          ].map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="group flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-8 text-center backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/15"
              >
                <span className="font-inter text-2xl font-bold text-black transition-colors group-hover:text-brand">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </ScrollExpand>

      {/* Fixed overlay: heading + subtext + buttons */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex h-screen flex-col items-center justify-center px-6 pt-24"
        style={{ opacity: heroOpacity }}
      >
        <div className="text-center">
          <h1 className="whitespace-nowrap font-inter text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl sm:leading-[0.92] lg:text-8xl">
            <span className="bg-gradient-to-r from-black via-brand to-brand-deep bg-clip-text text-transparent">
              Build What&apos;s Next.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-muted">
            We partner with ambitious organizations to design, build, and scale<br />
            digital platforms — backed by strategic business and capital advisory.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pointer-events-auto">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full btn-glow px-8 py-4 font-inter text-sm font-semibold"
            >
              What We Build
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 font-inter text-sm font-semibold text-black underline decoration-brand/60 decoration-2 underline-offset-8 transition-colors hover:decoration-brand"
            >
              View Our Work
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
