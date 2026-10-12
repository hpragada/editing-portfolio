import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Film, CheckCircle2, AlertCircle, Maximize2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Reset state on project change
  useEffect(() => {
    setIframeLoaded(false);
    setIframeError(false);
  }, [project?.id]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#101010] border border-white/[0.12] rounded-none shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top cinema header */}
        <div className="px-6 py-4 bg-[#141414] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#C6FF4D]" />
            <h3 className="text-base sm:text-lg font-bold text-[#F5F5F0] font-display">
              {project.title}
            </h3>
            <span className="text-xs text-[#A1A1AA] font-mono hidden sm:inline">
              · {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C6FF4D] hover:underline font-mono flex items-center gap-1.5 px-3 py-1 bg-white/[0.04] border border-white/10"
            >
              <span>Watch on Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Box */}
        <div className="relative bg-[#050505] w-full flex items-center justify-center min-h-[300px] sm:min-h-[480px]">
          {/* Google Drive Video Embed */}
          <iframe
            src={project.embedUrl}
            title={project.title}
            className="w-full h-[320px] sm:h-[500px] md:h-[560px] border-0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            onLoad={() => setIframeLoaded(true)}
            onError={() => setIframeError(true)}
          />

          {/* Helper overlay bar with Direct Link guarantee */}
          <div className="absolute bottom-2 right-2 z-10">
            <a
              href={project.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#080808]/90 text-xs text-[#F5F5F0] px-3 py-1.5 border border-white/20 hover:border-[#C6FF4D] hover:text-[#C6FF4D] flex items-center gap-2 shadow-lg backdrop-blur-sm"
            >
              <span>Drive Player Issue? Open Source Video</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Project Details Footer */}
        <div className="p-6 bg-[#121212] border-t border-white/[0.08] overflow-y-auto space-y-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                {project.description}
              </p>
              {project.notes && (
                <p className="text-xs text-[#71717A] font-mono">
                  {project.notes}
                </p>
              )}
            </div>

            <div className="space-y-3 shrink-0">
              <div>
                <div className="text-[11px] uppercase font-mono text-[#A1A1AA] tracking-wider">
                  Software Used
                </div>
                <div className="text-xs text-[#F5F5F0] mt-1 font-mono">
                  {project.tools.join(' · ')}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase font-mono text-[#A1A1AA] tracking-wider">
                  Techniques
                </div>
                <div className="text-xs text-[#C6FF4D] mt-1 font-mono">
                  {project.techniques.join(' · ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
