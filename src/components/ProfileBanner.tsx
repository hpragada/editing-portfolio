import React from 'react';
import { MapPin, Languages, Radio, Layers } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

/**
 * Cinematic "Portfolio Profile" banner.
 * Wide dark banner: identity on the left, original editing-desk illustration on the right
 * (coffee, notebook, phone with NLE UI, earbuds, film strip). All artwork is drawn in SVG.
 */

const DeskScene: React.FC = () => (
  <svg
    viewBox="0 0 560 340"
    preserveAspectRatio="xMaxYMid slice"
    className="w-full h-full"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="pb-cup" cx="45%" cy="40%" r="65%">
        <stop offset="0" stopColor="#2a2a2e" />
        <stop offset="1" stopColor="#0d0d0f" />
      </radialGradient>
      <radialGradient id="pb-coffee" cx="40%" cy="35%" r="70%">
        <stop offset="0" stopColor="#3a2a1e" />
        <stop offset="0.55" stopColor="#120c08" />
        <stop offset="1" stopColor="#050403" />
      </radialGradient>
      <linearGradient id="pb-book" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#202023" />
        <stop offset="1" stopColor="#0f0f11" />
      </linearGradient>
      <linearGradient id="pb-phone" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1c1c20" />
        <stop offset="1" stopColor="#060607" />
      </linearGradient>
      <linearGradient id="pb-film" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#1a1a1d" />
        <stop offset="1" stopColor="#0c0c0e" />
      </linearGradient>
      <filter id="pb-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
      <pattern id="pb-holes" width="14" height="10" patternUnits="userSpaceOnUse">
        <rect x="3" y="2" width="8" height="6" rx="1.5" fill="#050506" />
      </pattern>
    </defs>

    {/* Film strip sweeping across the lower right */}
    <g transform="translate(250 262) rotate(-12)">
      <rect x="0" y="0" width="360" height="62" fill="url(#pb-film)" stroke="#2a2a2e" strokeWidth="1" />
      <rect x="0" y="4" width="360" height="10" fill="url(#pb-holes)" />
      <rect x="0" y="48" width="360" height="10" fill="url(#pb-holes)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={12 + i * 70} y="17" width="58" height="28" fill="#09090a" stroke="#2f2f34" strokeWidth="0.8" />
      ))}
      <rect x={12 + 70} y="17" width="58" height="28" fill="#C6FF4D" opacity="0.06" />
      <path d="M92 38 L112 28 L132 38 Z" fill="#ffffff" opacity="0.06" />
    </g>

    {/* Notebook with spiral binding */}
    <g transform="translate(300 18) rotate(8)">
      <rect x="6" y="10" width="170" height="236" rx="8" fill="#000" opacity="0.5" filter="url(#pb-shadow)" />
      <rect x="0" y="0" width="170" height="236" rx="8" fill="url(#pb-book)" stroke="#2c2c30" strokeWidth="1" />
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={i}>
          <rect x="-6" y={14 + i * 14} width="16" height="3.2" rx="1.6" fill="#3a3a40" />
          <rect x="-6" y={14.6 + i * 14} width="16" height="1" rx="0.5" fill="#6a6a72" opacity="0.5" />
        </g>
      ))}
      {/* Storyboard sketch lines */}
      <rect x="30" y="26" width="110" height="58" fill="none" stroke="#C6FF4D" strokeOpacity="0.28" strokeDasharray="3 3" />
      <path d="M30 84 L70 52 L96 70 L116 54 L140 76" fill="none" stroke="#C6FF4D" strokeOpacity="0.28" />
      <rect x="30" y="98" width="110" height="1" fill="#fff" opacity="0.12" />
      <rect x="30" y="110" width="80" height="1" fill="#fff" opacity="0.1" />
      <rect x="30" y="122" width="96" height="1" fill="#fff" opacity="0.1" />
    </g>

    {/* Smartphone showing an editing timeline */}
    <g transform="translate(445 -20) rotate(14)">
      <rect x="8" y="10" width="130" height="240" rx="20" fill="#000" opacity="0.55" filter="url(#pb-shadow)" />
      <rect x="0" y="0" width="130" height="240" rx="20" fill="url(#pb-phone)" stroke="#34343a" strokeWidth="1.4" />
      <rect x="7" y="7" width="116" height="226" rx="14" fill="#040405" />
      <rect x="47" y="12" width="36" height="6" rx="3" fill="#121214" />
      {/* Preview frame */}
      <rect x="16" y="32" width="98" height="60" rx="3" fill="#0b0b0d" stroke="#C6FF4D" strokeOpacity="0.35" />
      <path d="M58 52 L74 62 L58 72 Z" fill="#C6FF4D" opacity="0.55" />
      {/* Timeline tracks */}
      <rect x="16" y="108" width="52" height="7" rx="1.5" fill="#C6FF4D" opacity="0.5" />
      <rect x="72" y="108" width="30" height="7" rx="1.5" fill="#fff" opacity="0.18" />
      <rect x="16" y="120" width="30" height="7" rx="1.5" fill="#38bdf8" opacity="0.45" />
      <rect x="50" y="120" width="56" height="7" rx="1.5" fill="#38bdf8" opacity="0.25" />
      {Array.from({ length: 22 }).map((_, i) => (
        <rect key={i} x={16 + i * 4.4} y={136 - ((i * 7) % 9)} width="2" height={4 + ((i * 7) % 9) * 1.6} fill="#C6FF4D" opacity="0.45" />
      ))}
      {/* Playhead */}
      <rect x="62" y="100" width="1.4" height="50" fill="#ef4444" />
      <circle cx="62.7" cy="100" r="2.4" fill="#ef4444" />
    </g>

    {/* Coffee cup + saucer (top view) */}
    <g transform="translate(150 78)">
      <circle cx="6" cy="10" r="74" fill="#000" opacity="0.55" filter="url(#pb-shadow)" />
      <circle cx="0" cy="0" r="72" fill="url(#pb-cup)" stroke="#303034" strokeWidth="1.2" />
      <circle cx="0" cy="0" r="58" fill="none" stroke="#3a3a40" strokeWidth="0.8" opacity="0.7" />
      <circle cx="-4" cy="-3" r="42" fill="#17171a" stroke="#3c3c42" strokeWidth="1.4" />
      <circle cx="-4" cy="-3" r="35" fill="url(#pb-coffee)" />
      <ellipse cx="-14" cy="-14" rx="14" ry="6" fill="#fff" opacity="0.07" transform="rotate(-30 -14 -14)" />
      {/* Handle */}
      <path d="M-46 14 C-70 22 -66 52 -42 48" fill="none" stroke="#2a2a2e" strokeWidth="9" strokeLinecap="round" />
      <path d="M-46 14 C-70 22 -66 52 -42 48" fill="none" stroke="#4a4a52" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </g>

    {/* Earbuds */}
    <g transform="translate(228 232) rotate(-18)">
      <ellipse cx="3" cy="6" rx="18" ry="22" fill="#000" opacity="0.5" filter="url(#pb-shadow)" />
      <ellipse cx="0" cy="0" rx="14" ry="18" fill="#e8e8ea" />
      <ellipse cx="-4" cy="-6" rx="6" ry="8" fill="#fff" opacity="0.7" />
      <rect x="-3" y="14" width="6" height="36" rx="3" fill="#dcdcdf" />
    </g>
    <g transform="translate(266 270) rotate(-26)">
      <ellipse cx="3" cy="6" rx="18" ry="22" fill="#000" opacity="0.5" filter="url(#pb-shadow)" />
      <ellipse cx="0" cy="0" rx="14" ry="18" fill="#e0e0e2" />
      <ellipse cx="-4" cy="-6" rx="6" ry="8" fill="#fff" opacity="0.6" />
      <rect x="-3" y="14" width="6" height="36" rx="3" fill="#d2d2d6" />
    </g>
  </svg>
);

