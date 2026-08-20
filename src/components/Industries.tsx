import Link from "next/link";

const platforms = [
  {
    number: "P.01",
    name: "Healthtech",
    description:
      "Clinical, hospital and patient platforms for modern healthcare delivery.",
    count: "04 platforms",
    href: "/products#healthtech",
  },
  {
    number: "P.02",
    name: "Accounting",
    description:
      "Finance and spend platforms for clearer books, smarter automation and controlled expenses.",
    count: "04 platforms",
    href: "/products#accounting",
  },
  {
    number: "P.03",
    name: "SaaS Platforms",
    description:
      "Operational SaaS products for retail, sales, loyalty and public-sector discovery.",
    count: "05 platforms",
    href: "/products#saas-platforms",
  },
  {
    number: "P.04",
    name: "HRtech",
    description:
      "Hiring, learning and secure collaboration platforms for modern workforce teams.",
    count: "03 platforms",
    href: "/products#hrtech",
  },
  {
    number: "P.05",
    name: "Fintech",
    description:
      "Banking and payments infrastructure â€” BaaS, gateways, settlement and card processing.",
    count: "04 platforms",
    href: "/products#fintech",
  },
];

export default function EnterprisePlatforms() {
  return (
    <section id="platforms" className="relative bg-white py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
              02 / Enterprise Platforms
            </p>
            <h3 className="mt-4 font-inter text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
              Industry platforms we build and ship.
            </h3>
          </div>
          <div className="flex flex-col items-start gap-6 sm:items-end">
            <p className="max-w-sm text-sm leading-relaxed text-muted">
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

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.href}
              className="group flex flex-col justify-between gap-10 bg-surface p-8 transition-colors hover:bg-black/5"
            >
              <span className="flex items-center justify-between">
                <span className="font-mono text-xs text-brand">
                  {platform.number}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted">
                  {platform.count}
                </span>
              </span>
              <span className="flex flex-col gap-4">
                <span className="font-inter text-xl font-bold uppercase tracking-tight text-black">
                  {platform.name}
                </span>
                <span className="text-sm leading-relaxed text-muted">
                  {platform.description}
                </span>
                <svg
                  className="h-5 w-5 text-black/30 transition-all group-hover:translate-x-1 group-hover:text-brand"
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