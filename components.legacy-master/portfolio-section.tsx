import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "Online Payment Platform — Ibonia FinTech",
      description:
        "Generic payment API unifying Mobile Money (local) and Visa/Mastercard (international) transactions. Includes an event ticketing and registration engine for trail running events.",
      tag: "FinTech / Backend",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#6366F1]",
      illustration: "/images/studio-workspace.svg",
      github: null,
    },
    {
      title: "SensAI — AI Accessibility App",
      description:
        "Mobile accessibility app for deaf and blind users. Blind mode: YOLOv8 object detection, OCR, voice commands. Deaf mode: audio transcription, YAMNet sound classification, LLM summarization.",
      tag: "AI / Mobile",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/venture-workspace.svg",
      github: null,
    },
    {
      title: "Antema — Church Worship Presentation Software",
      description:
        "Desktop app replacing PowerPoint for church worship. Manages and displays song lyrics, liturgy, and holy songs with a slide presentation interface. Database-driven, purpose-built for church communities — eliminating the pain of recreating slides every service.",
      tag: "Desktop / Tauri",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#FF6B7A]",
      illustration: "/images/studio-workspace.svg",
      github: "https://github.com/Antema-MG/Antema",
    },
    {
      title: "Solfa Reader — Choral Music Player & Score Viewer",
      description:
        "Web-based player and viewer for .msolfa — a custom plain-text format for 4-voice SATB choral music in relative solfège. Real-time Web Audio synthesis, per-voice mute/solo, transpose, tempo control, interactive piano display. Built for Malagasy church music.",
      tag: "Web / Music",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#FFC224]",
      illustration: "/images/venture-workspace.svg",
      github: "https://github.com/Antema-MG/solfa-reader",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">portfolio</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Illustration */}
              <div className={`${project.bgColor} relative overflow-hidden h-48 flex-shrink-0`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-sm text-[#555] mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                ) : (
                  <a
                    href="#"
                    className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm"
                  >
                    View case study
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Browse all portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
