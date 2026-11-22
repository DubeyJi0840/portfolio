import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, Send, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sentMessage, setSentMessage] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentMessage(true);
    setTimeout(() => setSentMessage(false), 4000);
  };

  return (
    <section id="contact" className="py-20 border-b border-[#1c1d22] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff5500]">
            <span>// 05. CONTACT & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Start a Conversation
          </h2>
          <p className="text-sm text-[#a1a1aa]">
            Available for full-time software developer opportunities, mobile engineering roles, and high-impact freelance consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-[#111216] border border-[#20222a] hover:border-[#ff5500]/40 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Direct Mobile</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#16171d] text-[#ff5500] border border-[#ff5500]/20">
                  Primary
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-lg font-mono font-bold text-white hover:text-[#ff5500] transition-colors"
                >
                  {personalInfo.phone}
                </a>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#181a20] hover:bg-[#20222b] text-xs font-mono text-[#a1a1aa] hover:text-white transition-colors border border-[#272935]"
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                      <span className="text-[#ff5500]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-[#1b1c23] flex items-center justify-between text-xs">
                <a
                  href={`https://wa.me/919135737500?text=${encodeURIComponent(
                    'Hi Aditya, I came across your software developer portfolio.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#25D366] hover:underline flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <span className="text-[11px] font-mono text-[#52525b]">IST (+05:30)</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-xl bg-[#111216] border border-[#20222a] hover:border-[#ff5500]/40 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#71717a] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Electronic Mail</span>
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-mono font-medium text-white hover:text-[#ff5500] transition-colors truncate max-w-[170px] xs:max-w-[240px]"
                >
                  {personalInfo.email}
                </a>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#181a20] hover:bg-[#20222b] text-xs font-mono text-[#a1a1aa] hover:text-white transition-colors border border-[#272935] shrink-0"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                      <span className="text-[#ff5500]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111216] border border-[#20222a] hover:border-[#ff5500]/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span className="text-xs font-mono font-medium text-white">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#71717a] group-hover:text-[#ff5500] transition-colors" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111216] border border-[#20222a] hover:border-[#ff5500]/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span className="text-xs font-mono font-medium text-white">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#71717a] group-hover:text-[#ff5500] transition-colors" />
              </a>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-[#111216] border border-[#20222a] flex items-center gap-3 text-xs text-[#a1a1aa]">
              <MapPin className="w-4 h-4 text-[#ff5500] shrink-0" />
              <div>
                <span className="text-white font-medium">Location: </span>
                <span>Noida, Uttar Pradesh, India • Open to Relocation & Remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#111216] border border-[#20222a] space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Send Direct Dispatch
                </h3>
                <p className="text-xs text-[#a1a1aa]">
                  Fill out the form below to initiate an email directly in your email client.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#a1a1aa] block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#16171d] border border-[#262833] focus:border-[#ff5500] focus:outline-none text-xs text-white placeholder-[#52525b]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#a1a1aa] block">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#16171d] border border-[#262833] focus:border-[#ff5500] focus:outline-none text-xs text-white placeholder-[#52525b]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#a1a1aa] block">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flutter Mobile Engineer Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#16171d] border border-[#262833] focus:border-[#ff5500] focus:outline-none text-xs text-white placeholder-[#52525b]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#a1a1aa] block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share project scope, role requirements, or collaboration details..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#16171d] border border-[#262833] focus:border-[#ff5500] focus:outline-none text-xs text-white placeholder-[#52525b] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#ff5500] hover:bg-[#e04c00] text-xs font-semibold text-white transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>

                {sentMessage && (
                  <div className="p-2.5 rounded bg-[#102a1b] border border-[#1f6638] text-xs text-[#4ade80] text-center font-mono">
                    ✓ Opening email client with your message...
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
