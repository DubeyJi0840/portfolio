import React from 'react';
import { Terminal, Code, Cpu, Shield, CpuIcon, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-[#1c1d22] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <span>// 04. TECHNICAL COMPETENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Production Tooling
          </h2>
          <p className="text-sm text-[#a1a1aa]">
            A specialized stack focused on cross-platform performance, type safety, and clean backend APIs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="min-w-0 p-5 sm:p-6 rounded-xl bg-[#111216] border border-[#20222a] hover:border-[#ff5500]/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#1b1c22]">
                  <h3 className="font-semibold text-sm text-white font-mono flex items-center gap-2">
                    <span className="text-[#ff5500]">#</span>
                    <span>{cat.title}</span>
                  </h3>
                  <span className="text-[11px] font-mono text-[#71717a]">
                    {cat.skills.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-[#181920] text-white border border-[#ff5500]/40 font-medium'
                          : 'bg-[#14151a] text-[#a1a1aa] border border-[#22242c] hover:border-[#333642]'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#52525b] pt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500]/70" />
                <span>Production tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Philosophy Banner */}
        <div className="mt-10 p-5 rounded-xl bg-[#111216] border border-[#20222a] text-xs text-[#a1a1aa] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
            <span className="text-white">Primary Core Focus:</span>
            <span>Flutter (Dart) + React (TypeScript) + .NET Core (C#)</span>
          </div>
          <div className="text-[#71717a]">
            Adheres to Clean Architecture & SOLID Principles
          </div>
        </div>
      </div>
    </section>
  );
};
