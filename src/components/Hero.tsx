import React from 'react';
import { Play, ArrowUpRight, Film, Sparkles, Volume2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  onWatchWorkClick: () => void;
  onContactClick: () => void;
  onOpenFeaturedVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onWatchWorkClick,
  onContactClick,
  onOpenFeaturedVideo
}) => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center border-b border-white/[0.08] bg-[#080808] bg-grain overflow-hidden">
      {/* Subtle atmospheric glow behind media frame */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#C6FF4D]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split-screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Editorial Kicker (Unboxed text with typographic separator) */}
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#A1A1AA]">
              <span>INDEPENDENT VIDEO EDITOR</span>
              <span aria-hidden="true" className="text-[#C6FF4D]">/</span>
              <span>HYDERABAD, INDIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#F5F5F0] leading-[1.08] font-display text-balance">
              Every frame <br />
              <span className="text-[#C6FF4D] italic font-serif font-normal">tells a story.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl font-normal leading-relaxed">
              I turn raw footage into engaging visual stories through rhythm, music, motion, and thoughtful editing.
            </p>

            {/* CTAs & Availability */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onWatchWorkClick}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#C6FF4D] text-[#080808] hover:bg-[#b5f03d] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#C6FF4D]/10"
              >
                <span>Watch My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F0] border border-white/20 hover:border-[#C6FF4D] hover:text-[#C6FF4D] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Let's Create Together
              </button>
            </div>

            {/* Subtle Availability Status (clean text, no pulsing dot) */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
              <span className="w-1.5 h-1.5 bg-[#C6FF4D]" />
              <span>Available for Freelance Projects & Internships</span>
            </div>
          </div>

          {/* Right Column: Cinematic Video Preview Anchor */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-none border border-white/[0.12] bg-[#121212] overflow-hidden shadow-2xl">
              
              {/* Film slate top bar */}
              <div className="px-4 py-2.5 bg-[#171717] border-b border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
                <div className="flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 text-[#C6FF4D]" />
                  <span>PREVIEW · REEL 01</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>9:16 VERTICAL</span>
                  <span className="text-white/30">|</span>
                  <span className="text-[#C6FF4D] font-bold">CAPCUT EDIT</span>
                </div>
              </div>

              {/* Poster frame with play interaction */}
              <div
                onClick={onOpenFeaturedVideo}
                className="relative aspect-video sm:aspect-[4/3] lg:aspect-video w-full overflow-hidden cursor-pointer"
              >
                <img
                  src="/src/assets/images/reels/reel_beach_rocks.jpg"
                  alt="Coastal Horizon video editing still frame preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Film frame grid overlays */}
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-b from-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#080808]/85 border border-[#C6FF4D]/60 flex items-center justify-center text-[#C6FF4D] group-hover:bg-[#C6FF4D] group-hover:text-[#080808] group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Timecode overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F5F5F0]">
                  <span className="bg-[#080808]/80 px-2 py-0.5 border border-white/10 text-[11px]">
                    TC 00:00:14:00 · 0:35
                  </span>
                  <span className="text-[#C6FF4D] text-[11px] font-semibold tracking-wider uppercase">
                    Play Reel
                  </span>
                </div>
              </div>

              {/* Bottom detail rail */}
              <div className="p-4 bg-[#101010] border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A1A1AA]">
                <div className="space-y-0.5">
                  <p className="text-white font-medium">Coastal Horizon — Beach Melody Reel</p>
                  <p className="text-[11px] text-white/50">CapCut · Match Cuts · Telugu Melody</p>
                </div>
                <button
                  onClick={onOpenFeaturedVideo}
                  className="text-[#C6FF4D] hover:underline font-mono text-xs flex items-center gap-1 cursor-pointer"
                >
                  Watch Reel →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width editorial metrics & tools strip below the hero split */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-xs uppercase font-mono text-[#A1A1AA] tracking-wider">Primary Tools</div>
            <div className="mt-1 text-sm font-semibold text-[#F5F5F0]">CapCut & Premiere Pro</div>
            <div className="text-xs text-white/50">VN · DaVinci · After Effects</div>
          </div>
          <div>
            <div className="text-xs uppercase font-mono text-[#A1A1AA] tracking-wider">Key Format</div>
            <div className="mt-1 text-sm font-semibold text-[#F5F5F0]">Reels & Shorts</div>
            <div className="text-xs text-white/50">High-retention 9:16 cuts</div>
          </div>
          <div>
            <div className="text-xs uppercase font-mono text-[#A1A1AA] tracking-wider">Specialty</div>
            <div className="mt-1 text-sm font-semibold text-[#F5F5F0]">Music Synchronization</div>
            <div className="text-xs text-white/50">Beat-matched pacing & flow</div>
          </div>
          <div>
            <div className="text-xs uppercase font-mono text-[#A1A1AA] tracking-wider">Location & Mode</div>
            <div className="mt-1 text-sm font-semibold text-[#F5F5F0]">Hyderabad, India</div>
            <div className="text-xs text-white/50">Remote & In-office ready</div>
          </div>
        </div>

      </div>
    </section>
  );
};
