import React, { useState, useEffect } from 'react';
import { Menu, X, Video } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Reels', href: '#reels' },
    { label: 'Work', href: '#featured-work' },
    { label: 'Showreel', href: '#showreel' },
    { label: 'Process', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-transparent border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-[#F5F5F0] hover:text-[#C6FF4D] transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 bg-[#C6FF4D] inline-block" />
          <span>HARIKA SRAVANI</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F5F5F0] hover:underline underline-offset-8 decoration-[#C6FF4D] transition-all whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onContactClick}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080808] bg-[#C6FF4D] hover:bg-[#b5f03d] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Let's Create
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808] border-b border-white/[0.08] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#A1A1AA] hover:text-[#C6FF4D] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider bg-[#C6FF4D] text-[#080808]"
            >
              Let's Create Together
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
