import Link from "next/link";

const platforms = [
  {
    name: "Healthtech",
    description:
      "Clinical, hospital and patient platforms for modern healthcare delivery.",
    href: "/products#healthtech",
  },
  {
    name: "Accounting",
    description:
      "Finance and spend platforms for clearer books, smarter automation and controlled expenses.",
    href: "/products#accounting",
  },
  {
    name: "SaaS Platforms",
    description:
      "Operational SaaS products for retail, sales, loyalty and public-sector discovery.",
    href: "/products#saas-platforms",
  },
  {
    name: "HRtech",
    description:
      "Hiring, learning and secure collaboration platforms for modern workforce teams.",
    href: "/products#hrtech",
  },
  {
    name: "Fintech",
    description:
      "Banking and payments infrastructure — BaaS, gateways, settlement and card processing.",
    href: "/products#fintech",
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
          <div className="flex flex-col items-start gap-6 sm:items-end">
            <p className="max-w-sm text-base leading-relaxed text-muted">
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