"use client";

import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0B0D17] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
            E
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Md Saiful Islam Emon</p>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} &bull; Built with Next.js, React &amp; Tailwind CSS
            </p>
          </div>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
