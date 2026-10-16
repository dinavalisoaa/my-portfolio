import { Mail } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What clients say
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md leading-snug">
            References and testimonials from past clients and teams are
            available on request.
          </p>

          <Card className="mx-auto mt-8 max-w-xl rounded-3xl md:mt-12">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center md:p-10">
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                This section is reserved for feedback from the people I&apos;ve
                worked with. Reach out and I&apos;ll happily share references
                from recent missions.
              </p>
              <Button variant="outline" className="shadow-md" asChild>
                <a href="mailto:randriamifydina@gmail.com">
                  <Mail className="size-4" />
                  Ask for references
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
