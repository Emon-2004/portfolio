"use client";

import { useState } from "react";
import { ExternalLink, ArrowUpRight, X, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { portfolioData, Project } from "@/data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Databases", "AI/ML"];

  const filteredProjects = activeFilter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-pink-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Projects</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Crafted with precision &amp; purpose.
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
              From enterprise PostgreSQL schemas with strict RLS to intelligent voice interfaces and machine learning pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#131627] p-1.5 rounded-2xl border border-white/5 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Matching Figma Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#131627] border border-white/5 hover:border-pink-500/40 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
            >
              {/* Top Accent Gradient Preview */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-tr from-purple-950 via-indigo-900/60 to-[#191D34] border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-pink-500/30 transition-colors">
                <div className="flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-black/40 text-pink-300 backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-pink-400" />
                  </div>
                </div>

                <div className="z-10">
                  <p className="text-xs text-gray-300 font-mono">{project.subtitle}</p>
                </div>

                {/* Subtle visual glow inside card */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
              </div>

              {/* Content */}
              <div className="mt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1.5 transition-colors"
                    >
                      View Details &amp; Spec
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Detailed Project Modal (Required by Specification) */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#131627] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-3">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{selectedProject.subtitle}</p>
              </div>

              {/* Modal Body */}
              <div className="mt-6 space-y-6 text-sm text-gray-300">
                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Overview</h4>
                  <p className="leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Key Contributions &amp; Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg text-xs bg-white/5 text-gray-200 border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Improvements (Specification requirement) */}
                <div className="p-4 rounded-2xl bg-[#0B0D17] border border-white/5 space-y-3">
                  <div>
                    <h5 className="text-xs font-semibold text-pink-400 flex items-center gap-1.5 mb-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Technical Challenges &amp; Resolution
                    </h5>
                    <p className="text-xs text-gray-400 leading-relaxed">{selectedProject.challenges}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-purple-400 flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3.5 h-3.5" /> Future Improvements
                    </h5>
                    <p className="text-xs text-gray-400 leading-relaxed">{selectedProject.improvements}</p>
                  </div>
                </div>

                {/* Links */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub Repository
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transition-all shadow-md shadow-pink-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Application
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
