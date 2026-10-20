"use client";

import { User, Lightbulb, Heart, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-[#131627] border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-pink-400">
            <User className="w-3.5 h-3.5" />
            <span>About Me &amp; Background</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Driven by data integrity &amp; sleek, expressive software design.
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl">
            {personal.extendedBio}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
            <div className="p-6 rounded-2xl bg-[#0B0D17] border border-white/5">
              <div className="flex items-center gap-2 text-pink-400 mb-3">
                <Lightbulb className="w-5 h-5" />
                <span className="text-sm font-bold text-white">What I Love Building</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personal.interests.map((int) => (
                  <span key={int} className="px-3 py-1.5 rounded-xl text-xs bg-white/5 text-gray-300 border border-white/5">
                    {int}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B0D17] border border-white/5">
              <div className="flex items-center gap-2 text-purple-400 mb-3">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-bold text-white">Beyond the Code</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personal.hobbies.map((hob) => (
                  <span key={hob} className="px-3 py-1.5 rounded-xl text-xs bg-white/5 text-gray-300 border border-white/5">
                    {hob}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
