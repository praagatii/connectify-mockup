"use client";

import Link from "next/link";
import { useState } from "react";
import { HoverMetalButton } from "@/components/ui/hover-metal-button";

const links = [
  { label: "Work", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/case-studies" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:h-24 lg:px-12">
        <Link href="/" className="flex items-center" aria-label="ConnectifyTech">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/connectifylogo.png" alt="ConnectifyTech" className="h-16 w-auto sm:h-20" />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-inter text-sm font-semibold text-black transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <HoverMetalButton variant="outline" asChild className="hidden px-6 py-2.5 md:inline-flex">
            <Link
              href="/contact"
              className="items-center gap-2"
            >
              Let&apos;s Talk
              <svg
                className="ml-2 h-4 w-4"
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
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-black md:hidden"
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
        <div className="border-t border-black/10 bg-white/90 backdrop-blur-md md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-inter text-sm font-semibold text-muted transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            ))}
            <HoverMetalButton variant="outline" asChild className="mt-2 px-3 py-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2"
              >
                Let&apos;s Talk
              </Link>
            </HoverMetalButton>
          </div>
        </div>
      )}
    </header>
  );
}
