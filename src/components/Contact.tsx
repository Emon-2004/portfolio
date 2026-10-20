"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In static / standard frontends, open mailto link with formatted body
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-[#131627] border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-pink-400 mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Let&apos;s start a conversation.
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Whether you have an internship position, software development role, project inquiry, or just want to chat about database architecture, my inbox is always open.
              </p>

              {/* Direct Info */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0B0D17] border border-white/5 text-gray-300 hover:text-white hover:border-pink-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 font-medium">Email Me Directly</p>
                    <p className="text-sm font-semibold">{personal.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0B0D17] border border-white/5 text-gray-300 hover:text-white hover:border-pink-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 font-medium">Call / WhatsApp</p>
                    <p className="text-sm font-semibold">{personal.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0B0D17] border border-white/5 text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 font-medium">Location</p>
                    <p className="text-sm font-semibold">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-8 mt-8 border-t border-white/5 flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/5 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xs font-semibold shadow-md shadow-pink-500/20 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#131627] border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-gray-400 mb-6">
              Fill in your details below and I will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Your default email client opened with the inquiry draft. If it didn&apos;t trigger, feel free to email me at {personal.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/20"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0D17] border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0D17] border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship / Role Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0D17] border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Emon, I came across your portfolio and would love to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0D17] border border-white/10 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:opacity-95 text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
