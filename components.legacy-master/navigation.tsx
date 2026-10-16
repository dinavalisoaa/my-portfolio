import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-3xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#home" className="text-[16px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Home
          </a>
          <a href="#experience" className="text-[16px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Experience
          </a>
          <a href="#skills" className="text-[16px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Skills
          </a>
          <a href="#portfolio" className="text-[16px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Portfolio
          </a>
          <a href="#about" className="text-[16px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            About
          </a>
        </div>

        <a href="mailto:randriamifydina@gmail.com">
          <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </Button>
        </a>
      </nav>
    </div>
  )
}
