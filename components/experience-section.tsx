"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Data Science Trainee",
    company: "Innomatics Research Labs",
    period: "Present",
    description:
      "Advanced training in Data Science with expertise in end-to-end ML pipelines, statistical analysis, and real-world problem-solving. Building production-ready solutions using Python, Pandas, Scikit-learn, and SQL.",
    achievements: [
      "Engineered automated data preprocessing pipelines handling 100K+ records with 99% accuracy",
      "Developed ML models achieving 85%+ accuracy across classification and regression tasks",
      "Created interactive dashboards delivering actionable insights to stakeholders",
      "Mastered Python, SQL, statistical methods, and ML frameworks through hands-on projects",
    ],
    skills: ["Python", "Pandas", "Scikit-learn", "SQL", "Statistics", "Data Visualization"],
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Digital Solutions Inc",
  //   period: "2021 - 2023",
  //   description:
  //     "Developed and maintained scalable web applications serving 50K+ users. Enhanced system performance and delivered high-quality features using modern tech stack with strong collaboration practices.",
  //   achievements: [
  //     "Shipped 25+ production features impacting 50K+ monthly active users",
  //     "Increased test coverage from 45% to 90% improving code reliability",
  //     "Optimized critical database queries reducing response times by 60%",
  //     "Mentored 3 junior developers on React best practices and code standards",
  //   ],
  //   skills: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS", "Git"],
  // },
  // {
  //   title: "Frontend Developer",
  //   company: "Creative Studio",
  //   period: "2020 - 2021",
  //   description:
  //     "Built engaging user interfaces for client projects with focus on performance and user experience. Collaborated closely with design team to deliver pixel-perfect, accessible web experiences.",
  //   achievements: [
  //     "Created reusable component library reducing development time by 35%",
  //     "Achieved 95+ Lighthouse scores across all projects improving SEO rankings",
  //     "Reduced main bundle size by 40% through code-splitting and optimization",
  //     "Implemented accessibility features achieving WCAG 2.1 AA compliance",
  //   ],
  //   skills: ["JavaScript", "React", "CSS/Tailwind", "Webpack", "Accessibility", "Performance Optimization"],
  // },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
            >
              <Briefcase className="h-4 w-4" />
              Journey
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Professional Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance leading-relaxed">
              A timeline of growth, innovation, and continuous learning in the ever-evolving tech landscape.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 hidden md:block animate-pulse-glow" />

                  <div className="md:ml-20 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono px-3 py-1 rounded-full bg-secondary">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-primary">Key Achievements:</h4>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1 font-bold">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.skills && (
                        <div className="space-y-2 pt-2 border-t border-border">
                          <h4 className="text-sm font-semibold text-primary">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span key={skill} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
