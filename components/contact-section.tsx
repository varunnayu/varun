"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  Mail, Github, Linkedin, ArrowUpRight, Send,
  MessageSquare, MapPin, Clock
} from "lucide-react"

// ─── Social links ─────────────────────────────────────────────────────────────
const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@varunnayu",
    href: "https://github.com/varunnayu",
    accent: "#818cf8",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Varun K T",
    href: "https://www.linkedin.com/in/varun-k-t-a8312927b",
    accent: "#60a5fa",
  },
  // {
  //   icon: Mail,
  //   label: "Email",
  //   handle: "varunsantu2002@gmail.com",
  //   href: "mailto:varunsantu2002@gmail.com",
  //   accent: "#a78bfa",
  // },
]

// ─── Info chips ───────────────────────────────────────────────────────────────
const infoChips = [
  { icon: MapPin, text: "Bengaluru, India" },
  // { icon: Clock, text: "IST (UTC +5:30)" },
]

// ─── Stagger variants ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
})

// ─── Social card ─────────────────────────────────────────────────────────────
function SocialCard({
  icon: Icon, label, handle, href, accent,
}: (typeof socials)[0]) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      {...fadeUp(0)}
      className="group relative flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden"
      style={{
        background: hovered ? `${accent}0d` : "rgba(255,255,255,0.02)",
        borderColor: hovered ? `${accent}40` : "rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 8px 32px ${accent}1a` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at left, ${accent}15 0%, transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Icon */}
      <div
        className="relative flex items-center justify-center w-11 h-11 rounded-lg shrink-0 transition-all duration-300"
        style={{
          background: hovered ? `${accent}18` : "rgba(255,255,255,0.04)",
          border: `1px solid ${hovered ? accent + "40" : "rgba(255,255,255,0.08)"}`,
        }}
      >
        <Icon size={18} style={{ color: hovered ? accent : "rgba(255,255,255,0.35)" }} />
      </div>

      {/* Text */}
      <div className="relative flex-1 min-w-0">
        <p className="text-[11px] font-mono text-white/25 tracking-widest uppercase mb-0.5">{label}</p>
        <p
          className="text-sm font-semibold truncate transition-colors duration-300"
          style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.65)" }}
        >
          {handle}
        </p>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={16}
        className="relative shrink-0 transition-all duration-300"
        style={{
          color: hovered ? accent : "rgba(255,255,255,0.15)",
          transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
        }}
      />
    </motion.a>
  )
}

// ─── Main ContactSection ──────────────────────────────────────────────────────
export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ fontFamily: "'Inter', 'Geist', sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "#03030d" }} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(ellipse at center, #4f46e5, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse at center, #7c3aed, transparent 70%)",
            filter: "blur(50px)",
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
        {/* Grid: left text + right cards */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Left ── */}
          <div>
            {/* Label */}
            <motion.div {...fadeUp(0)} className="mb-6">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 text-xs font-mono font-semibold text-indigo-300 tracking-widest uppercase"
                style={{ background: "rgba(99,102,241,0.07)" }}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Contact
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              {...fadeUp(0.07)}
              className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Let's Build
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #818cf8, #a78bfa 50%, #c4b5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Something Great
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.14)}
              className="text-base text-white/40 leading-relaxed mb-10 max-w-md"
            >
              Have a project in mind, an idea worth exploring, or just want to say hello?
              My inbox is always open — I'll get back to you within a day.
            </motion.p>

            {/* Info chips */}
            <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3 mb-12">
              {infoChips.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/[0.07] text-xs text-white/35 font-mono"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <Icon size={13} className="text-indigo-400/60" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Big email CTA */}
            <motion.a
              {...fadeUp(0.26)}
              href="mailto:varunsantu2002@gmail.com"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                boxShadow: "0 8px 32px rgba(99,102,241,0.3)",
              }}
            >
              <Send size={16} />
              Send me an email
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </div>

          {/* ── Right: Social cards ── */}
          <div className="flex flex-col gap-3">
            <motion.p {...fadeUp(0.1)} className="text-xs font-mono text-white/20 tracking-widest uppercase mb-1">
              — or reach me on
            </motion.p>
            {socials.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(0.15 + i * 0.07)}>
                <SocialCard {...s} />
              </motion.div>
            ))}

            {/* Availability card */}
            <motion.div
              {...fadeUp(0.38)}
              className="mt-4 relative overflow-hidden rounded-xl border border-emerald-500/15 p-5"
              style={{ background: "rgba(16,185,129,0.04)" }}
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-emerald-400">Available for work</p>
                  <p className="text-xs text-white/30 mt-0.5">
                    Open to freelance, full-time, and collaboration opportunities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  )
}
