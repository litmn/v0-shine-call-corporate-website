import { Clock, Shield, Users, HeartHandshake } from "lucide-react"

const highlights = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick booking and on-time arrivals guaranteed.",
  },
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Consistent quality you can count on every time.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "10 trained and vetted cleaning professionals.",
  },
  {
    icon: HeartHandshake,
    title: "High Hygiene Standards",
    description: "International-grade products and strict protocols.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Us
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl text-balance">
            Бид хэн бэ
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            ShineCall is a professional cleaning company established in 2025 with a team of 10 skilled staff members. We provide reliable on-demand cleaning services for homes and offices using internationally standardized cleaning products.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
