"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function SkillsSection() {
  const skills = [
    {
      category: "SOSIAL MEDIA",
      level: 5,
    },
    {
      category: "DESAIN GRAFIS",
      level: 4,
    },
    {
      category: "EDIT VIDEO",
      level: 4,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="bg-black border-zinc-800">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: skill.level }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-sm font-medium">{skill.category}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

