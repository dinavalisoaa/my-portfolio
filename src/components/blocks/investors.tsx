import Image from "next/image";

const companies = [
  {
    name: "Ibonia",
    role: "Fullstack Developer — Dec 2024 · Present",
    image: "/images/agency.png",
  },
  {
    name: "Freelance — Romania",
    role: "Fullstack / AI Engineer — 2025",
    image: "/images/company.png",
  },
  {
    name: "eTech Consulting",
    role: "Software Engineer — 2024",
    image: "/images/busines.png",
  },
  {
    name: "BICI",
    role: "Software Developer — 2023",
    image: "/images/startup.png",
  },
  {
    name: "Freelance",
    role: "Fullstack Developer — 2022",
    image: "/images/agency.png",
  },
];

export function Investors() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-foreground text-4xl font-medium tracking-wide">
        Companies I&apos;ve worked with
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-5">
        {companies.map((company) => (
          <div key={company.name} className="">
            <Image
              src={company.image}
              alt={company.name}
              width={64}
              height={64}
              className="size-16 rounded-full border object-cover"
            />
            <h3 className="mt-3 font-semibold">{company.name}</h3>
            <p className="text-muted-foreground text-sm">{company.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
