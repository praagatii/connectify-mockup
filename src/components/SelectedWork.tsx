"use client";

import Link from "next/link";
import { HoverMetalButton } from "@/components/ui/hover-metal-button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";

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
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "top 70%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          el,
          { opacity: 1, y: 0 },
          {
            opacity: 0.15,
            y: -12,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: "bottom 40%",
              end: "bottom 12%",
              scrub: true,
            },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={rootRef} className="relative z-10 py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
          <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <div key={project.slug} data-project-reveal>
              <ProjectCard
                slug={project.slug}
                name={project.name}
                image={project.image}
                context={project.context}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <HoverMetalButton variant="outline" asChild className="px-8 py-4">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2"
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
          </HoverMetalButton>
        </div>
      </div>
    </section>
  );
}
