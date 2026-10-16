import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-28 lg:py-32">
      <div className="container max-w-5xl">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-muted-foreground font-mono text-sm font-medium tracking-wide uppercase">
              Education &amp; Training
            </span>
            <h2 className="mt-3 text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Academic background
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs leading-snug md:text-right">
            Formal training across computer science, data systems, and
            software engineering — from Madagascar to France.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl leading-tight font-semibold md:text-2xl">
                    Master II MIAGE MBDS
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm font-medium">
                    Mobiquity · Big Data · Data Science · Systems Integration
                  </p>
                </div>
                <span className="border-primary text-primary shrink-0 rounded-lg border px-3 py-1 text-xs font-semibold whitespace-nowrap">
                  In progress
                </span>
              </div>
              <div className="text-muted-foreground mb-2 flex items-center gap-1.5 text-sm">
                <MapPin className="size-3.5" />
                Université Côte d&apos;Azur, Nice, France
              </div>
              <div className="text-muted-foreground mb-6 flex items-center gap-1.5 text-sm">
                <Calendar className="size-3.5" />
                Sept 2025 – Oct 2026
              </div>
              <div className="flex flex-wrap gap-2">
                {["Big Data", "Data Science", "Mobiquity", "Systems Integration", "AI"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground rounded-full border px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-foreground text-background rounded-3xl">
            <CardContent className="p-8">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl leading-tight font-semibold md:text-2xl">
                    Bachelor&apos;s Degree in Computer Science
                  </h3>
                  <p className="mt-1 text-sm font-medium opacity-70">
                    Software Engineering &amp; Development
                  </p>
                </div>
                <span className="shrink-0 rounded-lg border border-current px-3 py-1 text-xs font-semibold whitespace-nowrap opacity-90">
                  Completed
                </span>
              </div>
              <div className="mb-2 flex items-center gap-1.5 text-sm opacity-70">
                <MapPin className="size-3.5" />
                IT University Madagascar, Antananarivo
              </div>
              <div className="mb-6 flex items-center gap-1.5 text-sm opacity-70">
                <Calendar className="size-3.5" />
                2020 – 2023
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-background text-foreground rounded-full px-3 py-1 text-xs font-semibold">
                  Very Good Mention
                </span>
                {["Algorithms", "Databases", "Networks", "OOP"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-current px-3 py-1 text-xs font-medium opacity-80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:mt-8">
          <Card className="rounded-3xl">
            <CardContent className="flex items-center gap-5 p-6">
              <div className="bg-muted flex size-14 shrink-0 items-center justify-center rounded-2xl border">
                <GraduationCap className="size-7" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  IT University Madagascar · Since 2023
                </p>
                <h4 className="font-display text-lg leading-tight font-semibold">
                  Bacc+4 in Computer Science
                </h4>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="flex items-center gap-5 p-6">
              <div className="bg-muted flex size-14 shrink-0 items-center justify-center rounded-2xl border">
                <Award className="size-7" />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Recognition · Accès Banque
                </p>
                <h4 className="font-display text-lg leading-tight font-semibold">
                  Award — Banking &amp; Finance
                </h4>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
