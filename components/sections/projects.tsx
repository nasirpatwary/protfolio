"use client";

import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "../shared/ProjectCard";

export function Projects() {
  const ITEMS_PER_PAGE = 3;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && visibleCount < projects.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, visibleCount]);

  const displayedProjects = projects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/30">
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
              Here are some of the projects I&apos;ve worked on. Each one
              represents a unique challenge and learning experience.
            </motion.p>
          </div>

          {/* Projects Grid */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Sentinel Element */}
      {visibleCount < projects.length && (
        <div ref={ref} className="flex justify-center p-10">
          <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
        </motion.div>
      </div>
    </section>
  );
}
