import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { ValuesSection } from "@/components/values-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <ValuesSection />
        <ServicesSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
