import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"
const S = "https://cdn.simpleicons.org"

type Tech = { name: string; icon: string | null }

const services: Array<{
  title: string
  description: string
  image: string
  stack: Tech[]
}> = [
  {
    title: "Backend Development",
    description: "Java Spring Boot, FastAPI, Node.js, PHP — REST APIs, microservices, and domain-driven design for scalable systems.",
    image: "/images/web-design.svg",
    stack: [
      { name: "Java", icon: `${D}/java/java-original.svg` },
      { name: "Spring", icon: `${D}/spring/spring-original.svg` },
      { name: "PHP", icon: `${D}/php/php-original.svg` },
      { name: "Python", icon: `${D}/python/python-original.svg` },
      { name: "FastAPI", icon: `${D}/fastapi/fastapi-original.svg` },
      { name: "Node.js", icon: `${D}/nodejs/nodejs-original.svg` },
      { name: "Laravel", icon: `${D}/laravel/laravel-original.svg` },
    ],
  },
  {
    title: "Frontend Development",
    description: "Next.js, React, TypeScript, Tailwind — performant, accessible interfaces from design to production.",
    image: "/images/ui-ux-design.svg",
    stack: [
      { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "React", icon: `${D}/react/react-original.svg` },
      { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
      { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
      { name: "Tailwind", icon: `${S}/tailwindcss/06B6D4` },
      { name: "MUI", icon: `${S}/mui/007FFF` },
      { name: "HTML5", icon: `${D}/html5/html5-original.svg` },
    ],
  },
  {
    title: "AI / ML Engineering",
    description: "LLM integrations (OpenAI, Groq), RAG patterns, YOLOv8, YAMNet, OCR — AI features embedded in real products.",
    image: "/images/product-design.svg",
    stack: [
      { name: "Python", icon: `${D}/python/python-original.svg` },
      { name: "OpenAI", icon: `${S}/openai` },
      { name: "Supabase", icon: `${S}/supabase/3ECF8E` },
      { name: "YOLOv8", icon: null },
      { name: "Groq", icon: null },
      { name: "OCR", icon: null },
    ],
  },
  {
    title: "ERP & Business Apps",
    description: "Odoo modules, payroll, invoicing, HR — custom ERP development and legacy system optimization.",
    image: "/images/user-research.svg",
    stack: [
      { name: "Odoo", icon: `${S}/odoo/714B67` },
      { name: "Python", icon: `${D}/python/python-original.svg` },
      { name: "Java", icon: `${D}/java/java-original.svg` },
      { name: "Spring", icon: `${D}/spring/spring-original.svg` },
      { name: "XML", icon: null },
    ],
  },
  {
    title: "API Design & Integration",
    description: "Generic payment APIs, Mobile Money integrations, third-party APIs (FareHarbor, Ebriza, Stripe) — robust and reusable.",
    image: "/images/motion-graphics.svg",
    stack: [
      { name: "Spring", icon: `${D}/spring/spring-original.svg` },
      { name: "FastAPI", icon: `${D}/fastapi/fastapi-original.svg` },
      { name: "Stripe", icon: `${S}/stripe/635BFF` },
      { name: "Supabase", icon: `${S}/supabase/3ECF8E` },
      { name: "Postman", icon: `${S}/postman/FF6C37` },
    ],
  },
  {
    title: "DevOps",
    description: "Docker, GitLab CI, Jenkins — containerization, pipelines, and deployment workflows that keep code shipping reliably.",
    image: "/images/web-design.svg",
    stack: [
      { name: "Docker", icon: `${D}/docker/docker-original.svg` },
      { name: "GitLab CI", icon: `${D}/gitlab/gitlab-original.svg` },
      { name: "Jenkins", icon: `${D}/jenkins/jenkins-original.svg` },
      { name: "Git", icon: `${D}/git/git-original.svg` },
    ],
  },
  {
    title: "Database Management",
    description: "PostgreSQL, MySQL, Oracle, SQL Server, SQLite, MongoDB — design, administration, and optimization across relational and NoSQL systems.",
    image: "/images/user-research.svg",
    stack: [
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "MySQL", icon: `${D}/mysql/mysql-original.svg` },
      { name: "Oracle", icon: `${D}/oracle/oracle-original.svg` },
      { name: "SQL Server", icon: `${D}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
      { name: "SQLite", icon: `${D}/sqlite/sqlite-original.svg` },
      { name: "MongoDB", icon: `${D}/mongodb/mongodb-original.svg` },
    ],
  },
]

export function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My broad <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set of skills</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              From backend APIs to AI models and ERP systems — full-stack capabilities across the entire software lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col group"
              >
                <div className="mb-5 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px] h-36">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={382}
                    height={144}
                    className="w-full h-full object-cover rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[24px] leading-[34px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[16px] leading-[26px] font-medium text-[#393939] mb-5 flex-1">{service.description}</p>

                  {/* Tech stack logos */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-[#E8E8E8]">
                    {service.stack.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 bg-[#F8F8F8] border-2 border-[#E8E8E8] rounded-lg px-2 py-1 text-[11px] font-bold text-[#444] hover:border-black transition-colors"
                      >
                        {tech.icon && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={tech.icon} alt={tech.name} className="w-3.5 h-3.5 object-contain" />
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-8">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={92}
                  height={92}
                  className="w-[92px] h-[92px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Get in touch</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Looking for another service? Get in touch with me, there is a high chance that I will be able to help!
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]">
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
