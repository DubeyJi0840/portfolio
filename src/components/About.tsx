import React from 'react';
import { Layers, Zap, Database, Terminal, Code2, MapPin, GraduationCap, CheckCircle2, FileText, Download, Mail, ArrowUpRight, Award } from 'lucide-react';
import { personalInfo, educations, certifications } from '../data/portfolioData';

interface AboutProps {
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const coreStrengths = [
    {
      icon: <Layers className="w-5 h-5 text-[#ff5500]" />,
      title: 'Cross-Platform Mobile (Flutter & Dart)',
      description:
        'Over 2.5 years of deep Dart & Flutter engineering. Built responsive e-commerce applications, real-time GPS geofenced map tracking, and offline habit loggers with clean Bloc and Provider architecture.'
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#ff5500]" />,
      title: 'Modern Web Portals (React & TypeScript)',
      description:
        'Crafting responsive, type-safe web interfaces and administrative portals using React, TypeScript, and Tailwind CSS. Engineered institutional analytics dashboards serving 4,800+ student profiles.'
    },
    {
      icon: <Zap className="w-5 h-5 text-[#ff5500]" />,
      title: 'Robust Backend Services (.NET Core & C#)',
      description:
        'Architecting RESTful APIs using ASP.NET Core and C#, featuring JWT authorization, structured logging, middleware error handling, and high-performance transactional services.'
    },
    {
      icon: <Database className="w-5 h-5 text-[#ff5500]" />,
      title: 'Databases & Query Optimization',
      description:
        'Hands-on expertise across Microsoft SQL Server, MySQL, SQLite, and Firebase Firestore. Refactored backend queries and connection pools to cut response turnaround by 60%.'
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-[#1c1d22] bg-[#0b0c0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <span>// 01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering with Craft, Precision & Accountability
          </h2>
          <p className="text-sm text-[#a1a1aa]">
            Full-stack and mobile engineer focused on building resilient user interfaces, scalable APIs, and performance-tuned database systems.
          </p>
        </div>

        {/* 2-Column Split: Left Image + Right Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Profile Image + Quick Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            {/* Authentic Approved Photo Card */}
            <div className="relative rounded-2xl bg-[#121318] border border-[#232530] p-3 shadow-xl group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#181920]">
                <img
                  src={personalInfo.photos.workspace}
                  alt="Aditya Narayan - Software Developer at Work"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14]/80 via-transparent to-transparent"></div>
                
                {/* Floating Status Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-[#0e0f14]/90 backdrop-blur-md border border-[#272935] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
                    <span className="text-white font-medium">Available for Roles</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#a1a1aa]">Noida, India</span>
                </div>
              </div>
            </div>

            {/* Quick Profile Breakdown Card */}
            <div className="p-5 rounded-xl bg-[#121318] border border-[#232530] space-y-3.5 text-xs">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] border-b border-[#1c1d24] pb-2 flex items-center justify-between">
                <span>Verified Credentials</span>
                <span className="text-[#ff5500]">Overview</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#ff5500] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-white">Current Location</div>
                  <div className="text-[#a1a1aa]">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-[#ff5500] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-white">{educations[0].degree}</div>
                  <div className="text-[#a1a1aa]">{educations[0].institution}</div>
                  <div className="text-[11px] text-[#ff5500] font-mono font-medium mt-0.5">
                    CGPA: {educations[0].cgpa} • Graduated {educations[0].period}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-4 h-4 text-[#ff5500] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-white">Key Certification</div>
                  <div className="text-[#a1a1aa]">{certifications[0].name} ({certifications[0].year})</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Terminal className="w-4 h-4 text-[#ff5500] mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-white">Primary Technical Stack</div>
                  <div className="text-[#a1a1aa]">Flutter, Dart, React, TypeScript, .NET Core, SQL Server</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography, AI-Assisted Workflows & Actions */}
          <div className="lg:col-span-7 space-y-6 text-[#a1a1aa] leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <p>
                I am a Software Developer based in <span className="text-white font-medium">Noida, India</span>, specializing in mobile applications and full-stack software development. With production engineering experience across <span className="text-white font-medium">Vagminepro Techno Pvt. Ltd.</span> and <span className="text-white font-medium">Infinitminds Digital Lab</span>, alongside an active track record of delivering <span className="text-[#ff5500] font-semibold">50+ freelance client projects</span>, I build applications that combine resilient backend systems with fluid, pixel-perfect user experiences.
              </p>
              <p>
                My development philosophy prioritizes clean architecture, robust state management, and practical software engineering. Rather than chasing superficial hype, I build with proven frameworks—Flutter & Dart on mobile, React & TypeScript on the web, and ASP.NET Core & C# on the backend—connected to scalable database architectures.
              </p>
              <p>
                As an <span className="text-white font-medium">Oracle Cloud Infrastructure AI Foundations Associate</span>, I actively integrate AI-assisted developer tools into modern engineering workflows, leveraging intelligent scaffolding, query optimization, and structured code verification to accelerate delivery without sacrificing rigor.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-3">
                Core Engineering Commitments:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-[#d4d4d8]">
                <div className="min-w-0 flex items-center gap-2 bg-[#121318] p-3 rounded-lg border border-[#1e2027]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <span className="break-words">Type-Safe & Scalable Architectures</span>
                </div>
                <div className="min-w-0 flex items-center gap-2 bg-[#121318] p-3 rounded-lg border border-[#1e2027]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <span className="break-words">Sub-60fps Fluid Mobile Transitions</span>
                </div>
                <div className="min-w-0 flex items-center gap-2 bg-[#121318] p-3 rounded-lg border border-[#1e2027]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <span className="break-words">Documented & Tested REST APIs</span>
                </div>
                <div className="min-w-0 flex items-center gap-2 bg-[#121318] p-3 rounded-lg border border-[#1e2027]">
                  <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <span className="break-words">AI-Accelerated Engineering Hygiene</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: View Resume, Download Resume, Contact */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {onOpenResume ? (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg bg-[#ff5500] hover:bg-[#e04c00] text-xs font-semibold text-white transition-all shadow-sm shadow-[#ff5500]/20 shrink-0 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </button>
              ) : (
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg bg-[#ff5500] hover:bg-[#e04c00] text-xs font-semibold text-white transition-all shadow-sm shadow-[#ff5500]/20 shrink-0"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
              )}

              <a
                href="./assets/aditya-narayan-ats-resume.pdf"
                download="Aditya_Narayan_ATS_Resume.pdf"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg bg-[#14151b] hover:bg-[#1d1f27] border border-[#272935] hover:border-[#ff5500] text-xs font-medium text-white transition-all shrink-0"
              >
                <Download className="w-4 h-4 text-[#ff5500]" />
                <span>Download ATS PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg bg-[#14151b] hover:bg-[#1d1f27] border border-[#272935] text-xs font-mono text-[#a1a1aa] hover:text-white transition-all shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {coreStrengths.map((s, idx) => (
            <div
              key={idx}
              className="min-w-0 p-5 rounded-xl bg-[#111216] border border-[#20222a] hover:border-[#ff5500]/40 transition-all space-y-2.5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#181a20] border border-[#252832] flex items-center justify-center group-hover:border-[#ff5500]/50 transition-colors shrink-0">
                {s.icon}
              </div>
              <h3 className="font-semibold text-sm text-white group-hover:text-[#ff5500] transition-colors break-words">
                {s.title}
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed break-words">
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
