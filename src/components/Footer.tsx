import React from 'react';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#08080a] text-xs text-[#71717a] border-t border-[#1a1b20] no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Brand & Summary */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
              <span className="font-mono font-bold text-sm text-white">
                Aditya Narayan
              </span>
              <span className="text-[11px] font-mono text-[#52525b]">
                • Software Developer
              </span>
            </div>
            <p className="text-xs text-[#a1a1aa] max-w-md">
              Specialized in production Flutter applications, React web portals, and scalable .NET Core backend systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <button
              onClick={onOpenResume}
              className="text-[#a1a1aa] hover:text-[#ff5500] transition-colors"
            >
              Resume
            </button>
            <span>•</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-[#ff5500] transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-[#ff5500] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="text-[#a1a1aa] hover:text-[#ff5500] transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#131418] hover:bg-[#1b1d24] border border-[#22242c] text-xs font-mono text-[#a1a1aa] hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff5500]" />
          </button>
        </div>

        {/* Bottom Specs Line */}
        <div className="pt-6 border-t border-[#15161b] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[#52525b]">
          <div>
            © {new Date().getFullYear()} <a href="https://www.linkedin.com/in/aditya-narayan-84634525b/">Aditya Narayan.</a> All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
