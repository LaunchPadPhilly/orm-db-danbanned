export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-black dark:bg-black transition-colors duration-500">

      {/* ================= HERO WITH VIDEO BACKGROUND ================= */}
      <div className="relative w-full h-screen overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-contain brightness-75 dark:brightness-50"
        >
          <source src="/videos/videoplayback.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 
        dark:from-black/70 dark:via-black/60 dark:to-black/90"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto pt-40 pb-12 px-6 text-center animate-fadeIn">

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r 
            from-purple-500 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-xl">
            Daniel Johnson
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-200 dark:text-gray-300 
            mb-8 uppercase tracking-[0.2em]">
            Full-Stack Web Developer
          </h2>

          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 leading-relaxed 
            max-w-3xl mx-auto font-light tracking-wide drop-shadow-sm mb-12">
            I&apos;m a full-stack web developer skilled in Python, JavaScript, React, and Figma&mdash;driven 
            by a passion for building technology that solves real-world problems and supports communities.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-6 justify-center">
            <a
              href="/projects"
              className="px-8 py-4 rounded-2xl bg-purple-600 text-white text-lg 
              shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-white/20 backdrop-blur-md text-white text-lg 
              dark:bg-gray-200 dark:text-black shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>

      {/* ================= FEATURED VIDEO SECTION (outside hero) ================= */}
      <section className="w-full py-20 px-6 text-center animate-fadeInSlow">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-300 dark:text-purple-400 mb-8">
          Featured Video
        </h2>

        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden 
        shadow-2xl border border-white/20 dark:border-gray-700">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_fiGA_95CnU?autoplay=1&mute=1&loop=1&playlist=_fiGA_95CnU"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}
