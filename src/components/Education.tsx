"use client";

import { GraduationCap, Award, BookOpen, Calendar, MapPin, Heart, Lightbulb } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative bg-[#0B0D17]/40">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-indigo-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
            Formal education, academic performance, and foundational engineering curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Education Card (8 cols) */}
          <div className="lg:col-span-8 bg-[#131627] border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div className="relative pl-6 border-l-2 border-pink-500/30 space-y-6">
              <div className="relative">
                {/* Dot */}
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-pink-500 border-4 border-[#131627]" />
                
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  CGPA: {education.cgpa}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-white mt-3">
                  {education.degree}
                </h3>
                <p className="text-sm text-gray-300 font-medium">
                  {education.institution}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-pink-400" />
                    {education.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    Dhaka, Bangladesh
                  </span>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-xs font-semibold text-gray-300 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-pink-400" /> Key Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span key={course} className="px-3 py-1.5 rounded-xl text-xs bg-[#0B0D17] text-gray-300 border border-white/5">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#131627] border border-white/5 rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Practical Experience</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Database Handler &amp; QA Lead for Reliance Housing Ltd. enterprise portal (NexusBuild). Managed schema migration, stored procedures, RLS policies, and wrote 191 automated Playwright test cases.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-500 font-mono">
              Status: <span className="text-emerald-400 font-semibold">Undergraduate CSE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
