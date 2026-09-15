import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { solutionGroups } from "@/lib/solutions";

const serviceGroups = [
  {
    id: "digital-solutions",
    group: "Digital Solutions",
    description:
      "Full-stack digital product engineering — from web and mobile to SaaS and commerce platforms.",
    services: [
      { name: "Web Development" },
      { name: "Mobile Apps" },
      { name: "SaaS Solutions" },
      { name: "E-commerce" },
    ],
  },
  {
    id: "technology-services",
    group: "Technology Services",
    description:
      "Cloud, AI and managed technology services that keep platforms reliable and future-ready.",
    services: [
      { name: "Cloud Computing" },
      { name: "AI/ML and Blockchain" },
      { name: "Managed Services" },
    ],
  },
  {
    id: "business-advisory",
    group: "Business Advisory",
    description:
      "Strategy and advisory add-ons that turn technology into markets, revenue and enterprise value.",
    services: [
      { name: "Growth Strategy" },
      { name: "Product Consulting" },
      { name: "Digital Strategy" },
      { name: "Go to Market and Distribution" },
      { name: "Board Advisory" },
      { name: "Market Analysis and Insights" },
    ],
  },
  {
    id: "investment-consulting",
    group: "Investment Consulting",
    description:
      "Capital advisory across strategy, debt, equity fundraising and post-raise support.",
    services: [
      { name: "Investment Strategy" },
      { name: "Debt Finance Advisory" },
      { name: "Equity Fundraising" },
      { name: "Post Fundraising Support" },
    ],
  },
];

export const metadata = {
  title: "Solutions — Connectify",
  description:
    "Digital solutions and technology services at the core — business advisory and investment consulting when strategy and capital matter alongside delivery.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Solutions"
        title="Engineering and advisory, built together."
        description="Digital solutions and technology services at the core — business advisory and investment consulting when strategy and capital matter alongside delivery."
      />

      <div className="px-6 py-20">
        <div className="mx-auto w-full max-w-[1440px] space-y-24">
          <nav className="flex flex-wrap gap-3">
            {solutionGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-black/15 px-4 py-2 text-sm text-muted transition-colors hover:border-black/40 hover:text-black"
              >
                {group.name}
              </a>
            ))}
          </nav>

          {serviceGroups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-28">
              <p className="flex items-center gap-2.5 font-inter text-xs font-medium uppercase tracking-[0.25em] text-muted">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                {group.group}
              </p>
              <h2 className="mt-6 font-inter text-4xl font-extrabold leading-[1.02] tracking-tight text-black sm:text-5xl">
                {group.group}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {group.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {group.services.map((service) => (
                  <Link
                    key={service.name}
                    href="/contact"
                    className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-surface px-6 py-4 transition-colors hover:border-brand/50"
                  >
                    <span className="font-inter text-sm font-semibold text-black">
                      {service.name}
                    </span>
                    <svg
                      className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
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
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}