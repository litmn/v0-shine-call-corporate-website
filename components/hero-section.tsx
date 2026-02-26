import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Trusted by 500+ happy customers</span>
          </div>
          
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Professional Cleaning You Can Trust
          </h1>
          
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We deliver fast, safe, and high-quality cleaning services for homes and offices using internationally standardized products.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base shadow-lg shadow-primary/25">
              <a href="#contact">Book a Cleaning</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base border-primary/30 text-primary hover:bg-primary/5">
              <a href="#contact">Request a Quote</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80H1440V40C1440 40 1280 0 1080 20C880 40 720 60 540 40C360 20 180 0 0 40V80Z" className="fill-background" />
        </svg>
      </div>
    </section>
  )
}
