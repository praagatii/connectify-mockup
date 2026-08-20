import Link from "next/link";

export default function FinalCta() {
  return (
    <section id="start" className="relative overflow-hidden py-32 sm:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(40rem 30rem at 50% 0%, rgba(82,40,185,0.18), transparent 65%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <h2 className="font-inter text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Have a problem
          <br />
          <span className="bg-gradient-to-r from-electric to-brand bg-clip-text text-transparent">
            worth solving?
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Tell us about your project. We&apos;ll come back with a clear,
          engineering-first plan — not a sales pitch.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-electric to-brand px-8 py-4 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
        </div>
      </div>
    </section>
  );
}