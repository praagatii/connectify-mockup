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

const middleImages = [
  "/case-studies/flycure-health.jpg",
  "/case-studies/ticketing-app.png",
  "/case-studies/blitz-meet.jpg",
  "/case-studies/ai-video-networking.jpg",
];

function MarqueeColumn({
  images,
  position,
  duration,
  behind,
}: {
  images: string[];
  position: "left" | "right" | "center";
  duration: number;
  behind: boolean;
}) {
  const posClass =
    position === "left"
      ? "left-[4%] lg:left-[6%]"
      : position === "right"
      ? "right-[4%] lg:right-[6%]"
      : "left-1/2 -translate-x-1/2";
  const imgWidth = position === "center" ? "w-44 lg:w-60" : "w-36 lg:w-52";
  const z = behind ? "z-0" : "z-30";
  return (
    <div
      className={`hero-fade pointer-events-none absolute inset-y-0 ${posClass} hidden flex-col justify-center overflow-hidden ${z} md:flex`}
      style={{ opacity: 0 }}
    >
      <div
        className="flex w-full flex-col"
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
            className={`${imgWidth} my-6 rounded-2xl object-cover`}
            style={{ aspectRatio: "4 / 5" }}
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
      gsap.to(".hero-headline", { y: -40, ease: "none", scrollTrigger: st });
      gsap.to(".hero-desc-wrap", {
        y: -60,
        ease: "none",
        scrollTrigger: st,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-white pt-28"
    >
      <MarqueeColumn
        images={leftImages}
        position="left"
        duration={26}
        behind={false}
      />
      <MarqueeColumn
        images={rightImages}
        position="right"
        duration={30}
        behind={false}
      />
      <MarqueeColumn
        images={middleImages}
        position="center"
        duration={22}
        behind
      />
      {/* Central composition */}
      <div className="relative flex w-full items-center justify-center px-4">
        <h1 className="hero-headline relative z-20 flex select-none flex-col items-center whitespace-nowrap text-[clamp(72px,10vw,190px)] font-extrabold leading-[0.82] tracking-tight md:flex-row md:gap-[0.12em]">
          {words.map((w) => (
            <span key={w.text} className="block overflow-hidden py-[0.08em]">
              <span className={`hero-line block ${w.className}`}>
                {w.text}
              </span>
            </span>
          ))}
        </h1>
      </div>

      {/* Description + CTAs */}
      <div className="hero-desc-wrap relative z-20 mt-16 flex flex-col items-center px-6">
        <p className="hero-desc max-w-2xl text-center font-inter text-lg leading-relaxed text-muted sm:text-xl">
          We design, build, and scale digital platforms backed by strategic
          business and capital advisory.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/services"
            className="hero-cta group inline-flex h-[56px] items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-deep px-8 font-inter text-base font-semibold text-white"
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
            className="hero-cta group inline-flex h-[56px] items-center gap-2 rounded-full border border-brand/40 bg-white px-8 font-inter text-base font-semibold text-black transition-colors hover:border-brand"
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
    </section>
  );
}
