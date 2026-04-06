"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, FolderOpen, Folder, ArrowUpRight, Layers } from "lucide-react"

// ─── Project data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured shopping platform with real-time inventory management, payment integration, and a fully responsive layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://mens-hub.vercel.app/",
    github: null,
    accent: "#6366f1", // indigo
  },
  {
    title: "Games Hub",
    description:
      "Browser games collection where you play against the computer — built with vanilla JS and HTML5 Canvas.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://varunnayu.github.io/games/",
    github: null,
    accent: "#8b5cf6", // violet
  },
  {
    title: "Real-Time Budget Tracker",
    description:
      "Live data visualization with customizable widgets, real-time updates, and comprehensive Chart.js reporting.",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
    demo: "https://varunnayu.github.io/budget/",
    github: null,
    accent: "#06b6d4", // cyan
  },
  {
    title: "Digital Slam Book",
    description:
      "Create and share personalized slam books online — collect responses from friends with animated React UI.",
    tags: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    demo: "https://varunnayu.github.io/sa/",
    github: null,
    accent: "#f59e0b", // amber
  },
  {
    title: "Personal Vault",
    description:
      "Secure password manager with AES encryption, biometric-style auth, and an intuitive zero-knowledge dashboard.",
    tags: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
    demo: "https://classy-phi.vercel.app/login.html",
    github: null,
    accent: "#10b981", // emerald
  },
  {
    title: "Blockchain Certificate Verifier",
    description:
      "Issue and verify academic certificates on Ethereum — tamper-proof, instant, and trustless authenticity.",
    tags: ["Solidity", "Ethereum", "Blockchain", "React"],
    demo: "https://certify-chain-jet.vercel.app/",
    github: null,
    accent: "#f97316", // orange
  },
]

