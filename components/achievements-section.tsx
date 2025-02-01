"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      year: "TAHUN 2025",
      title: "Juara 1 Lomba Bahasa Inggris",
      org: "Oleh Lembaga Larina",
    },
    {
      year: "TAHUN 2028",
      title: "Juara 1 Lomba Edit Video Komerail",
      org: "Oleh Lembaga Studio Shadow",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="bg-black border-zinc-800 h-full">
        <CardHeader className="flex flex-row items-center space-x-2">
          <CardTitle>PENCAPAIAN PRESTASI</CardTitle>
          <Star className="w-4 h-4" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((item, index) => (
              <div key={index} className="space-y-1">
                <p className="text-sm text-zinc-400">{item.year}</p>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-zinc-400">{item.org}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

