import { DashedLine } from "@/components/dashed-line";

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "10+", label: "Technologies mastered" },
  { value: "5", label: "Companies & missions" },
  { value: "2", label: "Countries — MG & FR" },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Who&apos;s behind all this work?
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Friendly, autonomous, and driven to lead impactful projects.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            Bilingual in English and French, passionate about tech, and
            always acquiring new skills rapidly. From Java/JEE banking apps
            to AI-powered accessibility tools and FinTech payment platforms,
            I stay close to what I build and take full ownership of it, from
            scoping to deployment.
            <br />
            <br />
            Currently pursuing a Master II MIAGE MBDS (Mobiquity, Big Data,
            Data Science, Systems Integration) at Université Côte d&apos;Azur
            in Nice, France — building on a Bachelor&apos;s degree in
            Computer Science earned in Madagascar.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
