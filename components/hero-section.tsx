"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Copy, Check, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const email = "vyasvishal.dev@gmail.com"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto "
    >
      <Card className="bg-black border-zinc-800 overflow-hidden">
        <CardContent className="p-0 grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto md:h-[600px]">
            <Image
              src="/WhatsApp Image 2024-11-17 at 22.00.02_fb8cd913.jpg"
              alt="Portfolio hero image"
              layout="fill"
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 md:bg-gradient-to-r" />
          </div>

          {/* Content Section */}
          <div className="relative p-6 md:p-12 flex flex-col justify-center space-y-6">
            <motion.div
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Name and Title */}
              <div className="space-y-2 md:space-y-4">
                <h1 className="text-4xl md:text-6xl text-white font-bold tracking-tighter">
                  VISHAL<br />VYAS
                </h1>
                <p className="text-lg md:text-xl text-zinc-400">
                Entrepreneur | Full-Stack Developer | AI & ML Expert
                </p>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col space-y-3 md:space-y-4 text-zinc-400">
                <Link 
                  href="tel:+919726270553" 
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                  +91 9726270553
                </Link>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Link
                    href={`mailto:${email}`}
                    className="hover:text-white transition-colors flex items-center flex-1 group"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{email}</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 md:h-10 md:w-10 text-zinc-400 hover:text-white"
                    onClick={handleCopyEmail}
                  >
                    {copied ? (
                      <Check className="h-4 w-4 md:h-5 md:w-5" />
                    ) : (
                      <Copy className="h-4 w-4 md:h-5 md:w-5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Social Links
              <div className="flex items-center space-x-4 pt-2 md:pt-4">
                <Link 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6 md:w-7 md:h-7" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                </Link>
              </div> */}

              {/* Bio or Intro Text
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">
                Passionate about creating elegant solutions to complex problems. 
                Specialized in building modern web applications with React, Next.js, 
                and Node.js. Let's build something amazing together.
              </p>

              {/* CTA Button */}
              {/* <Button 
                className="w-full md:w-auto bg-white text-black hover:bg-zinc-200 transition-colors"
                size="lg"
              >
                View Projects
              </Button> */} 
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}