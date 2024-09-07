/* eslint-disable react/no-unescaped-entities */
"use client"; 
import {useState, useEffect} from 'react'
import Sidebar from './sidebar';
import { FaArrowDown } from "react-icons/fa6";
import Image from 'next/image';


const LandingPage = () => {
    const [text, setText] = useState('');
    // const phrase = 'Web Developer';
    const phrase = 'Danurrizad Ryan Darmoko';

    useEffect(() => {
        let index = 0;
        let letter;
    
        const type = () => {
          letter = phrase.slice(0, ++index);
          setText(letter);
    
          if (letter.length === phrase.length) {
            // Animation complete
          } else {
            setTimeout(type, 300); // Typing speed
          }
        };
    
        type();
      }, []);

    const [isDeveloper, setIsDeveloper] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsDeveloper((prev) => !prev);
      }, 2000); // Ganti setiap 2 detik

      return () => clearInterval(interval);
    }, []);

  return (
    <div>
        <div className="background-pattern flex justify-center">
          {/* <div id="home" className='z-0 2xl:px-80 xl:px-36 lg:px-32 md:px-24 px-4 pt-40 h-full'> */}
          <div id="home" className='z-0 2xl:w-[1200px] w-full 2xl:px-0 xl:px-36 lg:px-32 md:px-24 px-4 pt-40 h-full relative'>
            <div className='absolute z-40 w-full top-1/2 2xl:pl-20 pl-0 -translate-y-1/4 '>
              <div className='2xl:text-[180px] text-[60px] font-anton text-transparent select-none flex justify-center'>
                  <div className='text-stroke-primary1 w-full 2xl:text-stroke-3 text-stroke-1 flex justify-center relative 2xl:gap-10 gap-2 overflow-hidden z-10'>
                    <p className="w-fit">WEB {' '}</p>
                    <span className=" w-full">
                      <span
                        className={`absolute transition-transform duration-500 ${
                          isDeveloper ? 'animate-scrollUp' : 'animate-scrollDown'
                        }`}
                      >
                        DEVELOPER
                      </span>
                      <span
                        className={`absolute transition-transform duration-500 ${
                          !isDeveloper ? 'animate-scrollUp' : 'animate-scrollDown'
                        }`}
                      >
                        DESIGNER
                      </span>
                    </span>
                  </div>
              </div>
            </div>
            <Sidebar/>
            <div className="flex flex-col justify-center items-center ">
              <h1 className='text-primary1 2xl:text-[54px] xl:text-[72px] lg:text-[64px] md:text-[72px] text-[32px] font-anton text-center'>Hi, I'm 
                  <div className='typewriter underline'> {text}<span className="animate-blink">|</span></div>
              </h1>
              <h1 className=" text-center 2xl:text-[28px] text-[20px] z-30 relative">
              "Weaving code into attractive website with responsive and visually stunning designs"
              </h1>
            </div>
            {/* <div className="absolute left-1/2 -translate-x-1/2 2xl:text-[72px] xl:text-[72px] lg:text-[64px] md:text-[72px] text-[36px] font-anton">
              <div className='typewriter underline'> Web Developer<span className="animate-blink">|</span></div>
            </div> */}
            <div className="flex justify-center 2xl:pt-10 pt-32 w-full relative">
              <Image className="z-40" loading='lazy' src="/img/profile-picture-1.png" height={300} width={300} alt="profile-picture"/>
              <div className="bg-primary2 2xl:w-[500px] 2xl:h-[300px] w-[375px] h-[300px] rounded-t-full absolute bottom-0 left-1/2 -translate-x-1/2 z-10"></div>
            </div>
            {/* <div className="bg-white absolute bottom-1/3 translate-y-1/2 h-[200px] flex items-center">
              Frontend Web Developer
            </div> */}

              {/* <div className='flex justify-center items-center'>
                <div className='flex flex-col items-center'>
                  <div className="bg-primary1 pt-10 px-10 rounded-t-[100px] ">
                    <Image src="/img/profile-picture-1.png" height={300} width={300} alt="profile-picture"/>
                  </div>
                  <h1 className='text-primary1 2xl:text-[72px] xl:text-[72px] lg:text-[64px] md:text-[72px] text-[36px] font-anton'>Hi, I'm 
                      <span className='typewriter underline'> {text}<span className="animate-blink">|</span></span>
                  </h1>
                  <h2 className='2xl:text-[32px] xl:text-[30px] lg:text-[28px] md:text-[32px] text-[22px]' >Frontend Developer: Weaving code into attractive website with responsive and visually stunning designs</h2>
                </div>
              </div> */}
              {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary2 rounded-md text-white px-10 py-2 2xl:text-[32px] xl:text-[26px] lg:text-[22px] md:text-[48px] text-[32px]">
                <a href="#about" className='font-anton  btn-2'><span className=' flex items-center justify-center gap-2'><FaArrowDown/>Get to know more</span></a>
              </div> */}
          </div>
        </div>
    </div>
  )
}

export default LandingPage