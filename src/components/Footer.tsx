"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Upper section */}
      <div className="relative bg-zinc-950 px-6 pt-8 pb-10 sm:px-10 md:px-16 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-brand" />
            <span className="text-sm font-light text-zinc-50">
              Trusted Tech Partner
            </span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group text-sm inline-flex items-center gap-1.5 font-light tracking-wide text-zinc-200 transition-colors duration-200 hover:text-white"
          >
            <span>Scroll to Top</span>
            <svg
              className="size-4 fill-zinc-200 transition-all duration-200 group-hover:fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 4l-8 8h5v8h6v-8h5z" />
            </svg>
          </button>
        </div>

        <div className="mt-8 max-w-lg sm:mt-10 md:mt-12">
          <h2 className="text-2xl font-light leading-snug tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            Want to collaborate with us, explore our platforms, or just curious
            to know more?
          </h2>
        </div>

        <div className="mt-20 flex flex-col gap-8 sm:mt-24 md:mt-28 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-lg font-light tracking-wide text-zinc-400">
              Reach out at:
            </span>
            <a
              href="mailto:business@connectify.global"
              className="group inline-flex items-center gap-2 text-2xl font-medium text-zinc-200 transition-colors duration-200 hover:text-white"
            >
              <span>business@connectify.global</span>
              <svg
                className="size-6 fill-zinc-200 transition-all duration-200 group-hover:fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
            {[
              { label: "Services", href: "/services" },
              { label: "Products", href: "/products" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-200 transition-colors duration-200 hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Lower section — brand + gradient */}
      <div className="relative bg-zinc-950 px-6 pt-10 pb-12 sm:px-10 md:px-16 lg:px-20 lg:pt-14 lg:pb-16">
        <div className="pointer-events-none absolute right-0 bottom-0 h-full w-3/4 blur-lg sm:w-2/3">
          <div className="absolute right-0 bottom-0 h-full w-full bg-gradient-to-tl from-brand/80 via-brand-deep/30 to-transparent" />
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-brand/40 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-brand-deep/20 blur-3xl" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-6 overflow-hidden sm:flex-row sm:gap-8">
          <div className="hidden shrink-0 sm:block">
            <img
              src="/connectifylogo.png"
              alt="Connectify"
              className="h-20 w-auto opacity-20 lg:h-32"
            />
          </div>

          <svg
            className="h-auto w-full flex-1 select-none"
            viewBox="0 0 900 100"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Connectify"
          >
            <text
              x="0%"
              y="100%"
              dominantBaseline="alphabetic"
              textAnchor="start"
              textLength="90%"
              lengthAdjust="spacing"
              className="fill-white/20 font-sans font-bold tracking-tight"
              fontSize="140"
            >
              Connectify
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
