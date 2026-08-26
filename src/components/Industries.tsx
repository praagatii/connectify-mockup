"use client";

import AccordionGallery from "./AccordionGallery";

const industries = [
  {
    image: "https://picsum.photos/id/1048/900/1200",
    label: "Healthtech",
    link: "/products#healthtech",
  },
  {
    image: "https://picsum.photos/id/1060/900/1200",
    label: "Accounting",
    link: "/products#accounting",
  },
  {
    image: "https://picsum.photos/id/1045/900/1200",
    label: "SaaS Platforms",
    link: "/products#saas-platforms",
  },
  {
    image: "https://picsum.photos/id/1027/900/1200",
    label: "HRtech",
    link: "/products#hrtech",
  },
  {
    image: "https://picsum.photos/id/1047/900/1200",
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
        </div>

        <div className="mt-12">
          <AccordionGallery
            items={industries}
            defaultIndex={0}
            expandRatio={0.35}
            trigger="hover"
            height={360}
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
