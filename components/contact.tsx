import React from 'react'
import { FaSquareEnvelope, FaSquarePhone, FaLocationDot  } from "react-icons/fa6";
import SlideInFromLeft from './slide_left'
import SlideInFromRight from './slide_right'
import Image from 'next/image';

const Contact = () => {
  return (
    <div id='contact' className='min-h-screen 2xl:px-40 xl:px-36 lg:px-32 md:px-24 px-4 pt-40 pb-0 lg:pb-0 md:pb-10 background-pattern2'>
        <h1 className='text-center text-primary4 text-[42px] pb-10 font-anton'>Contact</h1>
        <div className='text-primary4 flex 2xl:flex-row lg:flex-row 2xl:items-start xl:items-start lg:items-start items-center flex-col-reverse justify-between 2xl:gap-40 xl:gap-32 lg:gap-24'> 
            <SlideInFromLeft>
              <div className='2xl:w-[40vw] xl:w-[40vw] lg:w-[40vw] 2xl:gap-20 xl:gap-10 lg:gap-10 md:gap-20 gap-20 '>
                  <h1 className='2xl:text-[37px] xl:text-[32px] lg:text-[27px] md:text-[32px] text-[22px]'>Feel free to reach me out through this contacts </h1>
                  <h1 className='2xl:text-[21px] xl:text-[19px] lg:text-[16px] md:text-[27px] text-[16px] flex items-center gap-2'><FaSquareEnvelope/>Email : <a href='mailto:danurrizad242@gmail.com' className='hover:underline'>danurrizad242@gmail.com</a></h1>
                  <h1 className='2xl:text-[21px] xl:text-[19px] lg:text-[16px] md:text-[27px] text-[16px] flex items-center gap-2'><FaSquarePhone />Phone : <a href='https://wa.me/6287783816396' className='hover:underline'>+6287783816396</a></h1>
                  <h1 className='2xl:text-[21px] xl:text-[19px] lg:text-[16px] md:text-[27px] text-[16px] flex items-center gap-2'><FaLocationDot />Address : <a href='' className='hover:underline'>Yogyakarta</a></h1>
              </div>
            </SlideInFromLeft>

            <div className='w-fit'>
              <SlideInFromRight>
                <Image loading='lazy' width={1300} height={300} className='2xl:w-full xl:w-4/6 lg:w-full w-4/6 transform scale-x-[-1]' src="/img/profile-picture-1.png" alt='profile-picture'/>
              </SlideInFromRight>
            </div>
            
        </div>
    </div>
  )
}

export default Contact