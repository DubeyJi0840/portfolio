import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#09090b] text-[#f4f4f5] font-sans selection:bg-[#ff5500]/30 selection:text-white">
      {/* Sticky Navigation */}
      <div className="no-print">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Main Content Sections */}
      <main className="w-full max-w-full overflow-x-hidden">
        <div className="no-print">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
        </div>
        <div className="no-print">
          <About onOpenResume={() => setIsResumeOpen(true)} />
        </div>
        <div className="no-print">
          <Projects />
        </div>
        <div className="no-print">
          <Experience />
        </div>
        <div className="no-print">
          <Skills />
        </div>
        <div className="no-print">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <div className="no-print">
        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Interactive Resume Viewport & Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
