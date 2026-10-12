import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare, Send, Check, Copy, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Instagram Reels & YouTube Shorts',
    budget: '',
    details: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'fallback'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        projectType: preselectedService,
      }));
    }
  }, [preselectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const formattedBrief = `Hi Harika,

I would like to discuss a video editing project:
- Name: ${formData.name || 'Not provided'}
- Email: ${formData.email || 'Not provided'}
- Project Type: ${formData.projectType}
- Estimated Budget: ${formData.budget || 'Open / Discussion'}

Project Overview:
${formData.details || 'Interested in video editing services.'}`;

  const emailSubject = `Video Editing Inquiry: ${formData.projectType} - ${formData.name || 'Client'}`;
  const gmailWebComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PROFILE_DATA.email
  )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(formattedBrief)}`;

  const whatsappMessage = encodeURIComponent(
    `Hi Harika! I have a video editing project brief:\n\n*Name:* ${formData.name || 'Client'}\n*Email:* ${
      formData.email || 'Not specified'
    }\n*Project Type:* ${formData.projectType}\n*Budget:* ${
      formData.budget || 'Open'
    }\n\n*Details:*\n${formData.details || 'Let me know your availability!'}`
  );

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(formattedBrief);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleOpenGmail = () => {
    window.open(gmailWebComposeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      // Send real submission to FormSubmit endpoint configured to Harika's email
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget || 'Not specified',
          details: formData.details,
          _subject: `New Video Edit Inquiry: ${formData.projectType} from ${formData.name}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setStatusMessage(
          `Inquiry sent directly to ${PROFILE_DATA.email}! `
        );
      } else {
        throw new Error('Service returned non-200');
      }
    } catch {
      // If network fails or service is blocked, provide graceful instant fallback
      setSubmissionStatus('fallback');
      setStatusMessage(
        `Direct web delivery could not reach the server right now. Use the instant "Open in Gmail" or "Send on WhatsApp" buttons below to send it in one click!`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Editorial Pitch */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#A1A1AA]">
                <span>START A COLLABORATION</span>
                <span aria-hidden="true" className="mx-2 text-[#C6FF4D]">/</span>
                <span>DIRECT INQUIRIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F0] font-display text-balance">
                Have footage? <br />
                <span className="text-[#C6FF4D]">Let's make it worth watching.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                Tell me about your video, your idea, or the story you want to bring to life. I reply promptly to discussing cuts, timelines, and raw footage.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Email */}
              <div className="p-4 bg-[#121212] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/[0.04] text-[#C6FF4D]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#71717A]">Email Address</div>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#C6FF4D] transition-colors"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#A1A1AA] hover:text-[#C6FF4D] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#C6FF4D]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp */}
              <div className="p-4 bg-[#121212] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/[0.04] text-[#C6FF4D]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#71717A]">Instant Message</div>
                    <a
                      href={`https://wa.me/${PROFILE_DATA.whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#C6FF4D] transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${PROFILE_DATA.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#C6FF4D] flex items-center gap-1 hover:underline"
                >
                  <span>Open</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Phone */}
              <div className="p-4 bg-[#121212] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/[0.04] text-[#C6FF4D]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#71717A]">Phone Call / Text</div>
                    <a
                      href={`tel:${PROFILE_DATA.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#C6FF4D] transition-colors"
                    >
                      +91 {PROFILE_DATA.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${PROFILE_DATA.phone}`}
                  className="text-xs font-mono text-[#A1A1AA] hover:text-[#C6FF4D]"
                >
                  Call
                </a>
              </div>

            </div>

            {/* Location & Availability Note */}
            <div className="p-4 bg-[#101010] border border-white/[0.06] text-xs font-mono text-[#A1A1AA] space-y-1">
              <div className="text-white font-medium">Location & Work Mode:</div>
              <div>{PROFILE_DATA.location}</div>
              <div className="text-[#C6FF4D] pt-1">Accepting freelance projects & internship offers worldwide.</div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#101010] border border-white/[0.1] relative">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-[#F5F5F0] font-display">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-[#A1A1AA]">
                  Fill out the parameters below to draft an immediate project brief.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A1A1AA]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 bg-[#171717] border border-white/10 text-white text-sm focus:border-[#C6FF4D] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A1A1AA]">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 bg-[#171717] border border-white/10 text-white text-sm focus:border-[#C6FF4D] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A1A1AA]">
                      Type of Editing Project *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#171717] border border-white/10 text-white text-sm focus:border-[#C6FF4D] focus:outline-none transition-colors"
                    >
                      <option value="Instagram Reels & YouTube Shorts">Instagram Reels & YouTube Shorts</option>
                      <option value="Video Montages & Narrative Flow">Video Montages & Narrative Flow</option>
                      <option value="Captions & Social Video Polish">Captions & Social Video Polish</option>
                      <option value="Basic Motion Graphics & Accents">Basic Motion Graphics & Accents</option>
                      <option value="Full-Time / Part-Time Internship Inquiry">Full-Time / Part-Time Internship Inquiry</option>
                      <option value="Other Video Project">Other Video Project</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#A1A1AA]">
                      Budget Range (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. ₹2,000–₹10,000 / $50–$250"
                      className="w-full px-4 py-3 bg-[#171717] border border-white/10 text-white text-sm focus:border-[#C6FF4D] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#A1A1AA]">
                    Project Details & Footage Overview *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell me about the raw clips, audio track preferences, desired video length, delivery deadline, or reference links..."
                    className="w-full px-4 py-3 bg-[#171717] border border-white/10 text-white text-sm focus:border-[#C6FF4D] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#C6FF4D] text-[#080808] hover:bg-[#b5f03d] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Dispatching...' : 'Send Project Inquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-[#C6FF4D] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    title="Open pre-filled in your Gmail web browser"
                  >
                    <Mail className="w-4 h-4 text-[#C6FF4D]" />
                    <span>Open in Gmail (Web)</span>
                  </button>

                  <a
                    href={`https://wa.me/${PROFILE_DATA.whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F0] border border-white/20 hover:border-[#C6FF4D] hover:text-[#C6FF4D] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C6FF4D]" />
                    <span>WhatsApp Brief</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="p-3.5 text-[#A1A1AA] hover:text-white border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center cursor-pointer"
                    title="Copy formatted brief to clipboard"
                  >
                    {copiedBrief ? <Check className="w-4 h-4 text-[#C6FF4D]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {submissionStatus === 'success' && (
                  <div className="p-4 bg-[#C6FF4D]/10 border border-[#C6FF4D]/40 space-y-2 text-xs font-mono">
                    <div className="text-[#C6FF4D] font-bold flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>{statusMessage}</span>
                    </div>
                    <div className="text-[#A1A1AA] text-[11px] leading-relaxed">
                      Want to follow up right away? You can also click <button type="button" onClick={handleOpenGmail} className="text-[#C6FF4D] underline cursor-pointer">Open in Gmail</button> or <a href={`https://wa.me/${PROFILE_DATA.whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="text-[#C6FF4D] underline">WhatsApp</a> with this exact brief.
                    </div>
                  </div>
                )}

                {submissionStatus === 'fallback' && (
                  <div className="p-4 bg-amber-500/10 border border-amber-500/30 space-y-2 text-xs font-mono">
                    <div className="text-amber-400 font-bold">
                      {statusMessage}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        type="button"
                        onClick={handleOpenGmail}
                        className="px-3 py-1.5 bg-[#C6FF4D] text-[#080808] font-bold uppercase text-[11px] cursor-pointer"
                      >
                        Click Here to Open in Gmail
                      </button>
                      <a
                        href={`https://wa.me/${PROFILE_DATA.whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-white/10 text-white font-bold uppercase text-[11px] border border-white/20"
                      >
                        Send via WhatsApp
                      </a>
                    </div>
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
