import Image from "next/image";
import Link from "next/link";

import { ChevronRight, FileText, MapPin } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const experiences: Array<{
  period: string;
  company: string;
  location: string;
  title: string;
  summary: string;
  icon: string;
}> = [
  {
    period: "Dec 2024 – Present",
    company: "Ibonia",
    location: "Antananarivo",
    title: "Fullstack Developer, Java & TypeScript",
    summary: "FinTech payment platform for Mobile Money & card transactions.",
    icon: "/images/agency.png",
  },
  {
    period: "Jul 2025 – Jan 2026",
    company: "Freelance — Romania",
    location: "Remote",
    title: "Fullstack Developer & AI Engineer",
    summary: "AI email classifier and reply-suggestion agent, built remotely.",
    icon: "/images/company.png",
  },
  {
    period: "Jan 2024 – Dec 2024",
    company: "eTech Consulting",
    location: "Antananarivo",
    title: "Software Engineer on Odoo ERP",
    summary: "AI-powered OCR module and HR/Payroll/Invoicing modules.",
    icon: "/images/busines.png",
  },
  {
    period: "2023 – Jan 2024",
    company: "BICI",
    location: "Antananarivo",
    title: "Software Developer, Java",
    summary: "ERP for dock management, payroll, and invoicing.",
    icon: "/images/startup.png",
  },
  {
    period: "Jun 2022 – Jun 2023",
    company: "Freelance",
    location: "Antananarivo",
    title: "Fullstack Developer",
    summary: "School management app — courses, grades, fees, report cards.",
    icon: "/images/agency.png",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 lg:py-32">
      <div className="container">
        <div className="mx-auto grid max-w-4xl items-center gap-3 md:gap-0 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Past experience
          </h2>
          <div>
            <p className="text-muted-foreground leading-snug">
              4+ years across FinTech, banking, ERP, and AI — building
              systems that power real businesses and real users.
            </p>
            <Button variant="outline" size="sm" className="mt-4 shadow-md" asChild>
              <a href="mailto:randriamifydina@gmail.com">
                <FileText className="size-4" />
                Request full resume
              </a>
            </Button>
          </div>
        </div>

        {/* Card row — grid (no scroll) when it fits, snap-scroll otherwise */}
        <div className="mx-auto mt-8 max-w-[2000px] px-2 md:mt-12 lg:mt-20">
          <Card className="overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="scroll-nice flex snap-x snap-mandatory overflow-x-auto xl:grid xl:grid-cols-5 xl:overflow-visible">
                {experiences.map((exp, i) => (
                  <div
                    key={exp.company + exp.period}
                    className="min-w-[320px] flex-1 snap-start xl:min-w-0"
                  >
                    <div className="flex h-full">
                      <div className="flex-1 p-5 pe-0! md:p-8">
                        {/* Info box */}
                        <div className="bg-muted/60 rounded-2xl border p-5">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground font-mono text-xs">
                              {exp.period}
                            </span>
                            <div className="overflow-hidden rounded-full border">
                              <Image
                                src={exp.icon}
                                alt={exp.company}
                                width={36}
                                height={36}
                                className="size-9"
                              />
                            </div>
                          </div>
                          <h4 className="mt-4 font-semibold">{exp.company}</h4>
                          <div className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
                            <MapPin className="size-3" />
                            {exp.location}
                          </div>
                          <p className="text-muted-foreground mt-3 text-sm leading-snug">
                            {exp.summary}
                          </p>
                        </div>

                        <Link
                          href="mailto:randriamifydina@gmail.com"
                          className="group flex items-center justify-between gap-4 pt-6 pe-4 md:pe-8 md:pt-8"
                        >
                          <h3 className="font-display max-w-full text-xl leading-tight font-bold tracking-tight md:text-2xl">
                            {exp.title}
                          </h3>
                          <div className="rounded-full border p-2">
                            <ChevronRight className="size-5 transition-transform group-hover:translate-x-1 lg:size-6" />
                          </div>
                        </Link>
                      </div>
                      {i < experiences.length - 1 && (
                        <div className="relative hidden md:block">
                          <DashedLine orientation="vertical" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
