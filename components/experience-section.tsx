import { FileText, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"
const S = "https://cdn.simpleicons.org"

type StackItem = { name: string; icon: string | null }

const experiences: Array<{
  period: string
  company: string
  location: string
  title: string
  description: string
  icon: string
  stack: StackItem[]
  link?: { label: string; url: string }
}> = [
  {
    period: "Dec 2024 – Present",
    company: "Ibonia",
    location: "Antananarivo, Madagascar",
    title: "Fullstack Developer Java / TypeScript",
    description:
      "Working in a FinTech and banking context, building an online payment platform that supports Mobile Money (local services) and international cards (Visa/Mastercard). Designed and built generic payment APIs to unify and centralize mobile money integrations. Also developed an online ticketing and registration engine for trail running events. Applied Domain-Driven Design (DDD) methodology throughout. Optimized and refactored legacy code, created reusable npm libraries, and handled frontend interface design and development.",
    link: { label: "papi.mg", url: "https://papi.mg/" },
    icon: "/images/agency.png",
    stack: [
      { name: "Java", icon: `${D}/java/java-original.svg` },
      { name: "Spring", icon: `${D}/spring/spring-original.svg` },
      { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
      { name: "JUnit", icon: `${S}/junit5/25A162` },
      { name: "Docker", icon: `${D}/docker/docker-original.svg` },
      { name: "GitLab", icon: `${D}/gitlab/gitlab-original.svg` },
      { name: "MySQL", icon: `${D}/mysql/mysql-original.svg` },
      { name: "Tailwind", icon: `${S}/tailwindcss/06B6D4` },
      { name: "MUI", icon: `${S}/mui/007FFF` },
      { name: "WebSocket", icon: null },
    ],
  },
  {
    period: "Jul 2025 – Jan 2026",
    company: "Freelance — Romania",
    location: "Remote",
    title: "Fullstack Developer / AI Engineer",
    description:
      "Built an AI system that automatically classifies incoming emails and extracts key information from their content. Created an AI agent capable of generating contextualized reply suggestions by cross-referencing client requests against a real-time availability database. Integrated third-party APIs (FareHarbor, Ebriza) to enrich request context. Used Supabase to store all exchanges, requests, and AI-generated outputs. Handled both backend and frontend development, and migrated the company website from Wix CMS to Next.js + TinaCMS.",
    icon: "/images/company.png",
    stack: [
      { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "React", icon: `${D}/react/react-original.svg` },
      { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
      { name: "Supabase", icon: `${S}/supabase/3ECF8E` },
      { name: "OpenAI", icon: `${S}/openai/000000` },
      { name: "Stripe", icon: `${S}/stripe/635BFF` },
      { name: "SQL", icon: null },
      { name: "LLMs", icon: null },
      { name: "Directus", icon: null },
      { name: "TinaCMS", icon: null },
    ],
  },
  {
    period: "Jan 2024 – Dec 2024",
    company: "eTech Consulting",
    location: "Antananarivo, Madagascar",
    title: "Software Engineer",
    description:
      "Worked on ERP applications using Python and the Odoo framework. Key contributions included integrating an AI-powered OCR module into Odoo for automatic data extraction from scanned documents. Also contributed to the development of HR, Payroll, and Invoicing management modules, and designed an internal book reservation platform used by all group employees.",
    icon: "/images/busines.png",
    stack: [
      { name: "Python", icon: `${D}/python/python-original.svg` },
      { name: "FastAPI", icon: `${D}/fastapi/fastapi-original.svg` },
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "Odoo", icon: `${S}/odoo/714B67` },
      { name: "Jenkins", icon: `${D}/jenkins/jenkins-original.svg` },
      { name: "GitLab", icon: `${D}/gitlab/gitlab-original.svg` },
      { name: "XML", icon: null },
    ],
  },
  {
    period: "2023 – Jan 2024",
    company: "BICI",
    location: "Antananarivo, Madagascar",
    title: "Software Developer Java",
    description:
      "Developed ERP applications in a Java/JEE environment, including dock management for SPAT, payroll, and invoicing. Designed a CRUD interface generation engine compatible with Oracle, MySQL, and PostgreSQL database structures — a significant internal tool. Also built a database management interface inspired by DBeaver but simplified for non-technical users. Handled database administration tickets (Oracle and PostgreSQL) and supported end-users in adopting applications.",
    icon: "/images/startup.png",
    stack: [
      { name: "Java", icon: `${D}/java/java-original.svg` },
      { name: "Spring", icon: `${D}/spring/spring-original.svg` },
      { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
      { name: "Oracle", icon: `${D}/oracle/oracle-original.svg` },
      { name: "MySQL", icon: `${D}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "JEE", icon: null },
      { name: "WildFly", icon: null },
      { name: "JSP", icon: null },
    ],
  },
  {
    period: "Jun 2022 – Jun 2023",
    company: "Freelance",
    location: "Antananarivo, Madagascar",
    title: "Fullstack Developer",
    description:
      "Co-designed and built a school management application covering course and grade management, school fee calculation, report card printing, and deployment on an internal network.",
    icon: "/images/agency.png",
    stack: [
      { name: "PHP", icon: `${D}/php/php-original.svg` },
      { name: "CodeIgniter", icon: `${S}/codeigniter/EE4323` },
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "AJAX", icon: null },
      { name: "FPDF", icon: null },
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Sticky left column */}
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">past experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              5 years across FinTech, banking, ERP, and AI — building systems that power real businesses and real users.
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <FileText className="w-5 h-5" />
              See full resume
            </Button>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl overflow-hidden">

                {/* Card header */}
                <div className="flex items-center justify-between pt-6 md:pt-8 px-6 md:px-8 pb-4 md:pb-5">
                  <span className="text-sm md:text-base font-black text-[#0B0B0B] bg-[#F0F0F0] border-2 border-black px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black" />

                {/* Card body */}
                <div className="px-6 md:px-8 pt-5 md:pt-6 pb-6 md:pb-8">
                  {/* Company + location */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-black text-[#6366F1]">{exp.company}</span>
                    <span className="text-[#ccc]">·</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#aaa]" />
                      <span className="text-xs text-[#aaa] font-semibold">{exp.location}</span>
                    </div>
                  </div>

                  {/* Job title */}
                  <h3 className="text-xl md:text-[24px] leading-tight font-black text-[#0B0B0B] mb-4">
                    {exp.title}
                  </h3>

                  {/* Full description */}
                  <p className="text-[#555] text-sm md:text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Optional product link */}
                  {exp.link && (
                    <a
                      href={exp.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mb-6 text-sm font-bold text-[#0B0B0B] bg-[#F0F0F0] border-2 border-black rounded-lg px-3 py-1.5 hover:bg-[#FFC224] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {exp.link.label}
                    </a>
                  )}

                  {/* Stack divider */}
                  <div className="border-t-2 border-dashed border-[#E0E0E0] mb-5" />

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 bg-[#F8F8F8] border-2 border-[#E0E0E0] rounded-lg px-2.5 py-1 text-[11px] font-bold text-[#333] hover:border-black transition-colors"
                      >
                        {tech.icon && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5 object-contain"
                          />
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
