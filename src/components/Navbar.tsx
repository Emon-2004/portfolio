"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0D17]/80 border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
            E
          </span>
          <span className="font-semibold text-lg text-white tracking-tight group-hover:text-pink-400 transition-colors">
            Saiful Emon<span className="text-pink-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Socials */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all hover:scale-[1.02]"
          >
            Get in touch
            <ArrowUpRight className="w-3.5 h-3.5 text-pink-400" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131627] border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-white text-base py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-4">
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
