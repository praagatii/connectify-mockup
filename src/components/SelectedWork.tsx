"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const featured = [
  {
    slug: "karnataka-statewide-survey-platform",
    name: "Karnataka Statewide Survey Platform",
    image: "/clients/The-Karnataka-Government-Kannada-Logo-Vector.svg-.png",
    context: "#01 · GovTech",
  },
  {
    slug: "taurus-career-ai",
    name: "Taurus Career AI",
    image: "/case-studies/taurus-career-ai.jpg",
    context: "#02 · AI Platform",
  },
  {
    slug: "flycure-health",
    name: "Flycure Health",
    image: "/case-studies/flycure-health.jpg",
    context: "#03 · Healthcare",
  },
  {
    slug: "cloud-kitchen-pos",
    name: "Cloud Kitchen POS",
    image: "/case-studies/cloud-kitchen-pos.jpg",
    context: "#04 · Enterprise · FoodTech",
  },
  {
    slug: "contractor-loyalty-app",
    name: "Contractor Loyalty App",
    image: "/case-studies/contractor-loyalty-app.jpg",
    context: "#05 · Enterprise · ConstructionTech",
  },
  {
    slug: "trackway",
    name: "Trackway",
    image: "/case-studies/trackway.jpg",
    context: "#06 · Logistics",
  },
];

export default function SelectedWork() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-project-reveal]");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
            },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={rootRef} className="relative z-10 bg-white py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-inter text-5xl font-extrabold leading-[0.95] tracking-tight text-black sm:text-[80px] sm:leading-[0.92] lg:text-[88px]">
          <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              data-project-reveal
              className="group block overflow-hidden rounded-2xl border border-black/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_12px_40px_rgba(82,40,185,0.16)]"
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-black/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  {project.context}
                </p>
                <h3 className="mt-2 font-inter text-lg font-bold tracking-tight text-black">
                  {project.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-lg border border-black/20 px-8 py-3.5 font-inter text-sm font-semibold text-black transition-colors hover:border-black/40 hover:bg-black/5"
          >
            See all case studies
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
