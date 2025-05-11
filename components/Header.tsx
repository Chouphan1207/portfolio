'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';
import ModeToggle from '@/components/Themes';
import UserGrid from './UserGrid';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(false); // new state

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 3400);

    return () => clearTimeout(timer);
  }, []);

  // Scroll-based hide/show behavior
  useEffect(() => {
    if (!showHeader) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 80);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, showHeader]);

  if (!showHeader) return null; // hide header entirely until after intro

  return (
    <header
      className={`fixed top-0 w-full z-[9999] transition-transform duration-500 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className='py-5 w-full flex justify-center items-center bg-background/70 backdrop-blur-md shadow-md h-20'>
        <div className='w-full md:px-1 max-w-screen-xl mx-auto'>
          <div className='flex justify-between items-center gap-10'>
            <Link href="/">
              <div className='rounded-sm overflow-hidden'>
                <Image src={"/Logo.png"} alt="Logo" height={80} width={80} />
              </div>
            </Link>

            <Nav />

            <div className='flex items-center gap-20'>
              <ModeToggle />
              <UserGrid />
              <div className='lg:hidden xl:hidden'>
                <MobileNav />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
