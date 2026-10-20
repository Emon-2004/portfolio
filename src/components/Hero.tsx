"use client";

import Image from "next/image";
import { ArrowDownToLine, ArrowUpRight, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background radial glows matching Figma layout */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Left Card (8 cols) */}
          <div className="lg:col-span-8 bg-[#131627] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Subtle top pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for 2025/2026 Opportunities</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Md Saiful Islam <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400">
                  Emon.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 font-medium mb-3">
                {personal.role}
              </p>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                {personal.shortBio}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
              <a
                href={personal.resumeUrl}
                download="Md_Saiful_Islam_Emon_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ArrowDownToLine className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 transition-all hover:scale-[1.02]"
              >
                View Selected Work
                <ArrowUpRight className="w-4 h-4 text-pink-400" />
              </a>

              <div className="flex items-center gap-2 text-xs text-gray-400 ml-auto sm:mt-0 mt-2">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Right Profile & Live Status Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#131627] border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-2xl relative group">
            {/* Image container */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 mb-6 bg-gradient-to-b from-purple-900/30 to-[#0B0D17]">
              <Image
                src="/emon.jpg"
                alt="Md Saiful Islam Emon"
                fill
                priority
                className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131627] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-3 left-3 right-3 bg-[#131627]/90 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">East West University</p>
                  <p className="text-[11px] text-gray-400">B.Sc. CSE • CGPA 3.48</p>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="bg-[#0B0D17]/80 rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-semibold text-white">Core Focus</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                PostgreSQL RLS Architecture, Next.js / React full-stack portals, and applied Machine Learning classifiers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
