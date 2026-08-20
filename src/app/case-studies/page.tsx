import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";
import { projects, industries } from "@/lib/projects";

export const metadata = {
  title: "Case Studies — Connectify Tech",
  description:
    "Explore how Connectify Tech has helped startups and enterprises scale with real impact and proven results.",
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
        eyebrow="Our Work"
        title="Real Impact. Proven Results."
        description="Explore how we've helped startups and enterprises alike scale and innovate."
      />

      <div className="px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/case-studies"
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                !active
                  ? "border-brand bg-brand/10 text-white"
                  : "border-white/15 text-muted hover:border-white/40 hover:text-white"
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
                      ? "border-brand bg-brand/10 text-white"
                      : "border-white/15 text-muted hover:border-white/40 hover:text-white"
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
              <Link href="/case-studies" className="text-white underline underline-offset-4">
                View all projects
              </Link>
              .
            </p>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  href={`/case-studies/${project.slug}`}
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
                    <h2 className="font-inter text-2xl font-bold tracking-tight text-white sm:text-3xl">
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
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
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