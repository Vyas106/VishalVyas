import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"
import type React from "react"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Modern Portfolio",
  description: "A modern portfolio website built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
          <Navbar />
          <main className="min-h-screen pt-16 bg-background text-foreground">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

