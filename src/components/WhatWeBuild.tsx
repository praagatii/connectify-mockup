import Link from "next/link";

const capabilities = [
  {
    title: "Software Products",
    description: "Full-stack web and digital products with robust architecture and API integration.",
    href: "/services#web-application-development",
  },
  {
    title: "Mobile Platforms",
    description: "Native iOS & Android experiences and cross-platform apps.",
    href: "/services#mobile-application-development",
  },
  {
    title: "AI Systems",
    description: "Predictive analytics, NLP, and intelligent automation.",
    href: "/services#ai-ml-solutions",
  },
  {
    title: "SaaS Solutions",
    description: "Cloud-native, multi-tenant platforms with subscription management.",
    href: "/services#saas-solutions",
  },
  {
    title: "Enterprise Solutions",
    description: "Microservices, containers, and AWS architecture & support.",
    href: "/services#cloud-computing",
  },
  {
    title: "Digital Experiences",
    description: "Human-centered UX/UI design that drives engagement.",
    href: "/services#product-consulting",
  },
];

export default function WhatWeBuild() {
  return (
    <section id="build" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
              01 / What We Build
            </p>
            <h2 className="mt-6 font-inter text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              What can we
              <br />
              build for you?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              From idea to deployment, we design and engineer products across the
              full technology stack.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 font-inter text-sm font-semibold text-white underline decoration-white/30 decoration-1 underline-offset-8 transition-colors hover:decoration-white"
            >
              View all services
            </Link>
          </div>

          <div className="lg:col-span-7">
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {capabilities.map((item, i) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-6 py-5 transition-colors"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-white/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block font-inter text-base font-semibold text-white transition-colors group-hover:text-brand sm:text-lg">
                          {item.title}
                        </span>
                        <span className="mt-1 block max-w-sm text-sm leading-relaxed text-muted">
                          {item.description}
                        </span>
                      </span>
                    </span>
                    <svg
                      className="h-4 w-4 flex-none text-white/30 transition-all group-hover:translate-x-1 group-hover:text-white"
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
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}