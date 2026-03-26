"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [mouseY, setMouseY] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={(e) => setMouseY(e.clientY)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.15_0.1_211),transparent_50%)]" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" 
          animate={{ y: mouseY * 0.05 || 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-1.5s" }}
          animate={{ y: -mouseY * 0.03 || 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.div style={{ y, opacity, scale }} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-6 sm:mb-8 relative"
          >
            {/* Glow background for console badge */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary to-transparent blur-xl opacity-0 -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.span 
              className="relative inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/40 text-primary text-xs sm:text-sm font-mono backdrop-blur-sm shadow-lg"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 30px rgba(99,102,241,0.6), inset 0 0 20px rgba(99,102,241,0.2)",
                borderColor: "rgba(99,102,241,0.8)"
              }}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(99,102,241,0.3)",
                  "0 0 20px rgba(99,102,241,0.5)",
                  "0 0 10px rgba(99,102,241,0.3)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              {'console.log("Hello, World!")'}
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 text-balance"
          >
            Welcome To My
            <motion.span 
              className="block text-gradient"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Portfolio
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-balance leading-relaxed px-2 sm:px-0"
          >
            Crafting innovative digital experiences with cutting-edge technologies. Specializing in React, and
            modern web architecture.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="group w-full sm:w-auto"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
                <motion.span
                  className="ml-2 h-4 w-4"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/varunnayu", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/varun-k-t-a8312927b", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 3.2 + i * 0.1 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -4,
                  boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - responsive positioning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.4 }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
