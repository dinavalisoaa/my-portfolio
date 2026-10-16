import { Background } from "@/components/background";
import About from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { Education } from "@/components/blocks/education";
import { Investors as Companies } from "@/components/blocks/investors";
import { Skills } from "@/components/blocks/skills";
import { DashedLine } from "@/components/dashed-line";

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />

        <About />

        <Skills />

        <Education />

        <div className="pt-8 lg:pt-12">
          <DashedLine className="container max-w-5xl scale-x-115" />
          <Companies />
        </div>
      </div>
    </Background>
  );
}
