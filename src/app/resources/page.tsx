import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Resources — Connectify",
};

export default function ResourcesPage() {
  return (
    <>
      <PageIntro eyebrow="Resources" title="Ideas, guides and field notes." />
      <FinalCta />
    </>
  );
}