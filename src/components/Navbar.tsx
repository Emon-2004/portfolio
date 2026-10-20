"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Work", href: "#work", id: "work" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0D17]/85 border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
            E
          </span>
          <span className="font-semibold text-lg text-white tracking-tight group-hover:text-pink-400 transition-colors">
            Saiful Emon<span className="text-pink-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation with Active Indicator */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`relative py-2 transition-all duration-200 ${
                  isActive ? "text-white font-semibold" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {link.name}
                {/* Active Indicator Underline ("dag er moto") */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-sm shadow-pink-500/50"
                      : "w-0 bg-transparent"
                  }`}
                />
              </a>
            );
          })}
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
            onClick={(e) => handleNavClick(e, "#contact", "contact")}
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
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`flex items-center justify-between text-base py-2 transition-colors ${
                  isActive ? "text-pink-400 font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-pink-500 shadow-sm shadow-pink-500" />}
              </a>
            );
          })}
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
              onClick={(e) => handleNavClick(e, "#contact", "contact")}
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
