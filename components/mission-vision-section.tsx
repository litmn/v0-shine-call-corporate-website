import { Target, Eye, Clock4, ShieldCheck, Sparkles, Leaf, Award, Users } from "lucide-react"

const missionPoints = [
  { icon: Clock4, text: "Save our customers' time" },
  { icon: ShieldCheck, text: "Value trust and responsibility" },
  { icon: Sparkles, text: "Prioritize hygiene and safety" },
  { icon: Award, text: "Differentiate through service quality" },
]

const visionPoints = [
  { icon: Award, text: "Become the #1 choice for on-demand cleaning" },
  { icon: ShieldCheck, text: "Implement standardized and systemized services" },
  { icon: Leaf, text: "Apply sustainable and eco-friendly solutions" },
  { icon: Users, text: "Develop a skilled and stable professional team" },
]

export function MissionVisionSection() {
  return (
    <section id="mission" className="py-20 md:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Mission */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Mission
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl text-balance">
              Creating Clean, Safe Spaces
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-4">
              {'"We deliver healthy, safe, and sparkling environments to households and businesses through internationally standardized products and a skilled professional team."'}
            </p>
            <ul className="mt-8 space-y-4">
              {missionPoints.map((point) => (
                <li key={point.text} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground font-medium">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <Eye className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our Vision
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl text-balance">
              Leading the Future of Cleaning
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed italic border-l-4 border-accent/30 pl-4">
              {'"Starting from 2025, we aim to set new standards of trust, quality, and innovation in the cleaning industry and become a leading brand in Mongolia, expanding regionally."'}
            </p>
            <ul className="mt-8 space-y-4">
              {visionPoints.map((point) => (
                <li key={point.text} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground font-medium">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
