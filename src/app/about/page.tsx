import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

const differentiators = [
  {
    title: "Specialisation",
    description:
      "Our focus on the Fintech, Banking & BFSI space means we understand the unique challenges and opportunities facing your industry.",
  },
  {
    title: "Innovation",
    description:
      "We thrive on innovation, harnessing the latest technologies, trends, and strategies to deliver forward-thinking solutions that drive real results.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of partnership, working closely with clients to co-create solutions that are tailor-made for their needs and objectives.",
  },
  {
    title: "Results",
    description:
      "Our track record speaks for itself. From boosting profitability to enhancing customer experiences, we're dedicated to delivering measurable outcomes that propel our clients to new heights of success.",
  },
];

const reasons = [
  {
    title: "Expertise",
    description:
      "Our team comprises seasoned professionals with a proven track record of success in growth strategy and investment consulting.",
  },
  {
    title: "Customised Solutions",
    description:
      "We understand that every client is unique, and we tailor our services to meet their specific needs and objectives.",
  },
  {
    title: "Results-Oriented",
    description:
      "We are committed to delivering tangible results that drive sustainable growth and maximise investment returns.",
  },
  {
    title: "Collaborative Approach",
    description:
      "We partner closely with clients, acting as an extension of their team, to ensure alignment and success.",
  },
  {
    title: "Integrity and Trust",
    description:
      "We operate with the highest standards of integrity, transparency, and professionalism, earning the trust and confidence of our clients.",
  },
];

export const metadata = {
  title: "About â€” Connectify",
  description:
    "Your strategic partner in the Banking & Fintech revolution â€” a boutique consultancy with strategy, investment, and technology expertise.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Connectify"
        title="Who we are â€” and why clients choose us."
        description="Your strategic partner in the Banking & Fintech revolution â€” a boutique consultancy with strategy, investment, and technology expertise."
      />

      <div className="px-6 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-20">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
              Who We Are
            </h2>
            <h3 className="mt-4 font-inter text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
              Your strategic partner
            </h3>
            <div className="mt-8 max-w-3xl space-y-6">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Connectify is a new-age boutique consultancy firm comprised of
                strategy and investment consulting. Our team brings together
                diverse backgrounds and expertise from various industries,
                including Banking &amp; Financial Services, Technology,
                Healthcare, and beyond. With a deep understanding of market
                dynamics, emerging trends, and investment opportunities, we
                offer strategic insights and actionable recommendations that
                drive long-term value for our clients.
              </p>
              <p className="text-base leading-relaxed text-muted">
                At Connectify, we believe in taking a holistic approach to
                growth and investment consulting. We work closely with clients
                to understand their unique challenges, goals, and opportunities,
                allowing us to develop tailored strategies that align with their
                vision and drive sustainable results. Whether it&apos;s
                identifying new market opportunities, optimising investment
                portfolios, or executing growth initiatives, we leverage our
                expertise and industry insights to deliver measurable impact.
              </p>
              <p className="text-base leading-relaxed text-muted">
                We take a holistic approach to consulting, blending deep
                industry expertise with a passion for innovation and a
                commitment to excellence. From disruptive startups to
                established financial institutions, we partner with clients
                across the BFSI spectrum to unlock opportunities, drive growth,
                and shape the future of finance.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
              Our Approach
            </h2>
            <h3 className="mt-4 font-inter text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
              What sets us apart
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-surface p-8"
                >
                  <h4 className="font-inter text-xl font-semibold text-black">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
              Why Choose Us
            </h2>
            <h3 className="mt-4 font-inter text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
              Why choose Connectify?
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              In the rapidly evolving world of finance, staying ahead requires
              more than just keeping pace â€” it demands vision, agility, and
              strategic acumen. With a finger on the pulse of the Fintech
              revolution, we offer cutting-edge solutions, tailored strategies,
              and actionable insights to help you navigate the complexities of
              today&apos;s digital-first economy.
            </p>
            <div className="mt-8 space-y-0">
              {reasons.map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-6 border-t border-black/10 py-6 last:border-b"
                >
                  <span className="font-mono text-sm text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-inter text-xl font-semibold text-black">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-brand to-brand-deep px-8 py-4 font-inter text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Work with us
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </div>
        </div>
      </div>

      <FinalCta />
    </>
  );
}