import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";
import ProjectCard from "@/components/ProjectCard";
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
                  ? "border-brand bg-gradient-to-l from-brand to-brand-deep text-white"
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
                      ? "border-brand bg-gradient-to-l from-brand to-brand-deep text-white"
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
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  name={project.name}
                  image={project.image}
                  context={project.category.replace(/^#\d+\s*·\s*/, "")}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <FinalCta />
    </>
  );
}