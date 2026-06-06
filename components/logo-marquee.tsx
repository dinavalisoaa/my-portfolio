import { Users, Handshake, MessageSquare, Zap, Eye, Shield } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"
const S = "https://cdn.simpleicons.org"

type LogoItem = { type: "logo"; src: string; alt: string; invert?: boolean }
type SkillItem = { type: "skill"; label: string; Icon: LucideIcon; color: string }
type MarqueeItem = LogoItem | SkillItem

const items: MarqueeItem[] = [
  { type: "logo", src: `${D}/java/java-original.svg`, alt: "Java" },
  { type: "logo", src: `${D}/typescript/typescript-original.svg`, alt: "TypeScript" },
  { type: "skill", label: "Leadership", Icon: Users, color: "#818CF8" },
  { type: "logo", src: `${D}/spring/spring-original.svg`, alt: "Spring" },
  { type: "logo", src: `${D}/react/react-original.svg`, alt: "React" },
  { type: "logo", src: `${D}/python/python-original.svg`, alt: "Python" },
  { type: "skill", label: "Collaboration", Icon: Handshake, color: "#60A5FA" },
  { type: "logo", src: `${D}/nextjs/nextjs-plain.svg`, alt: "Next.js", invert: true },
  { type: "logo", src: `${D}/docker/docker-original.svg`, alt: "Docker" },
  { type: "logo", src: `${D}/postgresql/postgresql-original.svg`, alt: "PostgreSQL" },
  { type: "skill", label: "Communication", Icon: MessageSquare, color: "#FB7185" },
  { type: "logo", src: `${D}/fastapi/fastapi-original.svg`, alt: "FastAPI" },
  { type: "logo", src: `${D}/javascript/javascript-original.svg`, alt: "JavaScript" },
  { type: "logo", src: `${D}/gitlab/gitlab-original.svg`, alt: "GitLab" },
  { type: "skill", label: "Problem Solving", Icon: Zap, color: "#FCD34D" },
  { type: "logo", src: `${D}/mysql/mysql-original.svg`, alt: "MySQL" },
  { type: "logo", src: `${S}/openai`, alt: "OpenAI", invert: true },
  { type: "logo", src: `${D}/php/php-original.svg`, alt: "PHP" },
  { type: "skill", label: "Strategic Vision", Icon: Eye, color: "#F87171" },
  { type: "logo", src: `${D}/oracle/oracle-original.svg`, alt: "Oracle" },
  { type: "logo", src: `${S}/tailwindcss/06B6D4`, alt: "Tailwind" },
  { type: "logo", src: `${D}/git/git-original.svg`, alt: "Git" },
  { type: "skill", label: "Ownership", Icon: Shield, color: "#A3E635" },
  { type: "logo", src: `${D}/mongodb/mongodb-original.svg`, alt: "MongoDB" },
  { type: "logo", src: `${S}/supabase/3ECF8E`, alt: "Supabase" },
  { type: "logo", src: `${D}/jenkins/jenkins-original.svg`, alt: "Jenkins" },
  { type: "logo", src: `${S}/stripe/635BFF`, alt: "Stripe" },
  { type: "logo", src: `${D}/laravel/laravel-original.svg`, alt: "Laravel" },
  { type: "logo", src: `${S}/mui/007FFF`, alt: "MUI" },
  { type: "logo", src: `${S}/odoo/C896D0`, alt: "Odoo" },
]

export function LogoMarquee() {
  const repeated = [...items, ...items, ...items]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-14 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {repeated.map((item, index) =>
            item.type === "logo" ? (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className="h-9 w-auto opacity-75 hover:opacity-100 transition-opacity flex-shrink-0"
                style={item.invert ? { filter: "brightness(0) invert(1)" } : undefined}
              />
            ) : (
              <span
                key={index}
                className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 flex-shrink-0"
              >
                <item.Icon
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: item.color }}
                />
                <span className="text-white/80 text-sm font-semibold tracking-wide">
                  {item.label}
                </span>
              </span>
            )
          )}
        </div>
      </div>
    </div>
  )
}
