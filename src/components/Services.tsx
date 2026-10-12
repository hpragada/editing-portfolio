import React from 'react';
import { ArrowUpRight, Check, Film, Sparkles, Layers, Sliders } from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-10 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
              <span>WHAT I CAN DO FOR YOU</span>
              <span aria-hidden="true" className="mx-2 text-[#C6FF4D]">/</span>
              <span>FREELANCE OFFERINGS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F0] font-display">
              Services for Creators & Brands
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl">
              Professional post-production assistance tailored to your footage volume, desired rhythm, and publishing goals.
            </p>
          </div>

          <div className="text-xs font-mono text-[#A1A1AA] max-w-xs">
            * Custom rates based on raw footage length, edit complexity, and turnaround requirements.
          </div>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group p-8 sm:p-10 bg-[#101010] border border-white/[0.08] hover:border-[#C6FF4D]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-[#C6FF4D]">SERVICE 0{index + 1}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] font-display mt-1">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#C6FF4D] font-mono">
                  {service.tagline}
                </p>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs uppercase font-mono tracking-wider text-[#71717A]">
                    Key Deliverables
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#D4D4D8]">
                        <span className="text-[#C6FF4D] font-mono mt-0.5">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA & Ideal For */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#71717A]">
                  <span className="text-white/40">Ideal for: </span>
                  <span className="text-[#A1A1AA]">{service.idealFor}</span>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white/[0.06] hover:bg-[#C6FF4D] hover:text-[#080808] text-[#F5F5F0] transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
