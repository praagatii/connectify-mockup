const highlights = [
  { value: "150+", label: "Team Members" },
  { value: "500+", label: "Happy Clients" },
  { value: "99%", label: "Satisfaction" },
];

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

export default function AboutProcess() {
  return (
    <section id="about-process" className="relative z-10 bg-white py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-muted">
          About Connectify
        </p>
        <h2 className="mt-4 max-w-3xl font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
          We Strive To Offer{" "}
          <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">
            Intelligent Business Solutions
          </span>
        </h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">
          We are a team of passionate engineers, designers, and strategists
          committed to transforming your visionary ideas into robust digital
          platforms. From the first consultation to deployment and beyond, our
          client-centric approach turns bottlenecks into scalable digital
          workflows — with top-tier quality across every platform and dedicated
          support available 24/7.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-14 gap-y-8 border-t border-black/10 pt-8">
          {highlights.map((item) => (
            <div key={item.label}>
              <p className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text font-inter text-3xl font-extrabold tracking-tight text-transparent">
                {item.value}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 font-inter text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Our Process
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
