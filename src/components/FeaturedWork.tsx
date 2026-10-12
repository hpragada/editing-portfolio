import React, { useState } from 'react';
import { Play, ExternalLink, Film, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Reels & Shorts', 'Montages', 'Creative Edits'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="featured-work" className="py-24 bg-[#080808] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
              <span>PORTFOLIO SELECTION</span>
              <span aria-hidden="true" className="text-[#C6FF4D]">/</span>
              <span>5 CURATED EDITS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F0] font-display">
              Featured Work
            </h2>
            <p className="text-[#A1A1AA] text-sm sm:text-base max-w-xl">
              Original video cuts showcasing pacing, music synchronization, typography, and visual rhythm.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121212] border border-white/[0.08] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C6FF4D] text-[#080808] font-semibold'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            // Give primary project wide presence
            const isWide = idx === 0 || idx === 3;
            const colSpan = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                className={`${colSpan} group relative flex flex-col bg-[#101010] border border-white/[0.1] hover:border-[#C6FF4D]/50 transition-all duration-300 overflow-hidden`}
              >
                {/* Poster Frame Area */}
                <div
                  className="relative aspect-video sm:aspect-[16/10] w-full overflow-hidden bg-[#050505] cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {/* Dark Vignette & Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Play Trigger Badge in Center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-[#080808]/85 border border-[#C6FF4D]/50 flex items-center justify-center text-[#C6FF4D] group-hover:bg-[#C6FF4D] group-hover:text-[#080808] group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Top Bar Details */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="px-2 py-0.5 bg-[#080808]/85 border border-white/10">
                      {project.category}
                    </span>
                    {project.duration && (
                      <span className="px-2 py-0.5 bg-[#080808]/85 border border-white/10 text-[#C6FF4D]">
                        {project.duration}
                      </span>
                    )}
                  </div>

                  {/* Bottom Hover Instruction */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#F5F5F0]">
                    <span className="text-[11px] text-[#A1A1AA]">
                      Drive Source Verified
                    </span>
                    <span className="text-[#C6FF4D] text-[11px] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Click to Play →
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-lg sm:text-xl font-bold text-[#F5F5F0] group-hover:text-[#C6FF4D] transition-colors cursor-pointer font-display"
                      >
                        {project.title}
                      </h3>
                      <a
                        href={project.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A1A1AA] hover:text-[#C6FF4D] transition-colors p-1"
                        title="Open Original Video on Google Drive"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Techniques & Tools (Zero-Pill discipline: unboxed clean text) */}
                  <div className="pt-3 border-t border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-mono text-[#71717A] flex items-center gap-2">
                      <span className="text-white/40 uppercase">Tools:</span>
                      <span className="text-[#D4D4D8]">{project.tools.join(' · ')}</span>
                    </div>

                    <div className="text-[11px] font-mono text-[#71717A] flex items-center gap-2">
                      <span className="text-white/40 uppercase">Techniques:</span>
                      <span className="text-[#C6FF4D]">{project.techniques.join(' · ')}</span>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 text-xs font-semibold bg-white/[0.06] hover:bg-[#C6FF4D] hover:text-[#080808] text-[#F5F5F0] transition-colors cursor-pointer"
                    >
                      Watch Video
                    </button>
                    <a
                      href={project.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#A1A1AA] hover:text-[#C6FF4D] transition-colors flex items-center gap-1"
                    >
                      <span>Google Drive File</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Google Drive projects & custom editing */}
        <div className="mt-12 p-5 bg-[#121212] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#A1A1AA]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#C6FF4D]" />
           
          </div>
          
        </div>

      </div>
    </section>
  );
};
