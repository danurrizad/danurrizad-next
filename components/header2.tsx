"use client"
import React, { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    const lastHash = useRef('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='fixed z-50 w-screen bg-primary2 flex justify-center shadow-sm shadow-black'>
            <div className='relative z-20 flex w-[1200px] items-center justify-between 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] 2xl:px-20 xl:px-20 lg:px-20 md:px-20 px-4 2xl:py-5 xl:py-4 py-3 bg-primary2 text-white font-anton'>
                <div>
                    <a href="/#home">D R Y A N D</a>
                </div>
                <div className='hidden md:flex justify-center 2xl:gap-6'>
                    <a href="/#about" className='px-4 rounded-lg btn-2'>About</a>
                    <a href="/#projects" className='px-4 rounded-lg btn-2'>Projects</a>
                    <a href="/#slicing-web" className='px-4 rounded-lg btn-2'>Slicing Web</a>
                    <a href="/#contact" className='px-4 rounded-lg btn-2'>Contact</a>
                </div>
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu} className='focus:outline-none'>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? "h-[250px]" : "h-0"} md:hidden absolute overflow-hidden top-0 z-10 bg-primary2 bg-opacity-25 backdrop-blur-2xl text-white flex flex-col items-center w-full px-4 py-3 pt-0 duration-300`}>
                  <a href="/#about" className='py-2 pt-16 w-full text-center rounded-lg btn-2'>About</a>
                  <a href="/#projects" className='py-2 w-full text-center rounded-lg btn-2'>Projects</a>
                  <a href="/#slicing-web" className='py-2 w-full text-center rounded-lg btn-2'>Slicing Web</a>
                  <a href="/#contact" className='py-2 w-full text-center rounded-lg btn-2'>Contact</a>
              </div>
        </div>
    )
}

export default Header;
