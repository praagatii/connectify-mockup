"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const mainLinks = [
  { label: "Works", href: "/works" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
];

const moreLinks = [
  { label: "Careers", href: "/careers" },
  { label: "Resources", href: "/resources" },
  { label: "Grants", href: "/government-grants" },
  { label: "Awards", href: "/awards" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    if (moreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [moreOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-white/90 backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 sm:h-[72px] lg:px-10 xl:px-16">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center" aria-label="Connectify">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/connectifylogo.png"
              alt="Connectify"
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-inter text-sm font-semibold text-black transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                className="flex items-center gap-1 font-inter text-sm font-semibold text-black transition-colors hover:text-brand"
              >
                More
                <svg
                  className={`h-3 w-3 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {moreOpen && (
                <div className="absolute left-0 top-full mt-3 w-48 rounded-xl border border-black/10 bg-white p-2 shadow-lg">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-surface hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 font-inter text-sm font-semibold text-white transition-colors hover:bg-brand md:inline-flex"
          >
            Start a Project
            <svg
              className="h-4 w-4"
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
        <div className="border-t border-black/10 bg-white/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-6 py-4">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-inter text-sm font-semibold text-black transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            {moreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 pl-8 font-inter text-sm text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-black px-3 py-3 font-inter text-sm font-semibold text-white"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}