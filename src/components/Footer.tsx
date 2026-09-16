"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-black/10">
      {/* Upper section */}
      <div className="bg-white px-6 pt-16 pb-10 sm:px-10 md:px-16 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-brand" />
            <span className="font-inter text-sm font-medium text-muted">
              Trusted Tech Partner
            </span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group font-inter inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-black"
          >
            <span>Scroll to Top</span>
            <svg
              className="size-4 fill-muted transition-all duration-200 group-hover:fill-black"
              viewBox="0 0 24 24"
            >
              <path d="M12 4l-8 8h5v8h6v-8h5z" />
            </svg>
          </button>
        </div>

        <div className="mt-10 max-w-lg">
          <h2 className="font-inter text-3xl font-bold leading-[1.15] tracking-tight text-black sm:text-4xl">
            Want to collaborate with us, explore our platforms, or just curious
            to know more?
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-8 sm:mt-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-inter text-sm font-medium text-muted">
              Reach out at:
            </span>
            <a
              href="mailto:business@connectify.global"
              className="group inline-flex items-center gap-2 font-inter text-xl font-semibold text-black transition-colors duration-200 hover:text-brand sm:text-2xl"
            >
              <span>business@connectify.global</span>
              <svg
                className="size-5 fill-black transition-all duration-200 group-hover:fill-brand"
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
                className="font-inter text-sm font-semibold text-black transition-colors duration-200 hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}