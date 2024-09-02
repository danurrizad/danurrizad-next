"use client"
import React from 'react'
// import Header from '@/components/header'
import Header2 from '@/components/header2'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll_top'
import { Carousel, IconButton } from "@material-tailwind/react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import Image from "next/image"

const Project5 = () => {
  return (
    <div>
        <Header2/>
        <div className="bg-primary4 flex flex-col items-center">
            <ScrollToTop />
            <div className=' 2xl:w-[1200px] w-full 2xl:px-20 xl:px-36 lg:px-32 md:px-24 px-4 pt-40 h-full'>
                <h1 className='text-center text-[37px] pb-10 font-anton text-primary1'>Dengar</h1>
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
                        <Image width={1920} height={1080} src="/img/project-5.png" alt="project5-1" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080} src="/img/project5/project-5-1.png" alt="project5-2" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080} src="/img/project5/project-5-2.png" alt="project5-3" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080} src="/img/project5/project-5-3.png" alt="project5-4" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080} src="/img/project5/project-5-5.png" alt="project5-5" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080} src="/img/project5/project-5-6.png" alt="project5-6" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080} src="/img/project5/project-5-7.png" alt="project5-7" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080} src="/img/project5/project-5-8.png" alt="project5-8" className="h-full w-full object-cover"/>
                    </Carousel>
                </div>

                <section className='pt-20'>
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] text-[22px] text-primary1'>Project Overview</h1>
                    <p className='2xl:text-[20px] md:text-[27px] text-[17px]'>
                        This project is a freelance project from BPJS Ketenagakerjaan. Developed for approximately 2 months. 
                        Starting with designin the interface using Figma and then start to develop the frontend using Next.js.
                    </p>

                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Features App</h1>
                    <div>
                        <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                            <li>Speech recognition and converts it into text</li>
                            <li>Saving the records file</li>
                            <li>Creating a case report with speech interview</li>
                            <li>History for user case reports</li>
                            <li>Create, edit, update, and delete case reports</li>
                            <li>Signature add on case report</li>
                        </ul>
                    </div>
                    
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Tech Stack</h1>
                    <div className='text-primary1 flex-wrap flex justify-start gap-6 2xl:text-[20px] md:text-[27px] text-[17px]'>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md first-slide'>Next.js</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Figma</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>TailwindCSS</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Firebase</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Github</span>
                    </div>
                    
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] pb-20 text-primary1'>Link to Projects</h1>
                    <div>
                        <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Project5