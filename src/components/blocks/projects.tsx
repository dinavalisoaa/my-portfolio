import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Github } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Online Payment Platform — Ibonia FinTech",
    tag: "FinTech / Backend",
    description:
      "Generic payment API unifying Mobile Money (local) and Visa/Mastercard (international) transactions, plus an event ticketing engine for trail running events.",
    bg: "bg-[#6366F1]",
    illustration: "/images/studio-workspace.svg",
    github: null,
  },
  {
    title: "SensAI — AI Accessibility App",
    tag: "AI / Mobile",
    description:
      "Mobile accessibility app for deaf and blind users — YOLOv8 object detection, OCR, voice commands, YAMNet sound classification, LLM summarization.",
    bg: "bg-[#2F81F7]",
    illustration: "/images/venture-workspace.svg",
    github: null,
  },
  {
    title: "Antema — Worship Presentation Software",
    tag: "Desktop / Tauri",
    description:
      "Desktop app replacing PowerPoint for church worship — manages and displays song lyrics, liturgy, and holy songs through a slide presentation interface.",
    bg: "bg-[#FF6B7A]",
    illustration: "/images/studio-workspace.svg",
    github: "https://github.com/Antema-MG/Antema",
  },
  {
    title: "Solfa Reader — Choral Music Player",
    tag: "Web / Music",
    description:
      "Web player and viewer for .msolfa, a custom format for 4-voice SATB choral music — real-time Web Audio synthesis, per-voice mute/solo, transpose, tempo control.",
    bg: "bg-[#FFC224]",
    illustration: "/images/venture-workspace.svg",
    github: "https://github.com/Antema-MG/solfa-reader",
  },
];

export function Projects() {
  return (
    <section id="portfolio" className="overflow-hidden py-28 lg:py-32">
      <div className="container">
        <div className="mb-8 max-w-md space-y-4 md:mb-12 lg:mb-20">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Take a look at my portfolio
          </h2>
          <p className="text-muted-foreground leading-snug">
            Selected work across FinTech, AI, and desktop apps.
          </p>
        </div>

        <div className="relative -mr-[max(3rem,calc((100vw-80rem)/2+3rem))]">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem
                  key={project.title}
                  className="grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[38%] 2xl:basis-[32%]"
                >
                  <Card className="h-full overflow-hidden border-none">
                    <CardContent className="flex h-full flex-col p-0">
                      <div className={`relative h-[220px] lg:h-[260px] ${project.bg}`}>
                        <Image
                          src={project.illustration}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-muted flex flex-1 flex-col justify-between gap-8 p-6">
                        <div>
                          <span className="bg-foreground text-background mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold">
                            {project.tag}
                          </span>
                          <h3 className="font-display text-lg leading-tight font-semibold md:text-xl">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mt-2 text-sm leading-snug">
                            {project.description}
                          </p>
                        </div>

                        {project.github ? (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
                          >
                            <Github className="size-4" />
                            View on GitHub
                          </Link>
                        ) : (
                          <span className="text-muted-foreground flex items-center gap-2 text-sm font-semibold">
                            <ArrowRight className="size-4" />
                            Details on request
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex gap-3">
              <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-12 translate-x-0 translate-y-0 transition-colors" />
              <CarouselNext className="bg-muted hover:bg-muted/80 static size-12 translate-x-0 translate-y-0 transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
