import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 py-16 sm:grid-cols-12">
          <div className="sm:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/connectifylogo.png"
                alt="Connectify"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Tech consulting company with business advisory and investment
              consulting as add-on expertise &mdash; building platforms and
              guiding growth across industries.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-muted transition-colors hover:border-black/40 hover:text-black"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-muted transition-colors hover:border-black/40 hover:text-black"
              >
                X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-muted transition-colors hover:border-black/40 hover:text-black"
              >
                ig
              </a>
            </div>
          </div>

          <div className="sm:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link href="/services" className="transition-colors hover:text-black">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition-colors hover:text-black">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="transition-colors hover:text-black">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-5">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Reach us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:business@connectify.global"
                  className="transition-colors hover:text-black"
                >
                  business@connectify.global
                </a>
              </li>
              <li>
                <a href="tel:+919834843396" className="transition-colors hover:text-black">
                  +91 98348 43396
                </a>
              </li>
              <li className="leading-relaxed">
                8, Avalahalli Main Road, JP Nagar 9th Phase 3rd Block,
                Bengaluru &mdash; 560076
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 py-8 sm:flex-row">
          <p className="text-xs text-black/40">
            &copy; 2026 Connectify. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-black/40">
            <Link href="/contact" className="transition-colors hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-black">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}