const highlights = [
  { value: "150+", label: "Team Members" },
  { value: "500+", label: "Happy Clients" },
  { value: "99%", label: "Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 bg-white pt-16 pb-24">
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
          platforms. Every solution we craft is strictly aligned with your
          business objectives.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-l from-electric via-brand to-brand-deep p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-8">
            <div className="max-w-56">
              <h3 className="font-inter text-sm font-bold text-white">
                Best Services
              </h3>
              <p className="mt-1 text-sm text-white/70">
                Top-tier quality and seamless performance across all platforms.
              </p>
            </div>
            <div className="max-w-56">
              <h3 className="font-inter text-sm font-bold text-white">
                24/7 Support
              </h3>
              <p className="mt-1 text-sm text-white/70">
                Dedicated technical assistance available anytime you need it.
              </p>
            </div>
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="font-inter text-3xl font-extrabold tracking-tight text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
