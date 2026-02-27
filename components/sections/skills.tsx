"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Javascript", level: 60 },
      { name: "Tailwind CSS", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 65 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Postman", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Vercel", level: 80 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  )
}

function SkillCard({
  title,
  skills,
  index,
}: {
  title: string
  skills: { name: string; level: number }[]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={0.3 + skillIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium"
            >
              What I Know
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-foreground mt-2"
            >
              My Skills
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-4 text-muted-foreground max-w-2xl mx-auto"
            >
              Here are the technologies and tools I work with to bring ideas to life.
              I&apos;m always eager to learn new skills and stay up-to-date with the latest trends.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                title={category.title}
                skills={category.skills}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
