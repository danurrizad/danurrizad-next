"use client"
import React, {useRef, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';


const Header = () => {
    const router = useRouter();
  const lastHash = useRef('');

  useEffect(() => {
    if (window.location.hash) {
      lastHash.current = window.location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [router]); // Use router.pathname instead of location

  return (
    <div className='fixed w-screen 2xl:py-10 xl:py-10 lg:py-10 md:py-10 py-4 2xl:px-64 xl:px-56 lg:px-48 md:px-32 px-4 z-50'>
        <div className='flex items-center justify-between 2xl:text-[27px] xl:text-[25px] lg:text-[20px] md:text-[19px] 2xl:px-20 xl:px-20 lg:px-20 md:px-20 px-4 2xl:py-5 xl:py-4 py-3 bg-primary2 text-white rounded-2xl shadow-md shadow-black font-anton'>
            <div className=''>
                <a href="/#home">D R Y A N D</a>
            </div>
            <div className='flex justify-center 2xl:gap-6'>
                <a href="/#about" className='px-4 rounded-lg btn-2'>About</a>
                <a href="/#projects" className='px-4 rounded-lg btn-2'>Projects</a>
                <a href="/#contact" className='px-4 rounded-lg btn-2'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Header