import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-end overflow-hidden px-6 pb-20"
    >
      <div className="mx-auto w-full text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted">
          Connectify Tech &middot; Since 2019
        </p>
        <h1 className="mt-6 font-inter text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-[clamp(2.75rem,6.5vw,6.5rem)]">
          <span className="block sm:whitespace-nowrap">Building Technology.</span>
          <span className="block bg-gradient-to-r from-electric to-brand bg-clip-text text-transparent sm:whitespace-nowrap">
            Shaping Tomorrow.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          We partner with ambitious brands to build scalable digital products,
          robust infrastructure, and immersive experiences.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-electric to-brand px-8 py-3.5 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Explore Our Work
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-8 py-3.5 font-inter text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Talk to Us
          </Link>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-8 w-px animate-pulse bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}