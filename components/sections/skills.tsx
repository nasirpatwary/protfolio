"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Vercel" },
    ],
  },
];

function SkillCard({
  title,
  skills,
  index,
}: {
  title: string;
  skills: { name: string }[];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <motion.p
            key={skill.name}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95, direction: 1 }}
            className="py-1.5 px-4 rounded-xl bg-white dark:bg-gray-950 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
            aria-label={skill.name}
          >
            <span>{skill.name}</span>
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Here are the technologies and tools I work with to bring ideas to
              life. I&apos;m always eager to learn new skills and stay
              up-to-date with the latest trends.
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
  );
}
