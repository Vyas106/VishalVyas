"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      period: "2024/2026",
      school: "Sekolah Wardiere Inc",
      major: "Jurusan Pemasaran",
    },
    {
      period: "2027/2029",
      school: "Universitas Belford",
      major: "S1 Manajemen Bisnis",
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
          <CardTitle>RIWAYAT PENDIDIKAN</CardTitle>
          <Star className="w-4 h-4" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {education.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr,auto] gap-4">
                <div className="space-y-1">
                  <p className="font-medium">{item.school}</p>
                  <p className="text-sm text-zinc-400">{item.major}</p>
                </div>
                <p className="text-sm text-zinc-400">{item.period}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

