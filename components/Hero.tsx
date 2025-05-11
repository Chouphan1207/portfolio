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
import InfiniteScrollTools from './ui/InfiniteScrolling';


const projects = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

const Hero = () => {
  const { theme } = useTheme();

  return (
    <><WavyBackground className="relative w-full h-full lg:-mt-5 lg:mx-5">
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
              className='text-5xl text-center md:text-6xl lg:text-7xl md:text-left lg:text-left xl:text-left' />

            <p className="text-center md:text-left max-w-2xl text-sm md:text-lg lg:text-2xl text-secondary-foreground tracking-wide mb-4 z-10">
              Hi, I&apos;m Tin, a Full-stack freshman based in Ho Chi Minh City, VietNam.
            </p>

            <a href="#about" className="w-full flex justify-center">
              <MagicButton
                title="My Resumé"
                icon={<FaFileSignature />}
                position="right"
                otherClasses="sm:mt-4"
                handleClick={() => window.open(
                  "https://drive.google.com/file/d/16_KDCjM10A5jgRFTQKvMYIt_LVXsa6T2/view?usp=sharing"
                )} />
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
              className="object-contain rounded-full" />
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
                }} />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </WavyBackground>
    <InfiniteScrollTools />
    </>
  )
}

export default Hero;
