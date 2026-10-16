import { Mail } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

const capabilities = [
  "Backend Development",
  "Frontend Development",
  "AI / ML Engineering",
  "ERP & Business Apps",
  "API Design & Integration",
  "DevOps",
  "Database Management",
];

const tools = [
  { name: "Java", logo: `${D}/java/java-original.svg` },
  { name: "Spring", logo: `${D}/spring/spring-original.svg` },
  { name: "Python", logo: `${D}/python/python-original.svg` },
  { name: "Next.js", logo: `${D}/nextjs/nextjs-original.svg` },
  { name: "React", logo: `${D}/react/react-original.svg` },
  { name: "Docker", logo: `${D}/docker/docker-original.svg` },
  { name: "PostgreSQL", logo: `${D}/postgresql/postgresql-original.svg` },
  { name: "OpenAI", logo: `${S}/openai/000000` },
];

export function Services() {
  return (
    <section id="services" className="overflow-hidden py-28 lg:py-32">
      <div className="">
        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          My broad set of skills
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine orientation="horizontal" className="container scale-x-105" />

          <div className="relative container flex max-md:flex-col">
            {/* Left: capabilities */}
            <div className="flex-1 py-6 pe-0! md:px-6 md:py-8">
              <div className="mb-5 text-balance md:mb-8">
                <h3 className="inline font-semibold">7 core capabilities. </h3>
                <span className="text-muted-foreground">
                  From backend APIs to AI models and ERP systems — full-stack
                  across the whole software lifecycle.
                </span>
              </div>
              <div className="bg-background rounded-2xl border p-5">
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((c) => (
                    <span
                      key={c}
                      className="bg-muted rounded-full border px-3 py-1.5 text-sm font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <DashedLine
                orientation="vertical"
                className="absolute top-0 right-0 max-md:hidden"
              />
              <DashedLine
                orientation="horizontal"
                className="absolute inset-x-0 bottom-0 md:hidden"
              />
            </div>

            {/* Right: tools grid */}
            <div className="flex-1 py-6 md:px-6 md:py-8">
              <div className="mb-5 text-balance md:mb-8 md:translate-x-2 xl:translate-x-4">
                <h3 className="inline font-semibold">Tools I reach for. </h3>
                <span className="text-muted-foreground">
                  The stack behind most of what I ship.
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-background grid aspect-square place-items-center rounded-2xl border p-3"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="size-8 object-contain md:size-10"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <Button variant="outline" className="shadow-md" asChild>
            <a href="mailto:randriamifydina@gmail.com">
              <Mail className="size-4" />
              Get in touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
