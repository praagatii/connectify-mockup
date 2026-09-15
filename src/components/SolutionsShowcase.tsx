"use client";

import Link from "next/link";
import { useState } from "react";
import { solutionGroups } from "@/lib/solutions";

export default function SolutionsShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="flex items-center gap-2.5 font-inter text-xs font-medium uppercase tracking-[0.25em] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
              What we do
            </p>
            <h2 className="mt-6 font-inter text-[clamp(32px,4vw,56px)] font-extrabold leading-[0.95] tracking-tight text-black">
              Engineering &amp;
              <br />
              advisory consultancy
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Connectify bridges strategy, engineering, business thinking and
              technology to help organisations build platforms that matter.
            </p>
            <Link
              href="/solutions"
              className="group mt-8 inline-flex items-center gap-2 font-inter text-sm font-semibold"
            >
              <span className="bg-gradient-to-r from-electric to-brand bg-clip-text text-transparent">
                See all solutions
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

          <div className="lg:col-span-7">
            <ol className="flex flex-col gap-4">
              {solutionGroups.map((solution, i) => {
                const isOpen = active === i;
                return (
                  <li key={solution.id}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`w-full rounded-2xl border p-6 text-left transition-colors ${
                        isOpen
                          ? "border-brand/50 bg-surface"
                          : "border-black/[0.06] hover:border-brand/30"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-6">
                        <span className="flex items-baseline gap-5">
                          <span className="font-mono text-xs text-black/50">
                            {solution.index}
                          </span>
                          <span
                            className={`font-inter text-xl font-bold tracking-tight transition-colors ${
                              isOpen ? "text-brand" : "text-black"
                            }`}
                          >
                            {solution.name}
                          </span>
                        </span>
                        <svg
                          className={`h-5 w-5 shrink-0 transition-transform ${
                            isOpen
                              ? "rotate-45 text-brand"
                              : "text-black/30"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                      {isOpen && (
                        <div className="mt-6 overflow-hidden rounded-xl">
                          <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                              <p className="mt-3 text-sm leading-relaxed text-muted">
                                {solution.description}
                              </p>
                              <Link
                                href={solution.href}
                                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                              >
                                <span className="bg-gradient-to-r from-electric to-brand bg-clip-text text-transparent">
                                  Learn more
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
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={solution.image}
                              alt={solution.name}
                              loading="lazy"
                              className="aspect-[4/3] w-full rounded-xl object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}