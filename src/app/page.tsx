import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhatWeBuild from "@/components/WhatWeBuild";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeBuild />
      <TrustedBy />
      <About />
      <SelectedWork />
      <Process />
      <Industries />
      <FinalCta />
    </>
  );
}
