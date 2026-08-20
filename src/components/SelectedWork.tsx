import Link from "next/link";

const projects = [
  {
    initial: "T",
    name: "Taurus Career AI",
    category: "AI Platform · Career",
    description:
      "AI-driven, mobile-first career platform combining job discovery, résumé optimization, and community collaboration.",
    tech: ["React Native", "Node.js", "Python", "AWS"],
    href: "/case-studies/taurus-career-ai",
  },
  {
    initial: "F",
    name: "Flycure Health",
    category: "Healthcare",
    description:
      "Cross-platform medical tourism application connecting international patients with accredited hospitals in India.",
    tech: ["Flutter", "Node.js", "Firebase"],
    href: "/case-studies/flycure-health",
  },
  {
    initial: "C",
    name: "Cloud Kitchen POS",
    category: "Enterprise",
    description:
      "Scalable POS system for a top cloud kitchen brand, managing 5 sub-brands and close to 100 kitchens.",
    tech: ["React", "Node.js", "MongoDB"],
    href: "/case-studies/cloud-kitchen-pos",
  },
  {
    initial: "T",
    name: "Trackway",
    category: "IoT / Mobility",
    description:
      "Smart vehicle tracking platform with real-time monitoring, ride data analytics, and support integration.",
    tech: ["React", "Node.js", "MongoDB"],
    href: "/case-studies/vehicle-tracking",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
              03 / Selected Work
            </p>
            <h2 className="mt-6 font-inter text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Real impact. Proven results.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            A selection of platforms we&apos;ve designed, built, and scaled for
            startups and enterprises alike.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
<Link
              key={project.name}
              href={project.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-surface p-8 transition-colors hover:border-white/25"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-10 select-none font-inter text-[10rem] font-black leading-none text-white/[0.03] transition-colors group-hover:text-brand/10"
              >
                {project.initial}
              </span>

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  {project.category}
                </span>
                <svg
                  className="h-5 w-5 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-white"
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

              <div className="relative mt-16">
                <h3 className="font-inter text-2xl font-bold tracking-tight text-white sm:text-3xl">
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
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
</div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 font-inter text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            View all work
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
