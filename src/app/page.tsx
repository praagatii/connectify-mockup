import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhatWeBuild from "@/components/WhatWeBuild";
import Industries from "@/components/Industries";
import SelectedWork from "@/components/SelectedWork";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <TrustedBy />
      <SelectedWork />
      <Industries />
      <FinalCta />
    </>
  );
}