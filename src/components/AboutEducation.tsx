"use client";

import { GraduationCap, Award, BookOpen, Calendar, MapPin, User, Heart, Lightbulb } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function AboutEducation() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* About Me Section (7 cols) */}
          <div className="lg:col-span-7 bg-[#131627] border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-pink-400">
              <User className="w-3.5 h-3.5" />
              <span>About Me &amp; Journey</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Driven by data integrity &amp; expressive software design.
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {personal.extendedBio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="p-4 rounded-2xl bg-[#0B0D17] border border-white/5">
                <div className="flex items-center gap-2 text-pink-400 mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-xs font-semibold text-white">What I Love Building</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personal.interests.map((int) => (
                    <span key={int} className="text-[11px] text-gray-400">
                      &bull; {int}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B0D17] border border-white/5">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs font-semibold text-white">Beyond the Code</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personal.hobbies.map((hob) => (
                    <span key={hob} className="text-[11px] text-gray-400">
                      &bull; {hob}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience Section (5 cols) */}
          <div id="education" className="lg:col-span-5 bg-[#131627] border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-indigo-400 mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Education &amp; Qualifications
              </h3>

              <div className="relative pl-6 border-l-2 border-pink-500/30 space-y-6">
                <div className="relative">
                  {/* Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-pink-500 border-4 border-[#131627]" />
                  
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    CGPA: {education.cgpa}
                  </span>

                  <h4 className="text-base font-bold text-white mt-2">
                    {education.degree}
                  </h4>
                  <p className="text-xs text-gray-300 font-medium">
                    {education.institution}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-pink-400" />
                      {education.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      Dhaka, Bangladesh
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5">
                    <p className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-pink-400" /> Key Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {education.coursework.map((course) => (
                        <span key={course} className="px-2 py-0.5 rounded-md text-[10px] bg-white/5 text-gray-300">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/20">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-bold text-white">Experience Highlights</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Database Handler &amp; QA Lead for Reliance Housing Ltd. portal (NexusBuild). Handled 191 QA and security tests.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
