/* eslint-disable react/no-unescaped-entities */
"use client"; 
import {useState, useEffect} from 'react'
import Sidebar from './sidebar';


const LandingPage = () => {
    const [text, setText] = useState('');
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

  return (
    <div>
        <Sidebar/>
        <div id="home" className='2xl:px-40 xl:px-36 lg:px-32 md:px-24 px-4 py-40 bg-primary4 min-h-screen background-pattern'>
            <div className='flex justify-center items-center'>
              <div className='flex flex-col items-start'>
                <h1 className='text-primary1 2xl:text-[72px] xl:text-[72px] lg:text-[64px] md:text-[72px] text-[36px] font-anton'>Hi, I'm
                    <div className='typewriter underline'>{text}<span className="animate-blink">|</span></div>
                </h1>
                <h2 className='2xl:text-[32px] xl:text-[30px] lg:text-[28px] md:text-[32px] text-[22px]' >Frontend Developer: Weaving code into attractive website with responsive and visually stunning designs</h2>
              </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage