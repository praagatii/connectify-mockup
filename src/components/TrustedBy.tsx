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
  { src: "/clients/images.jpeg", alt: "Trusted partner" },
];

export default function TrustedBy() {
  const logos = [...clients, ...clients];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.35em] text-muted">
          05 / Trusted By
        </p>
        <h2 className="mt-4 text-center font-inter text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
          Trusted by innovators worldwide
        </h2>
      </div>

      <div className="marquee-paused mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {logos.map((client, i) => (
            <img
              key={`${client.alt}-${i}`}
              src={client.src}
              alt={client.alt}
              loading="lazy"
              className="mr-14 h-9 w-auto max-w-40 object-contain opacity-60 grayscale contrast-125 transition duration-500 hover:opacity-100 hover:grayscale-0 sm:mr-20 sm:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}