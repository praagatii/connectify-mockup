"use client";

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

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(
          ".hero-float, .hero-media-box, .hero-line, .hero-desc, .hero-cta, .hero-headline",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            borderRadius: 28,
          }
        );
        return;
      }

      const scope = rootRef.current!;
      const box = scope.querySelector<HTMLElement>(".hero-media-box")!;
      const pagePadding = window.innerWidth >= 1024 ? 96 : 48;
      const targetWidth = Math.min(scope.clientWidth, 1280) - pagePadding;
      const coverScale = Math.max(targetWidth / box.offsetWidth, 1);

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      });

      tl.fromTo(
        ".hero-media-box",
        { scale: 1, borderRadius: 28, opacity: 1 },
        {
          scale: coverScale,
          borderRadius: 28,
          opacity: 1,
          ease: "power1.in",
          duration: 0.4,
        },
        0
      );

      tl.to(
        ".hero-media-box",
        { opacity: 0.08, ease: "none", duration: 0.25 },
        0.42
      );

      tl.fromTo(
        ".hero-headline",
        { opacity: 0 },
        { opacity: 1, ease: "none", duration: 0.05 },
        0.7
      );

      tl.fromTo(
        ".hero-line",
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.25,
          stagger: 0.06,
          ease: "power2.out",
        },
        0.7
      );

      tl.fromTo(
        ".hero-desc",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power1.out" },
        0.78
      );

      tl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.06, ease: "power1.out" },
        0.8
      );

      tl.fromTo(
        ".hero-float",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.25, stagger: 0.08, ease: "power1.out" },
        0.7
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[300vh] bg-white"
      aria-label="Hero"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Video: small rounded card at load, expands + fades on scroll */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hero-media-box relative aspect-[21/9] w-[46vw] max-w-[560px] overflow-hidden rounded-3xl shadow-2xl">
            <video
              src="/newhero-1080.mp4"
              poster="/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Floating visuals */}
        <div
          className="hero-float hero-float-left pointer-events-none absolute left-[6%] top-[16%] z-0 hidden w-40 -rotate-6 rounded-2xl md:block lg:left-[8%] lg:w-52"
          style={{ opacity: 0 }}
        >
          <img
            src="/case-studies/cloud-kitchen-pos.jpg"
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
        <div
          className="hero-float hero-float-right pointer-events-none absolute right-[6%] top-[20%] z-0 hidden w-40 rotate-6 rounded-2xl md:block lg:right-[8%] lg:w-52"
          style={{ opacity: 0 }}
        >
          <img
            src="/case-studies/stackintel.jpg"
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* Headline + subtext + CTAs */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="flex flex-col items-center">
            <h1
              className="hero-headline flex select-none flex-col items-center whitespace-nowrap text-[clamp(56px,9vw,170px)] font-extrabold leading-[0.82] tracking-tight md:flex-row md:gap-[0.12em]"
              style={{ opacity: 0 }}
            >
              {words.map((w) => (
                <span key={w.text} className="block overflow-hidden py-[0.08em]">
                  <span
                    className={`hero-line block ${w.className}`}
                    style={{ opacity: 0 }}
                  >
                    {w.text}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className="hero-desc mt-[1.5em] max-w-2xl text-center font-inter text-lg leading-relaxed text-muted sm:text-xl"
              style={{ opacity: 0 }}
            >
              We design, build, and scale digital platforms backed by strategic
              business and capital advisory.
            </p>

            <div className="hero-ctas mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/services"
                className="hero-cta btn-glow group inline-flex h-[56px] items-center gap-2 rounded-full px-8 font-inter text-base font-semibold transition-colors"
                style={{ opacity: 0 }}
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
              </a>
              <a
                href="/case-studies"
                className="hero-cta btn-glow group inline-flex h-[56px] items-center gap-2 rounded-full px-8 font-inter text-base font-semibold transition-colors"
                style={{ opacity: 0 }}
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}