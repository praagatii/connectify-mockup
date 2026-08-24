"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import BorderGlow from "./BorderGlow";

const featured = [
  {
    slug: "karnataka-statewide-survey-platform",
    name: "Karnataka Statewide Survey Platform",
    image: "/clients/The-Karnataka-Government-Kannada-Logo-Vector.svg-.png",
    context: "GovTech",
  },
  {
    slug: "taurus-career-ai",
    name: "Taurus Career AI",
    image: "/case-studies/taurus-career-ai.jpg",
    context: "AI Platform",
  },
  {
    slug: "flycure-health",
    name: "Flycure Health",
    image: "/case-studies/flycure-health.jpg",
    context: "Healthcare",
  },
  {
    slug: "cloud-kitchen-pos",
    name: "Cloud Kitchen POS",
    image: "/case-studies/cloud-kitchen-pos.jpg",
    context: "Enterprise · FoodTech",
  },
  {
    slug: "contractor-loyalty-app",
    name: "Contractor Loyalty App",
    image: "/case-studies/contractor-loyalty-app.jpg",
    context: "Enterprise · ConstructionTech",
  },
  {
    slug: "trackway",
    name: "Trackway",
    image: "/case-studies/trackway.jpg",
    context: "Logistics",
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
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "top 65%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          el,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: -28,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: "bottom 40%",
              end: "bottom 10%",
              scrub: true,
            },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={rootRef} className="relative z-10 -mt-6 bg-white pt-4 pb-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Projects
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <div key={project.slug} data-project-reveal>
              <BorderGlow
                backgroundColor="#ffffff"
                borderRadius={16}
                glowColor="263 83 60"
                glowRadius={24}
                glowIntensity={0.9}
                edgeSensitivity={35}
                colors={["#8f00ff", "#5228b9", "#c084fc"]}
              >
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="group relative block aspect-[16/9] overflow-hidden rounded-2xl bg-surface transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-x-0 top-0 h-[55%] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-surface" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex h-[45%] flex-col justify-end p-5">
                    <h3 className="font-inter text-2xl font-bold tracking-tight text-black">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                      {project.context}
                    </p>
                  </div>
                </Link>
              </BorderGlow>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-brand to-brand-deep px-8 py-4 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
