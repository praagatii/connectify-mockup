import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Awards — Connectify",
};

export default function AwardsPage() {
  return (
    <>
      <PageIntro eyebrow="Awards" title="Awards and recognition." />
      <FinalCta />
    </>
  );
}