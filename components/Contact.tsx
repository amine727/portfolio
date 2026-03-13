"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const contactLinks = [
  {
    Icon: Mail,
    label: "Email",
    value: "kabbajamine15@gmail.com",
    href: "mailto:kabbajamine15@gmail.com",
    accent: "#00d4ff",
    desc: "Best for formal inquiries",
  },
  {
    Icon: Phone,
    label: "Téléphone",
    value: "+212 687856532",
    href: "tel:+212687856532",
    accent: "#00ff88",
    desc: "Disponible par téléphone",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/amine-kabbaj-329848339",
    href: "https://www.linkedin.com/in/amine-kabbaj-329848339/",
    accent: "#0a66c2",
    desc: "Professional network",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/amine727",
    href: "https://github.com/amine727",
    accent: "#e2e8f0",
    desc: "View my code & projects",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080d14] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">06.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#e2e8f0]">Contact</h2>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent" />
          <p className="text-[#64748b] mt-4 max-w-xl">
            Looking for a PFA internship opportunity. Feel free to reach out — I&apos;d love to connect and discuss how I can contribute to your team.
          </p>
        </motion.div>

        {/* Availability card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card rounded-2xl p-5 mb-8 flex items-center justify-between flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-sm font-semibold text-[#00ff88]">Open to Opportunities</span>
            <span className="text-xs text-[#64748b]">
              Seeking a <span className="text-[#e2e8f0]">final year internship (PFA)</span> in cybersecurity or network engineering.
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#64748b]">
            <MapPin size={11} />
            Morocco — Remote or On-site
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map(({ Icon, label, value, href, accent, desc }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group card rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: accent }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
              >
                <Icon size={20} style={{ color: accent }} />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <p className="text-xs text-[#64748b] mb-0.5">{desc}</p>
                <p className="text-sm font-bold text-[#e2e8f0] group-hover:text-white transition-colors">{label}</p>
                <p className="text-xs font-mono truncate mt-0.5" style={{ color: accent }}>{value}</p>
              </div>

              {/* Bottom bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}