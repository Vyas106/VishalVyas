"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "LinkedIn", path: "https://linkedin.com/in/vishal-vyas-5292692aa", external: true },
  { name: "GitHub", path: "https://github.com/Vyas106", external: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  const NavLink = ({ item, mobile = false, onClick } : { item: typeof navigationItems[number], mobile?: boolean, onClick?: () => void }) => {
    const isActive = pathname === item.path;
    const baseClasses = `
      relative transition-all duration-200 ease-out
      ${mobile 
        ? 'block w-full text-left py-4 px-0 text-lg border-b border-white/5 last:border-b-0' 
        : 'inline-block py-2 px-4 text-sm'
      }
      ${isActive 
        ? 'text-white' 
        : 'text-white/70 hover:text-white'
      }
    `;

    const content = (
      <span className="relative">
        {item.name}
        {isActive && !mobile && (
          <span className="absolute -bottom-1 left-0 w-full h-px bg-white"></span>
        )}
        {isActive && mobile && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-white -ml-6"></span>
        )}
      </span>
    );

    if (item.external) {
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={item.path} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  };

  return (
    <>
      {/* Main Navbar */}
      <header className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
        }
      `}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl lg:text-2xl font-light text-white hover:opacity-80 transition-opacity duration-200 tracking-wide"
            >
              Vishal Vyas
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navigationItems.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}
            </nav>

            {/* Contact & Mobile Menu */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Contact Button - Desktop */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-6 py-2 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 transition-all duration-200 text-sm font-light tracking-wide"
              >
                Contact
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`
          fixed inset-0 z-50 md:hidden transition-opacity duration-300
          ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
        
        {/* Sidebar */}
        <div className={`
          absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black border-l border-white/10
          transform transition-transform duration-300 ease-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-lg font-light text-white tracking-wide">Menu</span>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-0">
                {navigationItems.map((item) => (
                  <NavLink 
                    key={item.path} 
                    item={item} 
                    mobile 
                    onClick={() => setIsSidebarOpen(false)}
                  />
                ))}
              </div>
            </nav>
            
            {/* Contact Button - Mobile */}
            <div className="p-6 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsSidebarOpen(false)}
                className="block w-full text-center px-6 py-3 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 transition-all duration-200 text-sm font-light tracking-wide"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}