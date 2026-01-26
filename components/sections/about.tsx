"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Coffee, Gamepad2, Music } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Clean Code Enthusiast" },
  { icon: Coffee, label: "Coffee Powered" },
  { icon: Gamepad2, label: "Gaming Hobbyist" },
  { icon: Music, label: "Music Lover" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Get To Know Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-foreground mt-2"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"
            />
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                Hi there! I&apos;m <span className="text-foreground font-semibold">Nasir Hossain</span>, 
                a passionate Junior Full Stack Developer. My journey into 
                programming started during my teenage years when I built my first website 
                out of curiosity. That spark of excitement when I saw my code come to life 
                has never faded.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I love working across the entire stack, from crafting beautiful, responsive 
                user interfaces with <span className="text-primary font-medium">React</span> and{" "}
                <span className="text-primary font-medium">Next.js</span>, to building robust 
                backend systems with <span className="text-primary font-medium">Node.js</span> and{" "}
                <span className="text-primary font-medium">Express</span>. There&apos;s something 
                incredibly satisfying about seeing both ends of an application work together 
                seamlessly.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open-source projects, or leveling up my skills through 
                online courses and coding challenges. I&apos;m also an avid gamer and music 
                enthusiast who believes that creativity in one area fuels creativity in another.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m currently seeking opportunities to grow as a developer and contribute 
                to meaningful projects. I believe in writing clean, maintainable code and 
                continuously learning from every experience. Let&apos;s build something amazing together!
              </p>
            </motion.div>

            {/* Highlights Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">10+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">2+</p>
                    <p className="text-xs text-muted-foreground">Years Exp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
