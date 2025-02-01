"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      period: "2025 (5 Bulan)",
      company: "Magang di Binaterio Co.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      period: "2027 (2 Tahun)",
      company: "Paruh Waktu di Borcelle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        <CardHeader className="flex flex-row items-center justify-center space-x-2">
          <Star className="w-4 h-4" />
          <CardTitle>PENGALAMAN INDUSTRI</CardTitle>
          <Star className="w-4 h-4" />
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="font-medium">{item.period}</p>
                <p className="text-sm font-medium text-zinc-400">{item.company}</p>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

