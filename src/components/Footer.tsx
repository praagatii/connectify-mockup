import Link from "next/link";

const solutionLinks = [
  { label: "Digital Solutions", href: "/solutions#digital-solutions" },
  { label: "Technology Services", href: "/solutions#technology-services" },
  { label: "Business Advisory", href: "/solutions#business-advisory" },
  { label: "Investment Consulting", href: "/solutions#investment-consulting" },
];

const trainingLinks = [
  { label: "Design Thinking for Teams", href: "/training" },
  { label: "AI for Business", href: "/training" },
  { label: "Engineering Practices", href: "/training" },
];

const quickLinks = [
  { label: "WORKS", href: "/works" },
  { label: "ABOUT", href: "/about" },
  { label: "CAREER", href: "/careers" },
  { label: "RESOURCES", href: "/resources" },
  { label: "GRANTS", href: "/government-grants" },
  { label: "AWARDS", href: "/awards" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <div className="grid gap-12 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/connectifylogo.png"
                alt="Connectify"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Tech consulting company with business advisory and investment
              consulting &mdash; building platforms and guiding growth across
              industries and regions.
            </p>
            <div className="mt-8 flex gap-3">
              {["in", "X", "ig"].map((label) => (
                <span
                  key={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-xs font-semibold text-muted transition-colors hover:border-brand hover:text-black"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Solutions
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-black">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Training
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {trainingLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-black">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 py-8 sm:flex-row">
          <p className="text-xs text-black/40">
            &copy; {new Date().getFullYear()} Connectify. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-black/40">
            <Link href="/privacy-policy" className="transition-colors hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/scam-alert" className="transition-colors hover:text-black">
              Scam Alert
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}