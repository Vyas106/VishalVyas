"use client"

import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, ArrowUpRight, Code, Menu, X } from 'lucide-react';

// Define interfaces for type safety
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative bg-black border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
      {/* Project Image */}
      <div className="relative aspect-[4/3] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-105`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)} // Handle error state
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="text-center space-y-4">
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-200"
              onClick={() => console.log(`View details for ${title}`)}
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-medium text-white group-hover:text-white/80 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={`${id}-tech-${index}`}
              className="px-3 py-1 bg-white/5 text-white/70 text-xs font-medium border border-white/10"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-3 py-1 text-white/40 text-xs">
              +{technologies.length - 4} more
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button 
            className="text-sm text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1"
            onClick={() => console.log(`View project ${title}`)}
          >
            View Project <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <div className="flex gap-3">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label={`View live demo of ${title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label={`View source code of ${title}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
const Portfolio: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB featuring secure payments and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "2",
      title: "AI Chat Application",
      description: "Intelligent chat application with real-time messaging and AI-powered responses using modern ML frameworks.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "FastAPI", "WebSocket", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "3",
      title: "Task Management System",
      description: "Collaborative task management with real-time updates, team features, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "4",
      title: "Data Visualization Dashboard",
      description: "Interactive business intelligence dashboard with real-time charts and advanced data analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Chart.js", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "5",
      title: "Portfolio Website",
      description: "Modern, responsive portfolio showcasing creative work with smooth animations and optimal performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "6",
      title: "Mobile Banking App",
      description: "Secure banking application with biometric authentication and comprehensive financial management tools.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const navItems = ['About', 'Projects', 'Contact'];

  const handleNavClick = (item: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Header */}

      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 text-xs text-white/80 font-mono mb-8 animate-fadeIn"
              >
                <Code className="w-3 h-3" />
                Featured Work
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-6 animate-slideUp">
                Creative
                <br />
                <span className="text-white/60">Developer</span>
              </h1>
              
              <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed font-light animate-slideUp" style={{ animationDelay: '200ms' }}>
                Crafting digital experiences through innovative solutions, clean code, and thoughtful design.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="py-20" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-white/20"></div>
                <span className="text-white/60 text-sm font-mono tracking-wider">02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
                Selected Projects
              </h2>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  {...project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 border-t border-white/10" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight animate-slideUp">
                    Let's Build Something
                    <br />
                    <span className="text-white/60">Together</span>
                  </h2>
                  <p className="text-white/60 text-lg font-light max-w-xl mx-auto animate-slideUp" style={{ animationDelay: '200ms' }}>
                    Ready to bring your vision to life? Let's collaborate and create something extraordinary.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '400ms' }}>
                  <a 
                    href="mailto:hello@example.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-colors duration-300 group"
                  >
                    Start a Project
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a 
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    View Resume
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm font-mono">
              © 2025 — Designed & Developed with precision
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-white/40 hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/40 hover:text-white transition-colors duration-300"
                aria-label="External Link"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 2px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 1px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        /* Loading states */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;