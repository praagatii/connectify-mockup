import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import BrandsThatTrustUs from "@/components/BrandsThatTrustUs";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <SelectedWork />
      <About />
      <SolutionsShowcase />
      <BrandsThatTrustUs />
      <FinalCta />
    </>
  );
}