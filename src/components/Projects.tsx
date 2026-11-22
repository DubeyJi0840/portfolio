import React, { useState } from 'react';
import { ExternalLink, Smartphone, Globe, Server, Database, CheckCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Mobile' | 'Web' | 'Full-Stack' | 'API'>('All');

  const categories: ('All' | 'Mobile' | 'Web' | 'Full-Stack' | 'API')[] = [
    'All',
    'Mobile',
    'Web',
    'Full-Stack',
    'API'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Mobile':
        return <Smartphone className="w-3.5 h-3.5 text-[#ff5500]" />;
      case 'Web':
        return <Globe className="w-3.5 h-3.5 text-[#ff5500]" />;
      case 'Full-Stack':
        return <Database className="w-3.5 h-3.5 text-[#ff5500]" />;
      case 'API':
        return <Server className="w-3.5 h-3.5 text-[#ff5500]" />;
    }
  };

  return (
    <section id="projects" className="py-20 border-b border-[#1c1d22] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
              <span>// 02. SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Engineering Projects
            </h2>
            <p className="text-sm text-[#a1a1aa] max-w-xl">
              Real client and production applications engineered with focus on responsiveness, robust state handling, and optimized database performance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-[#121317] border border-[#202228] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#ff5500] text-white font-semibold shadow-sm'
                    : 'text-[#a1a1aa] hover:text-white hover:bg-[#1a1c22]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-[#111216] border border-[#20222a] hover:border-[#ff5500]/50 transition-all p-6 flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-4">
                {/* Card Top: Category & GitHub Link */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#16171d] border border-[#262832] text-[11px] font-mono text-[#d4d4d8]">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  <a
                    href={project.githubUrl || 'https://github.com/DubeyJi0840'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#a1a1aa] hover:text-[#ff5500] transition-colors font-mono"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff5500] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#71717a] mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 pt-1 border-t border-[#1a1c22]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717a]">
                    Architecture & Implementation:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#c4c4c8]">
                    {project.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#ff5500] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#16171e] border border-[#272935] text-[11px] font-mono text-[#ff5500]"
                    >
                      ⚡ {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack Tags */}
              <div className="pt-4 border-t border-[#1b1c22] flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#16171b] text-[#9ca3af] border border-[#202229]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout Footer */}
        <div className="mt-12 p-6 rounded-xl bg-[#111216] border border-[#20222a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#16171c] border border-[#27272a] flex items-center justify-center shrink-0">
              <GithubIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Looking for more repositories & open-source code?
              </div>
              <div className="text-xs text-[#71717a]">
                Explore code samples, commits, and experiments on my GitHub profile.
              </div>
            </div>
          </div>
          <a
            href="https://github.com/DubeyJi0840"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#181920] hover:bg-[#20222a] border border-[#2b2d38] hover:border-[#ff5500] text-xs font-semibold text-white transition-all shrink-0"
          >
            <span>Visit @DubeyJi0840</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#ff5500]" />
          </a>
        </div>
      </div>
    </section>
  );
};
