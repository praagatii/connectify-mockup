import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Connectify Tech",
  description:
    "Tell us about your project. Connectify Tech — sales@connectify.global, +91 63611 22739.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact Us"
        title="Let's Build Something Great Together"
        description="Tell us about your project. We'd love to hear from you."
      />

      <div className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <a
              href="mailto:sales@connectify.global"
              className="block rounded-2xl border border-white/10 bg-surface p-8 transition-colors hover:border-white/25"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Chat to us
              </h2>
              <p className="mt-3 text-sm text-muted">Our team is here to help.</p>
              <p className="mt-2 font-medium text-white">sales@connectify.global</p>
            </a>

            <a
              href="tel:+916361122739"
              className="block rounded-2xl border border-white/10 bg-surface p-8 transition-colors hover:border-white/25"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Call us
              </h2>
              <p className="mt-3 text-sm text-muted">Mon–Fri, 8am to 10pm</p>
              <p className="mt-2 font-medium text-white">+91 63611 22739</p>
            </a>

            <div className="rounded-2xl border border-white/10 bg-surface p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Visit us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="block font-medium text-white">Bengaluru</span>
                JP Nagar 9th Phase, Bengaluru — 560076
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="block font-medium text-white">Pune</span>
                Hinjawadi Infotech Park, Maharashtra
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-surface p-8 sm:p-10">
              <h2 className="font-inter text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                How can we help?
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fill out the form and we&apos;ll get back within 24 hours.
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