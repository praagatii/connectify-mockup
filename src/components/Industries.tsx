"use client";

import Link from "next/link";
import AccordionGallery from "./AccordionGallery";

const industries = [
  {
    image: "https://picsum.photos/id/1015/900/1200",
    label: "Healthtech",
    link: "/products#healthtech",
  },
  {
    image: "https://picsum.photos/id/1018/900/1200",
    label: "Accounting",
    link: "/products#accounting",
  },
  {
    image: "https://picsum.photos/id/1039/900/1200",
    label: "SaaS Platforms",
    link: "/products#saas-platforms",
  },
  {
    image: "https://picsum.photos/id/1043/900/1200",
    label: "HRtech",
    link: "/products#hrtech",
  },
  {
    image: "https://picsum.photos/id/1044/900/1200",
    label: "Fintech",
    link: "/products#fintech",
  },
];

export default function EnterprisePlatforms() {
  return (
    <section id="platforms" className="relative z-10 bg-white py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Industries
            </p>
            <h2 className="mt-4 font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
              Industries
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 sm:items-end">
            <p className="max-w-sm text-base leading-relaxed text-muted">
              Healthtech, accounting, SaaS, HRtech and fintech products
              engineered for production scale.
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 font-inter text-sm font-semibold text-black transition-opacity hover:opacity-80"
            >
              <span className="bg-gradient-to-r from-electric to-brand bg-clip-text text-transparent">
                View all categories
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

        <div className="mt-12">
          <AccordionGallery
            items={industries}
            defaultIndex={0}
            expandRatio={0.35}
            trigger="hover"
            height={460}
            gap={10}
            radius={16}
            grayscale={true}
            showLabels={true}
            overlayColor="#060010"
            textColor="#ffffff"
            accentColor="#8f00ff"
          />
        </div>
      </div>
    </section>
  );
}
