import { HandshakeIcon, Award, UsersRound } from "lucide-react"

const values = [
  {
    icon: HandshakeIcon,
    title: "Trust & Responsibility",
    description:
      "We treat every home and office with respect, honor our commitments, and maintain transparent communication.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Award,
    title: "Quality & Standards",
    description:
      "We use internationally standardized products and continuously improve our methods to ensure high-level cleaning results.",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: UsersRound,
    title: "Teamwork & Growth",
    description:
      "Our strength comes from our 10-member professional team. We support continuous learning and professional development.",
    color: "bg-primary/10 text-primary",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What Drives Us
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Core Values
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value, idx) => (
            <div
              key={value.title}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
            >
              <div className="absolute -top-5 left-8">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md ${value.color} transition-transform group-hover:scale-110`}
                >
                  <value.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
