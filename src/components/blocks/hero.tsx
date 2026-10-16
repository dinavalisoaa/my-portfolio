import { Award, Boxes, Globe2, Sparkles } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "4+ years of experience",
    description: "Java/JEE banking apps to AI-powered accessibility tools and FinTech platforms.",
    icon: Award,
  },
  {
    title: "Fullstack + AI Engineering",
    description: "Java Spring, Next.js, Python, FastAPI, LLMs — end to end.",
    icon: Boxes,
  },
  {
    title: "10+ technologies mastered",
    description: "From ERP systems to payment APIs and mobile accessibility apps.",
    icon: Sparkles,
  },
  {
    title: "Madagascar & France",
    description: "Currently pursuing Master II MIAGE MBDS at Université Côte d'Azur, Nice.",
    icon: Globe2,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            I&apos;m Dina V. Randriamifidy, a Software Engineer
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Fullstack developer and AI engineer building FinTech platforms, ERP
            systems, and AI-powered applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="mailto:randriamifydina@gmail.com">Get in touch</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a href="/#portfolio">View portfolio</a>
            </Button>
          </div>
        </div>

        {/* Right side - Highlights */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
