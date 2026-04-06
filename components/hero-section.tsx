"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Terminal, Code2, Layers, Zap, ArrowRight, ExternalLink } from "lucide-react"

// ─── Static aurora background (pure CSS — zero JS overhead) ──────────────────
function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0 bg-[#03030d]" />

      {/* Aurora orbs — CSS animations only */}
      <div className="aurora-orb-1 absolute -top-40 -left-32 w-[min(700px,90vw)] h-[min(700px,90vw)] rounded-full opacity-[0.18]"
        style={{ background: "radial-gradient(ellipse at center, #4f46e5 0%, #7c3aed 40%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="aurora-orb-2 absolute top-1/2 -right-32 w-[min(600px,80vw)] h-[min(600px,80vw)] rounded-full opacity-[0.13]"
        style={{ background: "radial-gradient(ellipse at center, #7c3aed 0%, #4f46e5 40%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="aurora-orb-3 absolute -bottom-20 left-1/3 w-[min(500px,70vw)] h-[min(500px,70vw)] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(ellipse at center, #6d28d9 0%, #4338ca 40%, transparent 70%)", filter: "blur(60px)" }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />

      {/* Scan line */}
      <div className="scan-line absolute left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.35) 30%, rgba(139,92,246,0.5) 50%, rgba(99,102,241,0.35) 70%, transparent 100%)" }} />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-indigo-500/70 to-transparent" />
      <div className="absolute top-0 left-0 h-px w-32 bg-gradient-to-r from-indigo-500/70 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-violet-500/70 to-transparent" />
      <div className="absolute top-0 right-0 h-px w-32 bg-gradient-to-l from-violet-500/70 to-transparent" />
      <div className="absolute bottom-0 right-0 w-px h-24 bg-gradient-to-t from-violet-500/50 to-transparent" />
      <div className="absolute bottom-0 right-0 h-px w-24 bg-gradient-to-l from-violet-500/50 to-transparent" />
    </div>
  )
}

// ─── Terminal window ──────────────────────────────────────────────────────────
const terminalLines = [
  { delay: 0.8, color: "#6d9eeb", text: "const developer = {" },
  { delay: 1.1, color: "#a8d1a3", text: '  name: "Varun K T",' },
  { delay: 1.4, color: "#a8d1a3", text: '  role: "Full-Stack Dev",' },
  { delay: 1.7, color: "#a8d1a3", text: '  stack: ["React", "Next.js",' },
  { delay: 2.0, color: "#a8d1a3", text: '          "Node", "Data Science"],' },
  { delay: 2.3, color: "#f6c177", text: "  passion: () => buildGreat()," },
  { delay: 2.6, color: "#c4a4fc", text: "}" },
  { delay: 2.9, color: "#6fced8", text: "" },
  { delay: 3.2, color: "#6fced8", text: "developer.build() // ✨" },
]

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [cursorOn, setCursorOn] = useState(true)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    terminalLines.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), line.delay * 1000))
    })
    const blink = setInterval(() => setCursorOn(v => !v), 530)
    return () => { timers.forEach(clearTimeout); clearInterval(blink) }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      {/* Glow */}
      <div
        className="absolute -inset-3 rounded-3xl opacity-30 blur-2xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(139,92,246,0.35))" }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10"
        style={{
          background: "linear-gradient(160deg, rgba(15,12,35,0.97) 0%, rgba(20,16,45,0.97) 100%)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[11px] text-white/30 font-mono">portfolio.ts — varun</span>
          </div>
          <Terminal className="w-3 h-3 text-white/20" />
        </div>

        {/* Code */}
        <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-[1.9] min-h-[220px] sm:min-h-[255px]">
          {terminalLines.map((line, i) =>
            visibleLines > i ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3"
              >
                <span className="text-white/15 select-none w-4 shrink-0 text-[10px] mt-[3px] text-right">{i + 1}</span>
                <span style={{ color: line.color }}>{line.text}</span>
              </motion.div>
            ) : null
          )}
          {visibleLines >= terminalLines.length && (
            <div className="flex items-center gap-3">
              <span className="text-white/15 select-none w-4 shrink-0 text-[10px]">{terminalLines.length + 1}</span>
              <span
                className="inline-block w-[2px] h-[14px] bg-indigo-400 rounded-sm"
                style={{ opacity: cursorOn ? 1 : 0 }}
              />
            </div>
          )}
        </div>

        {/* Status bar */}
        <div className="flex items-center gap-3 px-4 py-2 border-t border-white/[0.06]" style={{ background: "rgba(99,102,241,0.07)" }}>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-white/30 font-mono tracking-wider">READY</span>
          </span>
          <span className="text-[10px] text-white/20 font-mono ml-auto">TypeScript · UTF-8</span>
        </div>
      </div>

      {/* Floating label chips — tucked inside so they don't bleed on mobile */}
      <motion.div
        className="absolute top-3 -right-3 sm:-right-5 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-indigo-500/30 text-[11px] font-mono font-semibold text-indigo-300"
        style={{ background: "rgba(8,6,28,0.97)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.35 }}
      >
        <Code2 className="w-3 h-3" />
        TypeScript
      </motion.div>

      <motion.div
        className="absolute bottom-3 -left-3 sm:-left-5 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-violet-500/30 text-[11px] font-mono font-semibold text-violet-300"
        style={{ background: "rgba(8,6,28,0.97)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.35 }}
      >
        <Layers className="w-3 h-3" />
        Full-Stack
      </motion.div>
    </motion.div>
  )
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, color, label, value, delay }: {
  icon: React.ElementType; color: string; label: string; value: string; delay: number
}) {
  return (
    <motion.div
      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.07]"
      style={{ background: "rgba(8,6,28,0.95)", boxShadow: "0 12px 40px rgba(0,0,0,0.35)" }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0" style={{ background: color }}>
        <Icon className="w-4 h-4" style={{ color: color.includes("indigo") ? "#818cf8" : "#a78bfa" }} />
      </div>
      <div>
        <div className="text-[10px] text-white/30 font-mono leading-none mb-0.5">{label}</div>
        <div className="text-base font-black text-white leading-none">{value}</div>
      </div>
    </motion.div>
  )
}

// ─── Tech stack pills ─────────────────────────────────────────────────────────
const techStack = ["React", "Next.js", "Node.js", "TypeScript", "Tailwind", "MongoDB"]

// ─── Stagger variants (no blur — blur filter triggers repaints on every frame) ─
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// ─── Main HeroSection ─────────────────────────────────────────────────────────
export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  // Only apply parallax opacity — skip y-translate to reduce paint cost on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ fontFamily: "'Inter', 'Geist', sans-serif" }}
    >
      <AuroraBackground />

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-24 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Status badge */}
            <motion.div variants={item} className="mb-7 inline-flex">
              <div
                className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-indigo-500/25 text-xs font-mono font-semibold tracking-widest uppercase text-indigo-300"
                style={{ background: "rgba(99,102,241,0.07)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for work
              </div>
            </motion.div>

            {/* Hello label */}
            <motion.div variants={item} className="mb-3">
              <span className="text-xs sm:text-sm font-mono text-white/30 tracking-[0.25em] uppercase">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name + role */}
            <motion.div variants={item} className="mb-5">
              <h1 className="leading-[1.05] tracking-tight">
                <span
                  className="block font-black text-white"
                  style={{
                    fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                    fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                  }}
                >
                  Varun K T
                </span>
                <span
                  className="block font-bold mt-1"
                  style={{
                    fontSize: "clamp(1.2rem, 3.5vw, 2.2rem)",
                    background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 45%, #c4b5fd 70%, #818cf8 100%)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradientPan 5s ease infinite",
                  }}
                >
                  Full-Stack Developer
                </span>
              </h1>
            </motion.div>

            {/* Divider */}
            <motion.div variants={item} className="mb-6">
              <div className="h-px w-16"
                style={{ background: "linear-gradient(90deg, rgba(129,140,248,0.7), transparent)" }} />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-sm sm:text-base text-white/45 mb-8 max-w-[480px] leading-relaxed"
            >
              I craft{" "}
              <span className="text-indigo-400/90 font-medium">fast</span>,{" "}
              <span className="text-violet-400/90 font-medium">beautiful</span>, and{" "}
              <span className="text-indigo-400/90 font-medium">scalable</span>{" "}
              digital products — from pixel-perfect UIs to robust backends.
            </motion.p>

            {/* Tech stack pills */}
            {/* <motion.div variants={item} className="flex flex-wrap gap-1.5 mb-10">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono text-white/45 border border-white/[0.07] transition-colors hover:border-indigo-500/35 hover:text-indigo-300 cursor-default"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  {tech}
                </span>
              ))}
            </motion.div> */}

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="hero-btn-primary group relative flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-transform active:scale-95"
              >
                <div className="absolute inset-0 rounded-xl" style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }} />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }} />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white/55 border border-white/10 transition-all hover:border-indigo-500/40 hover:text-indigo-300 active:scale-95"
                style={{ background: "rgba(255,255,255,0.018)" }}
              >
                Let's Talk
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] text-white/20 font-mono tracking-widest uppercase">Find me on</span>
              <div className="h-px w-6 bg-white/10" />
              {[
                { icon: Github, href: "https://github.com/varunnayu", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/varun-k-t-a8312927b", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] text-white/40 hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column: terminal + stats ── */}
          <motion.div
            className="flex flex-col items-center lg:items-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Stat cards row — above terminal on mobile */}
            <div className="flex gap-3 w-full justify-center lg:justify-end">
              {/* <StatCard icon={Code2} color="rgba(139,92,246,0.15)" label="Experience" value="1 yrs" delay={2.4} /> */}
              <StatCard icon={Zap} color="rgba(99,102,241,0.15)" label="Projects Shipped" value="5+" delay={2.6} />
            </div>

            {/* Terminal card — full-width on mobile */}
            <div className="w-full max-w-[480px]">
              <TerminalWindow />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-16 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.8 }}
        >
          <span className="text-[9px] font-mono tracking-[0.3em] text-white/15 uppercase">Scroll</span>
          <div className="relative w-4 h-7 rounded-full border border-white/12 flex items-start justify-center pt-1">
            <motion.div
              className="w-0.5 h-1.5 rounded-full bg-indigo-400/70"
              animate={{ y: [0, 10, 0], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* CSS-only keyframes */}
      <style>{`
        @keyframes gradientPan {
          0%, 100% { background-position: 0% 50% }
          50%       { background-position: 100% 50% }
        }

        @keyframes auroraOrb1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(50px, 30px) scale(1.08); }
          66%       { transform: translate(-20px, 50px) scale(0.95); }
        }
        @keyframes auroraOrb2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40%       { transform: translate(-45px, -25px) scale(1.1); }
          75%       { transform: translate(20px, -40px) scale(0.92); }
        }
        @keyframes auroraOrb3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50%       { transform: translate(25px, -45px) scale(1.06); }
        }
        @keyframes scanLine {
          0%   { transform: translateY(-1px); }
          100% { transform: translateY(100vh); }
        }

        .aurora-orb-1 { animation: auroraOrb1 22s ease-in-out infinite; will-change: transform; }
        .aurora-orb-2 { animation: auroraOrb2 18s ease-in-out infinite; will-change: transform; }
        .aurora-orb-3 { animation: auroraOrb3 16s ease-in-out infinite 4s; will-change: transform; }
        .scan-line    { animation: scanLine 20s linear infinite; will-change: transform; }

        .hero-btn-primary { will-change: transform; }
      `}</style>
    </section>
  )
}