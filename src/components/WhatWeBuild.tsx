"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    title: "Digital Solutions",
    href: "/services#digital-solutions",
    description:
      "Web platforms, mobile apps, and digital products engineered to scale with your business.",
  },
  {
    number: "02",
    title: "Technology Services",
    href: "/services#technology-services",
    description:
      "Cloud architecture, system integrations, and engineering support for modern stacks.",
  },
  {
    number: "03",
    title: "Business Advisory",
    href: "/services#business-advisory",
    description:
      "Strategy, operations, and transformation guidance for ambitious organizations.",
  },
  {
    number: "04",
    title: "Investment Consulting",
    href: "/services#investment-consulting",
    description:
      "Capital strategy, due diligence, and portfolio insights backed by market research.",
  },
  {
    number: "05",
    title: "Brand Experience",
    href: "/services#brand-experience",
    description:
      "Identity, design systems, and experiences that connect brands with their audiences.",
  },
  {
    number: "06",
    title: "Data & AI",
    href: "/services#data-ai",
    description:
      "Analytics, machine learning, and automation that turn raw data into decisions.",
  },
];

export default function WhatWeBuild() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-services-reveal]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "transform",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services-suite" ref={rootRef} className="relative py-16 pb-40">
      <div data-services-overlay>
        <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 items-start grid-cols-1 lg:grid-cols-12 lg:gap-16">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="lg:sticky lg:top-20"></div>
          </div>

          <div className="lg:col-span-7">
            <h2
              data-services-heading
              data-services-reveal
              className="pb-8 font-inter text-5xl font-extrabold leading-[0.95] tracking-tight text-black sm:text-[80px] sm:leading-[0.92] lg:text-[88px]"
            >
              Our <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">Services</span>
            </h2>
            <ol
              data-services-list
              className="flex flex-col gap-4"
            >
              {capabilities.map((item) => (
                <li key={item.title} data-services-reveal>
                  <Link
                    href={item.href}
                    className="group block rounded-xl border border-black/10 p-5 transition-colors hover:border-brand/40"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <span className="flex items-baseline gap-5">
                        <span data-fade className="font-mono text-xs text-black/60">
                          {item.number}
                        </span>
                        <span data-fade className="font-inter text-xl font-semibold text-black transition-colors group-hover:text-brand">
                          {item.title}
                        </span>
                      </span>
                      <svg
                        className="h-4 w-4 flex-none text-black/30 transition-all group-hover:translate-x-1 group-hover:text-black"
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
                    </div>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-black/55">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-10" data-services-reveal>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 font-inter text-sm font-semibold transition-opacity hover:opacity-80"
              >
                <span className="bg-gradient-to-r from-electric to-brand bg-clip-text text-transparent">
                  Explore all services
                </span>
                <svg
                  className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1"
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
      </div>
    </section>
  );
}