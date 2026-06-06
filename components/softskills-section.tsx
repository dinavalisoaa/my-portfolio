const skills = [
  {
    title: "Leadership",
    description:
      "Leading isn't about title — it's about making the people around you better. I invest in teammates, share knowledge freely, and contribute to an engineering culture built to last.",
    accent: "bg-[#6366F1]",
  },
  {
    title: "Collaboration",
    description:
      "I thrive in cross-functional environments. Whether working with product, design, or business, I adapt quickly and make sure everyone is moving in the same direction.",
    accent: "bg-[#2F81F7]",
  },
  {
    title: "Communication",
    description:
      "I've learned that the best technical solution means nothing if you can't explain it. I naturally bridge the gap between code and conversation.",
    accent: "bg-[#FF6B7A]",
  },
  {
    title: "Problem Solving",
    description:
      "I don't just fix what's broken — I find out why it broke. I balance speed with sustainability, and I own my trade-offs with full awareness of their consequences.",
    accent: "bg-[#FFC224]",
  },
  {
    title: "Strategic Vision",
    description:
      "I think beyond the ticket. Every architecture choice, every refactor, every API design — I always ask how it serves the bigger picture.",
    accent: "bg-[#FF4A60]",
  },
  {
    title: "Ownership & Commitment",
    description:
      "I don't ship a project into the void and hope it holds. From scoping to deployment, I stay close to what I build and take full responsibility for it.",
    accent: "bg-[#0B0B0B]",
  },
]

export function SoftSkillsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Beyond the{" "}
            <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">code</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
            What stacks don't capture — but what truly makes the difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skill) => (
            <div key={skill.title} className="flex gap-4 items-start">
              <div
                className={`w-5 h-5 ${skill.accent} border-2 border-black rounded-[5px] flex-shrink-0 mt-1`}
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
