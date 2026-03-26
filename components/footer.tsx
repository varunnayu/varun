"use client"

import { motion } from "motion/react"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-20 border-t border-primary/20 bg-gradient-to-b from-background to-primary/5">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-12"
        >
          {/* <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-primary/80 to-accent bg-clip-text text-transparent">
              Let's Create Something Great
            </span>
          </h2> */}

          {/* <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Varun K T
          </p> */}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-12"
        />

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="text-sm">Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.span>
            <span className="text-sm">© {currentYear}</span>
          </div>

          <p className="text-xs text-muted-foreground/70 tracking-widest uppercase font-semibold">
            Varun K.T. • Full-Stack Developer & Data Science Enthusiast
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
