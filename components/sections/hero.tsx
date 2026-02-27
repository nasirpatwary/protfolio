"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FloatingBadge from "../shared/FloatingBadgeProps";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/nasirpatwary" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nasir22",
  },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-primary font-medium mb-2"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance"
            >
              Nasir Hossain
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-6"
            >
              Junior Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build accessible, pixel-perfect digital experiences for the web.
              Passionate about creating beautiful and functional full-stack
              applications that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button asChild size="lg" className="gap-2">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/30"
              />

              {/* Image container */}
              <div className="relative mx-auto w-48 h-48 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/20 bg-secondary shadow-2xl">
                <Image
                  src="/profile/removebg-preview.png"
                  alt="Junior Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <FloatingBadge
                label="React"
                positionClasses="-right-4 top-0 md:top-1/4"
                delay={1}
              />
              <FloatingBadge
                label="Node.js"
                positionClasses="-left-4 bottom-0 md:bottom-1/4"
                delay={1.2}
              />
              <FloatingBadge
                label="Next.js"
                positionClasses="-left-4 top-0 md:top-1/4"
                delay={1.2}
              />
              <FloatingBadge
                label="MongoDB"
                positionClasses="-right-4 bottom-0 md:bottom-1/3"
                delay={1.4}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
