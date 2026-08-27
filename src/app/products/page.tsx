import Link from "next/link";
import { MetalButton } from "@/components/ui/metal-button";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

const categories = [
  {
    id: "healthtech",
    name: "Healthtech",
    description:
      "Clinical, hospital and patient platforms for modern healthcare delivery.",
    count: "04 platforms",
    platforms: [
      "Clinic Management System",
      "Hospital Management System",
      "Post Care Patient Platform",
      "+1 more",
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    description:
      "Finance and spend platforms for clearer books, smarter automation and controlled expenses.",
    count: "04 platforms",
    platforms: [
      "Accounting Bookkeeping Software",
      "AI Accounting Solutions",
      "Expense Management",
      "+1 more",
    ],
  },
  {
    id: "saas-platforms",
    name: "SaaS Platforms",
    description:
      "Operational SaaS products for retail, sales, loyalty and public-sector discovery.",
    count: "05 platforms",
    platforms: ["POS", "Catalogue Management", "Loyalty", "+2 more"],
  },
  {
    id: "hrtech",
    name: "HRtech",
    description:
      "Hiring, learning and secure collaboration platforms for modern workforce teams.",
    count: "03 platforms",
    platforms: ["AI Hiring Platform", "LMS", "Secure Video Meeting Solution"],
  },
  {
    id: "fintech",
    name: "Fintech",
    description:
      "Banking and payments infrastructure — BaaS, gateways, settlement and card processing.",
    count: "04 platforms",
    platforms: ["BaaS", "Payment Gateway", "Payment Settlement", "+1 more"],
  },
];

export const metadata = {
  title: "Products — Connectify",
  description:
    "Choose a category to explore our production-grade enterprise platforms across healthtech, accounting, SaaS, HRtech and fintech.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products Portal"
        title="Industry platforms we build and ship."
        description="Choose a category to explore our production-grade enterprise platforms."
      />

      <div className="px-6 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          {categories.map((category, i) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28 rounded-2xl border border-black/10 bg-surface p-8 sm:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
                    {category.name}
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                    {category.description}
                  </p>
                </div>
                <span className="rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.15em] text-muted">
                  {category.count}
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {category.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-black/10 px-4 py-2 text-sm text-muted"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-2xl border border-black/10 bg-surface p-8 sm:p-10">
            <h2 className="font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
              Need custom development?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              If our standard enterprise platforms don&apos;t fit your exact
              requirements, our consulting and engineering teams can design and
              build custom software tailored specifically to your needs.
            </p>
            <MetalButton variant="outline" asChild className="mt-8 px-8 py-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2"
              >
                Talk to an engineer
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </MetalButton>
          </section>
        </div>
      </div>

      <FinalCta />
    </>
  );
}