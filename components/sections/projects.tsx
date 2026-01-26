"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const allTech = [...project.techStack.client, ...project.techStack.server]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500"
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-secondary">
        <Image
          src={project.image || "/placeholder"}
          alt={project.title}
          fill
          className="object-center group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick action buttons on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20 }}
            whileHover={{ scale: 1.1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg backdrop-blur-sm"
            aria-label="View live project"
          >
            <ExternalLink className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={project.githubUrl.client}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20 }}
            whileHover={{ scale: 1.1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-card/90 text-foreground border border-border shadow-lg backdrop-blur-sm"
            aria-label="View client code"
          >
            <Github className="h-5 w-5" />
          </motion.a>
        </div>

        {/* Full Stack Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
            Full Stack
          </span>
        </div>

        {/* Fallback gradient for placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center -z-10">
          <span className="text-4xl font-bold text-primary/50">
            {project.title.charAt(0)}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Client Side Tech */}
        <div className="mb-3">
          <p className="text-xs font-semibold text-primary mb-1.5">Client Side</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.client.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.techStack.client.length > 3 && (
              <span className="px-2 py-0.5 text-xs font-medium bg-secondary text-muted-foreground rounded-md">
                +{project.techStack.client.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Server Side Tech */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-muted-foreground mb-1.5">Server Side</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.server.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.techStack.server.length > 3 && (
              <span className="px-2 py-0.5 text-xs font-medium bg-secondary text-muted-foreground rounded-md">
                +{project.techStack.server.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <Button asChild variant="outline" className="w-full group/btn border-primary/20 hover:bg-primary hover:text-primary-foreground bg-transparent">
          <Link href={`/projects/${project.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/30">
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
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-foreground mt-2"
            >
              Featured Projects
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
              Here are some of the projects I&apos;ve worked on. Each one represents
              a unique challenge and learning experience.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
