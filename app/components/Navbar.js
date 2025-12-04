import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative w-full flex justify-center z-50">
      {/* Ripped Paper Strip */}
     <div
        className="
          w-full max-w-6xl mx-auto px-6 py-4 
          text-gray-900
          shadow-[0_8px_20px_rgba(0,0,0,0.5)]
          flex justify-between items-center
          font-semibold
        "
        style={{
          backgroundImage: "url('/paperstrip.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          /* 🟤 If your image already has ripped edges, keep this OFF.
                If you WANT me to mask your image with ripped edges,
                tell me and I’ll generate the mask. */
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide drop-shadow-sm"
        >
          MyPortfolio
        </Link>

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide text-gray-900 drop-shadow-sm"
        >
          MyPortfolio
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-lg">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </div>
      </div>
    </nav>
  );
}

/* =========================================================
   Sub-component (clean hover effect)
========================================================= */
function NavItem({ href, children }) {
  return (
    <Link
      href={href}
      className="
        relative pb-1 
        hover:text-red-600 transition-colors
      "
    >
      {children}

      {/* underline tear effect */}
      <span className="
        absolute left-0 bottom-0 w-full h-[2px] 
        bg-red-600 scale-x-0 
        origin-left transition-transform duration-300
        hover:scale-x-100
      "></span>
    </Link>
  );
}
