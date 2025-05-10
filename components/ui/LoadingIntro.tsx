'use client'
import React, { useState, useEffect } from 'react'

const LoadingIntro = () => {
  const [progress, setProgress] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [backdropCompleted, setBackdropCompleted] = useState(false)
  const [fullyDone, setFullyDone] = useState(false) // 🚨 new state

  const loadingTime = 2000
  const intervalTime = 15
  const increment = (100 / loadingTime) * intervalTime

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setIsCompleted(true)

          // Step 2: Blue backdrop starts after 500ms
          setTimeout(() => {
            setBackdropCompleted(true)

            // Step 3: Wait for backdrop transition (700ms) to finish
            setTimeout(() => setFullyDone(true), 700)
          }, 500)

          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  if (fullyDone) return null // 🚨 wait for everything to finish

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none">
      {/* Blue backdrop */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#566fc1] transition-transform duration-700 ease-in-out ${
          backdropCompleted ? '-translate-y-full' : ''
        }`}
      />

      {/* Black foreground loader */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black flex justify-between items-start transition-transform duration-700 ease-in-out ${
          isCompleted ? '-translate-y-full' : ''
        }`}
      >
        <div className="text-white font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[70px]">
          Inspirux is loading...
        </div>

        <div className="absolute right-4 bottom-6 text-white font-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[200px]">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  )
}

export default LoadingIntro
