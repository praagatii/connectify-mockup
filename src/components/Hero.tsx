"use client";

import Link from "next/link";
import ScrollExpand from "./ScrollExpand";

export default function Hero() {
  return (
    <ScrollExpand
      src="/newhero-1080.mp4"
      mediaType="video"
      poster="/hero-poster.jpg"
      alt="Connectify"
      title="Build What's Next."
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
        Build
        <br />
        What&apos;s{" "}
        <span className="bg-gradient-to-l from-[#c084fc] to-white bg-clip-text text-transparent">
          Next.
        </span>
      </h2>
      <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
        We design and engineer digital products, platforms, and experiences
        that turn ambitious ideas into scalable technology.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-inter text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
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
          className="group inline-flex items-center gap-2 font-inter text-sm font-semibold text-white/90 underline decoration-white/40 decoration-2 underline-offset-8 transition-colors hover:decoration-white"
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
    </ScrollExpand>
  );
}
