import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Main Content Area */}
        <div className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Primary Info - Takes more space on large screens */}
            <div className="lg:col-span-7 space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight">
                  Let's Connect
                </h2>
                <div className="w-12 h-[1px] bg-white opacity-30"></div>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-6">
                  <h3 className="text-xs font-medium tracking-[0.2em] uppercase opacity-50">
                    Reach Out
                  </h3>
                  <div className="space-y-5">
                    <a 
                      href="tel:+919726270553"
                      className="group flex items-start space-x-4 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="mt-0.5 p-2 rounded-full bg-white bg-opacity-5 group-hover:bg-opacity-10 transition-all duration-300">
                        <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs opacity-60 font-light">Phone</p>
                        <p className="text-sm font-light group-hover:opacity-80 transition-opacity">
                          +91 9726270553
                        </p>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:vyasvishal.dev@gmail.com"
                      className="group flex items-start space-x-4 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="mt-0.5 p-2 rounded-full bg-white bg-opacity-5 group-hover:bg-opacity-10 transition-all duration-300">
                        <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs opacity-60 font-light">Email</p>
                        <p className="text-sm font-light group-hover:opacity-80 transition-opacity">
                          vyasvishal.dev@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xs font-medium tracking-[0.2em] uppercase opacity-50">
                    Location
                  </h3>
                  <div className="flex items-start space-x-4">
                    <div className="mt-0.5 p-2 rounded-full bg-white bg-opacity-5">
                      <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs opacity-60 font-light">Based in</p>
                      <p className="text-sm font-light">
                        Ahmedabad, Gujarat<br />
                        <span className="opacity-70">India</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links - Right side */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-xs font-medium tracking-[0.2em] uppercase opacity-50">
                    Follow
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://github.com/Vyas106"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 px-4 rounded-lg border border-white border-opacity-10 hover:border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <Github className="w-4 h-4" strokeWidth={1.5} />
                        <span className="text-sm font-light">GitHub</span>
                      </div>
                      <div className="w-4 h-4 flex items-center justify-center opacity-40 group-hover:opacity-70 group-hover:translate-x-1 transition-all duration-300">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/vishalvyas-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3 px-4 rounded-lg border border-white border-opacity-10 hover:border-opacity-20 hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                        <span className="text-sm font-light">LinkedIn</span>
                      </div>
                      <div className="w-4 h-4 flex items-center justify-center opacity-40 group-hover:opacity-70 group-hover:translate-x-1 transition-all duration-300">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-[0.08]">
          <div className="px-6 sm:px-8 lg:px-12 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
                <p className="text-xs font-light opacity-50">
                  © {new Date().getFullYear()} Vyas Vishal
                </p>
                <div className="hidden sm:block w-px h-4 bg-white opacity-20"></div>
                <p className="text-xs font-light opacity-30">
                  All rights reserved
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-xs opacity-30">
                <span className="font-light">Crafted with</span>
                <div className="w-3 h-3 rounded-full bg-white opacity-60 animate-pulse"></div>
                <span className="font-light">in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}