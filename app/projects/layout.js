import React from "react";

export const metadata = {
  title: "Projects",
};

export default function ProjectsLayout({ children }) {
  return (
    <div className="glitch-page relative min-h-screen w-full overflow-hidden py-20 px-6">
      {/* Background blobs */}
      <div className="blob blob-green" />
      <div className="blob blob-red" />
      <div className="blob blob-blue" />

      {/* Page wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto backdrop-blur-md bg-black/40 p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10">
        {children}
      </div>

      {/* --------------------------- INLINE STYLES --------------------------- */}
      <style>{`
        /* Blobs */
        .blob { filter: blur(40px) saturate(140%); opacity: .35; position: absolute; border-radius: 50%; }
        .blob-green { width: 520px; height: 520px; background: radial-gradient(circle at 30% 30%, #00ff73, #007a45); left: -10%; top: -10%; }
        .blob-red { width: 520px; height: 520px; background: radial-gradient(circle at 70% 70%, #ff3860, #7a0016); right: 5%; top: 40%; }
        .blob-blue { width: 420px; height: 420px; background: radial-gradient(circle at 40% 60%, #4da6ff, #002b5c); left: 10%; bottom: -5%; }

        /* Page */
        .glitch-page { 
          background: radial-gradient(circle at 10% 10%, rgba(0,0,0,0.6), transparent 10%), 
                      radial-gradient(circle at 90% 90%, rgba(0,0,0,0.6), transparent 10%);
        }

        /* Glitch title effect */
        .glitch-title {
          position: relative;
          display: inline-block;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          overflow: visible;
          color: white;
        }
        .glitch-title::before,
        .glitch-title::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
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

        /* RGB overlay for images (chromatic aberration on hover) */
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
