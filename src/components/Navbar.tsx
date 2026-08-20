"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "What We Build", href: "/services" },
  { label: "Industries", href: "/case-studies" },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label="Connectify Tech">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/connectifylogo.png" alt="Connectify Tech" className="h-16 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-inter text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-gradient-to-r from-electric to-brand px-5 py-2.5 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-white md:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-current transition-transform ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/80 backdrop-blur-md md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-inter text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-gradient-to-r from-electric to-brand px-3 py-3 text-center font-inter text-sm font-semibold text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}