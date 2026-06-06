import { GraduationCap, Award, MapPin, Calendar } from "lucide-react"

export function AcademicSection() {
  return (
    <section className="bg-[#F7F3EE] py-16 md:py-24 overflow-hidden relative">
      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[22vw] font-black text-black/[0.04] leading-none tracking-tighter whitespace-nowrap">
          ACADEMIA
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-[#FF6B7A] border-2 border-black rounded-sm" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#777]">
                  Education &amp; Training
                </span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-black text-[#0B0B0B] leading-[1.05]">
                Academic<br />
                <span className="relative inline-block">
                  Background
                  <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#FF6B7A]" />
                </span>
              </h2>
            </div>
            <p className="text-[#666] text-base md:text-lg max-w-xs leading-relaxed md:text-right">
              Formal training across computer science, data systems, and software engineering — from Madagascar to France.
            </p>
          </div>

          {/* Main cards row */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">

            {/* Master II — active */}
            <div className="relative bg-white border-[4px] border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform duration-200">
              {/* Stamp badge */}
              <div className="absolute top-7 right-7 rotate-[-8deg]">
                <div className="border-[3px] border-[#6366F1] rounded-lg px-3 py-1">
                  <span className="text-[#6366F1] text-[10px] font-black uppercase tracking-widest">
                    In Progress
                  </span>
                </div>
              </div>

              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://upinfo.univ-cotedazur.fr/assets/img/logos/logo-ligne-uca-couleur-master.png"
                  alt="Université Côte d'Azur"
                  className="h-10 w-auto object-contain mb-3"
                />
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#aaa]" />
                  <span className="text-[11px] text-[#aaa] font-bold uppercase tracking-wider">Nice, France</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-[28px] font-black text-[#0B0B0B] mb-2 leading-tight">
                Master II MIAGE MBDS
              </h3>
              <p className="text-[#6366F1] font-bold text-sm mb-4">
                Mobiquity · Big Data · Data Science · Systems Integration
              </p>

              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-4 h-4 text-[#bbb]" />
                <span className="text-sm text-[#777] font-medium">Sept 2025 – Oct 2026</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Big Data", "Data Science", "Mobiquity", "Systems Integration", "AI"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#EEEEFF] border-2 border-[#6366F1] text-[#6366F1] text-[11px] font-black px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bachelor — completed, dark */}
            <div className="relative bg-[#0B0B0B] border-[4px] border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform duration-200">
              {/* Stamp badge */}
              <div className="absolute top-7 right-7 rotate-[6deg]">
                <div className="border-[3px] border-[#FFC224] rounded-lg px-3 py-1">
                  <span className="text-[#FFC224] text-[10px] font-black uppercase tracking-widest">
                    Completed
                  </span>
                </div>
              </div>

              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.ituniversity-mg.com/page/wp-content/uploads/2021/08/ITU_logo_MAJ_negatif_sans_fond.png"
                  alt="IT University Madagascar"
                  className="h-10 w-auto object-contain mb-3"
                />
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#888]" />
                  <span className="text-[11px] text-[#888] font-bold uppercase tracking-wider">
                    Antananarivo, Madagascar
                  </span>
                </div>
              </div>

              <h3 className="text-2xl md:text-[28px] font-black text-white mb-2 leading-tight">
                Bachelor's Degree<br />in Computer Science
              </h3>
              <p className="text-[#FFC224] font-bold text-sm mb-4">
                Software Engineering &amp; Development
              </p>

              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-4 h-4 text-[#666]" />
                <span className="text-sm text-[#aaa] font-medium">2020 – 2023</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-[#FFC224] border-2 border-[#FFC224] text-black text-[11px] font-black px-3 py-1 rounded-full">
                  Very Good Mention
                </span>
                {["Algorithms", "Databases", "Networks", "OOP"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 border-2 border-white/20 text-white/70 text-[11px] font-bold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom strip — Bacc+4 + Award */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#FF6B7A] border-[4px] border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-5 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-14 h-14 bg-white border-2 border-black rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-[#FF6B7A]" />
              </div>
              <div>
                <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-1">
                  IT University Madagascar · Since 2023
                </p>
                <h4 className="text-white font-black text-xl leading-tight">Bacc+4 in Computer Science</h4>
              </div>
            </div>

            <div className="bg-[#FFC224] border-[4px] border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-5 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-14 h-14 bg-black border-2 border-black rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-[#FFC224]" />
              </div>
              <div>
                <p className="text-black/50 text-[10px] font-black uppercase tracking-widest mb-1">
                  Recognition · Accès Banque
                </p>
                <h4 className="text-black font-black text-xl leading-tight">Award — Banking &amp; Finance</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
