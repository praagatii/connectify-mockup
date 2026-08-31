"use client";

import { Skiper17 } from "@/components/ui/skiper-ui/skiper17";

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

        <div className="mt-12" data-skiper-reveal>
          <Skiper17 />
        </div>
      </div>
    </section>
  );
}