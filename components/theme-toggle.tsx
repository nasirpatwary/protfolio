"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer p-1 rounded-full bg-gray-100 dark:bg-gray-800 transition-all border border-gray-200 dark:border-gray-700"
    >
     {theme === "light" ? (
        <Sun className="size-4 rotate-0 scale-100 transition-all text-primary" />
      ) : (
         <Moon className="size-4  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
      )}
    </button>
  )
}