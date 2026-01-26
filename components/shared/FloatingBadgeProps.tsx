

import { motion } from "framer-motion"

interface FloatingBadgeProps {
  label: string
  positionClasses?: string // e.g., "-right-4 top-1/4"
  delay?: number
}

export default function FloatingBadge({
  label,
  positionClasses = "",
  delay = 1,
}: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute ${positionClasses} px-3 py-1.5 bg-card border border-border rounded-full shadow-lg`}
    >
      <span className="text-sm font-medium text-foreground">{label}</span>
    </motion.div>
  )
}
