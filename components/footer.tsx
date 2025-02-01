import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 9726270553</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>vyasvishal.dev@gmail.com</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/Vyas106" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/vishal-vyas-5292692aa" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Location</h3>
            <p>Ahmedabad, Gujarat, India</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vyas Vishal. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

