import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

const serviceGroups = [
  {
    id: "digital-solutions",
    group: "Digital Solutions",
    description:
      "Full-stack digital product engineering â€” from web and mobile to SaaS and commerce platforms.",
    services: [
      {
        name: "Web Development",
        description:
          "Modern, high-performance web applications built for scale, security and conversion.",
      },
      {
        name: "Mobile Apps",
        description:
          "Native and cross-platform mobile experiences for iOS and Android.",
      },
      {
        name: "SaaS Solutions",
        description:
          "Multi-tenant SaaS platforms with billing, roles, analytics and enterprise readiness.",
      },
      {
        name: "E-commerce",
        description:
          "Storefronts, catalogues, checkout and omnichannel commerce experiences.",
      },
    ],
  },
  {
    id: "technology-services",
    group: "Technology Services",
    description:
      "Cloud, AI and managed technology services that keep platforms reliable and future-ready.",
    services: [
      {
        name: "Cloud Computing",
        description:
          "Cloud-native architecture, migration and operations on AWS, Azure and GCP.",
      },
      {
        name: "AI/ML and Blockchain",
        description:
          "Intelligent systems, predictive models and distributed ledger solutions.",
      },
      {
        name: "Managed Services",
        description:
          "Ongoing operations, monitoring, SLAs and continuous improvement for live systems.",
      },
    ],
  },
  {
    id: "business-advisory",
    group: "Business Advisory",
    description:
      "Strategy and advisory add-ons that turn technology into markets, revenue and enterprise value.",
    services: [
      {
        name: "Growth Strategy",
        description:
          "End-to-end playbooks that turn market opportunity into sustainable revenue.",
      },
      {
        name: "Product Consulting",
        description:
          "Roadmaps, discovery and product operating models from concept to shipping.",
      },
      {
        name: "Digital Strategy",
        description:
          "Transformation blueprints across banking, healthcare, education and enterprise.",
      },
      {
        name: "Go to Market and Distribution",
        description:
          "Channel design, partner networks and launch programs across geographies.",
      },
      {
        name: "Board Advisory",
        description:
          "Independent counsel to founders, CXOs and boards navigating growth and governance.",
      },
      {
        name: "Market Analysis and Insights",
        description:
          "Deep research on industry segments, competitive maps and buyer intelligence.",
      },
    ],
  },
  {
    id: "investment-consulting",
    group: "Investment Consulting",
    description:
      "Capital advisory across strategy, debt, equity fundraising and post-raise support.",
    services: [
      {
        name: "Investment Strategy",
        description:
          "Capital allocation frameworks and investor-ready investment narratives.",
      },
      {
        name: "Debt Finance Advisory",
        description:
          "Structured debt strategies, lender positioning and term optimisation.",
      },
      {
        name: "Equity Fundraising",
        description:
          "Raise strategy, data rooms, investor intros and term-sheet support.",
      },
      {
        name: "Post Fundraising Support",
        description:
          "Hands-on guidance after the raise â€” governance, reporting and execution.",
      },
    ],
  },
];

export const metadata = {
  title: "Services â€” Connectify",
  description:
    "Digital solutions and technology services at the core â€” business advisory and investment consulting when strategy and capital matter alongside delivery.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Services"
        title="Tech consulting with advisory add-ons."
        description="Digital solutions and technology services at the core â€” business advisory and investment consulting when strategy and capital matter alongside delivery."
      />

      <div className="px-6 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-20">
          <nav className="flex flex-wrap gap-3">
            {serviceGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-black/15 px-4 py-2 text-sm text-muted transition-colors hover:border-black/40 hover:text-black"
              >
                {group.group}
              </a>
            ))}
          </nav>

          {serviceGroups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                {group.group}
              </p>
              <h2 className="mt-3 font-inter text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
                {group.group}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                {group.description}
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {group.services.map((service, i) => (
                  <article
                    key={service.name}
                    className="rounded-2xl border border-black/10 bg-surface p-8"
                  >
                    <span className="font-mono text-xs text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-inter text-xl font-bold tracking-tight text-black">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                    >
                      <span className="bg-gradient-to-r from-electric to-brand bg-clip-text text-transparent">
                        Explore capability
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
                  </article>
                ))}
              </div>
            </section>
          ))}

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-brand/60 to-brand-deep/60 backdrop-blur-md px-8 py-4 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Scope your project
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
          </div>
        </div>
      </div>

      <FinalCta />
    </>
  );
}