const INFO_LABEL = 'text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.28em] text-white/40';

export const ProfileBanner: React.FC = () => {
  return (
    <div
      role="region"
      aria-label="Portfolio profile"
      className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0a0b] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
    >
      {/* ======= Hero area ======= */}
      <div className="relative min-h-[420px] sm:min-h-[340px] lg:min-h-[380px] bg-grain">
        {/* Charcoal base + lighting */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#050506_0%,#0d0d0f_45%,#17171a_100%)]" />
        <div className="absolute -top-24 right-[8%] w-[520px] h-[320px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.09),transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-32 left-[-10%] w-[560px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(198,255,77,0.06),transparent_70%)] pointer-events-none" />
        {/* Leather-like texture lines */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 5px)',
          }}
        />

        {/* Desk scene (right) */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-[60%] lg:w-[52%] opacity-45 sm:opacity-100 pointer-events-none">
          <DeskScene />
        </div>
        {/* Fade scene into the left so text stays crisp */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050506_0%,rgba(5,5,6,0.92)_32%,rgba(5,5,6,0.35)_58%,transparent_80%)] max-sm:bg-[linear-gradient(180deg,rgba(5,5,6,0.88)_0%,rgba(5,5,6,0.55)_60%,rgba(5,5,6,0.85)_100%)] pointer-events-none" />

        {/* Viewfinder corners */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/25 pointer-events-none" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/25 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/25 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/25 pointer-events-none" />

        {/* REC chip */}
        <div className="absolute top-5 right-6 sm:right-8 hidden sm:flex items-center gap-2 text-[10px] font-mono text-white/60 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="font-bold text-white/85">REC</span>
          <span className="text-[#C6FF4D]">00:04:18:24</span>
          <span className="text-white/25">·</span>
          <span>24 FPS</span>
          <span className="text-white/25">·</span>
          <span>4K UHD</span>
        </div>

        {/* Identity */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-14 py-10 sm:py-12 flex flex-col justify-center min-h-[inherit]">
          <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.35em] text-[#C6FF4D]/80 mb-5">
            Portfolio Profile
          </div>

          <h3
            aria-label="Harika Sravani Pragada"
            className="font-light uppercase text-[#F5F5F0] leading-[1.35] tracking-[0.3em] sm:tracking-[0.34em]"
            style={{
              fontFamily: "'Montserrat', 'Outfit', sans-serif",
              fontSize: 'clamp(1.5rem, 8.2vw, 2.5rem)',
            }}
          >
            <span className="block sm:inline">Harika</span>{' '}
            <span className="block sm:inline">Sravani</span>
            <span className="block">Pragada</span>
          </h3>

          <div
            className="mt-5 text-[10px] sm:text-[11px] uppercase text-[#C6FF4D] font-medium tracking-[0.3em] sm:tracking-[0.4em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="block sm:inline">Video Editor</span>
            <span className="hidden sm:inline text-white/30 mx-3">|</span>
            <span className="block sm:inline">Post-Production Artist</span>
          </div>

          {/* Divider with timeline ticks */}
          <div className="mt-6 w-44 sm:w-56">
            <div className="h-px bg-gradient-to-r from-white/60 via-white/25 to-transparent" />
            <div
              className="h-1.5 mt-1 opacity-50"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 8px)',
              }}
            />
          </div>

          <p className="mt-5 text-sm sm:text-base text-[#D4D4D8] italic font-serif tracking-wide">
            “Crafting Stories Through Visuals.”
          </p>

          <div
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/55"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C6FF4D] shrink-0" />
              Open to Internships &amp; Freelance
            </span>
            <span className="hidden sm:inline text-white/25">|</span>
            <span>Remote &amp; In-Office</span>
          </div>
        </div>
      </div>

      {/* ======= Details strip ======= */}
      <div className="relative border-t border-white/[0.1] bg-[#0d0d0f] grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] lg:grid-cols-[1.1fr_1.5fr_0.9fr] divide-y sm:divide-y-0 lg:divide-x divide-white/[0.08]">
        {/* Timeline NLE */}
        <div className="p-5 sm:p-6 space-y-3 sm:border-b lg:border-b-0 sm:border-white/[0.08]">
          <div className={`${INFO_LABEL} flex items-center gap-2`}>
            <Layers className="w-3.5 h-3.5 text-[#C6FF4D]" />
            Timeline NLE
          </div>
          <div className="text-sm font-mono font-bold text-[#C6FF4D] tracking-wider">
            V1 / V2 / A1 / A2
          </div>
          <div className="space-y-1 p-1.5 bg-black/50 border border-white/[0.06]">
            <div className="h-2 bg-[#18181b] flex gap-1 items-center px-0.5">
              <div className="h-1.5 w-1/4 bg-[#C6FF4D]/60" />
              <div className="h-1.5 w-1/3 bg-white/20" />
              <div className="h-1.5 w-1/5 bg-[#C6FF4D]/40" />
            </div>
            <div className="h-2 bg-[#18181b] flex gap-1 items-center px-0.5">
              <div className="h-1.5 w-1/2 bg-sky-400/50" />
              <div className="h-1.5 w-1/3 bg-sky-400/30" />
            </div>
            <div className="h-2 bg-[#18181b] flex gap-[3px] items-center px-0.5 overflow-hidden">
              {[2, 1, 2, 1.5, 2, 1, 1.5, 2, 1, 2, 1.5, 1, 2, 1.5, 1, 2].map((h, i) => (
                <span key={i} className="w-0.5 bg-[#C6FF4D]/80 shrink-0" style={{ height: `${h * 3}px` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="p-5 sm:p-6 space-y-2">
          <div className={`${INFO_LABEL} flex items-center gap-2`}>
            <MapPin className="w-3.5 h-3.5 text-[#C6FF4D]" />
            Location
          </div>
          <div className="text-sm font-semibold text-[#F5F5F0] leading-snug">
            {PROFILE_DATA.location}
          </div>
          <div className="text-xs font-mono text-white/50">
            Primary Editing Base · Available Globally
          </div>
        </div>

        {/* Languages */}
        <div className="p-5 sm:p-6 space-y-2">
          <div className={`${INFO_LABEL} flex items-center gap-2 whitespace-nowrap`}>
            <Languages className="w-3.5 h-3.5 text-[#C6FF4D]" />
            Languages Spoken
          </div>
          <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold text-[#F5F5F0]">
            {PROFILE_DATA.languages.map((lang, idx) => (
              <span key={lang} className="flex items-center gap-2">
                {idx > 0 && <span className="text-white/30">·</span>}
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
