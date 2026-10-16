import { DashedLine } from "@/components/dashed-line";

const skills = [
  {
    title: "Leadership",
    description: "Investing in teammates, sharing knowledge freely.",
  },
  {
    title: "Collaboration",
    description: "Thriving in cross-functional environments.",
  },
  {
    title: "Communication",
    description: "Bridging the gap between code and conversation.",
  },
  {
    title: "Problem solving",
    description: "Finding out why it broke, not just fixing it.",
  },
  {
    title: "Strategic vision",
    description: "Thinking beyond the ticket, toward the bigger picture.",
  },
  {
    title: "Ownership",
    description: "Staying close to what I build, end to end.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <span className="text-muted-foreground font-mono text-sm font-medium tracking-wide uppercase">
            Beyond the code
          </span>
          <h2 className="mt-3 text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What stacks don&apos;t capture
          </h2>
        </div>

        {/* Horizontal timeline */}
        <div className="mt-16 overflow-x-auto pb-2 md:mt-20">
          <div className="relative mx-auto flex min-w-[900px] max-w-5xl justify-between gap-4">
            <DashedLine
              orientation="horizontal"
              className="absolute inset-x-0 top-[5px]"
            />
            {skills.map((skill) => (
              <div key={skill.title} className="relative flex-1 pr-4 last:pr-0">
                <div className="bg-foreground relative z-10 size-[11px] rounded-full ring-4 ring-background" />

                <div className="mt-5 pr-2">
                  <h3 className="font-display text-base font-semibold">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-snug">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
