const clients = [
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

export default function TrustedBy() {
  const logos = [...clients, ...clients];

  return (
    <section className="relative z-10 bg-white pt-28 pb-16">
      <div data-trusted-content className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <p className="text-center font-inter text-2xl font-semibold tracking-tight text-brand">
          Trusted by innovative brands
        </p>
      </div>

      <div data-trusted-content className="marquee-paused mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {logos.map((client, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${client.alt}-${i}`}
              src={client.src}
              alt={client.alt}
              loading="lazy"
              className="mx-10 h-9 w-auto max-w-40 object-contain opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
