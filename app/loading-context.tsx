'use client'
import React, { createContext, useContext, useState, useCallback } from 'react'

const LoadingContext = createContext<{
  isLoadingDone: boolean
  markLoadingDone: () => void
}>({
  isLoadingDone: false,
  markLoadingDone: () => {},
})

export const useLoading = () => useContext(LoadingContext)

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoadingDone, setIsLoadingDone] = useState(false)

  const markLoadingDone = useCallback(() => {
    setIsLoadingDone(true)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoadingDone, markLoadingDone }}>
      {children}
    </LoadingContext.Provider>
  )
}
