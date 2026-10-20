"use client";

import { Wrench, Layers, Server, Database, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      name: "Frontend Development",
      icon: Layers,
      items: skills.frontend,
      color: "from-pink-500/10 to-transparent",
      badgeColor: "border-pink-500/20 text-pink-300"
    },
    {
      name: "Backend & Systems",
      icon: Server,
      items: skills.backend,
      color: "from-indigo-500/10 to-transparent",
      badgeColor: "border-indigo-500/20 text-indigo-300"
    },
    {
      name: "Databases & Architecture",
      icon: Database,
      items: skills.databases,
      color: "from-purple-500/10 to-transparent",
      badgeColor: "border-purple-500/20 text-purple-300"
    },
    {
      name: "Tools, Testing & Workflow",
      icon: Wrench,
      items: skills.tools,
      color: "from-emerald-500/10 to-transparent",
      badgeColor: "border-emerald-500/20 text-emerald-300"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0B0D17]/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-pink-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Toolbox</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
            A comprehensive overview of programming languages, framework ecosystems, and infrastructure tools I leverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="bg-[#131627] border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-lg hover:border-white/20 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4">
                    {cat.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#0B0D17] border border-white/5 text-gray-300 hover:text-white hover:border-pink-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                  <span>Proficiency</span>
                  <span className="text-pink-400 font-semibold">Active &bull; Production</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
