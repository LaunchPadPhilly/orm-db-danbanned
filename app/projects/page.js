'use client';

import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectForm from "./components/ProjectForm";


/**
 * Glitch-Graffiti Projects Page (B + C)
 * - Requires: framer-motion
 * - Recommended public assets:
 *   /images/graffiti-wall.jpg
 *   /images/glitch-noise.gif
 *   /images/filmmaking.png
 */

export default function ProjectsPage() {
  const [formopen,setFormOpen] = useState(false);
  const [formclosed,setFormClosed] = useState(false);
  const [formsubmit,setFormSubmit] = useState(false);

  const [projects,setProjects] = useState([])

useEffect(() => {
  async function fetchProjectServer() {
    const res = await fetch('/api/projects');
    const databaseProjects = await res.json();
    setProjects(Array.isArray(databaseProjects) ? databaseProjects : []);
  }
  fetchProjectServer();
}, []);


  return (
    <div className="glitch-page relative min-h-screen w-full overflow-hidden py-20 px-6">

      {/* ------------------- GRAFFITI WALL & FX ------------------- */}
      <div
        aria-hidden
        className="graffiti fixed inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/graffiti-wall.jpg')",
        }}
      />

      {/* grain + vignette */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('/images/glitch-noise.gif')] opacity-20 mix-blend-overlay" />
      </div>

      {/* spray blobs */}
      <motion.div
        aria-hidden
        className="blob blob-green fixed rounded-full -z-10"
        initial={{ x: -250, y: -200 }}
        animate={{ x: [-250, 220, -150], y: [-200, 160, -60] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="blob blob-red fixed rounded-full -z-10"
        initial={{ x: 300, y: 240 }}
        animate={{ x: [300, -180, 220], y: [240, -120, 200] }}
        transition={{ repeat: Infinity, duration: 13, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="blob blob-blue fixed rounded-full -z-10"
        initial={{ x: -120, y: 380 }}
        animate={{ x: [-120, 120, -80], y: [380, -80, 260] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* ===========================================================
          MAIN BLURRED CONTENT PANEL (so graffiti + blobs remain visible)
          =========================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto backdrop-blur-md bg-black/40 p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10">

        {/* Title with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glitch-title text-5xl md:text-6xl font-extrabold text-white text-center mb-4"
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-center text-white/85 text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A curated selection of work — design, code, film, and motion — presented in a glitch-graffiti aesthetic.
        </motion.p>

        {/* Project submission form */}
      <div className="text-center mt-10">
        <button 
          className="mt-6 text-white px-4 py-2 border border-white rounded-lg hover:bg-white/10"
          onClick={() => setFormOpen(true)}
        >
          add project
        </button>
      </div>

      <ProjectForm
        isOpen={formopen}
        onClose={() => setFormOpen(false)}
        onSubmit={(newProject) => setProjects(prev => [...prev, newProject])}
      />

        {/* Featured project(s) */}
        <div className="mb-12 space-y-8">
          {projects.filter((p) => p.featured).map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="grid md:grid-cols-2 gap-8 p-6 rounded-2xl backdrop-blur-sm bg-white/6 border border-white/8 hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden"
            >
              {/* Left: Image with RGB split layers */}
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  width={500}     // required
                  height={300}    // required
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover block"
                />
                {/* RGB split overlays (for hover) */}
                <div className="rgb-overlay pointer-events-none absolute inset-0" aria-hidden />
              </div>

              {/* Right: text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((t) => (
                    <span key={t} className="tag-graffiti px-3 py-1 rounded-full text-sm font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.project}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    GitHub
                  </a>
                  {project.animation && (
                    <a
                      href={project.project || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost ml-auto bg-red-600 text-white hover:bg-red-700"
                    >
                      Watch Reel
                    </a>
                  )}
                </div>
              </div>

              {/* spray paint drips (decorative SVG) */}
              <svg className="paint-drip absolute -right-12 -top-8 w-40 opacity-40 pointer-events-none" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M10 10 C30 60, 20 90, 60 100 C100 110, 100 60, 110 20" stroke="#ff0044" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </motion.article>
          ))}
        </div>

        {/* Grid of project cards (with animated/video card) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter((p) => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="project-card relative rounded-xl overflow-hidden border border-white/6 bg-white/4 shadow-lg"
            >
              {/* Card image with rgb layers for chromatic aberration */}
              <div className="relative overflow-hidden">
                <Image src={project.image} alt={project.title} width={300} height={500} className="w-full h-48 object-cover" />
                <div className="rgb-overlay pointer-events-none absolute inset-0" aria-hidden />
                {/* optional play overlay for video/animation */}
                {project.animation && (
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/70 flex items-center justify-center text-white"
                    onClick={() => window.open(project.project || "#", "_blank")}
                    aria-label={`Open ${project.title}`}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((t) => (
                    <span key={t} className="tag-graffiti px-3 py-1 rounded-full text-sm font-semibold">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a className="btn-ghost" href={project.project} target="_blank" rel="noreferrer">Live</a>
                  <a className="btn-ghost" href={project.github} target="_blank" rel="noreferrer">Code</a>
                </div>
              </div>
            </motion.div>
          ))}

          
        </div>
       </div>

      {/* --------------------------- INLINE STYLES --------------------------- */}
      <style>{`
        /* Blobs */
        .blob { filter: blur(40px) saturate(140%); opacity: .35; }
        .blob-green { width: 520px; height: 520px; background: radial-gradient(circle at 30% 30%, #00ff73, #007a45); left: -10%; top: -10%; }
        .blob-red { width: 520px; height: 520px; background: radial-gradient(circle at 70% 70%, #ff3860, #7a0016); right: 5%; top: 40%; }
        .blob-blue { width: 420px; height: 420px; background: radial-gradient(circle at 40% 60%, #4da6ff, #002b5c); left: 10%; bottom: -5%; }

        /* Page */
        .glitch-page { background: radial-gradient(circle at 10% 10%, rgba(0,0,0,0.6), transparent 10%), radial-gradient(circle at 90% 90%, rgba(0,0,0,0.6), transparent 10%); }

        /* Glitch title: multiple layered text using text-shadow & subtle translations */
        .glitch-title {
          position: relative;
          display: inline-block;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          overflow: visible;
        }
        /* rgb jitter via shadows + pseudo-layers */
        .glitch-title::before,
        .glitch-title::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        /* we will simulate with text-shadow + animation */
        @keyframes glitchShift {
          0% { text-shadow: 2px 0 #00f, -2px 0 #f00; transform: translate(0,0); }
          20% { text-shadow: -6px -2px #00f, 6px 2px #f00; transform: translate(-3px,2px); }
          40% { text-shadow: 6px 4px #00f, -6px -4px #f00; transform: translate(2px,-2px); }
          60% { text-shadow: -3px 6px #00f, 3px -6px #f00; transform: translate(-2px,1px); }
          100% { text-shadow: 2px 0 #00f, -2px 0 #f00; transform: translate(0,0); }
        }
        .glitch-title {
          animation: glitchShift 2s infinite linear;
        }

        /* rgb overlay for images (chromatic aberration on hover) */
        .rgb-overlay::before,
        .rgb-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          mix-blend-mode: screen;
          opacity: 0;
          transition: opacity .25s, transform .25s;
        }
        .rgb-overlay::before {
          background: linear-gradient(90deg, rgba(255,0,100,0.08), transparent 60%);
          transform: translateX(-6px);
          filter: hue-rotate(-15deg) saturate(130%);
        }
        .rgb-overlay::after {
          background: linear-gradient(90deg, rgba(0,240,255,0.08), transparent 60%);
          transform: translateX(6px);
          filter: hue-rotate(15deg) saturate(130%);
        }
        .project-card:hover .rgb-overlay::before,
        .project-card:hover .rgb-overlay::after,
        article:hover .rgb-overlay::before,
        article:hover .rgb-overlay::after {
          opacity: 1;
          transform: translateX(0);
        }

        /* graffiti tag style for tech chips */
        .tag-graffiti {
          background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0.08));
          border: 1px solid rgba(255,255,255,0.06);
          color: #fff;
          text-shadow: 0 1px 0 rgba(0,0,0,0.6);
          box-shadow: 0 6px 18px rgba(0,0,0,0.4);
          transform: skew(-6deg) rotate(-2deg);
          padding-left: 10px;
          padding-right: 10px;
          font-weight: 700;
        }

        /* ghost buttons */
        .btn-ghost {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          font-weight: 600;
          text-decoration: none;
        }

        .btn-ghost:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }

        /* project card base */
        .project-card { transition: transform .28s cubic-bezier(.2,.9,.2,1), box-shadow .28s; }
        .project-card:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 40px 80px rgba(0,0,0,0.6); }

        /* dripping paint accent */
        .paint-drip { opacity: .25; filter: blur(.4px); transform: rotate(12deg); }

        /* respecting reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .blob, .glitch-title, .project-card, .project-card * { animation: none !important; transition: none !important; }
        }

        /* responsive tweaks */
        @media (max-width: 768px) {
          .blob { display: none; }
        }
      `}</style>
    </div>
  );
}
