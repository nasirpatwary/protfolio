"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Facebook, Twitter, Heart, Mail, MapPin } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/nasirpatwary" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/nasir22" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/yourhandle" },
  { name: "Email", icon: Mail, href: "mailto:hello@nasir.dev" },
]

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Tech Stack", href: "#skills" },
  { name: "Selected Projects", href: "#projects" },
  { name: "Get in Touch", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-2xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors inline-block mb-4"
            >
              NASIR<span className="text-primary">.DEV</span>
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm mb-6">
              Full Stack Developer specializing in React, Next.js, and Node.js. 
              Turning complex problems into elegant, user-centric digital solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Based in Dhaka, Bangladesh • Available for Out-site work</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold uppercase tracking-widest text-xs text-foreground mb-6">Navigation</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold uppercase tracking-widest text-xs text-foreground mb-6">Connect</h3>
            <div className="flex flex-wrap gap-3">
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nasir Patwary. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Built with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> using{" "}
              <span className="font-medium text-foreground">Next.js & Tailwind</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}