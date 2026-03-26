"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Sparkles, FileDown, Code2, Brain, Zap } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-grid-white/5" style={{backgroundImage: "url('data:image/svg+xml?utf8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.05\"><path d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/></g></g></svg>')"}}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* ===== Heading ===== */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 text-primary text-sm font-mono mb-6 backdrop-blur-sm shadow-lg"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.span>
              About Me
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-primary/80 to-accent bg-clip-text text-transparent">
              Innovator & Problem Solver
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Driving digital transformation through data science, full-stack development, and creative problem-solving
            </p>
          </div>

          {/* ===== Main Layout ===== */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ===== LEFT : PHOTO + BUTTON ===== */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
            {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative group"
              >
                {/* Animated gradient border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-accent rounded-3xl blur opacity-70 group-hover:opacity-100 transition-opacity"
                />

                {/* Glass effect container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <img
                    src="/p.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 contrast-110"
                  />
                  {/* Overlay glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary/80 to-accent/80 backdrop-blur-md border border-white/20 shadow-xl text-white text-sm font-semibold flex items-center gap-2"
                >
                  <Brain className="h-4 w-4" />
                  Data Science
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ===== RIGHT : CONTENT ===== */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Content Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/20 border border-primary/40">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Data Science Enthusiast</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent font-bold">Varun K T</span>, 
                      a motivated Data Scientist with a strong foundation in computer science. B.Tech in Computer Science with core expertise in computing concepts and problem-solving.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Content Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Full-Stack Developer</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Experience in frontend and full-stack development with Python, React.js, JavaScript, HTML, CSS, and Tailwind CSS. 
                      Transforming complex problems into clean, efficient, and user-friendly digital experiences.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Content Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/40">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Continuous Learner</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Passionate about continuous learning and applying data-driven insights to real-world applications. 
                      Contributing to innovative projects combining data science, analytics, and web technologies.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4"
              >
                <motion.a
                  href="/varun.pdf"
                  download
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99,102,241,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:shadow-2xl transition-all group"
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FileDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.div>
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
            
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
