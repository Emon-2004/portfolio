"use client";

import { Code2, BrainCircuit, Database, ArrowUpRight, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function BentoHighlights() {
  const cards = [
    {
      title: "Frontend Engineering",
      count: "01",
      icon: Code2,
      description: "Responsive, pixel-perfect user interfaces built with React, Next.js, and Tailwind CSS. Focused on clean UX, performance, and accessibility.",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
      accent: "from-blue-500/20 to-indigo-500/5",
      borderHover: "hover:border-blue-500/50"
    },
    {
      title: "AI / ML Systems",
      count: "02",
      icon: BrainCircuit,
      description: "Explored predictive models, intrusion detection classifiers, and smart canvas audio assistants using Python and ML libraries.",
      skills: ["Python", "Scikit-Learn", "SpeechNLP", "Data Pipelines"],
      accent: "from-purple-500/20 to-pink-500/5",
      borderHover: "hover:border-purple-500/50"
    },
    {
      title: "Databases & RLS",
      count: "03",
      icon: Database,
      description: "Specialized in PostgreSQL and Supabase. Designing consolidated schemas, strict Row Level Security (RLS), and database testing suites.",
      skills: ["PostgreSQL", "Supabase", "Row Level Security", "Constraints"],
      accent: "from-emerald-500/20 to-teal-500/5",
      borderHover: "hover:border-emerald-500/50"
    },
    {
      title: "Let's Connect",
      count: "04",
      isAction: true,
      description: "Looking for an enthusiastic engineer who cares about database integrity and modern UI? Let's build something impactful together.",
      accent: "from-pink-600 via-purple-600 to-indigo-600",
      cta: "Send Message",
      href: "#contact"
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            if (card.isAction) {
              return (
                <div
                  key={i}
                  className="rounded-3xl p-6 bg-gradient-to-br from-pink-500 to-purple-700 flex flex-col justify-between shadow-xl text-white relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-widest font-semibold text-white/80">Available</span>
                      <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: "6s" }} />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-2">Let&apos;s build together.</h3>
                    <p className="text-xs text-white/90 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <a
                    href={card.href}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold text-xs shadow-md hover:bg-gray-100 transition-all group-hover:gap-3"
                  >
                    <span>{card.cta}</span>
                    <ArrowUpRight className="w-4 h-4 text-pink-600" />
                  </a>
                </div>
              );
            }

            const Icon = card.icon!;
            return (
              <div
                key={i}
                className={`bg-[#131627] border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${card.borderHover} group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-pink-400" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">{card.count}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {card.skills?.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-md text-[10px] bg-white/5 text-gray-300 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
