'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext({ isLoadingDone: false });

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoadingDone, setIsLoadingDone] = useState(false);

  useEffect(() => {
    const totalDuration = 1500 + 500 + 700; // Loading + blue backdrop delay + animation
    const timer = setTimeout(() => {
      setIsLoadingDone(true);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoadingDone }}>
      {children}
    </LoadingContext.Provider>
  );
};
