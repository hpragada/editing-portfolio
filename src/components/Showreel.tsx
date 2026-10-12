import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, Sparkles, ExternalLink } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ReelCutSelector } from './ReelCutSelector';

interface ShowreelProps {
  onOpenProjectModal: (project: Project) => void;
}

export const Showreel: React.FC<ShowreelProps> = ({ onOpenProjectModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS[0]);
  const [showDriveEmbed, setShowDriveEmbed] = useState(false);

  const handleTogglePlay = () => {
    setShowDriveEmbed(true);
    setIsPlaying(true);
  };

  return (
    <section id="showreel" className="py-24 bg-[#0a0a0a] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
            <span>SHOWCASE REEL</span>
            <span aria-hidden="true" className="mx-2 text-[#C6FF4D]">/</span>
            <span>RHYTHM & PACING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F0] font-display">
            A glimpse into my editing style.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA]">
            Where audio transients determine the cut point and visual rhythm pulls the audience forward.
          </p>
        </div>

        {/* 16:9 Master Cinema Player Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#101010] border border-white/[0.12] overflow-hidden shadow-2xl">
            
            {/* Top Cine Bar */}
            <div className="px-6 py-3 bg-[#141414] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#C6FF4D]" />
                <span className="text-[#F5F5F0] font-medium">REEL STAGE · {activeProject.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span>HD 1080P</span>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => onOpenProjectModal(activeProject)}
                  className="text-[#C6FF4D] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Expand Theater</span>
                  <Maximize className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Main Stage (16:9) */}
            <div className="relative aspect-video w-full bg-[#050505] flex items-center justify-center overflow-hidden">
              {showDriveEmbed ? (
                <iframe
                  src={activeProject.embedUrl}
                  title={activeProject.title}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={new URL('../assets/images/showreel_poster_cinematic_1791562715232.jpg', import.meta.url).href}
                    alt="Cinematic video editing showreel title poster"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Big Play Button Trigger */}
                  <button
                    onClick={handleTogglePlay}
                    className="group relative z-10 w-20 h-20 rounded-full bg-[#080808]/90 border-2 border-[#C6FF4D] flex items-center justify-center text-[#C6FF4D] hover:bg-[#C6FF4D] hover:text-[#080808] hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer"
                    aria-label="Play video showcase"
                  >
                    <Play className="w-8 h-8 ml-1 fill-current" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#F5F5F0]">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">{activeProject.title}</p>
                      <p className="text-[11px] text-[#A1A1AA]">
                        {activeProject.tools.join(' · ')} · {activeProject.category}
                      </p>
                    </div>

                    <a
                      href={activeProject.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#080808]/80 border border-white/20 text-[#C6FF4D] hover:border-[#C6FF4D] flex items-center gap-1.5"
                    >
                      <span>Drive Source</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Project Selector Strip to quickly switch reels */}
            <ReelCutSelector
              projects={PROJECTS}
              activeId={activeProject.id}
              onSelect={(proj) => {
                setActiveProject(proj);
                setShowDriveEmbed(false);
              }}
            />

          </div>
        </div>

      </div>
    </section>
  );
};
