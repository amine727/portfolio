"use client";

import { motion } from "framer-motion";
import { Shield, Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/kabbaj-amine", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/kabbaj-amine", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:kabbaj.amine@email.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#1e2d3d]/60">
      <div className="absolute inset-0 bg-[#080d14]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center">
                <Shield size={16} className="text-[#00d4ff]" />
              </div>
              <span className="font-mono font-bold tracking-wider text-[#e2e8f0]">
                KABBAJ<span className="text-[#00d4ff]">.</span>
              </span>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Cybersecurity & Network Engineering student. Building secure systems, one protocol at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono text-[#64748b] uppercase tracking-widest mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-mono text-[#64748b] uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#0d1421] border border-[#1e2d3d] flex items-center justify-center text-[#64748b] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#64748b]">
              <span className="text-[#00ff88] font-semibold">Available</span> for PFA internship 2025
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#1e2d3d]/60 flex flex-col sm:flex-row items-center justify-between gap-4">



          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-[#0d1421] border border-[#1e2d3d] flex items-center justify-center text-[#64748b] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}