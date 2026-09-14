"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const items = [
  {
    image: "/case-studies/stackintel.jpg",
    label: "Fintech",
    link: "/case-studies?category=Fintech",
  },
  {
    image: "/case-studies/taurus-career-ai.jpg",
    label: "AI Platform",
    link: "/case-studies?category=AI%20Platform",
  },
  {
    image: "/case-studies/cloud-kitchen-pos.jpg",
    label: "Enterprise",
    link: "/case-studies?category=Enterprise",
  },
  {
    image: "/case-studies/flycure-health.jpg",
    label: "Healthcare",
    link: "/case-studies?category=Healthcare",
  },
  {
    image: "/case-studies/bobo-ride-hailing.jpg",
    label: "Mobility",
    link: "/case-studies?category=Mobility",
  },
  {
    image: "/case-studies/echo.jpg",
    label: "Communication",
    link: "/case-studies?category=Communication",
  },
];

export default function EnterprisePlatforms() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-industry-reveal]")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                end: "top 75%",
                scrub: true,
              },
            }
          );
        });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="platforms"
      className="relative z-10 overflow-hidden bg-surface py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <div data-industry-reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-2.5 font-inter text-xs font-medium uppercase tracking-[0.25em] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              Industries
            </p>
            <h2 className="mt-4 font-inter text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">
                Industries
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Link
              key={item.label}
              href={item.link}
              data-industry-reveal
              className="group relative block overflow-hidden rounded-2xl bg-[#14141a]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  draggable={false}
                  className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-inter text-xl font-bold tracking-tight text-white">
                    {item.label}
                  </h3>
                  <svg
                    className="h-5 w-5 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H8M17 7v9"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}