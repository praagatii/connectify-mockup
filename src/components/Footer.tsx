import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <div className="grid gap-12 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/connectifylogo.png"
                alt="Connectify"
                className="h-12 w-auto invert"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Tech consulting company with business advisory and investment
              consulting as add-on expertise &mdash; building platforms and
              guiding growth across industries.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                ig
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Company
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>
                <Link href="/services" className="transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition-colors hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="transition-colors hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Reach us
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>
                <a
                  href="mailto:business@connectify.global"
                  className="transition-colors hover:text-white"
                >
                  business@connectify.global
                </a>
              </li>
              <li>
                <a href="tel:+919834843396" className="transition-colors hover:text-white">
                  +91 98348 43396
                </a>
              </li>
              <li className="leading-relaxed">
                8, Avalahalli Main Road, JP Nagar 9th Phase 3rd Block,
                Bengaluru &mdash; 560076
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; 2026 Connectify. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/contact" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}