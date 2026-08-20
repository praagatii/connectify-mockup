import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";
import { projects, industries } from "@/lib/projects";

export const metadata = {
  title: "Case Studies â€” Connectify",
  description:
    "A detailed look at platforms we've engineered and taken to market across fintech, healthtech, govtech, mobility, edtech, enterprise, and more.",
};

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category ? decodeURIComponent(category) : undefined;
  const filtered = active
    ? projects.filter((p) => p.industries.includes(active))
    : projects;

  return (
    <>
      <PageIntro
        eyebrow="Case Studies"
        title="Real impact. Proven results."
        description="A detailed look at platforms we've engineered and taken to market across fintech, healthtech, govtech, mobility, edtech, enterprise, and more."
      />

      <div className="px-6 py-16 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/case-studies"
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                !active
                  ? "border-brand bg-brand text-white"
                  : "border-black/15 text-muted hover:border-black/40 hover:text-black"
              }`}
            >
              All
            </Link>
            {industries.map((industry) => {
              const href = `/case-studies?category=${encodeURIComponent(industry.name)}`;
              const isActive = active === industry.name;
              return (
                <Link
                  key={industry.name}
                  href={href}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "border-brand bg-brand text-white"
                      : "border-black/15 text-muted hover:border-black/40 hover:text-black"
                  }`}
                >
                  {industry.name}
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-12 text-sm text-muted">
              No case studies in this category yet.{" "}
              <Link href="/case-studies" className="text-black underline underline-offset-4">
                View all projects
              </Link>
              .
            </p>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  href={`/case-studies/${project.slug}`}
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
                    <h2 className="font-inter text-xl font-bold tracking-tight text-black">
                      {project.name}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>
                  </div>
                  <div className="relative mt-8 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((t) => (
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
          )}
        </div>
      </div>

      <FinalCta />
    </>
  );
}