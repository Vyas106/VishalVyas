"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Mail, Phone, Copy, Check, Github, Linkedin, ArrowUpRight, Minus } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  
  const email = "vyasvishal.dev@gmail.com"

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor Follower */}
      <motion.div
        className="fixed w-4 h-4 border border-white/20 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Navigation */}


      {/* Main Content */}
      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <motion.div 
          style={{ y }}
          className="flex items-center px-6 lg:px-12 xl:px-20 py-20 lg:py-0"
        >
          <div className="w-full max-w-xl">
            {/* Main Title */}
            <div className="mb-16 lg:mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-8 h-px bg-white" />
                  <span className="text-xs font-light tracking-[0.2em] uppercase opacity-60">
                    Portfolio 2025
                  </span>
                </div>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extralight leading-none tracking-tight mb-4"
                >
                  VISHAL
                </motion.h1>
              </div>
              
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extralight leading-none tracking-tight opacity-60"
                >
                  VYAS
                </motion.h1>
              </div>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 120, opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="h-px bg-white mt-8 lg:mt-12"
              />

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="text-sm lg:text-base font-light tracking-wide opacity-70 mt-8 max-w-md leading-relaxed"
              >
                Crafting digital experiences through code.
                <br />
                Entrepreneur • Developer • AI Enthusiast
              </motion.p>
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="text-xs font-light tracking-[0.15em] uppercase opacity-40 mb-6">
                  Get in touch
                </div>
                
                {/* Phone */}
                <motion.div 
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Link 
                    href="tel:+919726270553" 
                    className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-1 h-1 bg-white rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-light tracking-wide">+91 9726270553</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.div>

                {/* Email */}
                <motion.div 
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-colors">
                    <Link
                      href={`mailto:${email}`}
                      className="flex items-center space-x-4 flex-1"
                    >
                      <div className="w-1 h-1 bg-white rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-light tracking-wide truncate">{email}</span>
                    </Link>
                    <button
                      onClick={handleCopyEmail}
                      className="ml-4 p-2 hover:bg-white/5 rounded transition-colors"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                          >
                            <Check className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                          >
                            <Copy className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="flex items-center space-x-8 pt-8">
                  {[
                    { icon: Github, href: "https://github.com/yourusername", label: "Github" },
                    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" }
                  ].map(({ icon: Icon, href, label }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href={href}
                        target="_blank"
                        className="flex items-center space-x-3 text-xs font-light tracking-wide opacity-60 hover:opacity-100 transition-opacity group"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden sm:block">{label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                className="pt-16"
              >
                <Link 
                  href="#work"
                  className="group inline-flex items-center space-x-4 text-xs font-light tracking-[0.15em] uppercase border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-500"
                >
                  <span>Explore Work</span>
                  <motion.div
                    className="w-4 h-px bg-current"
                    whileHover={{ width: 24 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <div className="relative lg:min-h-screen min-h-[60vh] order-first lg:order-last">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-4 lg:inset-8">
              <Image
                src="/WhatsApp Image 2024-11-17 at 22.00.02_fb8cd913.jpg"
                alt="Vishal Vyas"
                fill
                className="object-cover grayscale filter brightness-110 contrast-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            </div>
            <div className="absolute inset-4 lg:inset-8 border border-white/20" />
          </motion.div>

          {/* Image Overlay Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 z-10"
          >
            <div className="text-right">
              <div className="text-xs font-light tracking-[0.15em] uppercase opacity-60 mb-2">
                Based in Gujarat, India
              </div>
              <div className="text-xs font-light opacity-40">
                Available for projects
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        className="fixed bottom-8 left-8 z-30 hidden lg:block"
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-px bg-white/20" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs font-light tracking-[0.15em] uppercase opacity-40"
          >
            Scroll
          </motion.div>
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-white/20 z-50 origin-left"
        style={{ scaleX: useTransform(scrollY, [0, 1000], [0, 1]) }}
      />
    </div>
  )
}