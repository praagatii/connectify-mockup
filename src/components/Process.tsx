const steps = [
  {
    title: "Consultation",
    body: "We understand your goals, challenges, and target audience to define the scope.",
  },
  {
    title: "Strategy & Design",
    body: "Crafting intuitive UX/UI and architecture plans before writing a single line of code.",
  },
  {
    title: "Implementation",
    body: "Writing clean, scalable code wrapped in robust security architectures.",
  },
  {
    title: "Deployment",
    body: "Rigorous testing and seamless deployment, followed by 24/7 maintenance.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative z-10 bg-white pt-8 pb-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Our Process
        </p>
        <h2 className="mt-4 max-w-3xl font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
          Transforming Ideas into{" "}
          <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">
          At Connectify, we don&apos;t just write code — our approach combines
          in-depth industry knowledge, innovative thinking, and a client-centric
          methodology. We partner with you every step of the way to ensure your
          business reaches its full potential.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-xl border border-black/[0.06] bg-white p-6 transition-colors hover:border-brand/40"
            >
              <p className="bg-gradient-to-l from-electric to-brand bg-clip-text font-inter text-2xl font-extrabold text-transparent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-inter text-base font-bold text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
