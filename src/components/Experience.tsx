import React from 'react';
import { Briefcase, Calendar, MapPin, Award, GraduationCap, ChevronRight } from 'lucide-react';
import { experiences, certifications, educations } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-[#1c1d22] bg-[#0b0c0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <span>// 03. EXPERIENCE & PEDIGREE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Work Experience & Background
          </h2>
          <p className="text-sm text-[#a1a1aa]">
            Demonstrated engineering experience across software companies, startup internships, and 50+ independent client contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#ff5500]" />
              <span>Career History</span>
            </h3>

            <div className="relative border-l border-[#22242b] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#16171d] border-2 border-[#ff5500] group-hover:scale-125 transition-transform"></div>

                  <div className="p-6 rounded-xl bg-[#111216] border border-[#20222a] hover:border-[#ff5500]/40 transition-all space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-[#ff5500] transition-colors">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-medium text-[#e4e4e7]">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono text-[#71717a]">
                        <span className="flex items-center gap-1.5 text-[#ff5500]">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#ff5500] mt-1 shrink-0">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="pt-2 border-t border-[#1b1c22] flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#16171b] text-[#9ca3af] border border-[#202229]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-4 space-y-8">
            {/* Certifications Box */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#ff5500]" />
                <span>Certifications</span>
              </h3>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#111216] border border-[#20222a] hover:border-[#ff5500]/40 transition-colors space-y-1"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-xs font-semibold text-white">
                        {cert.name}
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/25 shrink-0">
                        {cert.badge}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#71717a] font-mono">
                      {cert.issuer} • {cert.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Box */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#ff5500]" />
                <span>Education</span>
              </h3>

              <div className="space-y-3">
                {educations.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#111216] border border-[#20222a] space-y-1"
                  >
                    <div className="text-xs font-semibold text-white">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-[#a1a1aa]">
                      {edu.institution}
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71717a] pt-1">
                      <span>{edu.period}</span>
                      {edu.cgpa && (
                        <span className="text-[#ff5500] font-medium">
                          CGPA: {edu.cgpa}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
