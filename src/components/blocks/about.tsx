import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/photo.png", alt: "Dina Valisoa Randriamifidy" },
            { src: "/2.png", alt: "Dina Valisoa Randriamifidy, illustrated" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="4+ years of professional experience"
          paragraphs={[
            "From Java/JEE banking apps to AI-powered accessibility tools and FinTech payment platforms — I've worked across the full software lifecycle, in banking, ERP, and AI contexts.",
            "10+ technologies mastered: Java Spring, Next.js, Python, TypeScript, Odoo, FastAPI, LLMs, Docker, PostgreSQL, and more.",
          ]}
          ctaButton={{
            href: "/#experience",
            text: "See my experience",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "Friendly, autonomous, and serious developer who acquires new skills rapidly. I thrive in cross-functional environments, adapt quickly, and make sure everyone is moving in the same direction.",
            "I don't just fix what's broken — I find out why it broke, and I stay close to what I build from scoping to deployment, owning my trade-offs with full awareness of their consequences.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/1.jpg", alt: "Dina Valisoa Randriamifidy" },
            { src: "/3.jpg", alt: "Dina Valisoa Randriamifidy" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
