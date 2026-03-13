"use client";

import { motion } from "framer-motion";
import { Award, Shield, Network, BookOpen, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Cybersecurity Essentials",
    org: "Cisco NetAcad",
    year: "2024",
    Icon: Shield,
    accent: "#00d4ff",
    category: "Cybersecurity",
    desc: "Fundamentals of cybersecurity including network defense, threat analysis, and incident response.",
  },
  {
    title: "Introduction to Networks (ITN)",
    org: "Cisco NetAcad",
    year: "2024",
    Icon: Network,
    accent: "#00ff88",
    category: "Networking",
    desc: "Network fundamentals, IP addressing, routing & switching basics using Cisco technologies.",
  },
  {
    title: "Network Support and Security",
    org: "Cisco NetAcad",
    year: "2025",
    Icon: Shield,
    accent: "#7c3aed",
    category: "Networking",
    desc: "Network support techniques, troubleshooting, and security best practices for enterprise environments.",
  },
  {
    title: "Python Essentials 1",
    org: "Cisco NetAcad",
    year: "2025",
    Icon: BookOpen,
    accent: "#f59e0b",
    category: "Programming",
    desc: "Python programming fundamentals, data types, control flow, functions, and basic scripting.",
  },
  {
    title: "Introduction to Cloud Computing",
    org: "Coursera",
    year: "2025",
    Icon: Network,
    accent: "#00d4ff",
    category: "Cloud",
    desc: "Core cloud computing concepts, service models (IaaS, PaaS, SaaS), and deployment strategies.",
  },
  {
    title: "Introduction to Machine Learning",
    org: "Coursera",
    year: "2025",
    Icon: Award,
    accent: "#00ff88",
    category: "AI / ML",
    desc: "Supervised and unsupervised learning, model evaluation, and practical ML workflows.",
  },
  {
    title: "Introduction to NoSQL Databases",
    org: "Coursera",
    year: "2025",
    Icon: BookOpen,
    accent: "#7c3aed",
    category: "Databases",
    desc: "NoSQL data models, document stores, key-value, columnar, and graph databases.",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080d14] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">04.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#e2e8f0]">Certificates</h2>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent" />
          <p className="text-[#64748b] mt-4 max-w-xl">
            Professional certifications and training programs completed to validate and expand expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group card rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 border-animated relative overflow-hidden"
            >
              {/* Glowing corner */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: cert.accent }}
              />

              {/* Header */}
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cert.accent}15`, border: `1px solid ${cert.accent}30` }}
                >
                  <cert.Icon size={20} style={{ color: cert.accent }} />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-md"
                    style={{ color: cert.accent, background: `${cert.accent}15` }}
                  >
                    {cert.year}
                  </span>
                  <button className="w-7 h-7 rounded-lg bg-[#1e2d3d] flex items-center justify-center text-[#64748b] hover:text-[#e2e8f0] opacity-0 group-hover:opacity-100 transition-all">
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="mb-1">
                  <span
                    className="text-xs font-mono"
                    style={{ color: cert.accent }}
                  >
                    {cert.category}
                  </span>
                </div>
                <h3 className="font-bold text-[#e2e8f0] text-sm mb-1 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#64748b] mb-3">{cert.org}</p>
                <p className="text-xs text-[#64748b] leading-relaxed">{cert.desc}</p>
              </div>

              {/* Bottom bar */}
              <div
                className="h-0.5 rounded-full mt-auto opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}