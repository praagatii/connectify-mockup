import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { HoverMetalButton } from "@/components/ui/hover-metal-button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} â€” Connectify Case Study`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <header className="border-b border-black/10 px-6 pb-20 pt-36">
        <div className="mx-auto w-full max-w-4xl">
          <Link
            href="/case-studies"
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-black"
          >
            â† All case studies
          </Link>
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {project.category}
          </p>
          <h1 className="mt-6 font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
      </header>

      <div className="px-6 py-16 py-20">
        <div className="mx-auto w-full max-w-4xl space-y-16">
          <div className="overflow-hidden rounded-2xl border border-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.name}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <section>
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {project.overview}
            </p>
          </section>

          <section className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-surface p-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                The Challenge
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.challenge}
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-surface p-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Our Solution
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.solution}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Tech Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          <div className="border-t border-black/10 pt-10">
            <HoverMetalButton variant="outline" asChild className="px-8 py-4">
              <Link href="/contact">
                Build something like this
              </Link>
            </HoverMetalButton>
          </div>
        </div>
      </div>
    </>
  );
}