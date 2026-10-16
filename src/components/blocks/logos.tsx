import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Tech = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
};

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

export const Logos = () => {
  const topRow: Tech[] = [
    { name: "Java", logo: `${D}/java/java-original.svg`, width: 40, height: 40, href: "https://www.java.com" },
    { name: "Spring", logo: `${D}/spring/spring-original.svg`, width: 40, height: 40, href: "https://spring.io" },
    { name: "Next.js", logo: `${D}/nextjs/nextjs-original.svg`, width: 40, height: 40, href: "https://nextjs.org" },
    { name: "TypeScript", logo: `${D}/typescript/typescript-original.svg`, width: 40, height: 40, href: "https://www.typescriptlang.org" },
  ];

  const bottomRow: Tech[] = [
    { name: "Python", logo: `${D}/python/python-original.svg`, width: 40, height: 40, href: "https://www.python.org" },
    { name: "FastAPI", logo: `${D}/fastapi/fastapi-original.svg`, width: 40, height: 40, href: "https://fastapi.tiangolo.com" },
    { name: "Docker", logo: `${D}/docker/docker-original.svg`, width: 40, height: 40, href: "https://www.docker.com" },
    { name: "PostgreSQL", logo: `${D}/postgresql/postgresql-original.svg`, width: 40, height: 40, href: "https://www.postgresql.org" },
    { name: "OpenAI", logo: `${S}/openai/000000`, width: 40, height: 40, href: "https://openai.com" },
  ];

  return (
    <section className="overflow-hidden pb-28 lg:pb-32">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Technologies I work with.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              From backend frameworks to AI tooling.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          <LogoRow companies={topRow} gridClassName="grid-cols-4" />
          <LogoRow companies={bottomRow} gridClassName="grid-cols-5" direction="right" />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Tech[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((tech, index) => (
            <Link href={tech.href} target="_blank" key={index}>
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                width={tech.width}
                height={tech.height}
                className="object-contain opacity-60 transition-opacity hover:opacity-90"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((tech, index) => (
            <Link
              href={tech.href}
              target="_blank"
              key={index}
              className="mx-8 inline-block transition-opacity hover:opacity-70"
            >
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                width={tech.width}
                height={tech.height}
                className="object-contain"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </>
  );
};
