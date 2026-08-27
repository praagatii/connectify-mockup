"use client";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MetalButton } from "@/components/ui/metal-button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  LineChart,
  Lightbulb,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/case-studies" },
];

const serviceColumns = [
  {
    icon: Code2,
    title: "Digital Solutions",
    description:
      "Custom platforms engineered for scale, performance, and growth.",
    tags: [
      { label: "Web Apps", href: "/services#digital-solutions" },
      { label: "Mobile", href: "/services#digital-solutions" },
      { label: "APIs", href: "/services#digital-solutions" },
    ],
  },
  {
    icon: Database,
    title: "Technology Services",
    description:
      "Cloud infrastructure, DevOps, and data engineering at enterprise scale.",
    tags: [
      { label: "Cloud", href: "/services#technology-services" },
      { label: "DevOps", href: "/services#technology-services" },
      { label: "Data", href: "/services#technology-services" },
    ],
  },
  {
    icon: LineChart,
    title: "Business Advisory",
    description:
      "Strategic consulting to align technology with business outcomes.",
    tags: [
      { label: "Strategy", href: "/services#business-advisory" },
      { label: "Capital", href: "/services#investment-consulting" },
      { label: "Growth", href: "/services#brand-experience" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative w-full py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 lg:px-12">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverAnchor asChild>
              <div className="flex h-16 w-full items-center justify-between gap-2 rounded-full border-0 bg-transparent pr-4 md:w-5xl lg:w-4xl">
                <div className="flex items-center gap-6 pl-4">
                  <Link href="/" className="flex items-center" aria-label="Connectify">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/connectifylogo.png"
                      alt="Connectify"
                      className="h-14 w-auto"
                    />
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      aria-label={isOpen ? "Close menu" : "Open menu"}
                      className="flex h-9 w-9 items-center justify-center rounded-xl text-black transition-colors hover:bg-black/5"
                    >
                      {isOpen ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <Menu className="h-5 w-5" />
                      )}
                    </button>
                  </PopoverTrigger>

                  <MetalButton
                    variant="outline"
                    asChild
                    className="hidden px-6 py-2.5 lg:inline-flex"
                  >
                    <Link href="/contact" className="items-center gap-2">
                      Let&apos;s Talk
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </MetalButton>
                </div>
              </div>
            </PopoverAnchor>

            <PopoverContent
              align="center"
              sideOffset={20}
              className={cn(
                "max-h-[82dvh] w-xs max-w-none overflow-y-auto overscroll-contain rounded-2xl border border-black/10 bg-white p-0 shadow-none ring-0 sm:w-2xl",
                "lg:w-[calc(100vw-3rem)] lg:max-w-5xl lg:rounded-[2.5rem] lg:shadow-lg"
              )}
            >
              <div className="mx-auto grid w-full max-w-none grid-cols-1 gap-0 px-8 py-6 lg:max-w-5xl lg:grid-cols-4 lg:px-10 lg:py-10">
                {/* Column 1: Featured */}
                <div className="flex flex-col pb-8 lg:pr-8 lg:pb-0">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                    <Lightbulb className="h-5 w-5 text-brand" />
                  </div>
                  <h4 className="mb-1 text-sm font-medium text-black">
                    Connectify
                  </h4>
                  <p className="mb-3 text-sm tracking-tight text-muted">
                    We design, build, and scale digital platforms backed by
                    strategic business and capital advisory.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Banking</Badge>
                    <Badge variant="outline">Fintech</Badge>
                    <Badge variant="outline">Enterprise</Badge>
                  </div>
                </div>

                {/* Column 2: Services */}
                <div className="flex flex-col gap-3 border-t border-black/10 py-8 lg:border-t-0 lg:border-l lg:py-0 lg:pl-8">
                  <h4 className="mb-1 text-xs uppercase tracking-[0.15em] text-muted">
                    Services
                  </h4>
                  {serviceColumns.map((col) => (
                    <Link
                      key={col.title}
                      href={col.tags[0].href}
                      className="group"
                    >
                      <p className="text-sm font-medium tracking-tight text-black transition-colors group-hover:text-brand">
                        {col.title}
                      </p>
                      <p className="text-xs text-muted">{col.description}</p>
                    </Link>
                  ))}
                </div>

                {/* Column 3: Company */}
                <div className="flex flex-col gap-3 border-t border-black/10 py-8 lg:border-t-0 lg:border-l lg:py-0 lg:pl-8">
                  <h4 className="mb-1 text-xs uppercase tracking-[0.15em] text-muted">
                    Company
                  </h4>
                  <Link
                    href="/about"
                    className="text-sm font-medium tracking-tight text-black transition-colors hover:text-brand"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-sm font-medium tracking-tight text-black transition-colors hover:text-brand"
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/services"
                    className="text-sm font-medium tracking-tight text-black transition-colors hover:text-brand"
                  >
                    Products
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium tracking-tight text-black transition-colors hover:text-brand"
                  >
                    Contact
                  </Link>
                </div>

                {/* Column 4: Featured card */}
                <div className="flex flex-col border-t border-black/10 py-8 lg:border-t-0 lg:border-l lg:py-0 lg:pl-8">
                  <h4 className="mb-4 text-xs uppercase tracking-[0.15em] text-muted">
                    Featured
                  </h4>
                  <Link
                    href="/case-studies"
                    className="group relative flex h-full min-h-[160px] flex-col justify-between overflow-hidden rounded-2xl p-6 ring ring-brand/20 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent group-hover:opacity-100" />
                    <div className="absolute inset-0 -z-10 bg-surface" />

                    <div>
                      <Badge variant="outline" className="mb-3 border-brand/30 text-brand">
                        Case Study
                      </Badge>
                      <h4 className="mb-2 text-sm font-semibold text-black">
                        Transforming Banking Infrastructure
                      </h4>
                      <p className="text-sm tracking-tight text-muted">
                        How we built a real-time payments platform for a leading
                        fintech company.
                      </p>
                    </div>

                    <div className="mt-4 flex items-center text-sm font-medium text-brand">
                      View case study{" "}
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-6 pb-8 lg:hidden">
                <MetalButton
                  variant="outline"
                  asChild
                  className="w-full px-6 py-3"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Let&apos;s Talk
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </MetalButton>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
