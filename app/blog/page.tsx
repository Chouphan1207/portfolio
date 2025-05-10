'use client'

import { blogItems } from '@/components/data'
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/DraggableCard'
import React from 'react'
import PostFeed from './PostFeed'
import { Spotlight } from '@/components/ui/Spotlight'
import Widgets from './Widgets'
import { motion } from 'framer-motion'
import SignUpPrompt from './SignUpPrompt'
import CommentModal from './modals/CommentModal'

const Blogpage = () => {
  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5, ease: "easeIn" } }}
    className='relative overflow-hidden'>
      <div>
        <Spotlight className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#3fc1c0" />
        <Spotlight className=" -top-10 left-[80%] h-[80vh] w-[40vw]" fill="#0899ba" />
        <Spotlight className=" top-28 left-80 h-[80vh] w-[50vw]" fill="#1c558e" />
      </div>
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden">
          <p className="absolute top-90 mx-auto max-w-sm font-bold -translate-y-3/4 lg:ml-10 text-center text-7xl font-primary">
            Welcome to my Blog
          </p>
          {blogItems.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-card">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
          <div className=' min-h-screen w-full text-primary max-w-7xl mx-auto flex pt-180 justify-center'>
            <PostFeed/>
            <Widgets/>
          </div>
          <CommentModal/>
     </DraggableCardContainer>
    </motion.div>
    <SignUpPrompt/>
    </>
  )
}

export default Blogpage