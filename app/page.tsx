"use client"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import ContactSection from "@/components/ContactSection"
import CTASection from "@/components/CTASection"

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

