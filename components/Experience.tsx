"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Shield, Network, Server, CheckCircle } from "lucide-react";

const responsibilities = [
  {
    icon: Network,
    title: "Network Architecture",
    desc: "Designed a segmented network topology using VLANs and inter-VLAN routing.",
  },
  {
    icon: Shield,
    title: "Perimeter Security",
    desc: "Configured a FortiGate firewall with filtering policies and traffic control rules.",
  },
  {
    icon: Server,
    title: "VPN Implementation",
    desc: "Set up a secure site-to-site VPN between two networks.",
  },
  {
    icon: CheckCircle,
    title: "Testing & Validation",
    desc: "Performed connectivity and security tests: ping tests, inter-VLAN communication, VPN verification.",
  },
];

const technologies = ["FortiGate", "VLAN", "VPN", "VMware", "Network Security"];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1421]/30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent" />

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
            <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">03.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#e2e8f0]">Experience</h2>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent" />
          <p className="text-[#64748b] mt-4 max-w-xl">
            Hands-on professional experience in cybersecurity and network infrastructure.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88]/40 via-[#00d4ff]/40 to-transparent" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-4 flex items-center justify-center">
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center z-10 relative"
                style={{ background: "#00ff8815", border: "2px solid #00ff8840" }}
                whileHover={{ scale: 1.1 }}
              >
                <Briefcase size={20} style={{ color: "#00ff88" }} />
                <div className="absolute inset-0 rounded-xl blur-md opacity-30" style={{ background: "#00ff88" }} />
              </motion.div>
            </div>

            {/* Card */}
            <div className="card rounded-2xl p-6 border-animated group">
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md text-[#00ff88] bg-[#00ff88]/10">
                      2025
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/20">
                      Completed
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#e2e8f0]">Final Year Internship</h3>
                  <p className="text-[#00ff88] font-semibold text-sm mt-0.5">Cybersecurity & Networks</p>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 mb-5">
                <div className="flex items-center gap-2 text-[#64748b] text-sm">
                  <Briefcase size={13} />
                  SRM-MS
                </div>
                <div className="flex items-center gap-2 text-[#64748b] text-sm">
                  <MapPin size={13} />
                  Marrakech, Maroc
                </div>
                <div className="flex items-center gap-2 text-[#64748b] text-sm">
                  <Calendar size={13} />
                  2 mois — 2025
                </div>
              </div>

              {/* Project */}
              <div className="mb-5 p-4 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/15">
                <p className="text-xs font-mono text-[#00d4ff] uppercase tracking-wider mb-1">Project</p>
                <p className="text-sm text-[#e2e8f0] font-medium">
                  Design and simulation of a secure network infrastructure.
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mb-5">
                <p className="text-xs font-mono text-[#64748b] uppercase tracking-wider mb-3">
                  Responsibilities & Achievements
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {responsibilities.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-3 p-3 rounded-xl bg-[#1e2d3d]/40 border border-[#1e2d3d]"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#00ff88]/10 border border-[#00ff88]/20">
                        <item.icon size={14} className="text-[#00ff88]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#e2e8f0] mb-0.5">{item.title}</p>
                        <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Environment */}
              <div className="mb-5 text-sm text-[#64748b]">
                <span className="text-[#64748b] font-mono text-xs uppercase tracking-wider">Environment: </span>
                <span className="text-[#e2e8f0]">VMware</span> for network simulation.
              </div>

              {/* Technologies */}
              <div>
                <p className="text-xs font-mono text-[#64748b] uppercase tracking-wider mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-lg font-mono"
                      style={{ color: "#00ff88", background: "#00ff8815", border: "1px solid #00ff8830" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="h-0.5 rounded-full mt-5 opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: "linear-gradient(90deg, #00ff88, transparent)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}