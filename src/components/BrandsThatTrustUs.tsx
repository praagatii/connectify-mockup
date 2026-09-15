const logos = [
  { src: "/clients/AU-Bank-new-logo-for-GBM_1024X1024_(cropped).png", alt: "AU Bank" },
  { src: "/clients/BankofAbyssinia-logo.jpg", alt: "Bank of Abyssinia" },
  { src: "/clients/Hyundai-Logo-2011.png", alt: "Hyundai" },
  { src: "/clients/ITC_Limited_Logo.svg.png", alt: "ITC Limited" },
  { src: "/clients/Integra Micro Systems_logo.png", alt: "Integra Micro Systems" },
  { src: "/clients/Nium_1200x675-768x432.jpg", alt: "Nium" },
  { src: "/clients/Rapido-business-model.jpg", alt: "Rapido" },
  { src: "/clients/Vijaya_Bank.svg.png", alt: "Vijaya Bank" },
  { src: "/clients/_5215_centrum-capital_owler_20171005_044543_original.jpg", alt: "Centrum Capital" },
  { src: "/clients/andhra_bank.png", alt: "Andhra Bank" },
  { src: "/clients/fidypaylogo.ad923170.png", alt: "FidyPay" },
  { src: "/clients/instapay.png", alt: "InstaPay" },
  { src: "/clients/mego_pay.png", alt: "Mego Pay" },
  { src: "/clients/Namma_metro.svg.png", alt: "Namma Metro" },
  { src: "/clients/The-Karnataka-Government-Kannada-Logo-Vector.svg-.png", alt: "Karnataka Government" },
];

export default function BrandsThatTrustUs() {
  return (
    <section className="relative z-10 bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        <p className="flex items-center gap-2.5 font-inter text-xs font-medium uppercase tracking-[0.25em] text-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          Brands that trust us
        </p>
        <div className="mt-10 grid grid-cols-3 gap-x-12 gap-y-10 sm:grid-cols-4 lg:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-14 items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-full w-auto max-w-full object-contain opacity-50 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}