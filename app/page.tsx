'use client'
import { useState, useEffect } from 'react'
import Grid from "@/components/Grid"
import Hero from "@/components/Hero"
import Header from "@/components/Header"
import LoadingIntro from "@/components/ui/LoadingIntro"
import RecentProjects from '@/components/RecentProjects'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative flex flex-col overflow-hidden w-full">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="mt-20 px-1">
            <Hero />
            <Grid />
            <RecentProjects />
          </div>
      </ThemeProvider>
    </main>

  )
}