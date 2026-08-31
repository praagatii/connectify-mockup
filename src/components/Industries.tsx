"use client";

import { useEffect, useState } from "react";
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
  const [height, setHeight] = useState(400);

  useEffect(() => {
    const update = () => setHeight(Math.round(window.innerHeight * 0.55));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="platforms" className="relative z-10 py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
              Industries
            </h2>
          </div>
        </div>

        <div className="mt-8">
          <AccordionGallery items={items} height={height} />
        </div>
      </div>
    </section>
  );
}