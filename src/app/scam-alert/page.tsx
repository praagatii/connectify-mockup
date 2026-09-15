import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Scam Alert — Connectify",
};

export default function ScamAlertPage() {
  return (
    <>
      <PageIntro eyebrow="Scam Alert" title="Stay safe from impersonators." />
      <FinalCta />
    </>
  );
}