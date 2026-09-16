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
      const coverScale =
        Math.max(
          scope.clientWidth / box.offsetWidth,
          scope.clientHeight / box.offsetHeight
        ) + 0.05;

      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut" },
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      tl.fromTo(
        ".hero-media-box",
        { scale: 0.6, borderRadius: 28, opacity: 1 },
        {
          scale: coverScale,
          borderRadius: 0,
          opacity: 1,
          ease: "power1.in",
          duration: 0.5,
        },
        0
      );

      tl.to(
        ".hero-media-box",
        { opacity: 0.1, ease: "power1.inOut", duration: 0.15 },
        0.48
      );

      tl.fromTo(
        ".hero-headline",
        { opacity: 0 },
        { opacity: 1, duration: 0.15, ease: "none" },
        0.5
      );

      tl.fromTo(
        ".hero-line",
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.06,
          ease: "expo.inOut",
        },
        0.52
      );

      tl.fromTo(
        ".hero-float",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.25, stagger: 0.08 },
        0.58
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
          <div className="hero-media-box relative h-[36vh] w-[64vw] max-w-[680px] overflow-hidden rounded-3xl shadow-2xl">
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

        {/* Headline */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
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
        </div>
      </div>
    </section>
  );
}