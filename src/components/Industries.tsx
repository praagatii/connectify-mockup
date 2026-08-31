"use client";

import AccordionGallery from "./AccordionGallery";

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
  return (
    <section id="platforms" className="relative z-10 py-12">
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
          <AccordionGallery items={items} />
        </div>
      </div>
    </section>
  );
}