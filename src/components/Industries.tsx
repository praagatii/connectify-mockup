import Link from "next/link";

const industries = [
  {
    name: "Fintech",
    count: "10+ projects",
    description:
      "Payment platforms, digital banking, and secure financial infrastructure.",
    href: "/case-studies?category=Fintech",
  },
  {
    name: "Edtech",
    count: "3+ projects",
    description: "Learning platforms and assessment systems for modern education.",
    href: "/case-studies?category=Edtech",
  },
  {
    name: "Healthtech",
    count: "2+ projects",
    description:
      "Patient platforms and hospital systems that connect care to people.",
    href: "/case-studies?category=Healthtech",
  },
  {
    name: "Mobility",
    count: "3+ projects",
    description:
      "Vehicle tracking, fleet intelligence, and real-time logistics.",
    href: "/case-studies?category=Mobility",
  },
  {
    name: "Enterprise",
    count: "5+ projects",
    description:
      "Operations platforms and POS systems built for scale and uptime.",
    href: "/case-studies?category=Enterprise",
  },
  {
    name: "Retail & E-Commerce",
    count: "4+ projects",
    description: "Commerce platforms, loyalty systems, and store operations.",
    href: "/case-studies?category=Retail%20%26%20E-Com",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
              02 / Industries
            </p>
            <h3 className="mt-4 font-inter text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Where we apply it
            </h3>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Deep expertise across sectors — building tailored platforms for the
            unique problems each industry faces.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="group flex flex-col justify-between gap-10 bg-surface p-8 transition-colors hover:bg-[#101b30]"
            >
              <span className="text-sm text-muted">{industry.count}</span>
              <span className="flex flex-col gap-4">
                <span className="font-inter text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                  {industry.name}
                </span>
                <span className="text-sm leading-relaxed text-muted">
                  {industry.description}
                </span>
                <svg
                  className="h-5 w-5 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-brand"
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
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}