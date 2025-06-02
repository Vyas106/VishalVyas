"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Code, Brain, Zap } from "lucide-react"

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const skills = [
    { icon: Code, label: "Full-Stack Development" },
    { icon: Brain, label: "AI & Machine Learning" },
    { icon: Zap, label: "Smart Language Models" }
  ]

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-4xl"
      >
        {/* Main Card */}
        <motion.div
          variants={itemVariants}
          className="relative group"
        >
          <Card className="bg-black border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-sm">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <CardHeader className="relative z-10 pb-6 pt-8 px-6 sm:px-8 lg:px-12">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <div className="h-1 w-12 bg-white rounded-full" />
                <CardTitle className="text-white text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide">
                  About Me
                </CardTitle>
              </motion.div>
            </CardHeader>

            <CardContent className="relative z-10 px-6 sm:px-8 lg:px-12 pb-8 lg:pb-12">
              {/* Main description */}
              <motion.p
                variants={itemVariants}
                className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 font-light max-w-3xl"
              >
                I specialize in Full-Stack Development and AI & ML. Currently, I'm working on creating 
                AI agents powered by Smart Language Models (SLMs), which combine the capabilities of 
                Large Language Models (LLMs) and Small Language Models (SLMs) for fast and efficient performance.
              </motion.p>

              {/* Skills grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="group/skill relative"
                  >
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 lg:p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white/70 group-hover/skill:text-white transition-colors duration-300" />
                        <span className="text-white/70 group-hover/skill:text-white text-sm lg:text-base font-light transition-colors duration-300">
                          {skill.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative element */}
              <motion.div
                variants={itemVariants}
                className="mt-8 lg:mt-12 flex justify-center"
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Floating accent elements */}
        <motion.div
          variants={itemVariants}
          className="absolute -top-4 -right-4 w-8 h-8 border border-white/10 rounded-full hidden lg:block"
        />
        <motion.div
          variants={itemVariants}
          className="absolute -bottom-6 -left-6 w-12 h-12 border border-white/5 rounded-full hidden lg:block"
        />
      </motion.div>
    </div>
  )
}


export default AboutSection;