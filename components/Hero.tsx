'use client'

import React from 'react'
import { cn } from "@/utils/cn";
import { Spotlight } from '@/components/ui/Spotlight';
import MagicButton from './ui/MagicButton';
import { FaFileSignature } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { useTheme } from 'next-themes';
import { WavyBackground } from './ui/WavyBackground';


const Hero = () => {
  const { theme } = useTheme();

  return (
    <WavyBackground className="relative w-full h-full lg:-mt-5 lg:mx-5">
      {/* Background Spotlights */}
      <div>
        <Spotlight className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#3fc1c0" />
        <Spotlight className=" -top-10 left-full h-[80vh] w-[50vw]" fill="#0899ba" />
        <Spotlight className=" top-28 left-80 h-[80vh] w-[50vw]" fill="#1c558e" />
      </div>

      {/* Hero Section */}
      <div className="relative flex mt-20 py-0 xs:py-2 sm:py-2 xs:w-full sm:w-full items-center justify-center overflow-hidden">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl w-full mx-5">
          
          {/* Left Column: Text Content */}
          <div className="flex-2 flex flex-col items-center md:items-start justify-center space-y-4 order-2 xl:order-none">
            <h2 className="uppercase tracking-widest text-sm text-center md:text-left text-primary max-w-80 z-10">
              Dynamic Web Magic with Next.js
            </h2>

            <TextGenerateEffect 
              words='Building with Passion. Growing with Code.'
              className='text-5xl text-center md:text-6xl lg:text-7xl md:text-left lg:text-left xl:text-left'
            />

            <p className="text-center md:text-left max-w-2xl text-sm md:text-lg lg:text-2xl text-secondary-foreground tracking-wide mb-4 z-10">
              Hi, I&apos;m Tin, a Full-stack freshman based in Ho Chi Minh City, VietNam.
            </p>

            <a href="#about" className="w-full flex justify-center">
            <MagicButton
              title="My Resumé"
              icon={<FaFileSignature />}
              position="right"
              otherClasses="sm:mt-4"
              handleClick={() =>
                window.open(
                  "https://drive.google.com/file/d/16_KDCjM10A5jgRFTQKvMYIt_LVXsa6T2/view?usp=sharing"
                )
              }
            />
            </a>
          </div>

          {/* Right Column: Portrait */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.3, duration: 0.4, ease: "easeInOut" },
            }}
            className={cn(
              "order-1 md:order-2 xl:mb-0 w-78 h-80 flex items-center justify-center rounded-full relative",
              theme === "dark" ? "mix-blend-lighten" : ""
            )}
          >
            <Image
              src="/hero.jpg"
              alt="Tin Phan"
              priority
              quality={100}
              width={300}
              height={300}
              className="object-contain rounded-full"
            />
            <motion.svg
              className="absolute inset-0 w-full h-full"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="var(--card-foreground)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </WavyBackground>
  )
}

export default Hero;
