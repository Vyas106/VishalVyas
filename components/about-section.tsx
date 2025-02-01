"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="bg-black border-zinc-800">
        <CardHeader className="flex flex-row text-white items-center space-x-2 border-b-2 m-2">
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-400 text-tr">
          I specialize in Full-Stack Development and AI & ML. Currently, I’m working on creating AI agents powered by Smart Language Models (SLMs), which combine the capabilities of Large Language Models (LLMs) and Small Language Models (SLMs) for fast and efficient performance.
           </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
