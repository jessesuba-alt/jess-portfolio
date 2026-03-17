"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  eyebrow?: string
  eyebrowHref?: string 
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Know more about me",
  eyebrowHref = "https://www.facebook.com/jesse.pahati",
  title,
  subtitle,
  ctaLabel = "",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
      bg-[linear-gradient(to_bottom,#fff,#ffffff_50%,#e8e8e8_88%)]  
      dark:bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#ffffff_99%_50%)] 
      rounded-b-xl"
    >
      {/* Background Grids */}
      <div className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Eyebrow Link */}
      {eyebrow && (
        <div className="relative z-30 mb-6 flex justify-center">
          <a 
            href={eyebrowHref} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group"
          >
            <span
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-geist uppercase tracking-tight
              text-gray-600 dark:text-gray-400
              bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md
              border border-gray-300/50 dark:border-white/10 
              rounded-full transition-all duration-300
              hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400
              shadow-[0_0_20px_-12px_rgba(0,0,0,0.5)]"
            >
              {eyebrow}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
          {title}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* CTA Button */}
        {ctaLabel && (
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="w-fit min-w-[200px] h-12 text-lg font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </div>
        )}
      </div>

      {/* Radial Accent for visual depth */}
      <div className="absolute left-1/2 top-[calc(100%-90px)] -z-10 h-[500px] w-[140%] -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-[radial-gradient(closest-side,#fff_82%,#000000)] dark:bg-[radial-gradient(closest-side,#000_82%,#ffffff)] opacity-50" />
    </section>
  )
}