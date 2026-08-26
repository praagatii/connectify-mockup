import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact â€” Connectify",
  description:
    "Questions or a new engagement? Send a message or reach us directly â€” business@connectify.global, +91 98348 43396.",
};

const openingHours = [
  { days: "Monday - Friday", hours: "9:00 - 18:00" },
  { days: "Saturday", hours: "9:00 - 16:00" },
  { days: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Get in touch"
        description="Questions or a new engagement? Send a message or reach us directly."
      />

      <div className="px-6 py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 sm:grid-cols-5">
          <div className="space-y-6 sm:col-span-2">
            <a
              href="tel:+919834843396"
              className="block rounded-2xl border border-black/10 bg-surface p-8 transition-colors hover:border-white/25"
            >
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Phone
              </h2>
              <p className="mt-3 text-sm text-muted">Call us directly.</p>
              <p className="mt-2 font-medium text-black">+91 98348 43396</p>
            </a>

            <a
              href="mailto:business@connectify.global"
              className="block rounded-2xl border border-black/10 bg-surface p-8 transition-colors hover:border-white/25"
            >
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Email
              </h2>
              <p className="mt-3 text-sm text-muted">Drop us a message.</p>
              <p className="mt-2 font-medium text-black">
                business@connectify.global
              </p>
            </a>

            <div className="rounded-2xl border border-black/10 bg-surface p-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Address
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                8, Avalahalli Main Road, JP Nagar 9th Phase 3rd Block,
                Bengaluru &mdash; 560076
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-surface p-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Opening hours
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {openingHours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-4">
                    <span>{row.days}</span>
                    <span className="text-black">{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sm:col-span-3">
            <div className="rounded-2xl border border-black/10 bg-surface p-8 sm:p-10">
              <h2 className="font-inter text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fill out the form and we&apos;ll get back to you.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}