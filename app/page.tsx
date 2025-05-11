'use client'
import Grid from "@/components/Grid"
import Hero from "@/components/Hero"
import RecentProjects from '@/components/RecentProjects'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export default function Home() {
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
