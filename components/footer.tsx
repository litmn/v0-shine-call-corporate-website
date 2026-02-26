import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Home Cleaning",
  "Office Cleaning",
  "Deep Cleaning",
  "Move-in / Move-out",
]

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="ShineCall Logo"
              width={200}
              height={64}
              className="h-14 w-auto brightness-200"
            />
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Professional cleaning services you can trust. Founded in 2025, serving homes and offices with international standards.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background/60 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-background">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-background">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-background/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-background">
              Contact Info
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-background/60">
              <li>+976 7700 0000</li>
              <li>hello@shinecall.mn</li>
              <li>Ulaanbaatar, Mongolia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/40">
            {'© 2025 ShineCall. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
