"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-green-400 font-mono">

      {/* MATRIX BACKGROUND (Tailwind only – working) */}
      <div
        className="
          absolute inset-0 -z-10 
          bg-[url('https://i.imgur.com/7U8Ew3S.png')] 
          bg-cover bg-center 
          brightness-75
        "
          ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto py-24 px-6">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-green-300 mb-12 drop-shadow-[0_0_15px_#00ff99]"
        >
          Contact Me
        </motion.h1>

        <div className="space-y-10 text-lg">

          {/* EMAILS */}
          <ContactItem label="Email (Personal)" value="Dannyjohnson@gmail.com" />
          <ContactItem label="Email (Launchpad)" value="Djohn0082@launchpadphilly.org" />

          {/* LINKS */}
          <ContactLink label="LinkedIn" href="https://www.linkedin.com/in/daniel-johnson-b34911269/" />
          <ContactLink label="GitHub" href="https://github.com/danbanned" />
          <ContactLink label="Instagram" href="https://www.instagram.com/d4nn3yfevl0n3/" />
          <ContactLink label="Slack" href="https://launchpadphilly.slack.com/team/U0951BX8YQM" />
          <ContactLink label="Eventbrite" href="https://www.eventbrite.com/" />

        </div>
      </div>
    </div>
  );
}

/* =========================================================
    SUB-COMPONENTS
========================================================= */

function ContactItem({ label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-green-900/20 border border-green-400/40 p-4 rounded-xl shadow-lg"
    >
      <p className="text-green-300 text-sm">{label}</p>
      <p className="text-green-200 text-xl font-bold drop-shadow-[0_0_5px_#00ff66]">{value}</p>
    </motion.div>
  );
}

function ContactLink({ label, href }) {
  const open = (e) => {
    e.preventDefault();
    if (!href) return;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      onClick={open}
      whileHover={{ scale: 1.03, x: 5 }}
      className="block relative z-30 text-left bg-green-900/20 border border-green-400/40 p-4 rounded-xl shadow-lg hover:bg-green-900/40 transition-all"
      style={{ cursor: "pointer" }}
      aria-label={label}
    >
      <p className="text-green-300 text-sm">{label}</p>
      <p className="text-green-100 text-xl font-bold drop-shadow-[0_0_5px_#00ff66] truncate max-w-full">
        {href}
      </p>
    </motion.button>
  );
}
