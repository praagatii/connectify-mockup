import Link from "next/link";

const projects = [
  {
    initial: "K",
    name: "Karnataka Statewide Survey Platform",
    image: "/clients/The-Karnataka-Government-Kannada-Logo-Vector.svg-.png",
    category: "GovTech Â· Karnataka Socio-Educational Survey",
    description:
      "Enterprise-grade digital platform powering the Government of Karnataka's statewide socio-educational survey covering millions of households.",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
    href: "/case-studies/karnataka-statewide-survey-platform",
  },
  {
    initial: "T",
    name: "Taurus Career AI",
    image: "/case-studies/taurus-career-ai.jpg",
    category: "AI Platform Â· Career",
    description:
      "AI-driven, mobile-first career platform combining job discovery, rÃ©sumÃ© optimization, and community collaboration.",
    tech: ["React Native", "Node.js", "Python"],
    href: "/case-studies/taurus-career-ai",
  },
  {
    initial: "F",
    name: "Flycure Health",
    image: "/case-studies/flycure-health.jpg",
    category: "Healthcare Â· Medical Tourism",
    description:
      "Cross-platform medical tourism application connecting international patients with accredited hospitals in India.",
    tech: ["Flutter", "Node.js", "Firebase"],
    href: "/case-studies/flycure-health",
  },
  {
    initial: "C",
    name: "Cloud Kitchen POS",
    image: "/case-studies/cloud-kitchen-pos.jpg",
    category: "Enterprise Â· FoodTech",
    description:
      "Scalable POS system for a top cloud kitchen brand, managing 5 sub-brands and close to 100 kitchens.",
    tech: ["React", "Node.js", "MongoDB"],
    href: "/case-studies/cloud-kitchen-pos",
  },
  {
    initial: "C",
    name: "Contractor Loyalty App",
    image: "/case-studies/contractor-loyalty-app.jpg",
    category: "Enterprise Â· ConstructionTech",
    description:
      "Digital loyalty application fostering stronger contractor relationships through a points-based rewards system.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    href: "/case-studies/contractor-loyalty-app",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative z-10 bg-white py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
              03 / Portfolio
            </p>
            <h2 className="mt-6 font-inter text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
              Real impact. Proven results.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Platforms we&apos;ve engineered across fintech, govtech, healthtech,
            mobility and enterprise.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-surface transition-colors hover:border-white/25"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between p-8 pt-6">
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  {project.category}
                </span>
                <svg
                  className="h-5 w-5 text-black/30 transition-all group-hover:translate-x-1 group-hover:text-black"
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
              </div>

              <div className="relative mt-6">
                <h3 className="font-inter text-xl font-bold tracking-tight text-black">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-lg border border-black/20 px-8 py-3.5 font-inter text-sm font-semibold text-black transition-colors hover:border-black/40 hover:bg-black/5"
          >
            See all case studies
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
    </section>
  );
}