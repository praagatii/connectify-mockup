"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const industries = [
  {
    title: "Healthtech",
    src: "/case-studies/flycure-health.jpg",
    link: "/products#healthtech",
  },
  {
    title: "Accounting",
    src: "/case-studies/enpay.jpg",
    link: "/products#accounting",
  },
  {
    title: "SaaS Platforms",
    src: "/case-studies/stackintel.jpg",
    link: "/products#saas-platforms",
  },
  {
    title: "HRtech",
    src: "/case-studies/taurus-career-ai.jpg",
    link: "/products#hrtech",
  },
  {
    title: "Fintech",
    src: "/case-studies/instapay-pos.jpg",
    link: "/products#fintech",
  },
];

const StickyCard = ({
  i,
  title,
  src,
  link,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  link: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center">
      <motion.a
        href={link}
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 120}px)`,
        }}
        className="relative -top-1/4 flex h-[280px] w-[440px] origin-top flex-col overflow-hidden rounded-3xl border border-black/10 shadow-xl"
      >
        <img src={src} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <h3 className="font-inter text-xl font-bold text-white">{title}</h3>
        </div>
      </motion.a>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative flex w-full flex-col items-center justify-center pb-[120vh] pt-[0vh]">
      {industries.map((industry, i) => {
        const targetScale = Math.max(0.5, 1 - (industries.length - i - 1) * 0.1);
        return (
          <StickyCard
            key={`p_${i}`}
            i={i}
            {...industry}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export { Skiper16, StickyCard };