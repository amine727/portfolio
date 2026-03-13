"use client";

import { motion } from "framer-motion";
import { Shield, Network, Server, Target, GraduationCap, MapPin } from "lucide-react";

const highlights = [
  {
    Icon: Shield,
    title: "Cybersecurity",
    desc: "OWASP Top 10, penetration testing, security auditing, and vulnerability analysis.",
    color: "#00d4ff",
  },
  {
    Icon: Network,
    title: "Network Infrastructure",
    desc: "VLAN design, routing protocols, VPN configuration, and firewall management.",
    color: "#00ff88",
  },
  {
    Icon: Server,
    title: "Systems Security",
    desc: "Linux/Windows Server administration, hardening, and Unix system management.",
    color: "#7c3aed",
  },
  {
    Icon: Target,
    title: "Security Auditing",
    desc: "API security testing, penetration testing with Burp Suite, and OWASP compliance.",
    color: "#f59e0b",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[#0d1421]/30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

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
            <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">01.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#e2e8f0]">About Me</h2>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Profile badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-[#00ff88]/10 border border-[#00d4ff]/30 flex items-center justify-center">
                  <span className="text-2xl font-black gradient-text">KA</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#00ff88] border-2 border-[#080d14] flex items-center justify-center">
                  <span className="text-[8px] text-[#080d14] font-black">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#e2e8f0]">KABBAJ AMINE</h3>
                <p className="text-sm text-[#64748b] font-mono">Cybersecurity & Network Eng.</p>
              </div>
            </div>

            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                I&apos;m a <span className="text-[#00d4ff] font-semibold">4th year Engineering student</span> at{" "}
                specializing in <span className="text-[#e2e8f0]">Cybersecurity and Network Infrastructure</span>.
                My passion lies in understanding how systems can be compromised and building defenses
                that stand the test of real-world threats.
              </p>
              <p>
                With hands-on experience in <span className="text-[#00d4ff]">network architecture</span>,{" "}
                <span className="text-[#00ff88]">security auditing</span>, and{" "}
                <span className="text-[#7c3aed]">systems administration</span>, I bridge the gap
                between theoretical knowledge and practical security implementation.
              </p>
              <p>
                I&apos;m actively seeking a{" "}
                <span className="text-[#00ff88] font-semibold">final year internship (PFA)</span> where I
                can contribute to real security challenges, deepen my expertise, and grow alongside
                experienced professionals in a dynamic environment.
              </p>
            </div>

            {/* Info pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { Icon: GraduationCap, text: "4th Year Engineering Student" },
                { Icon: MapPin, text: "Morocco" },
                { Icon: Target, text: "Open to PFA Internship" },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d1421] border border-[#1e2d3d] text-[#64748b] text-sm"
                >
                  <Icon size={13} className="text-[#00d4ff]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group card rounded-2xl p-5 transition-all duration-300 border-animated cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h4 className="text-sm font-bold text-[#e2e8f0] mb-2">{title}</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}