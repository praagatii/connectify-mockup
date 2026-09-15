import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Privacy Policy — Connectify",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro eyebrow="Privacy Policy" title="Your data, handled with care." />
      <FinalCta />
    </>
  );
}