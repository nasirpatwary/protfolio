"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Lightbulb, Monitor, Server, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects"

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button asChild variant="ghost" size="sm">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button asChild size="sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Full Stack Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-sm font-semibold bg-primary text-primary-foreground rounded-full">
                Full Stack Project
              </span>
            </div>

            {/* Project Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary mb-8 shadow-2xl">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              {/* Fallback gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center -z-10">
                <span className="text-6xl font-bold text-primary/50">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>

            {/* Title and Description */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* GitHub Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4 mb-12"
          >
            <a
              href={project.githubUrl.client}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Monitor className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Client Repository</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View Client Code
                </p>
              </div>
            </a>
            <a
              href={project.githubUrl.server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-secondary group-hover:bg-secondary/80 transition-colors">
                <Server className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Server Repository</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View Server Code
                </p>
              </div>
            </a>
          </motion.div>

          {/* Tech Stack - Client & Server */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Client Side */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  Client Side Technologies
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.client.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="px-3 py-1.5 bg-primary/10 text-primary font-medium rounded-lg border border-primary/20 text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Server Side */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold text-foreground">
                  Server Side Technologies
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.server.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25 + index * 0.05 }}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          {project.features && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  Key Features
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  Challenges Overcome
                </h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {challenge}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Future Improvements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  Future Improvements
                </h2>
              </div>
              <ul className="space-y-3">
                {project.futureImprovements.map((improvement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {improvement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Interested in working together on a similar project?
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
