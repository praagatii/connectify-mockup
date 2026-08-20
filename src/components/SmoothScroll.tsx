"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export default function SmoothScroll() {
  const pathname = usePathname();
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
    });
    smootherRef.current = smoother;
    ScrollTrigger.refresh();

    return () => {
      smoother.kill();
      smootherRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    if (!smootherRef.current) return;
    ScrollTrigger.refresh();
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) smootherRef.current.scrollTo(target, true, "top 80px");
    }
  }, [pathname]);

  return null;
}