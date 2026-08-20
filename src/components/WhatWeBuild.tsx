import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Digital Solutions",
    description:
      "Full-stack digital product engineering â€” from web and mobile to SaaS and commerce platforms.",
    offerings: "04 offerings",
    href: "/services#digital-solutions",
  },
  {
    number: "02",
    title: "Technology Services",
    description:
      "Cloud, AI and managed technology services that keep platforms reliable and future-ready.",
    offerings: "03 offerings",
    href: "/services#technology-services",
  },
  {
    number: "03",
    title: "Business Advisory",
    description:
      "Strategy and advisory add-ons that turn technology into markets, revenue and enterprise value.",
    offerings: "06 offerings",
    href: "/services#business-advisory",
  },
  {
    number: "04",
    title: "Investment Consulting",
    description:
      "Capital advisory across strategy, debt, equity fundraising and post-raise support.",
    offerings: "04 offerings",
    href: "/services#investment-consulting",
  },
];

export default function WhatWeBuild() {
  return (
    <section id="services-suite" className="relative py-16 pb-40">
      <div data-services-overlay>
        <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 items-start grid-cols-1 lg:grid-cols-12 lg:gap-16">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="lg:sticky lg:top-20"></div>
          </div>

          <div className="lg:col-span-7">
            <h2
              data-services-heading
              className="mb-8 font-inter text-5xl font-extrabold leading-[0.95] tracking-tight text-black lg:sticky lg:top-8 lg:z-10 sm:text-[80px] sm:leading-[0.92] lg:text-[88px]"
            >
              Our <span className="text-brand">Services</span>
            </h2>
            <ol
              data-services-list
              className="divide-y divide-black/10 border-y border-black/10"
            >
              {capabilities.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-6 py-6 transition-colors"
                  >
                    <span className="flex items-baseline gap-5">
                      <span data-fade className="font-mono text-xs text-black/60">
                        {item.number}
                      </span>
                      <span>
                        <span data-fade className="block font-inter text-xl font-semibold text-black transition-colors group-hover:text-brand">
                          {item.title}
                        </span>
                        <span data-fade className="mt-1 block max-w-sm text-sm leading-relaxed text-black/70">
                          {item.description}
                        </span>
                        <span data-fade className="mt-2 block text-xs uppercase tracking-[0.15em] text-black/60">
                          {item.offerings}
                        </span>
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
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-10">
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