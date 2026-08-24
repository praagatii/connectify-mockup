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
    let tickFn: (() => void) | null = null;

    const startScrub = () => {
      if (!video || !(video.duration > 0)) return;
      video.pause();
      video.playbackRate = 0;
      const duration =
        isFinite(video.duration) && video.duration > 0
          ? video.duration
          : video.seekable && video.seekable.length
            ? video.seekable.end(video.seekable.length - 1)
            : 6;
      const startOffset = 0.4;
      const playDuration = Math.max(duration - startOffset - 0.2, 0.05);
      video.currentTime = startOffset;
      const scrollPercent = Math.round(Math.min(playDuration, 25) * 30);
      const totalPercent = Math.round(scrollPercent * 1.35);
      const videoEnd = 1;
      const contentStart = 60 / scrollPercent;
      const contentH = window.innerHeight;
      const windowPx =
        (videoEnd - contentStart) * (totalPercent / 100) * contentH;
      let smoothTime = startOffset;
      let latestTarget = startOffset;
      const videoFadeEl = rootRef.current?.querySelector(
        "[data-video-fade]"
      );
      let spacer = document.getElementById(
        "hero-scroll-spacer"
      ) as HTMLDivElement | null;
      if (!spacer && rootRef.current) {
        spacer = document.createElement("div");
        spacer.id = "hero-scroll-spacer";
        rootRef.current.after(spacer);
      }
      if (spacer) {
        spacer.style.height = `${Math.max(
          Math.round(totalPercent * 0.33),
          0
        )}vh`;
      }
      scrub = ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: () => `+=${totalPercent}%`,
        scrub: true,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        onUpdate: (self) => {
          const vp = gsap.utils.clamp(0, 1, self.progress / videoEnd);
          latestTarget = startOffset + vp * playDuration;
          const cp = gsap.utils.clamp(
            0,
            1,
            (self.progress - contentStart) / (videoEnd - contentStart)
          );
          const content = rootRef.current?.querySelector(
            "[data-hero-content]"
          );
          if (content) {
            gsap.set(content, {
              y: -windowPx * cp,
              opacity: 1 - cp,
            });
          }
          if (videoFadeEl) {
            gsap.set(videoFadeEl, {
              opacity: gsap.utils.clamp(
                0,
                1,
                (self.progress - 0.85) / 0.1
              ),
            });
          }
        },
      });

      const tick = () => {
        smoothTime += (latestTarget - smoothTime) * 0.12;
        if (!video.seeking && Math.abs(smoothTime - video.currentTime) > 0.02) {
          video.currentTime = smoothTime;
        }
      };
      tickFn = tick;
      gsap.ticker.add(tick);

      ScrollTrigger.refresh();
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
      if (tickFn) gsap.ticker.remove(tickFn);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center"
        src="/newhero.mp4"
      />
      <div
        data-video-fade
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-44 bg-gradient-to-b from-transparent to-white opacity-0"
      />

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
            What&apos;s <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">Next.</span>
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
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-brand to-brand-deep px-8 py-4 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
  );
}