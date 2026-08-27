import Link from "next/link";
import { HoverMetalButton } from "@/components/ui/hover-metal-button";

export default function FinalCta() {
  return (
    <section id="start" className="relative z-10 overflow-hidden py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(40rem 30rem at 50% 0%, rgba(82,40,185,0.18), transparent 65%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Available for new engagements
        </p>
        <h2 className="mt-6 font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
          Let&apos;s build the
          <br />
          <span className="bg-gradient-to-l from-brand to-brand-deep bg-clip-text text-transparent">
            future together.
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted">
          Ready to unlock your organization&apos;s potential? Partner with
          Connectify to launch your next platform and accelerate growth.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <HoverMetalButton variant="outline" asChild className="px-8 py-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2"
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
          </HoverMetalButton>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-lg border border-black/25 px-8 py-4 font-inter text-sm font-semibold text-black transition-colors hover:border-black/50 hover:bg-black/5"
          >
            Review our portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}