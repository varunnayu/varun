"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const year = new Date().getFullYear()

const socials = [
  { icon: Github, href: "https://github.com/varunnayu", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/varun-k-t-a8312927b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:varunsantu2002@gmail.com", label: "Email" },
]

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#03030d", fontFamily: "'Inter', 'Geist', sans-serif" }}
    >
      {/* Top gradient rule */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.25) 30%, rgba(139,92,246,0.45) 50%, rgba(99,102,241,0.25) 70%, transparent)",
        }}
      />

      {/* Faint glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[160px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(99,102,241,0.07), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="container mx-auto px-5 sm:px-8 py-10 relative">

        {/* ── Main row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home") }}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg font-bold font-mono text-white/70 hover:text-indigo-400 transition-colors"
          >
            {"<VARU/>"}
          </motion.a>

          {/* Nav links */}
          <motion.nav
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                className="text-xs font-mono text-white/30 hover:text-indigo-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.nav>

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            {socials.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.07] text-white/30 hover:text-indigo-400 hover:border-indigo-500/35 transition-all"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          className="my-8 h-px"
          style={{ background: "rgba(255,255,255,0.04)" }}
          initial={{ scaleX: 0, originX: 0.5 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── Bottom row ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-mono text-white/18 tracking-wide">
            © {year} Varun K T · All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/18">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={11} className="text-rose-500/60 fill-rose-500/60" />
            </motion.span>
            {/* <span>using Next.js</span> */}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
