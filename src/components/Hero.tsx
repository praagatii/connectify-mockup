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

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        gsap.set(".hero-float, .hero-media, .hero-line, .hero-desc, .hero-cta", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-float",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" },
        0.15
      );

      tl.fromTo(
        ".hero-media",
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
        0.3
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
      gsap.to(".hero-media", {
        scale: 1.04,
        ease: "none",
        scrollTrigger: st,
      });
      gsap.to(".hero-desc-wrap", {
        y: -60,
        ease: "none",
        scrollTrigger: st,
      });
      gsap.to(".hero-float-left", {
        y: -60,
        ease: "none",
        scrollTrigger: st,
      });
      gsap.to(".hero-float-right", {
        y: -40,
        ease: "none",
        scrollTrigger: st,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      const floats = Array.from(
        document.querySelectorAll<HTMLElement>(".hero-float")
      );
      floats.forEach((el, i) => {
        const dir = i === 0 ? -1 : 1;
        const tx = dir * x * 6;
        const ty = y * 4;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
      const media = document.querySelector<HTMLElement>(".hero-media");
      if (media) {
        media.style.marginLeft = `${x * 2}px`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-white pt-28"
    >
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

      {/* Central composition */}
      <div className="relative flex w-full items-center justify-center px-4">
        {/* Headline (above media) */}
        <h1 className="hero-headline relative z-20 flex select-none flex-col items-center whitespace-nowrap text-[clamp(72px,10vw,190px)] font-extrabold leading-[0.82] tracking-tight md:flex-row md:gap-[0.12em]">
          {words.map((w) => (
            <span key={w.text} className="block overflow-hidden py-[0.08em]">
              <span className={`hero-line block ${w.className}`}>
                {w.text}
              </span>
            </span>
          ))}
        </h1>

        {/* Media behind headline */}
        <div className="hero-media-wrap pointer-events-none absolute left-1/2 top-1/2 z-0 w-[62vw] -translate-x-1/2 -translate-y-1/2 max-w-[900px]">
          <div className="overflow-hidden rounded-2xl">
            <video
              className="hero-media h-[260px] w-full object-cover md:h-[300px]"
              src="/newhero-1080.mp4"
              poster="/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
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
