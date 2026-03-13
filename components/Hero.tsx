"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Terminal, Wifi, Lock, Code2 } from "lucide-react";

const roles = [
  "Cybersecurity Student",
  "Network Engineer",
  "Security Researcher",
  "Ethical Hacker",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const full = texts[current];
      if (!deleting) {
        if (displayed.length < full.length) {
          setDisplayed(full.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setDeleting(false);
          setCurrent((c) => (c + 1) % texts.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, current, texts]);

  return (
    <span>
      {displayed}
      <span className="cursor-blink text-[#00d4ff]">|</span>
    </span>
  );
}

const floatingIcons = [
  { Icon: Terminal, x: "10%", y: "20%", delay: 0, size: 20 },
  { Icon: Wifi, x: "85%", y: "15%", delay: 0.5, size: 18 },
  { Icon: Lock, x: "80%", y: "75%", delay: 1, size: 22 },
  { Icon: Code2, x: "15%", y: "80%", delay: 1.5, size: 19 },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 70%)"
      }} />

      {/* Floating background icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10 text-[#00d4ff] pointer-events-none"
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Animated rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[300, 500, 700].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#00d4ff]/5"
            style={{
              width: size,
              height: size,
              left: -size / 2,
              top: -size / 2,
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e2d3d] bg-[#0d1421]/80 text-[#64748b] text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-mono text-xs tracking-wider">AVAILABLE FOR INTERNSHIP 2025</span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-none">
            <span className="text-[#e2e8f0]">KABBAJ </span>
            <span className="gradient-text">AMINE</span>
          </h1>
        </motion.div>

        {/* Title / Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl font-mono text-[#64748b] mb-6 h-8"
        >
          <TypewriterText texts={roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#64748b] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          4th year Engineering student specializing in{" "}
          <span className="text-[#00d4ff]">Cybersecurity</span> and{" "}
          <span className="text-[#00ff88]">Network Infrastructure</span>. Passionate about
          securing systems, analyzing vulnerabilities, and building resilient networks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => handleScroll("projects")}
            className="group relative px-8 py-3.5 rounded-xl font-semibold text-sm overflow-hidden bg-[#00d4ff] text-[#080d14] hover:shadow-lg transition-all"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </motion.button>

          <motion.button
            onClick={() => handleScroll("contact")}
            className="px-8 py-3.5 rounded-xl font-semibold text-sm border border-[#1e2d3d] text-[#e2e8f0] hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all bg-[#0d1421]/50"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "4th", label: "Year Student" },
            { value: "3+", label: "Projects Built" },
            { value: "OWASP", label: "Security Standard" },
            { value: "PFA", label: "Seeking Internship" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black gradient-text">{value}</div>
              <div className="text-xs text-[#64748b] mt-1 font-mono uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#64748b] hover:text-[#00d4ff] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}