"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className={cn("transition-all duration-300", isScrolled ? "h-14 md:h-16" : "h-16 md:h-20")} />
      
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          )}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className={cn(
                  "font-bold transition-all duration-300 group",
                  isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                )}
              >
                <span className="text-primary group-hover:text-foreground transition-colors">{"<"}</span>
                <span className="text-foreground group-hover:text-primary transition-colors">JD</span>
                <span className="text-primary group-hover:text-foreground transition-colors">{" />"}</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
                  >
                    <span className={cn(
                      "relative z-10 transition-colors duration-300",
                      activeSection === item.href.replace("#", "")
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-foreground"
                    )}>
                      {item.name}
                    </span>
                    {/* Underline indicator */}
                    {activeSection === item.href.replace("#", "") && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    {/* Hover underline */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/50 rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="ml-4"
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="relative h-10 w-10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden"
              >
                <motion.div 
                  className="py-6 space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ delay: 0.05 * index, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-lg font-medium transition-all duration-300",
                          activeSection === item.href.replace("#", "")
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        <span className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          activeSection === item.href.replace("#", "")
                            ? "bg-primary scale-100"
                            : "bg-muted-foreground/30 scale-75"
                        )} />
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}
