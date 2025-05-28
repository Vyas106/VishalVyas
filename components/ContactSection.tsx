import React, { useState } from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactItems = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'vyasvishal.dev@gmail.com',
      href: 'mailto:vyasvishal.dev@gmail.com'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vyasvishal',
      href: 'https://linkedin.com/in/vyasvishal'
    },
    {
      id: 'twitter',
      icon: Twitter,
      label: 'X (Twitter)',
      value: '@VishalVyas_Dev',
      href: 'https://x.com/VishalVyas_Dev'
    }
  ];

  return (
    <section className="min-h-screen  flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="overflow-hidden">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6 animate-fade-up">
              Get in Touch
            </h2>
          </div>
          <div className="w-16 h-px bg-white mx-auto mb-8 opacity-60"></div>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-md mx-auto leading-relaxed">
            Let's connect and create something meaningful together
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === item.id;
            
            return (
              <div
                key={item.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className={`
                    relative p-8 md:p-10 border border-white/10 
                    transition-all duration-500 ease-out
                    ${isHovered ? 'border-white/30 bg-white/5' : 'hover:border-white/20'}
                  `}>
                    {/* Icon */}
                    <div className="mb-8">
                      <div className={`
                        w-16 h-16 flex items-center justify-center
                        transition-transform duration-500 ease-out
                        ${isHovered ? 'scale-110' : 'group-hover:scale-105'}
                      `}>
                        <Icon 
                          size={32} 
                          className={`
                            transition-colors duration-300
                            ${isHovered ? 'text-white' : 'text-white/70'}
                          `}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <p className="text-white/50 text-sm tracking-widest uppercase font-light">
                        {item.label}
                      </p>
                      <p className={`
                        text-white font-light text-lg leading-relaxed
                        transition-colors duration-300
                        ${isHovered ? 'text-white' : 'text-white/80'}
                      `}>
                        {item.value}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className={`
                      absolute bottom-0 left-0 w-full h-px bg-white
                      transition-transform duration-500 ease-out origin-left
                      ${isHovered ? 'scale-x-100' : 'scale-x-0'}
                    `}></div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-px bg-white/20"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-8 h-px bg-white/20"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        
        /* Responsive typography */
        @media (max-width: 768px) {
          .text-5xl.md\\:text-7xl.lg\\:text-8xl {
            font-size: 3rem;
            line-height: 1.1;
          }
        }
        
        @media (max-width: 480px) {
          .text-5xl.md\\:text-7xl.lg\\:text-8xl {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;