import React from 'react'
import { FaSquareWhatsapp, FaLinkedin , FaSquareInstagram} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-primary2 py-10 flex flex-col items-center">
        <div className='bg-primary2 2xl:w-[1200px] w-full 2xl:px-20 px-4'>
            <div className='flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between 2xl:gap-20 gap-10 text-white text-[14px]'>
                <div className='2xl:w-1/2 xl:w-1/2 lg:w-1/2'>
                    <h1 className='pb-4 md:text-[19px] font-anton'>DRYAND</h1>
                    <h2 className='md:text-[19px]'>Frontend Developer: Weaving code into attractive website with responsive and visually stunning designs.</h2>
                </div>
                <div>
                    <h1 className='pb-4 md:text-[19px] font-anton'>SOCIAL MEDIA</h1>
                    <h2 className='flex flex-col justify-start items-start md:text-[19px]'>
                        <a href='https://wa.me/6287783816396' className='flex justify-center items-center gap-2 hover:underline'><FaSquareWhatsapp/>+6287783816396</a>
                        <a href='https://www.linkedin.com/in/danurrizad/' className='flex justify-center items-center gap-2 hover:underline'><FaLinkedin/>Danurrizad Ryan Darmoko</a>
                        <a href='https://www.instagram.com/danurrizad_/' className='flex justify-center items-center gap-2 hover:underline'><FaSquareInstagram/>@danurrizad_</a>
                    </h2>
                </div>
            </div>
            <div className='text-white text-center w-full border-b-2 pt-10'></div>
            <div>
                <h1 className='text-white text-center pt-10 text-[11px] md:text-[17px]'>©Copyright 2024. Made by <span className='hover:underline'><a href='/'>Danurrizad Ryan Darmoko</a></span></h1>
            </div>
        </div>
    </div>
  )
}

export default Footer