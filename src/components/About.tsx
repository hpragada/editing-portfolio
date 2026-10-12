import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';
import { ProfileBanner } from './ProfileBanner';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#080808] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Portfolio Profile Banner */}
        <div className="mb-12 lg:mb-16">
          <ProfileBanner />
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Strengths (profile banner now sits above the grid) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Strengths List */}
            <div className="p-6 bg-[#101010] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                Core Strengths
              </div>
              <ul className="space-y-2.5 text-xs text-[#D4D4D8]">
                {PROFILE_DATA.strengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#C6FF4D] font-mono mt-0.5">·</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Bio, Tools, and Education */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
                <span>BIOGRAPHY & BACKGROUND</span>
                <span aria-hidden="true" className="mx-2 text-[#C6FF4D]">/</span>
                <span>THE EDITOR</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F0] font-display">
                About Me
              </h2>
              <p className="text-base sm:text-lg text-[#E4E4E7] leading-relaxed font-normal">
                "{PROFILE_DATA.aboutBio}"
              </p>
            </div>

            {/* Photography & Editing Tools Grid */}
            <div className="space-y-5 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#F5F5F0] font-display">
                  Photography & Editing Tools
                </h3>
                <span className="text-xs font-mono text-[#A1A1AA]">
                  Post-Production & Creative Suite
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PROFILE_DATA.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 bg-[#121212] border border-white/[0.08] hover:border-[#C6FF4D]/40 transition-colors"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-bold text-[#F5F5F0] font-display">
                        {tool.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#A1A1AA]">
                        {tool.category}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#C6FF4D] mt-1">
                      {tool.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editing Specialties */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <h3 className="text-lg font-bold text-[#F5F5F0] font-display">
                Editing Specialties
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#D4D4D8]">
                {PROFILE_DATA.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-[#101010] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 bg-[#C6FF4D]" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education History */}
            <div className="space-y-5 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#F5F5F0] font-display flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#C6FF4D]" />
                  <span>Academic Background</span>
                </h3>
                <span className="text-xs font-mono text-[#A1A1AA]">
                  Bhoj Reddy Engineering College
                </span>
              </div>

              <div className="space-y-4">
                {PROFILE_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#121212] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-[#F5F5F0]">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-[#A1A1AA]">
                        {edu.institution}
                      </div>
                    </div>

                    <div className="text-left sm:text-right font-mono space-y-0.5 shrink-0">
                      <div className="text-xs font-bold text-[#C6FF4D]">
                        {edu.score}
                      </div>
                      <div className="text-[11px] text-[#71717A]">
                        {edu.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
