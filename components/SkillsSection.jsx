"use client"

import { motion } from "framer-motion"
import { Code2, Server, Wrench } from "lucide-react"

const skillsData = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", level: 4 },
      { name: "CSS / Tailwind", level: 4.5 },
      { name: "JavaScript", level: 3 },
      { name: "React", level: 3 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 3 },
      { name: "Firebase", level: 3.5 },
      { name: "MongoDB", level: 3 },
      { name: "PHP", level: 3 },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Postman", level: 2 },
      { name: "Figma", level: 3 },
    ],
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
}

const LevelPercentage = ({ level }) => {
  const percentage = (level / 5) * 100
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-sm sm:text-base font-semibold text-indigo-400"
    >
      {percentage.toFixed(0)}%
    </motion.span>
  )
}

export default function SkillsSectionAlt() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Skills & Tools
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Technologies I use to build clean, scalable, and modern applications.
          </p>
        </motion.div>

        {/* Skills List */}
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3 lg:gap-16">
          {skillsData.map((group, idx) => {
            const IconComponent = group.icon
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2.5 rounded-lg bg-indigo-500/20"
                  >
                    <IconComponent className="w-5 h-5 text-indigo-400" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {group.category}
                  </h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      className="flex items-center justify-between group px-2"
                    >
                      <span className="text-sm sm:text-base font-medium text-slate-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <LevelPercentage level={skill.level} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
