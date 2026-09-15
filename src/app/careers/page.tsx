import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Careers — Connectify",
};

export default function CareersPage() {
  return (
    <>
      <PageIntro eyebrow="Careers" title="Join our team." />
      <FinalCta />
    </>
  );
}