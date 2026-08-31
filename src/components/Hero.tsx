"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Monitor, Server, Compass, TrendingUp, Sparkles, Brain } from "lucide-react";
import ScrollExpand from "./ScrollExpand";
import { HoverMetalButton } from "@/components/ui/hover-metal-button";

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
    <section className="relative min-h-svh">
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
        overlayScrim={0.25}
      >
        <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-12">
          <h2 className="font-inter text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-black">Our</span>{" "}
            <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-4 max-w-xl font-inter text-base leading-relaxed text-gray-700">
            End-to-end solutions to build, scale, and strengthen your digital business.
          </p>
          <div className="mt-8 grid w-full grid-cols-3 gap-3 sm:grid-cols-6 lg:gap-4">
            {[
              { icon: Monitor, title: "Digital Solutions", href: "/services#digital-solutions" },
              { icon: Server, title: "Technology", href: "/services#technology-services" },
              { icon: Compass, title: "Advisory", href: "/services#business-advisory" },
              { icon: TrendingUp, title: "Investment", href: "/services#investment-consulting" },
              { icon: Sparkles, title: "Brand", href: "/services#brand-experience" },
              { icon: Brain, title: "Data & AI", href: "/services#data-ai" },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/60 px-3 py-6 backdrop-blur transition-colors hover:border-brand/40 hover:bg-white"
              >
                <item.icon className="h-6 w-6 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
                <span className="text-center text-sm font-semibold text-black transition-colors group-hover:text-brand">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </ScrollExpand>

      {/* Fixed overlay: heading + subtext + buttons */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex h-screen flex-col items-center justify-center px-6 pt-28"
        style={{ opacity: heroOpacity }}
      >
        <div className="text-center">
          <h1 className="whitespace-nowrap font-inter text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl sm:leading-[0.92] lg:text-9xl">
            <span className="bg-gradient-to-r from-brand via-brand-deep to-black bg-clip-text text-transparent">
              Build What&apos;s Next
            </span>
          </h1>
          <p className="mx-auto mt-16 max-w-2xl text-center font-inter text-base leading-relaxed text-muted">
            We design, build, and scale digital platforms backed by strategic business and capital advisory.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pointer-events-auto">
            <HoverMetalButton variant="outline" asChild className="px-8 py-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2"
              >
                View Projects
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </HoverMetalButton>
            <HoverMetalButton variant="outline" asChild className="px-8 py-4">
              <Link
                href="/case-studies"
                className="group inline-flex items-center gap-2"
              >
                Case Studies
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </HoverMetalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
