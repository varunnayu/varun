"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Terminal, Code2, Zap, Cpu, Database, Layers } from "lucide-react"

const loadingMessages = [
  "$ npm install dependencies...",
  "$ compiling TypeScript...",
  "$ generating static pages...",
  "$ starting development server...",
  "✓ Ready "  
]

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        const diff = Math.random() * 15
        return Math.min(oldProgress + diff, 100)
      })
    }, 200)

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => Math.min(prev + 1, loadingMessages.length - 1))
    }, 700)

    const glitchTimer = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 150)
    }, 1200)

    return () => {
      clearInterval(timer)
      clearInterval(messageTimer)
      clearInterval(glitchTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.22_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.22_0_0)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse" />
          </div>

          <div className="relative max-w-md w-full px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl border-2 border-primary/20 border-t-primary"
                  style={{ width: "80px", height: "80px" }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-2 rounded-2xl border border-primary/30 border-b-primary/50"
                />
                <div className="w-20 h-20 flex items-center justify-center">
                  <Terminal className={`h-10 w-10 text-primary ${glitch ? "animate-glitch" : ""}`} />
                </div>
              </div>
            </motion.div>

            <div className="mb-6 min-h-[32px] bg-secondary/50 rounded-lg p-3 border border-border font-mono text-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={messageIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-primary"
                >
                  <Code2 className="h-3 w-3 flex-shrink-0 animate-pulse" />
                  <span className="text-foreground/90">{loadingMessages[messageIndex]}</span>
                  {messageIndex < loadingMessages.length - 1 && <span className="animate-blink text-primary">_</span>}
                  {messageIndex === loadingMessages.length - 1 && (
                    <Zap className="h-3 w-3 text-green-500 animate-pulse" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Cpu className="h-3 w-3 animate-pulse" />
                  Building...
                </span>
                <span className="text-primary font-bold tabular-nums">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary border border-border">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary relative"
                >
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-muted-foreground pt-2">
                <div className="flex items-center gap-1">
                  <Database className="w-3 h-3 text-green-500 animate-pulse" />
                  <span>DB</span>
                </div>
                <div className="flex items-center gap-1">
                  <Layers className="w-3 h-3 text-green-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <span>API</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                  <span>Live</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
