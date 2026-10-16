import Image from "next/image";

import {
  ArrowUpRight,
  BrainCircuit,
  CreditCard,
  Download,
  Github,
  GraduationCap,
  Kanban,
  Layers,
  ShieldCheck,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { Clock } from "@/components/home/clock";
import { ContactForm } from "@/components/home/contact-form";
import { FlowTimeline } from "@/components/home/flow";
import { IsoIllustration, StackCubes } from "@/components/home/iso";
import { projects } from "@/components/home/projects";
import { Work } from "@/components/home/work";
import { ThemeToggle } from "@/components/theme-toggle";

const EMAIL = "randriamifidydina@gmail.com";
const PHONE = "+261 34 40 332 62";
const GITHUB = "https://github.com/dinavalisoaa/";
const LINKEDIN = "https://www.linkedin.com/in/dina-randriamifidy/";
const WHATSAPP = "https://wa.me/261344033262";
const CV = "/Dina-Randriamifidy-CV.pdf";
const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

const tools = [
  // Languages
  { name: "Java", logo: `${D}/java/java-original.svg`, core: true },
  { name: "TypeScript", logo: `${D}/typescript/typescript-original.svg`, core: true },
  { name: "JavaScript", logo: `${D}/javascript/javascript-original.svg` },
  { name: "Python", logo: `${D}/python/python-original.svg`, core: true },
  { name: "PHP", logo: `${D}/php/php-original.svg` },
  // Frameworks
  { name: "Spring Boot", logo: `${D}/spring/spring-original.svg`, core: true },
  { name: "Hibernate", logo: `${D}/hibernate/hibernate-original.svg` },
  { name: "Next.js", logo: `${S}/nextdotjs`, core: true },
  { name: "React", logo: `${D}/react/react-original.svg`, core: true },
  { name: "FastAPI", logo: `${D}/fastapi/fastapi-original.svg`, core: true },
  { name: "Laravel", logo: `${D}/laravel/laravel-original.svg` },
  { name: "Odoo", logo: `${S}/odoo` },
  { name: "Tauri", logo: `${D}/tauri/tauri-original.svg` },
  // Databases
  { name: "PostgreSQL", logo: `${D}/postgresql/postgresql-original.svg`, core: true },
  { name: "MySQL", logo: `${D}/mysql/mysql-original.svg` },
  { name: "Oracle", logo: `${D}/oracle/oracle-original.svg` },
  { name: "MongoDB", logo: `${D}/mongodb/mongodb-original.svg` },
  { name: "SQLite", logo: `${D}/sqlite/sqlite-original.svg` },
  // DevOps & cloud
  { name: "Docker", logo: `${D}/docker/docker-original.svg` },
  { name: "Maven", logo: `${D}/maven/maven-original.svg` },
  { name: "npm", logo: `${D}/npm/npm-original-wordmark.svg` },
  { name: "GitLab CI", logo: `${D}/gitlab/gitlab-original.svg` },
  { name: "AWS", logo: `${D}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { name: "Liquibase", logo: `${S}/liquibase` },
  // Integration
  { name: "Kafka", logo: `${D}/apachekafka/apachekafka-original.svg` },
  { name: "n8n", logo: `${S}/n8n` },
  // Tools
  { name: "Git", logo: `${D}/git/git-original.svg` },
  { name: "JetBrains", logo: `${D}/jetbrains/jetbrains-original.svg` },
  { name: "VS Code", logo: `${D}/vscode/vscode-original.svg` },
  { name: "Postman", logo: `${D}/postman/postman-original.svg` },
  { name: "DBeaver", logo: `${D}/dbeaver/dbeaver-original.svg` },
];

const stats = [
  { value: "4+", unit: "yrs", label: "Shipping production software" },
  { value: "600M+", unit: "Ar", label: "Processed through my payment platform" },
  { value: "15,000+", unit: "", label: "Mobile Money & card payments" },
  { value: "600+", unit: "", label: "Employees using my ERP tools" },
];

const expertise = [
  {
    icon: BrainCircuit,
    title: "AI, Data & Automation",
    text: "LLM agents, document extraction and workflows that remove manual work.",
    items: ["LLM agents", "OCR", "Computer vision", "n8n", "Kafka", "Python"],
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    text: "Local and international payments wired into real products.",
    items: ["Mobile Money", "CyberSource", "Visa / Mastercard", "Event ticketing"],
  },
  {
    icon: Layers,
    title: "Web Fullstack",
    text: "Backend services and frontends, from API to UI.",
    items: ["Spring Boot", "FastAPI", "Laravel", "Next.js", "React", "PostgreSQL"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Secure by default, monitored in production.",
    items: ["Linux", "OWASP Top 10", "Sentry", "Python"],
  },
  {
    icon: Kanban,
    title: "Project Management",
    text: "Business processes, delivery rhythm and team growth.",
    items: ["ERP (Odoo)", "Scrum", "GitLab CI/CD", "Mentoring"],
  },
];

// Drop a logo file in public/companies/ and set `logo` to show it instead of the monogram
const experiences: {
  company: string;
  logo?: string;
  place: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  stack: string[];
  points: string[];
}[] = [
  {
    company: "Ibonia",
    place: "Antananarivo",
    role: "Fullstack Developer, Java / TypeScript",
    period: "Dec 2024 — Now",
    current: true,
    summary: "Core developer on a FinTech platform for Mobile Money and Visa/Mastercard payments.",
    stack: ["Java", "Spring Boot", "TypeScript", "PostgreSQL"],
    points: [
      "FinTech platform: 600M+ Ar, 15,000+ payments",
      "Payment pipeline from 3–5 min to near real-time",
      "Reusable npm libraries, DDD refactor, mentored juniors",
    ],
  },
  {
    company: "Freelance",
    place: "Romania · Remote",
    role: "Fullstack Developer / AI Engineer",
    period: "Jul 2025 — Jan 2026",
    summary: "Remote mission: clean-architecture migration, AI email automation and a new Next.js site.",
    stack: ["Python", "Next.js", "TinaCMS", "LLM"],
    points: [
      "AI email classification & auto-response",
      "Wix → Next.js + TinaCMS migration",
      "FareHarbor & Ebriza real-time integrations",
    ],
  },
  {
    company: "eTech Consulting",
    place: "Antananarivo",
    role: "Software Engineer",
    period: "2024 — Dec 2024",
    summary: "Built ERP modules and AI-powered OCR deployed across the whole group.",
    stack: ["Odoo", "Python", "OCR"],
    points: [
      "Odoo OCR for 600+ employees",
      "HR, Payroll & Invoicing ERP modules",
      "Company-wide book reservation platform",
    ],
  },
  {
    company: "BICI",
    place: "Antananarivo",
    role: "Software Developer, Java",
    period: "2023 — Jan 2024",
    summary: "Internal developer tools and ERP support for dock management and payroll.",
    stack: ["Java", "Oracle", "PostgreSQL"],
    points: [
      "Multi-database CRUD generation engine",
      "DBeaver-inspired database tool",
      "Oracle & PostgreSQL admin for ERP",
    ],
  },
  {
    company: "Self-employed",
    place: "Antananarivo",
    role: "PHP Developer",
    period: "2022 — 2024",
    summary: "School management platform for private schools: report cards, courses and tuition fees.",
    stack: ["PHP", "MySQL", "JavaScript"],
    points: [
      "Report cards generated from grades",
      "Course, class and teacher management",
      "Tuition fee payments and follow-up",
    ],
  },
];

const education = [
  {
    degree: "Master 2 MIAGE MBDS",
    school: "Université Côte d'Azur · Nice, France",
    period: "2024 — Oct 2026",
    status: "Graduating Oct 2026",
    current: true,
    tags: ["Mobiquity", "Big Data", "Data Science", "Systems Integration"],
  },
  {
    degree: "Bachelor in Computer Science",
    school: "IT University · Antananarivo, Madagascar",
    period: "2020 — 2023",
    status: "Very good mention",
    current: false,
    tags: ["Software Engineering", "Algorithms", "Databases"],
  },
];

const initials = (s: string) => s.slice(0, 2).toUpperCase();

function CompanyLogo({ e, className }: { e: (typeof experiences)[number]; className: string }) {
  const ring = e.current ? "ring-2 ring-blue-500/60" : "";
  return e.logo ? (
    <Image src={e.logo} alt={e.company} width={64} height={64} className={`rounded-full bg-white object-contain ${ring} ${className}`} />
  ) : (
    <span className={`grid place-items-center rounded-full bg-btn text-[11px] text-btn-fg ${ring} ${className}`}>{initials(e.company)}</span>
  );
}

function SectionTitle({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="mb-8 md:mb-10">
      <span className="flex items-center gap-2 text-sm text-ink-2">
        <span className="size-1.5 rounded-full bg-ink" />
        {label}
      </span>
      <h2 className="mt-3 max-w-2xl text-3xl tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-tile px-2.5 py-1 text-xs text-ink-2">{children}</span>;
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-page font-sans text-ink selection:bg-ink selection:text-page">
      <div aria-hidden className="pointer-events-none fixed inset-0" style={{ background: "var(--page-glow)" }} />

      <div className="relative mx-auto max-w-[1220px] px-4 md:px-6">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-4 py-5 text-sm">
          <span>Dina V. Randriamifidy</span>
          <nav className="hidden gap-6 text-ink-2 lg:flex">
            {["Expertise", "Education", "Work", "Experience"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-ink">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden text-ink-2 md:inline">
              Antananarivo • <Clock />
            </span>
            <ThemeToggle />
            <a href="#contact" className="rounded-full bg-btn px-4 py-2 text-btn-fg transition-opacity hover:opacity-85">
              Contact
            </a>
          </div>
        </header>

        {/* Hero: name sits behind the glass so it blurs through */}
        <section className="pt-4 md:pt-8">
          <h1 className="text-center text-[clamp(3.6rem,14vw,10.5rem)] leading-[0.85] font-medium tracking-[-0.055em]">
            Dina Valisoa
          </h1>

          <div className="relative z-10 -mt-[clamp(1.2rem,4.6vw,3.5rem)] grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-12">
            {/* Intro */}
            <div className="glass flex flex-col justify-between gap-8 rounded-[28px] p-6 backdrop-blur-2xl sm:col-span-2 md:p-8 lg:col-span-6">
              <div>
                <div className="flex items-center gap-2 text-sm text-ink-2">
                  <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px] shadow-emerald-400" />
                  Software Engineer · Fullstack & AI · Available
                </div>
                <p className="mt-5 text-2xl leading-tight tracking-tight md:text-[1.9rem]">
                  I build FinTech, ERP and AI products that run real businesses.
                </p>
                <p className="mt-4 text-sm text-ink-2">
                  Currently at <span className="text-ink">Ibonia</span> · Master 2 MIAGE MBDS, Université Côte d&apos;Azur
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 rounded-full bg-btn px-5 py-2.5 text-sm text-btn-fg transition-opacity hover:opacity-85">
                  <Mail className="size-4" /> Get in touch
                </a>
                <a href={CV} download className="flex items-center gap-2 rounded-full bg-tile px-5 py-2.5 text-sm transition-opacity hover:opacity-80">
                  <Download className="size-4" /> Download CV
                </a>
              </div>
              <div className="-mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-2">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink">
                  <FaWhatsapp className="size-4 text-emerald-500" /> WhatsApp
                </a>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-ink">
                  <Phone className="size-4" /> 034 40 332 62
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink">
                  <FaLinkedinIn className="size-4 text-[#0a66c2] dark:text-sky-400" /> LinkedIn
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink">
                  <FaGithub className="size-4" /> GitHub
                </a>
              </div>
            </div>

            {/* Photo */}
            {/* Kept to one row so the 911×1167 source is never upscaled */}
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-auto sm:min-h-80 lg:col-span-3">
              <Image
                src="/profile.webp"
                alt="Dina Valisoa Randriamifidy"
                fill
                priority
                className="object-cover object-top brightness-95 grayscale transition duration-500 hover:brightness-100 hover:grayscale-0"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/50 to-transparent p-5 pt-16 text-white">
                <div className="text-[15px]">Dina Valisoa Randriamifidy</div>
                <div className="mt-0.5 text-xs text-white/65">Madagascar · France · English & French</div>
              </div>
            </div>

            {/* Impact numbers */}
            <div className="glass grid grid-cols-2 gap-2 rounded-[28px] p-3 backdrop-blur-2xl lg:col-span-3">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col justify-between rounded-[20px] bg-tile p-4">
                  <span className="text-2xl tracking-tight whitespace-nowrap">
                    {s.value}
                    {s.unit && <span className="ml-1 text-sm text-ink-3">{s.unit}</span>}
                  </span>
                  <span className="mt-3 text-xs leading-tight text-ink-2">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Experience timeline: vertical list on mobile, serpentine flow from md up */}
            <div className="glass rounded-[28px] p-6 sm:col-span-2 md:p-7 lg:col-span-12">
              <div className="mb-5 flex items-center justify-between text-sm">
                <span className="text-ink-2">Experience · since 2022</span>
                <a href="#experience" className="group flex items-center gap-1 hover:opacity-70">
                  Full timeline <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <div className="hidden md:block">
                <FlowTimeline stops={experiences} />
              </div>
              <ol className="grid gap-5 md:hidden">
                {experiences.map((e, i) => (
                  <li key={e.company + e.period} className="relative pl-11">
                    {i < experiences.length - 1 && <span aria-hidden className="absolute top-9 -bottom-4 left-[15px] w-px bg-line" />}
                    <CompanyLogo e={e} className="absolute top-0 left-0 size-8" />
                    <div className="text-xs text-ink-3">{e.period}</div>
                    <div className="mt-0.5 text-[15px]">
                      {e.company} <span className="text-xs text-ink-3">· {e.place}</span>
                    </div>
                    <div className="mt-0.5 text-sm">{e.role}</div>
                    <p className="mt-1 text-xs leading-relaxed text-ink-2">{e.summary}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="scroll-mt-10 pt-20 md:pt-28">
          <SectionTitle
            label="Expertise"
            title={
              <>
                Five layers, one engineer — built <span className="text-blue-600 dark:text-blue-400">end to end</span>.
              </>
            }
          />

          {/* Layer stack: top = closest to the user, bottom = foundation */}
          <div className="glass rounded-[28px] px-4 py-8 md:px-10 md:py-12">
            <ol className="mx-auto w-fit">
            {expertise.map(({ icon: Icon, title, text, items }) => (
              <li key={title} className="group flex min-h-20 items-center gap-3 md:min-h-24 md:gap-5">
                <div className="relative h-16 w-24 shrink-0 md:h-20 md:w-44">
                  <div className="layer-plate absolute inset-0 m-auto grid size-16 place-items-center transition-[translate] duration-300 group-hover:-translate-y-2 md:size-28">
                    <Icon className="size-5 text-violet-600 md:size-7 dark:text-violet-200" strokeWidth={1.5} />
                  </div>
                </div>
                <span aria-hidden className="hidden h-px w-10 bg-ink-3 sm:block md:w-16" />
                <div className="min-w-0 py-2">
                  <h3 className="text-base tracking-tight md:text-lg">{title}</h3>
                  <p className="mt-0.5 text-xs text-ink-2 md:text-sm">{text}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {items.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </li>
            ))}
            </ol>
          </div>

          {/* Stack: horizontal cube band */}
          <div className="glass mt-3 rounded-[28px] p-6 md:mt-4 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-sm text-ink-2">Stack</span>
                <h3 className="mt-2 text-2xl tracking-tight md:text-3xl">{tools.length} technologies, 8 daily drivers</h3>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="mr-1 flex items-center gap-1.5 text-ink-2">
                  <span className="size-2.5 rounded-sm bg-blue-500" /> Daily drivers
                </span>
                {tools
                  .filter((t) => t.core)
                  .map((t) => (
                    <span key={t.name} className="rounded-full bg-blue-500/12 px-2.5 py-1 text-blue-700 dark:text-blue-300">
                      {t.name}
                    </span>
                  ))}
              </div>
            </div>
            <StackCubes tools={tools} perRow={11} className="mt-6 hidden w-full sm:block" />
            <StackCubes tools={tools} perRow={5} className="mt-6 w-full sm:hidden" />
            <p className="mt-4 text-xs text-ink-3">Hover a cube for its name.</p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-10 pt-20 md:pt-28">
          <SectionTitle label="Education" title="Computer science, from Antananarivo to Nice." />
          <div className="grid gap-3 md:gap-4 lg:grid-cols-2">
            {education.map((e) => (
              <div key={e.degree} className="glass flex flex-col gap-8 overflow-hidden rounded-[28px] p-6 md:p-8">
                {e.current && (
                  <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-br from-blue-500/15 via-transparent to-transparent" />
                )}
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-11 place-items-center rounded-2xl bg-tile">
                    <GraduationCap className="size-5 text-blue-600 dark:text-blue-400" strokeWidth={1.75} />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${e.current ? "bg-blue-500/15 text-blue-600 dark:text-blue-400" : "bg-tile text-ink-2"}`}
                  >
                    {e.status}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="text-sm text-ink-3">{e.period}</div>
                    <h3 className="mt-1 text-2xl leading-tight tracking-tight md:text-3xl">{e.degree}</h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-ink-2">
                      <MapPin className="size-3.5" /> {e.school}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.tags.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                  <div className="hidden shrink-0 rounded-[20px] bg-tile p-4 sm:block">
                    <IsoIllustration kind="books" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="relative isolate scroll-mt-10 pt-20 md:pt-28">
          {/* Warm light beam behind the cards so the glass has something to refract */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-40 -bottom-10 -z-10 bg-[radial-gradient(35%_55%_at_50%_60%,rgb(249_115_22/0.38),transparent_75%)] [mask-image:repeating-linear-gradient(90deg,black_0_3px,rgb(0_0_0/0.55)_3px_6px)]"
          />
          <div className="mb-8 grid gap-4 md:mb-10 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="flex items-center gap-2 text-sm text-ink-2">
                <span className="size-1.5 rounded-full bg-ink" />
                Selected work
              </span>
              <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">Products built for real businesses and real users.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-2 lg:justify-self-end">
              {projects.length} products across FinTech, AI, ERP and developer tools — from payment platforms to open-source apps.
            </p>
          </div>
          <Work />
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-10 pt-20 md:pt-28">
          <span className="flex items-center gap-2 text-sm text-ink-2">
            <span className="size-1.5 rounded-full bg-ink" />
            Career
          </span>
          <div className="mt-4 mb-10 md:pl-[20%]">
            <h2 className="text-[clamp(3rem,10vw,7.5rem)] leading-[0.9] font-medium tracking-[-0.05em]">Experience.</h2>
            <div className="mt-3 text-xl tracking-tight md:text-2xl">©2022—2026</div>
          </div>

            {/* Timeline */}
          <ol>
              {experiences.map((e, i) => (
                <li key={e.company + e.period} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                  <div className="flex flex-col items-center">
                    <CompanyLogo e={e} className="size-10" />
                    {i < experiences.length - 1 && <span aria-hidden className="w-px flex-1 bg-line" />}
                  </div>
                  <div className="glass mb-4 rounded-[20px] p-5 md:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-3">
                      <span>{e.period}</span>
                      {e.current && <span className="rounded-full bg-blue-500/15 px-2.5 py-1 text-blue-600 dark:text-blue-400">Current</span>}
                    </div>
                    <div className="mt-2 text-sm text-ink-2">
                      {e.company} · {e.place}
                    </div>
                    <h3 className="mt-0.5 text-xl leading-snug tracking-tight">{e.role}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">{e.summary}</p>
                    <ul className="mt-4 space-y-1.5 text-sm">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-blue-600 dark:text-blue-400">+</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.stack.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-10 pt-20 pb-10 md:pt-28">
          <div className="glass grid gap-10 rounded-[32px] p-6 md:p-10 lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h2 className="text-4xl leading-[1.05] tracking-tight md:text-6xl">Let&apos;s build something together.</h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-2">
                  Open to freelance missions and full-time roles in FinTech, AI or ERP. I usually answer within a day.
                </p>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: Phone, text: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
                  { icon: MapPin, text: "Antananarivo, Madagascar · Nice, France" },
                  { icon: Github, text: "@dinavalisoaa", href: GITHUB },
                ].map(({ icon: Icon, text, href }) => (
                  <li key={text}>
                    <a href={href} className="flex items-center gap-3 hover:opacity-70">
                      <span className="grid size-9 place-items-center rounded-lg bg-tile">
                        <Icon className="size-4" strokeWidth={1.5} />
                      </span>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] bg-tile p-6 md:p-7">
              <ContactForm email={EMAIL} />
            </div>
          </div>
          <footer className="flex justify-between pt-8 text-xs text-ink-3">
            <span>© {new Date().getFullYear()} Dina Valisoa Randriamifidy</span>
            <span>dinavalisoaa.me</span>
          </footer>
        </section>
      </div>
    </div>
  );
}