// ─── Folder SVG icon ──────────────────────────────────────────────────────────
function FolderIcon({ color, open }: { color: string; open: boolean }) {
  return (
    <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Folder tab */}
      <path
        d="M0 5C0 3.34315 1.34315 2 3 2H14.5L17.5 6H37C38.6569 6 40 7.34315 40 9V31C40 32.6569 38.6569 34 37 34H3C1.34315 34 0 32.6569 0 31V5Z"
        fill={color}
        fillOpacity={open ? 0.22 : 0.12}
      />
      <path
        d="M0 9C0 7.34315 1.34315 6 3 6H37C38.6569 6 40 7.34315 40 9V31C40 32.6569 38.6569 34 37 34H3C1.34315 34 0 32.6569 0 31V9Z"
        fill={color}
        fillOpacity={open ? 0.18 : 0.09}
      />
      {/* Subtle lines inside folder */}
      {open && (
        <>
          <line x1="8" y1="16" x2="28" y2="16" stroke={color} strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="21" x2="22" y2="21" stroke={color} strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="26" x2="25" y2="26" stroke={color} strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
      {/* Border */}
      <path
        d="M3 6H14.5L17.5 2H3C1.34315 2 0 3.34315 0 5V6Z"
        fill={color}
        fillOpacity={open ? 0.5 : 0.3}
      />
      <rect x="0.5" y="6.5" width="39" height="27" rx="2.5" stroke={color} strokeOpacity={open ? 0.5 : 0.25} />
    </svg>
  )
}

// ─── Single folder card ───────────────────────────────────────────────────────
function FolderCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [open, setOpen] = useState(false)
  const num = String(index + 1).padStart(2, "0")

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col rounded-xl overflow-hidden cursor-default h-full"
      style={{
        background: "linear-gradient(160deg, rgba(13,10,30,0.97), rgba(16,12,36,0.97))",
        border: `1px solid ${open ? project.accent + "35" : "rgba(255,255,255,0.06)"}`,
        boxShadow: open
          ? `0 0 0 1px ${project.accent}25, 0 20px 60px rgba(0,0,0,0.4)`
          : "0 8px 32px rgba(0,0,0,0.3)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          opacity: open ? 1 : 0,
        }}
      />

      {/* Subtle glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top left, ${project.accent}10 0%, transparent 60%)`,
          opacity: open ? 1 : 0,
        }}
      />

      {/* Card body */}
      <div className="relative flex flex-col h-full p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          {/* Folder icon */}
          <div className="transition-transform duration-300" style={{ transform: open ? "scale(1.05)" : "scale(1)" }}>
            <FolderIcon color={project.accent} open={open} />
          </div>

          {/* Index + links */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-white/18 tracking-widest">
              {num}
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Source code"
                className="flex items-center justify-center w-7 h-7 rounded-lg border border-white/[0.07] text-white/25 hover:text-white/60 hover:border-white/15 transition-all"
                style={{ background: "rgba(255,255,255,0.02)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={13} />
              </a>
            )}
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="flex items-center justify-center w-7 h-7 rounded-lg border transition-all"
              style={{
                background: open ? `${project.accent}18` : "rgba(255,255,255,0.02)",
                borderColor: open ? `${project.accent}40` : "rgba(255,255,255,0.07)",
                color: open ? project.accent : "rgba(255,255,255,0.25)",
                transition: "all 0.3s ease",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-base font-bold mb-2.5 leading-snug transition-colors duration-300"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: open ? "#fff" : "rgba(255,255,255,0.85)",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-white/38 leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Footer: tags + demo link */}
        <div className="flex flex-col gap-3 mt-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] font-mono transition-colors duration-300"
                style={{
                  background: open ? `${project.accent}10` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${open ? project.accent + "30" : "rgba(255,255,255,0.07)"}`,
                  color: open ? project.accent + "cc" : "rgba(255,255,255,0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Demo button — slides up on hover */}
          <div
            className="overflow-hidden transition-all duration-300 ease-out"
            style={{ maxHeight: open ? "48px" : "0px", opacity: open ? 1 : 0 }}
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-transform hover:scale-105 active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent}99)`,
                boxShadow: `0 4px 16px ${project.accent}30`,
              }}
            >
              <ExternalLink size={12} />
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
    >
      <div>
        {/* Label */}
        <div className="flex items-center gap-2.5 mb-5">
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 text-xs font-mono font-semibold text-indigo-300 tracking-widest uppercase"
            style={{ background: "rgba(99,102,241,0.07)" }}
          >
            <FolderOpen className="w-3.5 h-3.5" />
            Projects
          </div>
        </div>

        <h2
          className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Things I've{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #818cf8, #a78bfa 50%, #c4b5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Built
          </span>
        </h2>
      </div>

      {/* Right side — mono subtitle */}
      <div className="sm:text-right">
        <p className="text-sm text-white/30 font-mono leading-relaxed max-w-[260px]">
          {projects.length} projects //<br />
          <span className="text-indigo-400/60">hover to open</span>
        </p>
      </div>
    </motion.div>
  )
}

// ─── Terminal-style section divider ──────────────────────────────────────────
function TerminalBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex items-center gap-3 mb-8 font-mono text-[11px] text-white/20"
    >
      <span className="text-indigo-400/50">~/</span>
      <span>projects</span>
      <span className="text-white/10">|</span>
      <span>ls -la</span>
      <div className="flex-1 h-px bg-white/[0.04]" />
      <span>{projects.length} items</span>
    </motion.div>
  )
}

// ─── Main exported section ────────────────────────────────────────────────────
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ fontFamily: "'Inter', 'Geist', sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "#03030d" }} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse at center, #4f46e5, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Top divider */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(99,102,241,0.2) 30%, rgba(139,92,246,0.3) 50%, rgba(99,102,241,0.2) 70%, transparent)",
          }}
        />
      </div>

      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader />
        <TerminalBar />

        {/* Folder grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <FolderCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/varunnayu"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white/45 border border-white/[0.07] transition-all hover:border-indigo-500/35 hover:text-indigo-300"
            style={{ background: "rgba(255,255,255,0.018)" }}
          >
            <Github className="w-4 h-4" />
            <span className="font-mono">github.com/varunnayu</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>


    </section>
  )
}
