
import React from "react"
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const rubik = Rubik(
  { subsets: ["latin"], variable: "--font-rubik" }
)

export const metadata: Metadata = {
  title: 'Nasir Hossain | Junior Full Stack Developer',
  description: 'Portfolio of Nasir Hossain, a passionate Junior Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Nasir Hossain' }],
  openGraph: {
    title: 'Nasir Hossain | Junior Full Stack Developer',
    description: 'Portfolio of Nasir Hossain, a passionate Junior Full Stack Developer',
    type: 'website',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${rubik.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
