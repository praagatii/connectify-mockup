import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/connectifylogo.png"
                alt="Connectify Tech"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              We are not just building tech — we are building future. Your
              trusted technology partner since 2019.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-muted transition-colors hover:border-white/40 hover:text-white"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-muted transition-colors hover:border-white/40 hover:text-white"
              >
                X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-muted transition-colors hover:border-white/40 hover:text-white"
              >
                ig
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              What We Build
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link href="/services" className="transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/services#saas-solutions" className="transition-colors hover:text-white">
                  SaaS Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-computing" className="transition-colors hover:text-white">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link href="/services#ai-ml-solutions" className="transition-colors hover:text-white">
                  AI / ML
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Industries
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link href="/case-studies?category=Fintech" className="transition-colors hover:text-white">
                  Fintech
                </Link>
              </li>
              <li>
                <Link href="/case-studies?category=Healthtech" className="transition-colors hover:text-white">
                  Healthtech
                </Link>
              </li>
              <li>
                <Link href="/case-studies?category=Mobility" className="transition-colors hover:text-white">
                  Mobility
                </Link>
              </li>
              <li>
                <Link href="/case-studies?category=Enterprise" className="transition-colors hover:text-white">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="transition-colors hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a href="mailto:sales@connectify.global" className="transition-colors hover:text-white">
                  sales@connectify.global
                </a>
              </li>
              <li>
                <a href="tel:+916361122739" className="transition-colors hover:text-white">
                  +91 63611 22739
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 Connectify Tech. All rights reserved.
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