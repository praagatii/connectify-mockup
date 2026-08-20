import Link from "next/link";

const principles = [
  {
    step: "01",
    title: "Engineering-first thinking",
    description:
      "Every decision starts from the architecture. We build systems that hold up, not demos that look good on a slide.",
  },
  {
    step: "02",
    title: "Solutions around the problem",
    description:
      "We start with the problem you actually have, then design the smallest system that solves it properly.",
  },
  {
    step: "03",
    title: "Built for scale",
    description:
      "Technology designed to grow with your business — from day-one loads to peak traffic without rewrites.",
  },
  {
    step: "04",
    title: "Lean, focused execution",
    description:
      "Small, senior teams. Clear scope. Shipping in sprints you can measure — no process for process's sake.",
  },
  {
    step: "05",
    title: "Direct collaboration",
    description:
      "You work with the engineers building your product, not layers of account managers.",
  },
  {
    step: "06",
    title: "Custom systems, not templates",
    description:
      "No off-the-shelf skins. Every platform is engineered for your business, your users, and your constraints.",
  },
];

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "80+", label: "Clients served" },
  { value: "50+", label: "Engineers" },
  { value: "99%", label: "Client satisfaction" },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
          04 / Why Connectify
        </p>
        <div className="mt-6 grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-inter text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Why choose
              <br />
              Connectify?
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              We engineer custom systems around the actual problem — built for
              scale, executed lean, and delivered by the people who write the
              code.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-inter text-sm font-semibold text-white underline decoration-white/30 decoration-1 underline-offset-8 transition-colors hover:decoration-white"
            >
              Discover our story
            </Link>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-surface p-6"
                >
                  <p className="font-inter text-4xl font-black text-brand">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-0">
            {principles.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 border-t border-white/10 py-6 last:border-b"
              >
                <span className="font-mono text-sm text-brand">{item.step}</span>
                <div>
                  <h3 className="font-inter text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}