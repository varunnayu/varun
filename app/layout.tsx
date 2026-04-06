import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Varun Portfolio",
  description: "A modern portfolio showcasing cutting-edge web development projects and innovative solutions",
  keywords: ["portfolio", "web developer", "full stack", "react", "next.js"],
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect for Google Fonts to avoid render-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-slate-950 relative overflow-x-hidden">
        {/* Fixed background elements that span entire page */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
          {/* Base dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

          {/* Animated gradient orbs - stationary at edges */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl opacity-30" />
          <div className="absolute top-1/2 left-1/2 w-full h-full max-w-4xl -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="absolute inset-0 opacity-15" style={{ background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%)', filter: 'blur(60px)' }} />
          </div>
        </div>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
