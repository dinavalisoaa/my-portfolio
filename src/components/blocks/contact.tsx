import React from "react";

import Link from "next/link";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Based in",
    content: (
      <p className="text-muted-foreground mt-3 flex items-center gap-1.5">
        <MapPin className="size-4" />
        Antananarivo, Madagascar &amp; Nice, France
      </p>
    ),
  },
  {
    title: "Email me",
    content: (
      <div className="mt-3">
        <Link
          href="mailto:randriamifydina@gmail.com"
          className="text-muted-foreground hover:text-foreground"
        >
          randriamifydina@gmail.com
        </Link>
      </div>
    ),
  },
  {
    title: "Find me online",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link
          href="mailto:randriamifydina@gmail.com"
          className="text-muted-foreground hover:text-foreground"
        >
          <Mail className="size-5" />
        </Link>
        <Link
          href="https://github.com/Antema-MG"
          target="_blank"
          className="text-muted-foreground hover:text-foreground"
        >
          <Github className="size-5" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Get in touch
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Have a project, an open role, or just a question? I&apos;d love to
          hear from you.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Send a message</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
