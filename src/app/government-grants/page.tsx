import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Grants — Connectify",
};

export default function GrantsPage() {
  return (
    <>
      <PageIntro eyebrow="Grants" title="Government grants and funding." />
      <FinalCta />
    </>
  );
}