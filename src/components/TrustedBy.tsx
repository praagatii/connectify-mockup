"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(
        "[data-trusted-content]"
      );

      els.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "top 65%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          el,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: -28,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: "bottom 30%",
              end: "bottom 2%",
              scrub: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const logos = [...clients, ...clients];

  return (
    <section ref={rootRef} className="relative z-10 bg-white pt-8 pb-20">
      <div data-trusted-content className="pt-0">
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="overflow-hidden">
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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent lg:w-32"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent lg:w-32"
          />
        </div>
      </div>
    </section>
  );
}
