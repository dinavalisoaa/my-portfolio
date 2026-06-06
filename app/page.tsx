import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { AcademicSection } from "@/components/academic-section"
import { SoftSkillsSection } from "@/components/softskills-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <div id="home"><HeroSection /></div>
      <div id="experience"><ExperienceSection /></div>
      <div id="skills"><ServicesSection /></div>
      <LogoMarquee />
      <AcademicSection />
      <SoftSkillsSection />
      <div id="about"><AboutSection /></div>
      <div id="portfolio"><PortfolioSection /></div>
      <Footer />
    </main>
  )
}
