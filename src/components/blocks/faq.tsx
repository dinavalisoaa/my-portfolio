import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Working together",
    questions: [
      {
        question: "Are you available for remote work?",
        answer:
          "Yes — I work remotely with clients across time zones, from FinTech teams in Europe to local companies in Madagascar. I'm comfortable with async communication and adapt to your team's tools and rituals.",
      },
      {
        question: "Do you take on full-time roles or only freelance missions?",
        answer:
          "Both. I'm currently balancing a Master II in France with freelance missions, and I'm open to full-time opportunities that fit around my studies or after graduation (Oct 2026).",
      },
      {
        question: "What languages do you work in?",
        answer: "I'm bilingual in French and English, written and spoken.",
      },
    ],
  },
  {
    title: "Tech & process",
    questions: [
      {
        question: "What's your stack?",
        answer:
          "Java Spring and FastAPI/Python on the backend, Next.js/React/TypeScript on the frontend, plus Odoo for ERP work and LLM integrations (OpenAI, Groq) for AI features.",
        },
      {
        question: "Do you build AI features into products?",
        answer:
          "Yes — email classification, OCR, RAG-style assistants, object detection (YOLOv8), and audio classification are all things I've shipped in production.",
      },
      {
        question: "How do you approach a new project?",
        answer:
          "I scope the problem first, favor Domain-Driven Design for complex domains, and stay close to the project from architecture to deployment rather than handing off half-finished work.",
      },
    ],
  },
  {
    title: "Rates & engagement",
    questions: [
      {
        question: "How much do you charge?",
        answer:
          "Rates depend on the scope, duration, and complexity of the mission — get in touch with a short brief and I'll get back to you with a quote.",
      },
      {
        question: "How do we get started?",
        answer:
          "Send me a message with what you need built and your rough timeline — I'll follow up with questions and a proposal.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can&apos;t find what you&apos;re looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
