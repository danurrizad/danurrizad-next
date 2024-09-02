"use client"
import React from 'react'
// import Header from '@/components/header'
import Header2 from '@/components/header2'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll_top'
import { Carousel, IconButton } from "@material-tailwind/react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import Image from "next/image"

const Slicing2 = () => {
  return (
    <div>
        <Header2/>
        <div className="bg-primary1 flex flex-col items-center">
            <ScrollToTop />
            <div className=' 2xl:w-[1200px] w-full 2xl:px-20 xl:px-36 lg:px-32 md:px-24 px-4 pt-40 h-full'>
                <h1 className='text-center text-[37px] pb-10 font-anton text-primary4'>Hangry</h1>
                <div className='flex justify-center w-full  bg-primary2 p-0 rounded-xl duration-[3000ms]'>
                    <Carousel  prevArrow={({ handlePrev }) => (
                                    <IconButton
                                        variant="text"
                                        // color="black"
                                        size="lg"
                                        onClick={handlePrev}
                                        className="!absolute top-2/4 left-4 -translate-y-2/4"
                                        placeholder={""}
                                        >
                                        <FaCircleChevronLeft className="text-[40px] text-primary2"/>
                                    </IconButton>
                                )}
                                nextArrow={({ handleNext }) => (
                                    <IconButton
                                        variant="text"
                                        // color="black"
                                        size="lg"
                                        onClick={handleNext}
                                        className="!absolute top-2/4 !right-4 -translate-y-2/4"
                                        placeholder={""}
                                        >
                                        <FaCircleChevronRight className="text-[40px] text-primary2"/>
                                    </IconButton>
                                )} 
                                loop className="rounded-xl pb-10 z-0 text-black w-full h-full bg-primary2 duration-[3000ms]" placeholder={<div>Loading...</div>}>
                        <Image width={1920} height={1080} src="/img/slicing2/slicing-2-1.png" alt="slicing2-1" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080} src="/img/slicing2/slicing-2-2.png" alt="slicing2-2" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080} src="/img/slicing2/slicing-2-3.png" alt="slicing2-3" className="h-full w-full object-cover"/>
                    </Carousel>
                </div>

                <section className='pt-20'>
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] text-[22px] text-primary4'>Tech Stack</h1>
                    <div className='text-primary1 flex-wrap flex justify-start gap-6 2xl:text-[20px] md:text-[27px] text-[17px]'>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md first-slide'>ReactJS</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Vite</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>TailwindCSS</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Github</span>
                    </div>
                    
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary4'>Link</h1>
                    <div className="text-primary4 pb-20">
                        <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                            <li>Repository: <a href='https://github.com/danurrizad/mbkm-hangry' className='hover:underline'>https://github.com/danurrizad/mbkm-hangry</a></li>
                            <li>Live web : <a href='https://danurrizad-slicing-hangry.netlify.app/' className='hover:underline'>https://danurrizad-slicing-hangry.netlify.app</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Slicing2