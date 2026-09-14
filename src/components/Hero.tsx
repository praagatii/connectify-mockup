"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
  { text: "Build", className: "hero-word text-electric" },
  {
    text: "What's",
    className:
      "hero-word bg-gradient-to-r from-electric via-brand to-white bg-clip-text text-transparent",
  },
  { text: "Next", className: "hero-word text-white" },
];

const rearWords = [
  { text: "Build" },
  { text: "What's" },
  { text: "Next" },
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
  const imgWidth =
    position === "center" ? "w-36 lg:w-48" : "w-28 lg:w-40";
  const z = behind ? "z-0" : "z-30";
  const offsets = [-22, 0, 26, -12, 18, -26, 8, 22, -16, 0, 24, -20];
  const baseOffset =
    position === "left" ? -40 : position === "right" ? 40 : 0;
  return (
    <div
      className={`hero-fade pointer-events-none absolute inset-y-0 ${posClass} hidden flex-col justify-center overflow-hidden ${z} md:flex`}
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
            className={`${imgWidth} my-8 rounded-2xl object-cover lg:my-10`}
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
      gsap.to(".hero-headline", { y: -40, ease: "none", scrollTrigger: st });
      gsap.to(".hero-rear", {
        y: 60,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: st,
      });
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
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-black pt-28"
    >
      {/* Rear giant words */}
      <div
        aria-hidden
        className="hero-rear pointer-events-none absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 select-none flex-col items-center whitespace-nowrap font-inter text-[16vw] font-extrabold leading-[0.85] tracking-tight text-white/[0.04]"
      >
        {rearWords.map((w) => (
          <span key={w.text}>{w.text}</span>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(60rem 40rem at 20% 0%, rgba(82,40,185,0.28), transparent 60%)",
        }}
      />

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

      {/* Split copy: left headline / right subhead + CTAs */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h1 className="hero-headline flex select-none flex-col whitespace-nowrap font-inter text-[clamp(40px,6vw,96px)] font-extrabold leading-[0.85] tracking-tight">
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
            <p className="hero-desc max-w-md text-lg leading-relaxed text-white/60">
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
                className="hero-cta group inline-flex h-14 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 font-inter text-base font-semibold text-white"
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