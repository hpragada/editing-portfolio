import React from 'react';
import { ArrowUp, Film, Heart } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] py-12 text-[#A1A1AA] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Location */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-white font-bold text-sm tracking-wider font-display">
            PRAGADA HARIKA SRAVANI
          </div>
          <div className="text-[#71717A]">
            Independent Video Editor · Hyderabad, Telangana, India
          </div>
        </div>

        {/* Center note */}
        <div className="text-center text-[#71717A]">
          Crafted with rhythm, precision & passion for visual storytelling.
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 hover:border-[#C6FF4D] hover:text-[#C6FF4D] text-[#D4D4D8] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
