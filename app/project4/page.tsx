/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
// import Header from '@/components/header'
import Header2 from '@/components/header2'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll_top'
import { Carousel, IconButton } from '@material-tailwind/react';
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import Image from 'next/image';

const Project4 = () => {
  return (
    <main>
        <Header2/>
        <div className="bg-primary4 flex flex-col items-center">
            <ScrollToTop />
            <div className='bg-primary4 2xl:w-[1200px] w-full h-full 2xl:px-20 xl:px-36 lg:px-32 md:px-24 px-4 py-40 pb-0'>
                <h1 className='text-center text-[37px] pb-10 font-anton text-primary1'>Batik Management System</h1>
                <div className='flex justify-center w-full  bg-primary2 p-0 rounded-xl duration-[3000ms]'>
                    <Carousel prevArrow={({ handlePrev }) => (
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
                            loop autoplay className="rounded-xl pb-10 z-0" placeholder={<div>Loading...</div>}>
                        <Image width={1920} height={1080}  src="/img/project-1.png" alt="" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080}  src="/img/project1/project1-0.png" alt="" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080}  src="/img/project1/project1-2.png" alt="" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080}  src="/img/project1/project1-3.png" alt="" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080}  src="/img/project1/project1-4.png" alt="" className="h-full w-full object-cover"/>
                        <Image width={1920} height={1080}  src="/img/project1/project1-5.png" alt="" className="h-full w-full object-cover"/>
                    </Carousel>
                </div>

                <section className='pt-10 md:text-[27px]'>
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] text-[22px] text-primary1'>Project Overview</h1>
                    <p className='2xl:text-[20px] md:text-[27px] text-[17px]'>
                        This is a Capstone Project from DTETI FT UGM (Department of Electrical Engineering 
                        and Technology Information Faculty of Engineering Universitas Gadjah Mada). This project is 
                        based on one of problem's topic in Indonesia, which is optimizing SMEs productivity. The solution 
                        that our group made is develop a batik defect detection system and sales forecasting system. 
                        This project was developed and completed within 3 months.
                    </p>

                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Features App</h1>
                    <div> 
                        <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                            <li>Login admin for accessing forecasting section</li>
                            <li>CSV uploading and visualization with Chart.js</li>
                            <li>Forecasting method with Flask</li>
                            <li>Defect detection system with Tensorflow.js </li>
                        </ul>
                    </div>

                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Tech Stack</h1>
                    <div className='text-primary1 flex-wrap flex justify-start gap-6 2xl:text-[20px] md:text-[27px] text-[17px]'>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Vite</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md first-slide'>React</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>TailwindCSS</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Firebase</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Flask</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Github</span>
                    </div>
                    
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Link to Projects</h1>
                    <div className="pb-20">
                        <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                            <li>Repository: <a href='https://github.com/danurrizad/defect-detection-batik-system' className='hover:underline'>https://github.com/danurrizad/defect-detection-batik-system</a></li>
                            <li>Live web : <a href='https://batik-management-system.netlify.app/' className='hover:underline'>https://batik-management-system.netlify.app/</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </main>
  )
}

export default Project4