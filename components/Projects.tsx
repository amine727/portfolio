"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Shield, Building2, Smartphone, Activity, Blocks, ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "football",
    title: "Football Match Prediction",
    description:
      "Machine learning system that predicts football match outcomes using historical data. Implements Random Forest and Logistic Regression models with feature engineering for team performance metrics.",
    icon: Brain,
    accent: "#00d4ff",
    tags: ["Python", "Random Forest", "Logistic Regression", "Machine Learning", "Pandas", "Scikit-learn"],
    highlights: ["85%+ accuracy rate", "Multiple ML algorithms", "Data visualization"],
    category: "Machine Learning",
    github: "#",
    demo: "#",
  },
  {
    id: "clinic",
    title: "Clinic Management App",
    description:
      "Full-featured desktop application for managing clinic operations including patient records, appointments, medical history, and billing — built with a clean JavaFX UI and persistent MySQL database.",
    icon: Heart,
    accent: "#00ff88",
    tags: ["Java", "JavaFX", "Hibernate", "MySQL", "ORM", "MVC"],
    highlights: ["Patient management", "Appointment scheduling", "Medical records"],
    category: "Desktop Application",
    github: "#",
    demo: "#",
  },
  {
    id: "hotel",
    title: "Hotel Reservation System",
    description:
      "Desktop application for managing hotel operations including room reservations, guest check-in/check-out, availability tracking, and billing — built with C# and .NET for a clean and responsive Windows UI.",
    icon: Building2,
    accent: "#f59e0b",
    tags: ["C#", ".NET", "ASP.NET", "SQL Server", "WinForms", "OOP"],
    highlights: ["Room reservation management", "Guest check-in/check-out", "Billing & invoicing"],
    category: "Desktop Application",
    github: "#",
    demo: "#",
  },
  {
    id: "api-audit",
    title: "API Security Audit",
    description:
      "Comprehensive security audit of a web application API following the OWASP Top 10 methodology. Used Burp Suite to identify and document vulnerabilities in OWASP Juice Shop as a realistic target.",
    icon: Shield,
    accent: "#7c3aed",
    tags: ["Burp Suite", "OWASP Top 10", "API Security", "Penetration Testing", "Juice Shop"],
    highlights: ["OWASP methodology", "Vulnerability documentation", "Security report"],
    category: "Security Audit",
    github: "#",
    demo: "#",
  },
  {
    id: "android-mapper",
    title: "Android Attack Surface Mapper",
    description:
      "Android attack surface analysis platform with detection of exported components, sensitive permissions, deep links, and AI-assisted security recommendations for mobile applications.",
    icon: Smartphone,
    accent: "#00d4ff",
    tags: ["React", "JavaScript", "MobSF", "Frida", "Drozer", "Medusa"],
    highlights: ["Exported component detection", "Permission analysis", "AI recommendations"],
    category: "Mobile Security",
    github: "#",
    demo: "#",
  },
  {
    id: "velociraptor",
    title: "Incident Response with Velociraptor",
    description:
      "DFIR platform with attack simulation using Nmap, Hydra, and Metasploit, artifact collection across endpoints, and IoC analysis for rapid incident response and threat hunting.",
    icon: Activity,
    accent: "#00ff88",
    tags: ["Velociraptor", "Kali Linux", "GNS3", "Metasploit", "Hydra", "Nmap"],
    highlights: ["Attack simulation", "Artifact collection", "IoC analysis"],
    category: "DFIR",
    github: "#",
    demo: "#",
  },
  {
    id: "accichain",
    title: "AcciChain",
    description:
      "Blockchain application for secure management of automobile accident records using Smart Contracts on Ethereum, IPFS for decentralized storage, and MetaMask for authentication.",
    icon: Blocks,
    accent: "#7c3aed",
    tags: ["Solidity", "Ethereum", "IPFS", "React Native", "MetaMask"],
    highlights: ["Smart contract automation", "Decentralized storage", "MetaMask auth"],
    category: "Blockchain",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1421]/20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/20 to-transparent" />

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
            <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">03.</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#e2e8f0]">Projects</h2>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent" />
          <p className="text-[#64748b] mt-4 max-w-xl">
            A selection of academic and personal projects demonstrating applied skills in security, development, and data science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group card rounded-2xl p-6 flex flex-col transition-all duration-300 cursor-pointer border-animated relative"
              style={{ "--hover-accent": project.accent } as React.CSSProperties}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}
                >
                  <project.icon size={22} style={{ color: project.accent }} />
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    href={project.github}
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#1e2d3d] flex items-center justify-center text-[#64748b] hover:text-[#e2e8f0] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={14} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target={project.demo !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#1e2d3d] flex items-center justify-center text-[#64748b] hover:text-[#e2e8f0] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>

              {/* Category badge */}
              <div className="mb-3">
                <span
                  className="text-xs font-mono px-2 py-1 rounded-md"
                  style={{ color: project.accent, background: `${project.accent}15`, border: `1px solid ${project.accent}25` }}
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#e2e8f0] mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#64748b] leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-5 space-y-1.5">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-[#64748b]">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                    {h}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1e2d3d]">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-[#1e2d3d] text-[#64748b] font-mono"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-xs px-2 py-0.5 rounded-md bg-[#1e2d3d] text-[#64748b] font-mono">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              {/* Arrow indicator */}
              <div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
                style={{ color: project.accent }}
              >
                <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
