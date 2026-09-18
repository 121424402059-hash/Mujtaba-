import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, ArrowUpRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'prepared'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    // Build honest client-side mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmittedStatus('prepared');
    
    // Safely open email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 space-y-16 sm:space-y-20">
      {/* Hero */}
      <section id="contact-hero">
        <SectionHeading
          label="Direct Contact"
          title="Let's Connect"
          subtitle="Have an idea, opportunity, or project in mind? I'd love to hear from you."
        />
      </section>

      {/* Grid: Contact Information on Left, Honest Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Links & Status */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] border border-slate-800 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                CURRENT STATUS
              </span>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-lg font-bold font-display text-white">
                  Open to Internships
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Seeking frontend development and UI/UX internship roles for Summer & Fall.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              {/* Email item */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    EMAIL ADDRESS
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-mono text-white hover:text-cyan-300 transition-colors block break-all font-semibold"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* LinkedIn item */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all"
              >
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                    LINKEDIN PROFILE
                  </span>
                  <span className="text-sm font-mono text-white group-hover:text-cyan-300 transition-colors block">
                    {PERSONAL_INFO.linkedinDisplay}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub item */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all"
              >
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    GITHUB PROFILE
                  </span>
                  <span className="text-sm font-mono text-white group-hover:text-cyan-300 transition-colors block">
                    {PERSONAL_INFO.githubDisplay}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Location pill */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] border border-slate-800 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
                Fill out the form below to initiate an email draft directly to Aarav.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maya Patel"
                  className="w-full px-4 py-3 rounded-xl bg-[#080d16] border border-slate-800 text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none text-sm transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#080d16] border border-slate-800 text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none text-sm transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Aarav about your project, internship opportunity, or question..."
                  className="w-full px-4 py-3 rounded-xl bg-[#080d16] border border-slate-800 text-white placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none text-sm transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 active:scale-95 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] focus:outline-none"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Status Notice */}
              {submittedStatus === 'prepared' && (
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 space-y-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Email Draft Created!</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Your message has been prefilled into your operating system's default email client. If your client didn't open automatically, you can send directly to <strong className="text-white">{PERSONAL_INFO.email}</strong>.
                  </p>
                </div>
              )}

              {/* Honest client-side architecture disclaimer */}
              <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
                Safe frontend form: Generates an honest direct email link without third-party server relay.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
