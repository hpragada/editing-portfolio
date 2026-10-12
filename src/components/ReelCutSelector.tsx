import React from 'react';
import { Project } from '../data/portfolioData';

/**
 * Cinematic "Select Reel Cut" selector.
 * Purely presentational: selection logic lives in Showreel via onSelect.
 */
interface ReelCutSelectorProps {
  projects: Project[];
  activeId: Project['id'];
  onSelect: (project: Project) => void;
}

const SPROCKETS =
  'repeating-linear-gradient(90deg, rgba(255,255,255,0.14) 0 7px, transparent 7px 17px)';

export const ReelCutSelector: React.FC<ReelCutSelectorProps> = ({ projects, activeId, onSelect }) => {
  const count = projects.length;
  const activeIndex = Math.max(
    0,
    projects.findIndex((p) => p.id === activeId)
  );
  const playheadLeft = ((activeIndex + 0.5) / count) * 100;

  return (
    <div className="relative overflow-hidden border-t border-white/[0.1] bg-[#0b0b0c]">
      {/* Atmosphere: charcoal gradient, soft silver top light, faint red under-glow */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#121214_0%,#0a0a0b_100%)]" />
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[70%] h-32 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07),transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.14),transparent_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 6px)',
        }}
      />

      {/* Film-strip sprocket edges */}
      <div className="absolute top-1.5 inset-x-0 h-1.5 pointer-events-none opacity-70" style={{ backgroundImage: SPROCKETS }} />
      <div className="absolute bottom-1.5 inset-x-0 h-1.5 pointer-events-none opacity-70" style={{ backgroundImage: SPROCKETS }} />

      <div className="relative z-10 px-4 sm:px-8 pt-9 pb-9 space-y-6">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-4 w-full max-w-xl">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-white/50" />
            <h3 className="flex items-center gap-2.5 text-base sm:text-xl font-semibold uppercase tracking-[0.28em] sm:tracking-[0.34em] text-[#ECECEF] font-display whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.7)] animate-pulse" />
              <span>Select Reel Cut:</span>
            </h3>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/25 to-white/50" />
          </div>
        </div>

        {/* Cut tabs */}
        <div role="tablist" aria-label="Select Reel Cut" className="grid grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
          {projects.map((proj, i) => {
            const isActive = activeId === proj.id;
            return (
              <button
                key={proj.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelect(proj)}
                className={`group relative overflow-hidden cursor-pointer px-2 py-3.5 sm:py-4 text-center border transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70 ${
                  isActive
                    ? 'border-red-500/60 bg-[linear-gradient(180deg,#1d1213_0%,#120b0c_100%)] -translate-y-0.5 shadow-[0_10px_30px_-10px_rgba(239,68,68,0.55),inset_0_1px_0_rgba(255,255,255,0.08)]'
                    : 'border-white/[0.09] bg-[linear-gradient(180deg,#17171a_0%,#0f0f11_100%)] hover:-translate-y-0.5 hover:border-white/30 hover:shadow-[0_10px_24px_-12px_rgba(255,255,255,0.15)]'
                }`}
              >
                {/* Hover sheen */}
                <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.09] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%] pointer-events-none" />
                {/* Active red glow */}
                <span
                  className={`absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(239,68,68,0.28),transparent_70%)] transition-opacity duration-300 pointer-events-none ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* Clip bar: mini timeline block, lights up when active */}
                <span className="relative block mx-auto mb-2.5 h-[3px] w-6 rounded-full overflow-hidden bg-white/10">
                  <span
                    className={`absolute inset-y-0 left-0 transition-all duration-500 ${
                      isActive ? 'w-full bg-red-500' : 'w-1/3 bg-white/40 group-hover:w-2/3'
                    }`}
                  />
                </span>
                <span
                  className={`relative block text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase whitespace-nowrap transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#9A9AA3] group-hover:text-white'
                  }`}
                >
                  Cut 0{i + 1}
                </span>
                {/* Bottom accent line */}
                <span
                  className={`absolute bottom-0 inset-x-0 h-[2px] transition-all duration-300 ${
                    isActive
                      ? 'bg-red-500 shadow-[0_0_12px_2px_rgba(239,68,68,0.8)]'
                      : 'bg-transparent group-hover:bg-white/40'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Timeline ruler with moving playhead */}
        <div className="relative h-6 select-none" aria-hidden="true">
          <div
            className="absolute inset-x-0 top-2.5 h-2"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.28) 0 1px, transparent 1px 12px)',
            }}
          />
          <div className="absolute inset-x-0 top-2.5 h-px bg-white/25" />
          <div
            className="absolute top-0 bottom-0 w-px bg-red-500 shadow-[0_0_10px_1px_rgba(239,68,68,0.8)] transition-all duration-500 ease-out"
            style={{ left: `${playheadLeft}%` }}
          >
            <span className="absolute -top-0.5 -left-[4px] w-[9px] h-[9px] bg-red-500 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
          </div>
        </div>

        {/* Existing helper note (text unchanged) */}
        <div className="text-center text-[11px] font-mono text-[#71717A]">
          
        </div>
      </div>
    </div>
  );
};
