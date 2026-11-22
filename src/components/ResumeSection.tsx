import React, { useState } from 'react';
import { Download, ExternalLink, Printer, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [resumeFormat, setResumeFormat] = useState<'ats' | 'premium'>('ats');

  const atsPdfUrl = './assets/aditya-narayan-ats-resume.pdf';
  const premiumPdfUrl = './assets/aditya-narayan-premium-resume.pdf';

  const currentPdfUrl = resumeFormat === 'ats' ? atsPdfUrl : premiumPdfUrl;
  const currentDownloadName = resumeFormat === 'ats' ? 'Aditya_Narayan_ATS_Resume.pdf' : 'Aditya_Narayan_Premium_Resume.pdf';

  const handlePrint = () => {
    let iframe = document.getElementById('resume-print-frame') as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'resume-print-frame';
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      iframe.style.opacity = '0';
      iframe.style.pointerEvents = 'none';
      document.body.appendChild(iframe);
    }
    iframe.src = currentPdfUrl;
    iframe.onload = () => {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch {
        window.open(currentPdfUrl, '_blank')?.print();
      }
    };
  };

  return (
    <section id="resume" className="py-20 border-b border-[#1c1d22] bg-[#08080a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
              <span>// 05. CURRICULUM VITAE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Official Resume & Credentials
            </h2>
            <p className="text-sm text-[#a1a1aa]">
              Choose between the clean single-column ATS format or the modern executive two-column format with verified credentials.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="no-print flex flex-wrap items-center gap-2">
            {/* View Resume in New Tab */}
            <a
              href={currentPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#14151b] hover:bg-[#1c1d26] border border-[#272935] hover:border-[#ff5500] text-xs font-medium text-white transition-all shadow-sm"
              title="Open selected resume PDF in a new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>View PDF</span>
            </a>

            {/* Download Resume */}
            <a
              href={currentPdfUrl}
              download={currentDownloadName}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ff5500] hover:bg-[#e04c00] text-xs font-semibold text-white transition-all shadow-sm shadow-[#ff5500]/20"
              title="Download high-resolution vector PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Print Resume */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#14151b] hover:bg-[#1c1d26] border border-[#272935] text-xs font-mono text-[#d4d4d8] hover:text-white transition-colors"
              title="Print selected format directly to 1 Page PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#ff5500]" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>

        {/* Outer Frame: Desk Container with Subtle Border and Zero Dark Overlay */}
        <div className="w-full rounded-2xl bg-[#111217] border border-[#22242e] p-3 sm:p-6 md:p-8 shadow-2xl overflow-x-auto">

          {/* Format Selector Bar */}
          <div className="no-print mb-6 pb-4 border-b border-[#1c1d24] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#090a0d] border border-[#1e2029]">
              <button
                onClick={() => setResumeFormat('ats')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${resumeFormat === 'ats'
                  ? 'bg-[#ff5500] text-white font-semibold shadow-sm'
                  : 'text-[#a1a1aa] hover:text-white'
                  }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Official ATS Resume</span>
              </button>

              <button
                onClick={() => setResumeFormat('premium')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${resumeFormat === 'premium'
                  ? 'bg-[#7c3aed] text-white font-semibold shadow-sm'
                  : 'text-[#a1a1aa] hover:text-white'
                  }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span>Premium Resume</span>
              </button>
            </div>

            <div className="text-xs font-mono text-[#71717a] flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${resumeFormat === 'ats' ? 'bg-[#ff5500]' : 'bg-[#7c3aed]'}`}></span>
              <span className="text-[#d4d4d8]">
                {resumeFormat === 'ats' ? 'UConn Brand Standard (Single-Column ATS)' : 'Modern 2-Column with Purple Accents & Photo'}
              </span>
            </div>
          </div>

          {/* ========================================================
              OPTION 1: OFFICIAL ATS RESUME (UCONN BRAND STYLE)
          ======================================================== */}
          {resumeFormat === 'ats' && (
            <div
              className="resume-sheet-a4 w-full max-w-[800px] mx-auto bg-white text-black shadow-2xl rounded-sm border border-[#e2e8f0]"
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                boxSizing: 'border-box',
                padding: '38px 42px',
              }}
            >
              {/* Header: Centered Large Bold Name + Subhead Contacts */}
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: '900', margin: '0 0 6px 0', color: '#000000', letterSpacing: '-0.3px', lineHeight: '1.1' }}>
                  ADITYA NARAYAN
                </h1>
                <div style={{ fontSize: '9.6px', color: '#222222', marginBottom: '3px', fontWeight: '500' }}>
                  <span>Noida, India</span>
                  <span style={{ margin: '0 8px', color: '#888888' }}>|</span>
                  <span><strong>+91 9135737500</strong></span>
                  <span style={{ margin: '0 8px', color: '#888888' }}>|</span>
                  <a href={`mailto:${personalInfo.email}`} style={{ color: '#000000', textDecoration: 'none' }}>
                    {personalInfo.email}
                  </a>
                </div>
                <div style={{ fontSize: '9.4px', color: '#333333', fontWeight: '500' }}>
                  <a href="https://dubeyji0840.github.io/portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'none', fontWeight: '700' }}>
                    Portfolio
                  </a>
                  <span style={{ margin: '0 8px', color: '#888888' }}>|</span>
                  <a href="https://github.com/DubeyJi0840" target="_blank" rel="noopener noreferrer" style={{ color: '#333333', textDecoration: 'none' }}>
                    github.com/DubeyJi0840
                  </a>
                  <span style={{ margin: '0 8px', color: '#888888' }}>|</span>
                  <a href="https://linkedin.com/in/aditya-narayan-84634525b" target="_blank" rel="noopener noreferrer" style={{ color: '#333333', textDecoration: 'none' }}>
                    linkedin.com/in/aditya-narayan-84634525b
                  </a>
                </div>
              </div>

              {/* 1. PROFESSIONAL SUMMARY */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#000000', borderBottom: '1.2px solid #000000', paddingBottom: '2.5px', marginBottom: '6px' }}>
                  PROFESSIONAL SUMMARY
                </div>
                <p style={{ fontSize: '9.3px', lineHeight: '1.42', color: '#1a1a1a', margin: 0, textAlign: 'justify' }}>
                  Software Developer with 2.5+ years of hands-on freelancing and engineering experience across 50+ client projects, including company work experience at Vagminepro Techno and Infinitminds Digital Lab. Proficient in Flutter, React, .NET Core, Firebase, and modern database architectures. Experience designing and delivering an estimated 200+ mobile and web screens with responsive interfaces, clean architecture, and API integration.
                </p>
              </div>

              {/* 2. EDUCATION */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#000000', borderBottom: '1.2px solid #000000', paddingBottom: '2.5px', marginBottom: '6px' }}>
                  EDUCATION
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.4px', color: '#1a1a1a' }}>
                  <span>Aryabhatta Knowledge University, Patna, India</span>
                  <span>June 2024</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.4px', marginTop: '1.5px' }}>
                  <span style={{ fontWeight: '700', color: '#000000' }}>Bachelor of Computer Applications (BCA)</span>
                  <span style={{ fontWeight: '700', color: '#000000' }}>CGPA: 7.17 / 10.00</span>
                </div>
                <div style={{ fontSize: '8.8px', color: '#444444', marginTop: '2px' }}>
                  Related Coursework: Data Structures & Algorithms, Database Systems (DBMS), OOP, Operating Systems, Web Technologies
                </div>
              </div>

              {/* 3. RELEVANT EXPERIENCE */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#000000', borderBottom: '1.2px solid #000000', paddingBottom: '2.5px', marginBottom: '6px' }}>
                  RELEVANT EXPERIENCE
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {/* Vagminepro */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.4px', color: '#1a1a1a' }}>
                      <span>Vagminepro Techno Pvt. Ltd., Delhi, India</span>
                      <span>Joined 17 Aug 2026</span>
                    </div>
                    <div style={{ fontSize: '9.4px', fontWeight: '700', color: '#000000', marginTop: '1px' }}>
                      Software Developer
                    </div>
                    <ul style={{ margin: '2px 0 0 16px', padding: 0, fontSize: '9.0px', color: '#222222', lineHeight: '1.35' }}>
                      <li>Work on enterprise application modules, backend microservices, and cross-platform business workflows using .NET Core.</li>
                      <li>Contribute to REST API integration, scalable data pipelines, database architecture, and performance optimization.</li>
                    </ul>
                  </div>

                  {/* Infinitminds */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.4px', color: '#1a1a1a' }}>
                      <span>Infinitminds Digital Lab Pvt. Ltd., Patna, India</span>
                      <span>18 Feb 2025 – 18 May 2025</span>
                    </div>
                    <div style={{ fontSize: '9.4px', fontWeight: '700', color: '#000000', marginTop: '1px' }}>
                      Flutter Developer Intern
                    </div>
                    <ul style={{ margin: '2px 0 0 16px', padding: 0, fontSize: '9.0px', color: '#222222', lineHeight: '1.35' }}>
                      <li>Developed Flutter and Dart mobile screens, reusable custom widgets, responsive layouts, and navigation flows.</li>
                      <li>Integrated REST APIs, handled asynchronous JSON streams, and resolved UI/UX edge cases for client deployments.</li>
                    </ul>
                  </div>

                  {/* Freelancing */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.4px', color: '#1a1a1a' }}>
                      <span>Independent Client Contracting, Remote</span>
                      <span>2023 – Present</span>
                    </div>
                    <div style={{ fontSize: '9.4px', fontWeight: '700', color: '#000000', marginTop: '1px' }}>
                      Freelance Software Developer
                    </div>
                    <ul style={{ margin: '2px 0 0 16px', padding: 0, fontSize: '9.0px', color: '#222222', lineHeight: '1.35' }}>
                      <li>Delivered 50+ client projects across Flutter mobile applications, React web portals, and .NET REST APIs.</li>
                      <li>Designed and engineered an estimated 200+ user interface screens with clean architecture, state management, and handover.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. KEY PROJECTS */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#000000', borderBottom: '1.2px solid #000000', paddingBottom: '2.5px', marginBottom: '6px' }}>
                  KEY PROJECTS
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div>
                    <div style={{ fontSize: '9.3px', fontWeight: '700', color: '#000000' }}>
                      Kharid Do — E-Commerce Mobile Application <span style={{ fontWeight: '400', color: '#444444' }}>| Flutter, Dart, Firebase</span>
                    </div>
                    <ul style={{ margin: '1.5px 0 0 16px', padding: 0, fontSize: '8.9px', color: '#222222', lineHeight: '1.3' }}>
                      <li>Developed responsive mobile e-commerce interfaces for product discovery, live cart state sync, and checkout flows.</li>
                      <li>Engineered reusable component libraries and structured client state for a frictionless mobile-first experience.</li>
                    </ul>
                  </div>

                  <div>
                    <div style={{ fontSize: '9.3px', fontWeight: '700', color: '#000000' }}>
                      EduPulse Portal — Academic Analytics Platform <span style={{ fontWeight: '400', color: '#444444' }}>| React, TypeScript, MySQL</span>
                    </div>
                    <ul style={{ margin: '1.5px 0 0 16px', padding: 0, fontSize: '8.9px', color: '#222222', lineHeight: '1.3' }}>
                      <li>Engineered academic dashboard supporting grade inputs and attendance monitoring for 4,800+ student profiles.</li>
                      <li>Refactored backend queries and database connection pools, reducing reporting turnaround time by 60%.</li>
                    </ul>
                  </div>

                  <div>
                    <div style={{ fontSize: '9.3px', fontWeight: '700', color: '#000000' }}>
                      PulseFit Tracker — Mobile Fitness Companion <span style={{ fontWeight: '400', color: '#444444' }}>| Flutter, Dart, Firebase, SQLite</span>
                    </div>
                    <ul style={{ margin: '1.5px 0 0 16px', padding: 0, fontSize: '8.9px', color: '#222222', lineHeight: '1.3' }}>
                      <li>Developed a cross-platform fitness tracker featuring animated progress rings, streak tracking, and offline habit logging.</li>
                    </ul>
                  </div>

                  <div>
                    <div style={{ fontSize: '9.3px', fontWeight: '700', color: '#000000' }}>
                      Real-Time Travel & Group Tracking Mobile Application <span style={{ fontWeight: '400', color: '#444444' }}>| Flutter, Dart, Google Maps API</span>
                    </div>
                    <ul style={{ margin: '1.5px 0 0 16px', padding: 0, fontSize: '8.9px', color: '#222222', lineHeight: '1.3' }}>
                      <li>Built cross-platform location-sharing mobile app with interactive maps, geolocator services, and modular architecture.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. SKILLS & CERTIFICATIONS */}
              <div>
                <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#000000', borderBottom: '1.2px solid #000000', paddingBottom: '2.5px', marginBottom: '5px' }}>
                  SKILLS & CERTIFICATIONS
                </div>
                <div style={{ fontSize: '9.0px', color: '#111111', display: 'flex', flexDirection: 'column', gap: '3px', lineHeight: '1.35' }}>
                  <div><strong>Certifications:</strong> Oracle Cloud Infrastructure AI Foundations Associate (2026), Cisco Data Analytics Essentials (Feb 2026), Infinitminds Flutter Developer Internship Certificate (May 2025)</div>
                  <div><strong>Languages & Frameworks:</strong> Dart, C#, TypeScript, JavaScript, SQL, HTML5, CSS3, Flutter, React, .NET Core, ASP.NET Core, Tailwind CSS</div>
                  <div><strong>Databases & Tools:</strong> Microsoft SQL Server, MySQL, SQLite, Firebase, Redis, Git, GitHub, Docker, Postman, Android Studio, VS Code</div>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================
              OPTION 2: PREMIUM RESUME (MODERN 2-COL + PURPLE ACCENTS + PHOTO)
          ======================================================== */}
          {resumeFormat === 'premium' && (
            <div
              className="resume-sheet-a4 w-full max-w-[800px] mx-auto bg-white text-black shadow-2xl rounded-sm border border-[#e2e8f0]"
              style={{
                backgroundColor: '#ffffff',
                color: '#1e293b',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                boxSizing: 'border-box',
                padding: '36px 40px',
              }}
            >
              {/* Header: Left Info + Right Circular Profile Photo */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.2px solid #e2e8f0', paddingBottom: '14px', marginBottom: '16px' }}>
                <div style={{ flex: 1, paddingRight: '16px' }}>
                  <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#0f172a', margin: '0 0 3px 0', letterSpacing: '-0.4px', lineHeight: '1.1' }}>
                    ADITYA NARAYAN
                  </h1>

                  {/* Status Banner */}
                  <div style={{ display: 'inline-block', color: '#6b21a8', fontSize: '9.6px', fontWeight: '700', marginBottom: '6px' }}>
                    Software Developer &bull; Full-Stack & Flutter Specialist
                  </div>

                  <div style={{ fontSize: '9.0px', color: '#64748b', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                    <span>✉ adityakumar913573@gmail.com</span>
                    <span>📞 <strong>+91 9135737500</strong></span>
                    <span>📍 Noida, India</span>
                  </div>

                  <div style={{ fontSize: '8.8px', color: '#64748b', display: 'flex', gap: '14px', marginTop: '4px', flexWrap: 'wrap' }}>
                    <a href="https://dubeyji0840.github.io/portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: '#6b21a8', textDecoration: 'none', fontWeight: '700' }}>
                      Portfolio
                    </a>
                    <a href="https://github.com/DubeyJi0840" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b', textDecoration: 'none' }}>
                      github.com/DubeyJi0840
                    </a>
                    <a href="https://linkedin.com/in/aditya-narayan-84634525b" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b', textDecoration: 'none' }}>
                      linkedin.com/in/aditya-narayan-84634525b
                    </a>
                  </div>
                </div>

                {/* Circular Profile Photo with Purple Ring */}
                <div style={{ width: '74px', height: '74px', borderRadius: '50%', overflow: 'hidden', border: '2.5px solid #7c3aed', flexShrink: 0, backgroundColor: '#090a0f', boxShadow: '0 4px 12px rgba(124,58,237,0.2)' }}>
                  <img
                    src="./assets/aditya-avatar-round.png"
                    alt="Aditya Narayan"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* 2-Column Split: Left Column (58%) & Right Column (42%) */}
              <div style={{ display: 'grid', gridTemplateColumns: '58% 42%', gap: '18px', alignItems: 'start' }}>

                {/* LEFT COLUMN: Experience, Education, Technical Skills */}
                <div>
                  {/* WORK EXPERIENCE */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', color: '#6b21a8', borderBottom: '1.5px solid #7c3aed', paddingBottom: '2.5px', marginBottom: '8px' }}>
                      WORK EXPERIENCE
                    </div>

                    {/* Vagminepro */}
                    <div style={{ marginBottom: '9px' }}>
                      <div style={{ fontSize: '9.4px', fontWeight: '800', color: '#0f172a' }}>
                        SOFTWARE DEVELOPER
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.8px', fontWeight: '700', color: '#6b21a8' }}>
                        <span>Vagminepro Techno Pvt. Ltd.</span>
                        <span style={{ color: '#64748b', fontWeight: '500', fontSize: '8.2px' }}>Joined 17 Aug 2026 | Delhi</span>
                      </div>
                      <ul style={{ margin: '3px 0 0 14px', padding: 0, fontSize: '8.6px', color: '#334155', lineHeight: '1.32' }}>
                        <li>Enterprise application modules, backend microservices, and workflows using .NET Core.</li>
                        <li>REST API integration, scalable data pipelines, and database query optimization.</li>
                      </ul>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginTop: '4px' }}>
                        {['.NET Core', 'C#', 'SQL Server', 'REST APIs'].map(t => (
                          <span key={t} style={{ fontSize: '7.5px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '3px', padding: '1px 4px', color: '#6b21a8', fontWeight: '600' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Infinitminds */}
                    <div style={{ marginBottom: '9px' }}>
                      <div style={{ fontSize: '9.4px', fontWeight: '800', color: '#0f172a' }}>
                        FLUTTER DEVELOPER INTERN
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.8px', fontWeight: '700', color: '#6b21a8' }}>
                        <span>Infinitminds Digital Lab Pvt. Ltd.</span>
                        <span style={{ color: '#64748b', fontWeight: '500', fontSize: '8.2px' }}>Feb 2025 – May 2025 | Patna</span>
                      </div>
                      <ul style={{ margin: '3px 0 0 14px', padding: 0, fontSize: '8.6px', color: '#334155', lineHeight: '1.32' }}>
                        <li>Developed Flutter and Dart mobile screens, widgets, responsive layouts, and state flows.</li>
                        <li>Integrated REST APIs, handled asynchronous JSON data, and resolved UI/UX edge cases.</li>
                      </ul>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginTop: '4px' }}>
                        {['Flutter', 'Dart', 'Provider', 'REST API'].map(t => (
                          <span key={t} style={{ fontSize: '7.5px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '3px', padding: '1px 4px', color: '#6b21a8', fontWeight: '600' }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Freelancing */}
                    <div>
                      <div style={{ fontSize: '9.4px', fontWeight: '800', color: '#0f172a' }}>
                        FREELANCE SOFTWARE DEVELOPER
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.8px', fontWeight: '700', color: '#6b21a8' }}>
                        <span>Independent Client Contracting</span>
                        <span style={{ color: '#64748b', fontWeight: '500', fontSize: '8.2px' }}>2023 – Present | Remote</span>
                      </div>
                      <ul style={{ margin: '3px 0 0 14px', padding: 0, fontSize: '8.6px', color: '#334155', lineHeight: '1.32' }}>
                        <li>Delivered 50+ client contracts across mobile apps, React portals, and .NET APIs.</li>
                        <li>Designed 200+ UI screens with clean architecture, testing, and production handover.</li>
                      </ul>
                    </div>
                  </div>

                  {/* EDUCATION */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', color: '#6b21a8', borderBottom: '1.5px solid #7c3aed', paddingBottom: '2.5px', marginBottom: '7px' }}>
                      EDUCATION
                    </div>
                    <div style={{ fontSize: '9.2px', fontWeight: '700', color: '#0f172a' }}>
                      Bachelor of Computer Applications (BCA)
                    </div>
                    <div style={{ fontSize: '8.8px', color: '#334155' }}>
                      Aryabhatta Knowledge University, Patna, India
                    </div>
                    <div style={{ fontSize: '8.4px', color: '#6b21a8', fontWeight: '600', marginTop: '1.5px' }}>
                      June 2024 &bull; CGPA: 7.17 / 10.00
                    </div>
                  </div>

                  {/* TECHNICAL SKILLS */}
                  <div>
                    <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', color: '#6b21a8', borderBottom: '1.5px solid #7c3aed', paddingBottom: '2.5px', marginBottom: '7px' }}>
                      TECHNICAL SKILLS
                    </div>
                    <div style={{ fontSize: '8.5px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3.5px' }}>
                      <div><strong style={{ color: '#6b21a8' }}>Languages:</strong> Dart, C#, TypeScript, JavaScript, SQL, HTML5/CSS3</div>
                      <div><strong style={{ color: '#6b21a8' }}>Frameworks:</strong> Flutter, React, .NET Core, ASP.NET Core, Tailwind CSS</div>
                      <div><strong style={{ color: '#6b21a8' }}>Databases:</strong> SQL Server, MySQL, SQLite, Firebase, Redis</div>
                      <div><strong style={{ color: '#6b21a8' }}>Tools & Cloud:</strong> Git, GitHub, Docker, Postman, Android Studio, OCI</div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Projects, Certifications, Achievements */}
                <div>
                  {/* KEY PROJECTS */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', color: '#6b21a8', borderBottom: '1.5px solid #7c3aed', paddingBottom: '2.5px', marginBottom: '8px' }}>
                      KEY PROJECTS
                    </div>

                    <div style={{ marginBottom: '8px' }}>
                      <div style={{ fontSize: '9.2px', fontWeight: '800', color: '#0f172a' }}>
                        KHARID DO — E-COMMERCE APP
                      </div>
                      <div style={{ fontSize: '8.0px', color: '#6b21a8', fontWeight: '600' }}>Flutter, Dart, Firebase</div>
                      <p style={{ margin: '2px 0 0 0', fontSize: '8.4px', color: '#334155', lineHeight: '1.26' }}>
                        Full mobile shopping platform with live cart state sync, coupon engines, and checkout workflows.
                      </p>
                    </div>

                    <div style={{ marginBottom: '8px' }}>
                      <div style={{ fontSize: '9.2px', fontWeight: '800', color: '#0f172a' }}>
                        EDUPULSE PORTAL — ANALYTICS
                      </div>
                      <div style={{ fontSize: '8.0px', color: '#6b21a8', fontWeight: '600' }}>React, TypeScript, MySQL</div>
                      <p style={{ margin: '2px 0 0 0', fontSize: '8.4px', color: '#334155', lineHeight: '1.26' }}>
                        Academic portal supporting 4,800+ profiles with 60% faster SQL query turnaround time.
                      </p>
                    </div>

                    <div style={{ marginBottom: '8px' }}>
                      <div style={{ fontSize: '9.2px', fontWeight: '800', color: '#0f172a' }}>
                        PULSEFIT TRACKER — FITNESS APP
                      </div>
                      <div style={{ fontSize: '8.0px', color: '#6b21a8', fontWeight: '600' }}>Flutter, Dart, SQLite</div>
                      <p style={{ margin: '2px 0 0 0', fontSize: '8.4px', color: '#334155', lineHeight: '1.26' }}>
                        Cross-platform fitness app with animated goal rings and offline habit tracking.
                      </p>
                    </div>

                    <div>
                      <div style={{ fontSize: '9.2px', fontWeight: '800', color: '#0f172a' }}>
                        REAL-TIME TRAVEL & TRACKING
                      </div>
                      <div style={{ fontSize: '8.0px', color: '#6b21a8', fontWeight: '600' }}>Flutter, Dart, Google Maps API</div>
                      <p style={{ margin: '2px 0 0 0', fontSize: '8.4px', color: '#334155', lineHeight: '1.26' }}>
                        Cross-platform location-sharing mobile app with interactive maps and geolocator services.
                      </p>
                    </div>
                  </div>

                  {/* CERTIFICATIONS */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', color: '#6b21a8', borderBottom: '1.5px solid #7c3aed', paddingBottom: '2.5px', marginBottom: '7px' }}>
                      CERTIFICATIONS
                    </div>
                    <ul style={{ margin: '0 0 0 14px', padding: 0, fontSize: '8.4px', color: '#334155', lineHeight: '1.34' }}>
                      <li><strong>Oracle OCI AI Foundations Associate</strong> (2026)</li>
                      <li><strong>Data Analytics Essentials</strong> &bull; Cisco (Feb 2026)</li>
                      <li><strong>Flutter Developer Internship</strong> &bull; Infinitminds (May 2025)</li>
                    </ul>
                  </div>

                  {/* VERIFIED ACHIEVEMENTS */}
                  <div>
                    <div style={{ fontSize: '10.5px', fontWeight: '800', textTransform: 'uppercase', color: '#6b21a8', borderBottom: '1.5px solid #7c3aed', paddingBottom: '2.5px', marginBottom: '7px' }}>
                      VERIFIED ACHIEVEMENTS
                    </div>
                    <div style={{ fontSize: '8.3px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '4px', lineHeight: '1.28' }}>
                      <div><strong style={{ color: '#6b21a8' }}>50+ Client Contracts:</strong> Delivered production web & mobile projects with 100% completion rate.</div>
                      <div><strong style={{ color: '#6b21a8' }}>200+ UI Screens:</strong> Engineered responsive, accessible interfaces in Flutter and React.</div>
                      <div><strong style={{ color: '#6b21a8' }}>60% Query Latency Cut:</strong> Refactored SQL connection pools and index structures.</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
