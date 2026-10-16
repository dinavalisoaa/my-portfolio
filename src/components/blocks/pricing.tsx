import { Check, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Punctual mission",
    price: "Quote-based",
    description: "Bug fixes, audits, short technical tasks",
    features: [
      "Single well-scoped task",
      "Async communication",
      "Fast turnaround",
    ],
  },
  {
    name: "Project (fixed scope)",
    price: "Quote-based",
    description: "Feature or full app built end-to-end",
    features: [
      "Full-stack development",
      "API & database design",
      "Regular progress check-ins",
      "AI features on request",
    ],
    highlight: true,
  },
  {
    name: "Ongoing partnership",
    price: "Quote-based",
    description: "Long-term freelance collaboration",
    features: [
      "Dedicated availability",
      "Code review & mentoring",
      "Flexible monthly engagement",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Working together
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Every engagement is scoped and quoted individually. Here&apos;s
            how most collaborations start.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlight ? "outline-primary origin-top outline-4" : ""}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="text-muted-foreground text-lg font-medium">
                    {plan.price}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.highlight ? "default" : "outline"}
                  asChild
                >
                  <a href="mailto:randriamifydina@gmail.com">
                    <Mail className="size-4" />
                    Get a quote
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
