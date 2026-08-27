import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TrustedBy />
      <SelectedWork />
      <Process />
      <Industries />
      <FinalCta />
    </>
  );
}
