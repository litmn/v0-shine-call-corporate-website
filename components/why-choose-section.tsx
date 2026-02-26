import { Globe, Users, Zap, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "International Standard Products",
    description:
      "We exclusively use globally recognized cleaning products that are safe, effective, and environmentally responsible.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Our 10 trained professionals bring expertise, care, and attention to detail to every job.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description:
      "Quick response times, on-time arrivals, and consistent quality you can always count on.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic Cleaning",
    description:
      "Strict hygiene protocols and eco-friendly methods ensure your space is clean and safe.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              The ShineCall Difference
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl text-balance">
              Why Choose ShineCall?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We go beyond surface-level cleaning. Every service is backed by professional standards, premium products, and a team that genuinely cares.
            </p>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-primary">500+</div>
                <p className="mt-1 text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-primary">10</div>
                <p className="mt-1 text-sm text-muted-foreground">Professional Staff</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">99%</div>
                <p className="mt-1 text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">24h</div>
                <p className="mt-1 text-sm text-muted-foreground">Booking Response</p>
              </div>
            </div>
          </div>

          {/* Right side - features */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-base font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
