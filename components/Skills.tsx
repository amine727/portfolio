"use client";

import { motion } from "framer-motion";
import {
  Shield, Network, Wrench, Code2,
  Lock, Key, Globe, Search,
  Layers, Router, Server, Wifi,
  Terminal, Bug, Cpu, Eye,
  Braces, Coffee, FileCode, Hash, Layout, Database,
} from "lucide-react";

const skillCategories = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    Icon: Shield,
    accent: "#00d4ff",
    skills: [
      { name: "OWASP Top 10", Icon: Globe, level: 85 },
      { name: "Cryptography", Icon: Key, level: 80 },
      { name: "API Security", Icon: Lock, level: 88 },
      { name: "Security Auditing", Icon: Search, level: 82 },
    ],
  },
  {
    id: "networks",
    label: "Networks & Systems",
    Icon: Network,
    accent: "#00ff88",
    skills: [
      { name: "VLAN", Icon: Layers, level: 85 },
      { name: "Routing Protocols", Icon: Router, level: 80 },
      { name: "FortiGate Firewall", Icon: Shield, level: 78 },
      { name: "VPN SSL/Site-to-Site", Icon: Wifi, level: 82 },
      { name: "Linux / Windows Server", Icon: Server, level: 88 },
      { name: "Unix Administration", Icon: Terminal, level: 80 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    Icon: Wrench,
    accent: "#7c3aed",
    skills: [
      { name: "Burp Suite", Icon: Bug, level: 85 },
      { name: "Postman", Icon: Globe, level: 90 },
      { name: "Cisco Packet Tracer", Icon: Cpu, level: 87 },
      { name: "GNS3", Icon: Network, level: 80 },
      { name: "Docker", Icon: Layers, level: 75 },
      { name: "Wireshark", Icon: Eye, level: 83 },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    Icon: Code2,
    accent: "#f59e0b",
    skills: [
      { name: "Python", Icon: Braces, level: 88 },
      { name: "Java", Icon: Coffee, level: 82 },
      { name: "JavaScript", Icon: FileCode, level: 78 },
      { name: "C", Icon: Hash, level: 75 },
      { name: "HTML / CSS", Icon: Layout, level: 85 },
      { name: "PHP", Icon: Database, level: 70 },
    ],
  },
];

function SkillBar({ name, level, accent, Icon, index }: {
  name: string;
  level: number;
  accent: string;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
          >
            <Icon size={12} style={{ color: accent }} />
          </div>
          <span className="text-sm text-[#94a3b8] group-hover:text-[#e2e8f0] transition-colors">{name}</span>
        </div>
        <span className="text-xs font-mono text-[#64748b]">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#1e2d3d] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}, ${accent}99)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.06, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080d14] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent" />

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
            <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">02.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#e2e8f0]">Skills</h2>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent" />
          <p className="text-[#64748b] mt-4 max-w-xl">
            A comprehensive toolkit built through academic coursework, hands-on labs, and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="card rounded-2xl p-6 hover:border-[#1e2d3d] transition-all duration-300 border-animated"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cat.accent}15`, border: `1px solid ${cat.accent}30` }}
                >
                  <cat.Icon size={18} style={{ color: cat.accent }} />
                </div>
                <div>
                  <h3 className="font-bold text-[#e2e8f0] text-sm">{cat.label}</h3>
                  <p className="text-xs text-[#64748b] font-mono">{cat.skills.length} skills</p>
                </div>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    accent={cat.accent}
                    Icon={skill.Icon}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}