"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, X, ArrowUpRight } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { icon: Github, href: "https://github.com/varunnayu", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/varun-k-t-a8312927b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:varunsantu2002@gmail.com", label: "Email" },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
}

// ─── Hamburger icon ───────────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-4 flex flex-col justify-between">
      <motion.span
        className="block h-[1.5px] rounded-full bg-white/70 origin-left"
        animate={open ? { rotate: 42, y: -1, x: 2, width: "100%" } : { rotate: 0, y: 0, x: 0, width: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="block h-[1.5px] rounded-full bg-white/70"
        animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-[1.5px] rounded-full bg-white/70 origin-left"
        style={{ width: "75%" }}
        animate={open ? { rotate: -42, y: 1, x: 2, width: "100%" } : { rotate: 0, y: 0, x: 0, width: "75%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#home")
  const [ready, setReady] = useState(false)

  // Show navbar only after preloader is gone
  useEffect(() => {
    const html = document.documentElement
    // If already loaded (e.g. HMR refresh), show immediately
    if (html.dataset.loaded === "true") {
      setReady(true)
      return
    }
    // Otherwise observe for the attribute the preloader will set
    const observer = new MutationObserver(() => {
      if (html.dataset.loaded === "true") {
        setReady(true)
        observer.disconnect()
      }
    })
    observer.observe(html, { attributes: true, attributeFilter: ["data-loaded"] })
    return () => observer.disconnect()
  }, [])

  // Track scroll position for nav style + active section
  useEffect(() => {
    let rafId: number | null = null

    const onScroll = () => {
      // Throttle with rAF — only one DOM read per animation frame
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        setScrolled(window.scrollY > 40)
        const sections = navItems.map(i => i.href)
        for (const id of [...sections].reverse()) {
          const el = document.querySelector(id)
          if (el && el.getBoundingClientRect().top <= 120) {
            setActive(id)
            break
          }
        }
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    setActive(href)
    setTimeout(() => scrollTo(href), isOpen ? 350 : 0)
  }

  return (
    <>
      {/* ── Navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-40"
        style={{ fontFamily: "'Inter', 'Geist', sans-serif", pointerEvents: ready ? "auto" : "none" }}
      >
        {/* Glass pill */}
        <div
          className="mx-auto transition-all duration-500"
          style={{
            maxWidth: scrolled ? "900px" : "100%",
            padding: scrolled ? "12px 20px" : "0px",
          }}
        >
          <div
            className="flex items-center justify-between transition-all duration-500"
            style={{
              background: scrolled
                ? "rgba(5,3,18,0.85)"
                : "transparent",
              backdropFilter: scrolled ? "blur(20px)" : "none",
              borderRadius: scrolled ? "16px" : "0px",
              border: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
              boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
              padding: scrolled ? "10px 20px" : "0 24px",
              height: scrolled ? "52px" : "72px",
              marginTop: scrolled ? "12px" : "0px",
            }}
          >
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="font-mono text-base font-bold transition-colors hover:text-indigo-400"
              style={{ color: "rgba(255,255,255,0.8)" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {"<VARU/>"}
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.href
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                    style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.4)" }}
                  >
                    {/* Active pill */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                )
              })}
            </div>

            {/* Desktop CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* Contact CTA — hidden on small */}
              <a
                href="mailto:varunsantu2002@gmail.com"
                className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all hover:scale-[1.03] active:scale-[0.97]"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", boxShadow: "0 4px 16px rgba(99,102,241,0.25)" }}
              >
                Hire me
                <ArrowUpRight size={12} />
              </a>

              {/* Hamburger */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative z-50 flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] transition-all"
                style={{ background: isOpen ? "rgba(99,102,241,0.12)" : "rgba(255,255,255,0.03)" }}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.93 }}
              >
                <HamburgerIcon open={isOpen} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-50 md:hidden w-[min(320px,85vw)] flex flex-col"
              style={{
                background: "linear-gradient(160deg, rgba(8,5,24,0.98), rgba(13,9,34,0.98))",
                borderLeft: "1px solid rgba(99,102,241,0.15)",
                boxShadow: "-20px 0 60px rgba(0,0,0,0.6)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                <span className="font-mono text-sm font-bold text-white/70">{"<VARU/>"}</span>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.07] text-white/35 hover:text-white/70 transition-colors"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X size={15} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navItems.map((item, i) => {
                  const isActive = active === item.href
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className="relative flex items-center justify-between px-4 py-4 rounded-xl text-sm font-medium transition-colors"
                      style={{
                        color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
                        background: isActive ? "rgba(99,102,241,0.12)" : "transparent",
                        border: isActive ? "1px solid rgba(99,102,241,0.2)" : "1px solid transparent",
                      }}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.06 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span>{item.label}</span>
                      <span
                        className="text-[10px] font-mono tracking-widest"
                        style={{ color: isActive ? "rgba(129,140,248,0.7)" : "rgba(255,255,255,0.12)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.a>
                  )
                })}
              </nav>

              {/* Drawer footer */}
              <motion.div
                className="px-6 py-6 border-t border-white/[0.06]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.32 }}
              >
                {/* Hire me CTA */}
                <a
                  href="mailto:varunsantu2002@gmail.com"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white mb-5 transition-transform hover:scale-[1.02] active:scale-[0.97]"
                  style={{
                    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    boxShadow: "0 6px 24px rgba(99,102,241,0.3)",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <Mail size={14} />
                  Hire me
                </a>

                {/* Socials */}
                <div className="flex items-center justify-center gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.07] text-white/30 hover:text-indigo-400 hover:border-indigo-500/35 transition-all"
                      style={{ background: "rgba(255,255,255,0.025)" }}
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>

                <p className="text-center text-[10px] font-mono text-white/15 mt-5 tracking-wider">
                  © {new Date().getFullYear()} Varun K T
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
