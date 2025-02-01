"use client"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12 max-w-6xl">
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      {/* <div className="grid md:grid-cols-2 gap-8">
        <section id="education">
          <EducationSection />
        </section>
        <AchievementsSection />
      </div> */}
      {/* <section id="experience">
        <ExperienceSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section> */}
    </div>
  )
}

