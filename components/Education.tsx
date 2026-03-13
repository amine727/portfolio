"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Engineering Degree",
    field: "Cybersecurity & Network Infrastructure",
    school: "Ecole Marocaine des Sciences de l'Ingénieur (EMSI)",
    location: "Morocco",
    period: "2025 – 2026",
    status: "In Progress",
    year: "In Progress",
    accent: "#00d4ff",
    modules: [
      "Cybersecurity",
      "Network Infrastructure",
      "Systems Security",
      "Firewall & VPN",
      "Cryptography",
      "Penetration Testing",
    ],
    description:
      "Engineering program focused on cybersecurity and network infrastructure, with strong hands-on coverage of systems security, network defense, and ethical hacking.",
  },
  {
    degree: "Bachelor's Degree",
    field: "Cybersecurity",
    school: "Faculty of Sciences and Technology",
    location: "Morocco",
    period: "2024 – 2025",
    status: "Completed",
    year: "Graduated",
    accent: "#00ff88",
    modules: [
      "Information Security",
      "Networks & Protocols",
      "Cryptography",
      "Systems Administration",
    ],
    description:
      "Specialized bachelor's degree in cybersecurity covering network security, cryptography, and systems administration.",
  },
  {
    degree: "DEUST",
    field: "Mathematics, Computer Science, Physics & Chemistry",
    school: "Faculty of Sciences and Technology",
    location: "Morocco",
    period: "2021 – 2024",
    status: "Completed",
    year: "Graduated",
    accent: "#7c3aed",
    modules: [
      "Mathematics",
      "Computer Science",
      "Physics",
      "Chemistry",
      "Algorithms",
    ],
    description:
      "Multidisciplinary university diploma in science and technology, providing a solid foundation in core sciences and computer science.",
  },
  {
    degree: "High School Diploma (Baccalaureate)",
    field: "Physical Sciences",
    school: "Lycée Abu El Abass Essebti",
    location: "Morocco",
    period: "2020 – 2021",
    status: "Completed",
    year: "Graduated",
    accent: "#f59e0b",
    modules: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
    ],
    description:
      "Baccalaureate in Physical Sciences with a strong aptitude in mathematics and sciences, forming the foundation for higher education.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1421]/30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

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
            <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">05.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#e2e8f0]">Education</h2>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent" />
          <p className="text-[#64748b] mt-4 max-w-xl">
            Academic background in engineering with specialization in cybersecurity and networking.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/40 via-[#00ff88]/40 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-4 flex items-center justify-center">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center z-10 relative"
                    style={{ background: `${edu.accent}15`, border: `2px solid ${edu.accent}40` }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <GraduationCap size={20} style={{ color: edu.accent }} />
                    {/* Glow */}
                    <div
                      className="absolute inset-0 rounded-xl blur-md opacity-30"
                      style={{ background: edu.accent }}
                    />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="card rounded-2xl p-6 border-animated group hover:border-[#1e2d3d] transition-all">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded-md"
                          style={{ color: edu.accent, background: `${edu.accent}15` }}
                        >
                          {edu.year}
                        </span>
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded-md ${
                            edu.status === "In Progress"
                              ? "text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/20"
                              : "text-[#64748b] bg-[#1e2d3d]"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-[#e2e8f0]">{edu.degree}</h3>
                      <p style={{ color: edu.accent }} className="font-semibold text-sm">{edu.field}</p>
                    </div>
                  </div>

                  {/* School info */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-[#64748b] text-sm">
                      <BookOpen size={13} className="text-[#64748b]" />
                      {edu.school}
                    </div>
                    <div className="flex items-center gap-2 text-[#64748b] text-sm">
                      <MapPin size={13} className="text-[#64748b]" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2 text-[#64748b] text-sm">
                      <Calendar size={13} className="text-[#64748b]" />
                      {edu.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#64748b] leading-relaxed mb-5">{edu.description}</p>

                  {/* Modules */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={13} style={{ color: edu.accent }} />
                      <span className="text-xs font-mono text-[#64748b] uppercase tracking-wider">Key Modules</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.modules.map((mod) => (
                        <span
                          key={mod}
                          className="text-xs px-2.5 py-1 rounded-lg bg-[#1e2d3d] text-[#64748b] hover:text-[#e2e8f0] transition-colors cursor-default"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}