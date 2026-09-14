import Link from "next/link";

export default function FinalCta() {
  return (
    <section id="start" className="relative z-10 overflow-hidden bg-black py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50rem 32rem at 50% 0%, rgba(82,40,185,0.35), transparent 65%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-3xl px-6 text-center">
        <p className="font-inter text-xs font-medium uppercase tracking-[0.25em] text-white/50">
          Available for new engagements
        </p>
        <h2 className="mt-6 font-inter text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl">
          Let&apos;s build the
          <br />
          <span className="bg-gradient-to-r from-electric via-brand to-white bg-clip-text text-transparent">
            future together.
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/60">
          Ready to unlock your organization&apos;s potential? Partner with
          Connectify to launch your next platform and accelerate growth.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-deep px-8 font-inter text-base font-semibold text-white"
          >
            Start a conversation
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
            href="/case-studies"
            className="inline-flex h-14 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 font-inter text-base font-semibold text-white transition-colors hover:border-white/50"
          >
            Review our portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}