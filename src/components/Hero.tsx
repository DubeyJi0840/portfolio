import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText, Mail, Phone, Check, Copy, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const CountUpMetric: React.FC<{
  target: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}> = ({ target, decimals = 0, suffix = '', duration = 1600 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * target;
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-grid-subtle border-b border-[#1c1d22]">
      {/* Subtle radial ambient gradient - very muted, NOT cheesy neon */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff5500]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status indicator pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#141418] border border-[#26282f] text-xs text-[#a1a1aa]">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
              <span className="font-mono text-[11px] tracking-wide text-[#e4e4e7]">
                Available for Full-Stack & Mobile Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                Aditya Narayan
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#d4d4d8]">
                Software Developer{' '}
                <span className="text-[#71717a] font-normal">|</span>{' '}
                <span className="text-[#ff5500]">Flutter & Full-Stack</span>
              </p>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl font-normal">
              Specialized in engineering production-grade cross-platform mobile apps with Flutter, responsive web interfaces with React, and robust backend APIs with .NET Core. Proven delivery across 50+ client contracts and enterprise environments.
            </p>

            {/* Quick stats ribbon - Animated in increasing order */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {personalInfo.metrics.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-3 rounded-lg bg-[#111216] border border-[#202228] hover:border-[#ff5500]/40 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono flex items-baseline">
                    <span className="text-[#ff5500] mr-0.5">#</span>
                    <CountUpMetric
                      target={item.numeric}
                      decimals={item.decimals}
                      suffix={item.suffix}
                      duration={1400 + idx * 300}
                    />
                  </div>
                  <div className="text-[11px] text-[#71717a] font-medium leading-tight mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#ff5500] hover:bg-[#e04c00] text-sm font-semibold text-white transition-all shadow-sm"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#16171d] hover:bg-[#20222a] border border-[#2c2f38] hover:border-[#ff5500] text-sm font-medium text-white transition-all"
              >
                <FileText className="w-4 h-4 text-[#ff5500]" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-transparent hover:bg-[#14151a] border border-transparent hover:border-[#27272a] text-sm font-medium text-[#a1a1aa] hover:text-white transition-all"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Contact quick actions bar */}
            <div className="pt-3 border-t border-[#1c1d23] flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#71717a]">
              {/* Phone with copy */}
              <div className="flex items-center gap-1.5 bg-[#121317] px-2.5 py-1 rounded border border-[#22242a]">
                <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  aria-label="Copy phone"
                  className="ml-1 text-[#71717a] hover:text-white transition-colors"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-[#ff5500]" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Email with copy */}
              <div className="flex items-center gap-1.5 bg-[#121317] px-2.5 py-1 rounded border border-[#22242a]">
                <Mail className="w-3.5 h-3.5 text-[#ff5500]" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  aria-label="Copy email"
                  className="ml-1 text-[#71717a] hover:text-white transition-colors"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-[#ff5500]" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#121317] px-2.5 py-1 rounded border border-[#22242a] hover:text-white hover:border-[#ff5500]/50 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#121317] px-2.5 py-1 rounded border border-[#22242a] hover:text-white hover:border-[#0077b5]/50 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Professional Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Photo Frame Container */}
              <div className="relative rounded-2xl bg-[#121318] border border-[#232530] p-2.5 shadow-2xl group transition-all duration-300">
                {/* Actual Image - Single Approved Picture */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#181920]">
                  <img
                    src={personalInfo.photos.professional}
                    alt="Aditya Narayan"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Status Badge at bottom */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between p-2 rounded-lg bg-[#0e0f14]/90 backdrop-blur-md border border-[#272935] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
                      <span className="text-white font-medium text-[11px]">Available for Roles</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#a1a1aa]">Noida, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
