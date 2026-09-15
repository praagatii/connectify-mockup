import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Training — Connectify",
};

export default function TrainingPage() {
  return (
    <>
      <PageIntro eyebrow="Training" title="Workshops and programmes." />
      <FinalCta />
    </>
  );
}