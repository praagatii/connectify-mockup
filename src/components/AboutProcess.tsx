const stats = [
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
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-muted">
              About Connectify
            </p>
            <h2 className="mt-4 font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
              We Strive To Offer{" "}
              <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">
                Intelligent Business Solutions
              </span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              We are a team of passionate engineers, designers, and strategists
              committed to transforming your visionary ideas into robust digital
              platforms. Our innovative approach ensures that every solution we
              craft is strictly aligned with your business objectives.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <h3 className="font-inter text-sm font-bold text-black">
                  Best Services
                </h3>
                <p className="mt-1 max-w-60 text-sm text-muted">
                  Top-tier quality and seamless performance across all platforms.
                </p>
              </div>
              <div>
                <h3 className="font-inter text-sm font-bold text-black">
                  24/7 Support
                </h3>
                <p className="mt-1 max-w-60 text-sm text-muted">
                  Dedicated technical assistance available anytime you need it.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 self-center rounded-2xl border border-black/[0.06] bg-surface p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text font-inter text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Our Process
          </p>
          <h2 className="mt-4 max-w-2xl font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
            Transforming Ideas into{" "}
            <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            At Connectify, we don&apos;t just write code — our approach combines
            in-depth industry knowledge, innovative thinking, and a
            client-centric methodology. We partner with you every step of the
            way, transforming bottlenecks into scalable digital workflows.
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
                <h3 className="mt-3 font-inter text-lg font-bold text-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
