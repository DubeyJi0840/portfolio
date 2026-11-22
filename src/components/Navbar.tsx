import React, { useState, useEffect } from 'react';
import { FileText, Mail, Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resume', href: '#', onClick: onOpenResume },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 no-print ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-[#22242a] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between w-full">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-[#16171c] border border-[#27272a] flex items-center justify-center font-mono font-bold text-xs text-[#f4f4f5] group-hover:border-[#ff5500] transition-colors">
            AN
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-[#ff5500] transition-colors">
              Aditya Narayan
            </span>
            <span className="text-[11px] text-[#71717a] font-mono">Software Developer</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.onClick ? (
              <button
                key={link.label}
                onClick={link.onClick}
                className="text-xs font-medium text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[#a1a1aa] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status badge */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141417] border border-[#27272a] text-[11px] text-[#a1a1aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse"></span>
            <span>Available for Hire</span>
          </div>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#16171c] hover:bg-[#202128] border border-[#2b2d35] hover:border-[#ff5500] text-xs font-medium text-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#ff5500]" />
            <span>Resume</span>
          </button>

          {/* Contact quick icon */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 text-[#a1a1aa] hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 text-[#a1a1aa] hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md border border-[#27272a] text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] shrink-0"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0f13] border-b border-[#22242a] px-5 py-4 space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-[#1c1d22] text-xs text-[#71717a]">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
            <span>Available for roles in India & Remote</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) =>
              link.onClick ? (
                <button
                  key={link.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    link.onClick!();
                  }}
                  className="px-3 py-2 rounded-md bg-[#14151a] text-xs font-medium text-[#d4d4d8] hover:text-[#ff5500] text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md bg-[#14151a] text-xs font-medium text-[#d4d4d8] hover:text-[#ff5500]"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-[#ff5500] hover:bg-[#e04c00] text-xs font-semibold text-white transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
