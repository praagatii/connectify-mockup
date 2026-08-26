"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ScrollExpand from "./ScrollExpand";

export default function Hero() {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [videoProgress, setVideoProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const p = Math.min(window.scrollY / (vh * 0.4), 1);
      setHeroOpacity(1 - p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const scrolled = -rect.top;
      const total = sectionH - window.innerHeight;
      const p = Math.max(0, Math.min(scrolled / total, 1));
      setVideoProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white" style={{ height: "180vh" }}>
      {/* Sticky content area */}
      <div className="sticky top-0 flex h-screen flex-col items-center justify-start overflow-hidden">
        {/* Heading + subtext + buttons */}
        <div
          className="relative z-50 flex flex-col items-center text-center px-6 pt-28"
          style={{ opacity: heroOpacity }}
        >
          <h1 className="whitespace-nowrap font-inter text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-[100px] sm:leading-[0.92] lg:text-[120px]">
            <span className="bg-gradient-to-r from-black via-brand to-brand-deep bg-clip-text text-transparent">
              Build What&apos;s Next.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            We partner with ambitious organizations to design, build, and scale
            digital platforms — backed by strategic business and capital advisory.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
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

        {/* Video — 16:9, anchored to bottom so only top ~60% visible */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
          <div
            className="relative overflow-hidden"
            style={{
              width: `${35 + (100 - 35) * videoProgress}%`,
              aspectRatio: "16/9",
              borderRadius: `${Math.round(20 * (1 - videoProgress))}px`,
            }}
          >
            <video
              src="/newhero-1080.mp4"
              poster="/hero-poster.jpg"
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
                style={{ transform: `scale(${1 + videoProgress * 0.15}) translateY(${75 * (1 - videoProgress)}%)` }}
            />
            {/* Services overlay — fades in when video is mostly expanded */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-opacity duration-500"
              style={{ opacity: videoProgress > 0.5 ? (videoProgress - 0.5) * 2 : 0 }}
            >
              <h2 className="font-inter text-6xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-8xl">
                Our Services
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
                      <span className="font-inter text-2xl font-bold text-white transition-colors group-hover:text-white/80">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
