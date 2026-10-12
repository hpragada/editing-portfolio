import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const EditingProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#080808] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
            <span>POST-PRODUCTION WORKFLOW</span>
            <span aria-hidden="true" className="mx-2 text-[#C6FF4D]">/</span>
            <span>STRUCTURED PRECISION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F0] font-display">
            My Editing Process
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA]">
            From raw, unorganized takes to an impactful, polished export ready for social feeds and screens.
          </p>
        </div>

        {/* 4-Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative p-8 bg-[#101010] border border-white/[0.08] hover:border-[#C6FF4D]/40 transition-colors duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Big Editorial Step Index */}
                <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-4">
                  <span className="text-3xl font-extrabold font-mono text-[#C6FF4D]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A]">
                    PHASE {step.number}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#F5F5F0] font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Sub-deliverables list with subtle typographic bullet */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-2">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D4D4D8]">
                    <span className="text-[#C6FF4D] font-mono">·</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
