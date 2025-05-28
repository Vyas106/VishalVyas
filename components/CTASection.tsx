import React from 'react';
import Link from 'next/link';

const stats = [
  {
    value: '02',
    label: 'Years',
    description: 'Experience',
  },
  {
    value: '+25',
    label: 'Clients',
    description: 'Worldwide',
  },
  {
    value: '+100',
    label: 'Total',
    description: 'Projects',
  },
];

const CTASection = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
          
          {/* Stats Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="group cursor-pointer transition-all duration-500 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div className="relative bg-black border border-white/10 rounded-3xl p-8 lg:p-10 text-center backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-sm lg:text-base font-medium mb-2 tracking-widest uppercase">
                        {stat.label}
                      </div>
                      <div className="text-white/40 text-xs lg:text-sm font-light">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text and CTA */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Minimal Icon */}
            <div className="w-12 h-12 lg:w-16 lg:h-16 mb-12 lg:mb-16 mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-xl"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-8 lg:h-8 text-white/80">
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                </svg>
              </div>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-12 lg:mb-16 leading-none tracking-tight">
              Let's<br />
              <span className="font-light italic">work together.</span>
            </h2>
            
            <p className="text-white/60 text-lg lg:text-xl xl:text-2xl mb-12 lg:mb-16 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              Ready to bring your ideas to life? Let's collaborate and create something extraordinary.
            </p>
            
            <Link href="/contact">
              <button className="group relative overflow-hidden bg-white text-black text-lg lg:text-xl font-medium px-12 lg:px-16 py-4 lg:py-6 rounded-full transition-all duration-700 hover:scale-105 active:scale-95">
                <span className="relative z-10 tracking-wide">Get in touch</span>
                <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <div className="absolute inset-0 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100"></div>
              </button>
            </Link>
            
            {/* Subtle decorative line */}
            <div className="mt-16 lg:mt-20 flex items-center justify-center lg:justify-start">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl transform rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/[0.01] rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;