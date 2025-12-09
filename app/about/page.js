import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-screen w-full px-6 pt-32 pb-24 md:px-16">

      {/* Wooden Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg')",
        }}
      />

      {/* Vintage Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-[rgba(0,0,0,0.35)] backdrop-brightness-75" />


      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#fdf6e3] drop-shadow-lg"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Hey, I&#39;m <span className="text-[#f5e6c8]">Daniel</span>
        </h1>

        <p
          className="mt-4 text-xl md:text-2xl text-[#f5e6c8] opacity-95 drop-shadow"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Full-Stack Web Developer • UI Builder • Problem Solver
        </p>

        <p
          className="mt-6 max-w-3xl mx-auto text-lg text-[#4b3a32] leading-relaxed
          bg-[#f7e9d2]/90 p-6 rounded-xl shadow-xl border border-[#d3c0a6] backdrop-blur-sm"
          style={{ fontFamily: "Georgia, serif" }}
        >
          I&#39;m a full-stack web developer with hands-on experience in Python,
          JavaScript, React, and Figma—passionate about using technology to solve
          real-world problems and support communities.
        </p>
      </section>



      {/* MAIN SECTIONS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-24">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* STORY */}
          <div
            className="p-8 rounded-2xl shadow-2xl border border-[#d3c0a6]
            bg-[#fae7c8]/90 backdrop-blur-sm"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <h2 className="text-3xl mb-3 text-[#3b2f2f] font-semibold">My Story</h2>
            <p className="text-[#4b3a32] leading-relaxed">
              I started coding to create solutions that matter — tools that help
              people, improve communities, and make everyday life easier.
            </p>
          </div>

          {/* WHAT I'M DOING NOW */}
          <div
            className="p-8 rounded-2xl shadow-2xl border border-[#d3c0a6]
            bg-[#fae7c8]/90 backdrop-blur-sm"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <h2 className="text-3xl mb-3 text-[#3b2f2f] font-semibold">
              What I&#39;m Doing Now
            </h2>

            <ul className="space-y-3 text-[#4b3a32]">
              <li>⚡ Building responsive React applications</li>
              <li>🎨 Improving UI/UX design with Figma</li>
              <li>📚 Learning backend + APIs</li>
              <li>🧪 Diving into Next.js</li>
            </ul>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* SKILLS */}
          <div
            className="p-8 rounded-2xl shadow-2xl border border-[#d3c0a6]
            bg-[#fae7c8]/90 backdrop-blur-sm"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <h2 className="text-3xl mb-4 text-[#3b2f2f] font-semibold">Skills</h2>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {[
                "Python", "JavaScript", "React", "Next.js", "Tailwind",
                "HTML", "CSS", "Git", "Figma",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-3 bg-[#f5dcb8] border border-[#d3c0a6] rounded-xl shadow
                  text-sm font-medium text-[#3b2f2f]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* STATUS */}
          <div
            className="p-8 rounded-2xl border border-[#bfa98f] bg-[#f0d9b5]/90 shadow-xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <h2 className="text-3xl mb-3 text-[#3b2f2f] font-semibold">Current Status</h2>
            <ul className="space-y-3 text-[#4b3a32]">
              <li>📍 Based in Philadelphia</li>
              <li>🟢 Available for freelance work</li>
              <li>💡 Learning: Next.js & APIs</li>
            </ul>
          </div>

        </div>
      </section>



      {/* TIMELINE */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2
          className="text-4xl font-bold text-center text-[#fdf6e3] drop-shadow-lg mb-8"
          style={{ fontFamily: "Georgia, serif" }}
        >
          My Journey
        </h2>

        <div className="space-y-4">
          {[
            "🚀 2023 — Started learning coding",
            "💻 2024 — Built my first React project",
            "🌐 2025 — Created my online portfolio",
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#fae7c8]/90 border border-[#d3c0a6] shadow-md
              text-[#3b2f2f]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>



      {/* CTA */}
      <div className="text-center">
        <Link
          href="/contact"
          className="px-10 py-4 bg-[#6b4f33] hover:bg-[#5c422b] text-[#fdf6e3]
          rounded-xl text-lg shadow-xl transition-all"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Want to work together? Contact me →
        </Link>
      </div>

    </div>
  );
}
