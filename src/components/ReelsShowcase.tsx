import React, { useState } from 'react';
import { Play, Sparkles, ExternalLink, Film, Volume2, Music2, Flame, ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ReelsShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ReelsShowcase: React.FC<ReelsShowcaseProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Filter reels only
  const allReels = PROJECTS.filter((p) => p.isReel);

  const categories = ['All (6)', 'College & Events', 'Melody & Aesthetics', 'Sports & Action'];

  const filteredReels = allReels.filter((reel) => {
    if (activeCategory === 'All (6)') return true;
    if (activeCategory === 'College & Events') return reel.id === 'reel-jijnasa' || reel.id === 'reel-csea-girls';
    if (activeCategory === 'Melody & Aesthetics') return reel.id === 'reel-coastal' || reel.id === 'reel-golden-hour' || reel.id === 'reel-cover-song';
    if (activeCategory === 'Sports & Action') return reel.id === 'reel-sports-athletics';
    return true;
  });

  return (
    <section id="reels" className="py-24 bg-[#080808] border-b border-white/[0.08] relative overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C6FF4D]/[0.025] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with High-Priority Visual Hierarchy */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
              <span className="text-[#C6FF4D] font-bold">REELS & SHORT-FORM EXPERIENCES</span>
              <span aria-hidden="true" className="text-white/30">/</span>
              <span>6 NATIVE 9:16 EDITS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F0] font-display text-balance leading-[1.08]">
              Engineered for the Scroll. <br />
              <span className="text-[#C6FF4D]">Edited for the Beat.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Every cut lands on an acoustic transient. Here are my 6 featured 9:16 vertical edits—crafted with rhythm, beat synchronization, kinetic typography, and fluid visual pacing for Instagram Reels and YouTube Shorts.
            </p>
          </div>

          {/* Interactive Filter Segmented Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#121212] border border-white/[0.08] self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#C6FF4D] text-[#080808] font-bold shadow-sm'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Reel Responsive 3-Column 9:16 Vertical Reel Gallery */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReels.map((reel, idx) => (
            <div
              key={reel.id}
              className="group relative flex flex-col bg-[#101010] border border-white/[0.1] hover:border-[#C6FF4D]/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(198,255,77,0.12)] overflow-hidden"
            >
              {/* Top Meta Bar */}
              <div className="px-3.5 py-2.5 bg-[#141414] border-b border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#C6FF4D]" />
                  <span className="text-white/80 font-semibold">REEL 0{idx + 1}</span>
                </div>
                
                {/* Audio Waveform Simulator */}
                <div className="flex items-center gap-1" title="Beat Sync Pacing">
                  <span className="w-0.5 h-2 bg-[#C6FF4D] animate-pulse" />
                  <span className="w-0.5 h-3 bg-[#C6FF4D] animate-pulse delay-75" />
                  <span className="w-0.5 h-1.5 bg-[#C6FF4D] animate-pulse delay-150" />
                  <span className="w-0.5 h-3.5 bg-[#C6FF4D] animate-pulse delay-100" />
                  <span className="text-[#C6FF4D] ml-1 text-[10px] font-bold">{reel.duration}</span>
                </div>
              </div>

              {/* 9:16 Vertical Video Frame */}
              <div
                className="relative aspect-[9/16] w-full overflow-hidden bg-[#050505] cursor-pointer"
                onClick={() => onSelectProject(reel)}
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Subtle vignette and cinematic bottom scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

                {/* Center Animated Neon Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#080808]/85 border-2 border-[#C6FF4D]/70 flex items-center justify-center text-[#C6FF4D] group-hover:bg-[#C6FF4D] group-hover:text-[#080808] group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Top Overlay Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2 py-0.5 bg-[#080808]/80 text-[#C6FF4D] border border-white/10 backdrop-blur-sm text-[10px] font-bold tracking-wider">
                    9:16 VERTICAL
                  </span>
                  <span className="px-2 py-0.5 bg-[#080808]/80 text-white/90 border border-white/10 backdrop-blur-sm text-[10px]">
                    {reel.tools[0]}
                  </span>
                </div>

                {/* Bottom Overlay Music Track info */}
                {reel.audioTrack && (
                  <div className="absolute bottom-3 left-3 right-3 px-2.5 py-1.5 bg-[#080808]/85 border border-white/15 backdrop-blur-md flex items-center gap-2 text-[11px] font-mono text-[#D4D4D8]">
                    <Music2 className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0" />
                    <span className="truncate text-[10px]">{reel.audioTrack}</span>
                  </div>
                )}
              </div>

              {/* Card Footer Content */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-3.5 bg-[#101010]">
                <div className="space-y-1.5">
                  <h3
                    onClick={() => onSelectProject(reel)}
                    className="text-base font-bold text-[#F5F5F0] group-hover:text-[#C6FF4D] transition-colors cursor-pointer font-display leading-snug line-clamp-2"
                  >
                    {reel.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                    {reel.description}
                  </p>
                </div>

                {/* Techniques (Zero-Pill unboxed text) */}
                <div className="pt-2.5 border-t border-white/[0.06] text-[11px] font-mono text-[#71717A] space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white/40 uppercase">Cuts:</span>
                    <span className="text-[#C6FF4D] truncate">{reel.techniques.slice(0, 2).join(' · ')}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(reel)}
                    className="w-full py-2 px-3 text-xs font-semibold bg-white/[0.06] hover:bg-[#C6FF4D] hover:text-[#080808] text-[#F5F5F0] transition-colors cursor-pointer flex items-center justify-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Reel</span>
                  </button>

                  <a
                    href={reel.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/[0.04] hover:bg-white/10 text-[#A1A1AA] hover:text-[#C6FF4D] border border-white/10 transition-colors"
                    title="Open on Google Drive"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reels Highlights Strip */}
        <div className="mt-12 p-6 bg-[#121212] border border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-[#A1A1AA]">
          <div className="space-y-1">
            <div className="text-white font-semibold">Beat Synchronization</div>
            <div className="text-[11px] text-white/50">Cuts aligned to drum drops & vocals</div>
          </div>
          <div className="space-y-1">
            <div className="text-white font-semibold">Dynamic Speed Curves</div>
            <div className="text-[11px] text-white/50">CapCut & VN velocity ramping</div>
          </div>
          <div className="space-y-1">
            <div className="text-white font-semibold">Kinetic Typography</div>
            <div className="text-[11px] text-white/50">Hook-optimized word-by-word captions</div>
          </div>
          <div className="space-y-1">
            <div className="text-white font-semibold">Platform Optimized</div>
            <div className="text-[11px] text-white/50">Lossless 1080×1920 mobile export</div>
          </div>
        </div>

      </div>
    </section>
  );
};
