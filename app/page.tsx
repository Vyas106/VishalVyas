"use client"
import { HeroSection } from "@/components/hero-section"

import ContactSection from "@/components/ContactSection"
import CTASection from "@/components/CTASection"
import AboutSection from "@/components/AboutSection"

export default function Home() {
  return (
    <div className="container bg-black mx-auto px-4 py-8 space-y-12 max-w-6xl">
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <ContactSection />
      <CTASection />
    </div>
  )
}

