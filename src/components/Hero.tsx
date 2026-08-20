"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-fade]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.15,
          clearProps: "transform",
        }
      );
    }, rootRef);

    const video = videoRef.current;
    let scrub: ScrollTrigger | null = null;
    let overlayAnim: gsap.core.Tween | null = null;

    const startScrub = () => {
      if (!video || !(video.duration > 0)) return;
      video.pause();
      video.playbackRate = 0;
      video.currentTime = 0.01;
      video.currentTime = 0;
      const duration =
        isFinite(video.duration) && video.duration > 0
          ? video.duration
          : video.seekable && video.seekable.length
            ? video.seekable.end(video.seekable.length - 1)
            : 6;
      const scrollPercent = Math.round(Math.min(duration, 25) * 24);
      const contentStart = 20 / scrollPercent;
      const contentEnd = 0.6;
      scrub = ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: () => `+=${scrollPercent}%`,
        scrub: true,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        onUpdate: (self) => {
          const target =
            self.progress * Math.max(duration - 0.05, 0.05);
          if (Math.abs(target - video.currentTime) > 0.02) {
            video.currentTime = target;
          }
          const cp = gsap.utils.clamp(
            0,
            1,
            (self.progress - contentStart) / (contentEnd - contentStart)
          );
          const content = rootRef.current?.querySelector(
            "[data-hero-content]"
          );
          if (content) {
            gsap.set(content, {
              yPercent: -140 * cp,
              opacity: 1 - cp,
            });
          }
        },
      });

      const overlayEl = document.querySelector(
        "[data-services-overlay]"
      ) as HTMLElement | null;
      if (overlayEl) {
        const heroH = rootRef.current?.offsetHeight ?? window.innerHeight;
        const startVh = contentStart * scrollPercent;
        const endVh = contentEnd * scrollPercent;
        const fromY = (startVh * 0.01 * heroH) + 8;
        overlayAnim = gsap.fromTo(
          overlayEl,
          { y: fromY },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: () => `+=${startVh}%`,
              end: () => `+=${endVh}%`,
              scrub: true,
            },
          }
        );
        ScrollTrigger.create({
          trigger: overlayEl,
          start: "top bottom",
          end: "bottom top",
          onUpdate: () => {
            const heading = document.querySelector(
              "[data-services-heading]"
            );
            const list = document.querySelector("[data-services-list]");
            if (heading && list) {
              const column = heading.parentElement;
              if (column) {
                const stickyTop = 96;
                const applied = Number(gsap.getProperty(heading, "y") || 0);
                const rect = heading.getBoundingClientRect();
                const naturalTop = rect.top - applied;
                const maxY =
                  column.getBoundingClientRect().bottom -
                  rect.height -
                  stickyTop;
                const y = gsap.utils.clamp(
                  0,
                  Math.max(0, maxY),
                  stickyTop - naturalTop
                );
                gsap.set(heading, { y });
              }
              const line = heading.getBoundingClientRect().bottom + 8;
              list.querySelectorAll("[data-fade]").forEach((el) => {
                const rect = el.getBoundingClientRect();
                const p = gsap.utils.clamp(
                  0,
                  1,
                  (line - rect.top) / (rect.height * 0.35)
                );
                gsap.set(el, { opacity: 1 - p });
              });
            }
          },
        });

        const sectionEl = document.getElementById("services-suite");
        const listEl = document.querySelector("[data-services-list]");
        const headingEl = document.querySelector("[data-services-heading]");
        if (sectionEl && listEl && headingEl) {
          const li3 = listEl.querySelectorAll("li")[2];
          const headingH = headingEl.getBoundingClientRect().height;
          const line = 96 + headingH + 8;
          const wrapperY = Number(gsap.getProperty(overlayEl, "y")) || 0;
          const item3Offset =
            li3.getBoundingClientRect().top -
            sectionEl.getBoundingClientRect().top -
            wrapperY;
          ScrollTrigger.create({
            trigger: sectionEl,
            start: () => `top ${line - item3Offset}px`,
            end: () => `+=${Math.ceil(window.innerHeight)}`,
            pin: sectionEl,
            pinSpacing: true,
            anticipatePin: 1,
          });
        }
      }
    };

    if (video && video.readyState >= 2) {
      startScrub();
    } else if (video) {
      video.addEventListener("loadeddata", startScrub, { once: true });
    }
    if (video) video.load();

    return () => {
      ctx.revert();
      if (video) video.removeEventListener("loadeddata", startScrub);
      scrub?.kill();
      overlayAnim?.scrollTrigger?.kill();
      overlayAnim?.kill();
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover object-center brightness-110"
        src="/hero-logo-scrub.mp4"
      />
      <section
        ref={rootRef}
        className="relative flex min-h-svh items-center"
      >

      <div
        data-hero-content
        className="relative z-10 mx-auto w-full max-w-7xl -translate-y-4 px-6 lg:-translate-y-8 lg:px-12"
      >
        <div className="max-w-3xl pt-20 pb-24 lg:pt-28">
          <h1
            data-hero-fade
            className="mt-8 font-inter text-5xl font-extrabold leading-[0.95] tracking-tight text-black sm:text-[80px] sm:leading-[0.92] lg:text-[88px]"
          >
            Build
            <br />
            What&apos;s <span className="text-brand">Next.</span>
          </h1>
          <p
            data-hero-fade
            className="mt-6 max-w-[520px] text-lg leading-relaxed text-gray-600"
          >
            We design and engineer digital products, platforms, and experiences
            that turn ambitious ideas into scalable technology.
          </p>
          <div
            data-hero-fade
            className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-4 font-inter text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
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
    </>
  );
}