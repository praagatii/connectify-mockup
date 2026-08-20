import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

const storyStats = [
  { value: "2019", label: "Founded" },
  { value: "50+", label: "Engineers" },
  { value: "80+", label: "Clients" },
  { value: "2", label: "Offices" },
];

const founders = [
  {
    initials: "BK",
    name: "Bhuvan Koulagi",
    role: "Business Development and Marketing",
    bio: "Co-Founder, Connectify. Former Business Development Officer, Director at Excellent Neet Academy, and CBO at The Ticketing.",
  },
  {
    initials: "AD",
    name: "Abhay Desai",
    role: "Tech Development",
    bio: "Co-Founder, Connectify. Former CTO at The Ticketing, VP Product at StackIntel, and Technical Specialist.",
  },
  {
    initials: "CS",
    name: "Chiragsovi SV",
    role: "Chief Product Officer",
    bio: "Co-Founder, Connectify. Former CPTO at Unicred, Product Lead at Novopay (Trustt), Infra.market, and ex-Deloitte.",
  },
];

const advisors = [
  { initials: "KM", name: "Kiran Mahuli", role: "Director at Wells Fargo" },
  { initials: "GR", name: "Gokul Rangababu", role: "IT Executive Leader" },
  {
    initials: "PK",
    name: "Pankaj Kumar",
    role: "Fintech Entrepreneur · Angel Investor",
    bio: "Among the Top 50 most influential payment professionals. Startup advisor.",
  },
  {
    initials: "DA",
    name: "Devkant Aggarwal",
    role: "Leader, Growth Initiatives",
    bio: "Career Education, I/SA at IBM India Pvt Ltd.",
  },
];

export const metadata = {
  title: "About — Connectify Tech",
  description:
    "Building possibilities since 2019. Meet the team behind Connectify Tech and learn how we turn ideas into powerful digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="Building Possibilities Since 2019"
        description="We're not just building tech — we're building possibilities. Helping businesses turn ideas into powerful digital solutions."
      />

      <div className="px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl space-y-20">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Our Story
            </h2>
            <h3 className="mt-4 font-inter text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              Engineering the Future
            </h3>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Since 2019, we&apos;ve blended innovation with rigorous execution
              to deliver amazing digital products. What began as a small,
              passionate team of developers has evolved into a global
              powerhouse of digital innovation. We realized early on that
              businesses don&apos;t just need code — they need partners who
              understand their vision and can execute with outstanding
              precision.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              Our approach is simple but rigorous: we listen closely, build
              meticulously, and deploy seamlessly. Whether we&apos;re architecting
              scalable cloud infrastructure, designing intuitive mobile
              experiences, or training complex AI models, our commitment to
              engineering excellence remains the same.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {storyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-surface p-6"
                >
                  <p className="font-inter text-4xl font-black text-brand">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-surface p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                Our Mission
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                To empower businesses with transformative technology solutions
                that drive growth, efficiency, and innovation — making
                enterprise-grade software accessible to companies of all sizes.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                Our Vision
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                To be the go-to technology partner for ambitious companies
                worldwide, known for delivering exceptional digital products
                that shape industries and create lasting impact.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Leadership
            </h2>
            <h3 className="mt-4 font-inter text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              Meet our team
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {founders.map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl border border-white/10 bg-surface p-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric to-brand font-inter text-sm font-bold text-white">
                    {person.initials}
                  </span>
                  <h4 className="mt-5 font-inter text-lg font-semibold text-white">
                    {person.name}
                  </h4>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {person.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Chief Advisories
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {advisors.map((person) => (
                <div
                  key={person.name}
                  className="rounded-2xl border border-white/10 bg-surface p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 font-inter text-xs font-bold text-white">
                    {person.initials}
                  </span>
                  <h4 className="mt-4 font-inter text-base font-semibold text-white">
                    {person.name}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/40">
                    {person.role}
                  </p>
                  {person.bio ? (
                    <p className="mt-3 text-xs leading-relaxed text-white/40">
                      {person.bio}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Locations
            </h2>
            <h3 className="mt-4 font-inter text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              Our offices
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-surface p-8">
                <h4 className="font-inter text-xl font-bold text-white">Bengaluru</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Avalahalli Main Road, JP Nagar 9th Phase, 3rd Block,
                  Bengaluru — 560076
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface p-8">
                <h4 className="font-inter text-xl font-bold text-white">Pune</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi,
                  Pimpri-Chinchwad, Maharashtra
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <FinalCta />
    </>
  );
}