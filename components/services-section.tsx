import { Home, Building2, Sparkles, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Home,
    title: "Home Cleaning",
    description:
      "Complete residential cleaning from kitchens to bedrooms. We leave every corner spotless with our professional-grade equipment.",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description:
      "Keep your workspace professional and hygienic. Scheduled cleaning plans tailored to your business needs.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Intensive top-to-bottom cleaning for those hard-to-reach areas. Perfect for seasonal refresh or special occasions.",
  },
  {
    icon: Truck,
    title: "Move-in / Move-out",
    description:
      "Start fresh or leave it clean. Comprehensive cleaning service for tenants and property managers.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Offer
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Professional cleaning solutions for every space and occasion.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Button
                asChild
                variant="ghost"
                className="mt-6 justify-start px-0 text-primary hover:text-primary/80 hover:bg-transparent"
              >
                <a href="#contact">
                  Book Now
                  <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
