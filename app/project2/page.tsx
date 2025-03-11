"use client"
import React from 'react'
// import Header from '@/components/header'
import Header2 from '@/components/header2'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll_top'
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"

const Project2 = () => {
  return (
    <div>
        <Header2/>
        <div className="bg-primary4 flex flex-col items-center">
            <ScrollToTop />
            <div className='2xl:w-[1200px] w-full h-full bg-primary4 2xl:px-20 xl:px-36 lg:px-32 md:px-24 px-4 py-40 pb-0'>
                <h1 className='text-center text-[37px] pb-10 font-anton text-primary1'>SkinFirst</h1>
                <div className='flex justify-center w-full  bg-transparent p-0 rounded-xl duration-[3000ms] overflow-hidden'>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true
                        }}
                        plugins={[
                            Autoplay({
                              delay: 2000,
                            }),
                          ]}
                        className="w-100"
                        >
                        <CarouselContent className='h-50'>
                            { Array.from({ length: 5 }, (_, i) => i + 1).map((number, index)=>(
                                <CarouselItem key={index}>
                                    <div className="rounded-xl flex h-full items-center justify-center relative overflow-hidden">
                                    <Image src={`/img/project2/project-2-${index}.png`} alt={`project2-${index}`} height={800} width={1600} className=''/>
                                    </div>
                                </CarouselItem>

                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                    {/* <Image width={1920} height={1080} src="/img/project-3.png" alt="" className="h-full w-full object-cover"/>
                    <Image width={1920} height={1080} src="/img/project3/project-3-0.png" alt="" className="h-full w-full object-cover"/>
                    <Image width={1920} height={1080} src="/img/project3/project-3-1.png" alt="" className="h-full w-full object-cover"/>
                    <Image width={1920} height={1080} src="/img/project3/project-3-2.png" alt="" className="h-full w-full object-cover"/>
                    <Image width={1920} height={1080} src="/img/project3/project-3-3.png" alt="" className="h-full w-full object-cover"/>
                    <Image width={1920} height={1080} src="/img/project3/project-3-4.png" alt="" className="h-full w-full object-cover"/> */}

                <section className='pt-20'>
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] text-[22px] text-primary1'>Project Overview</h1>
                    <p className='2xl:text-[20px] md:text-[27px] text-[17px]'>
                    This is one of my project from my campus, called the Senior Project. This project applies web development, cloud computing, 
                    and artificial intelligence. The project was developed and completed in approximately 3 months.
                    </p>
                    <p className='2xl:text-[20px] md:text-[27px] text-[17px] pt-4'>
                    This project was developed on the backend as the server side and the frontend as the client side. 
                    This project uses the MERN stack as its main tech stack.
                    </p>

                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Features App</h1>
                    <div>
                        <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                            <li>Login and register user using ExpressJS and MongoDB as the database</li>
                            <li>Skin trivia input</li>
                            <li>Skin disease classification using uploaded images</li>
                            <li>Save a diagnose to user history</li>
                            <li>Backend server is still on localhost</li>
                        </ul>
                    </div>

                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Tech Stack</h1>
                    <div className='text-primary1 flex-wrap flex justify-start gap-6 2xl:text-[20px] md:text-[27px] text-[17px]'>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>MongoDB</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Express</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>React</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>NodeJS</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>TailwindCSS</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Flask</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Github</span>
                    </div>
                    
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Link to Projects</h1>
                    <div className="pb-20">
                        <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                            <li>Repository: <a href='https://github.com/danurrizad/SkinFirst' className='hover:underline'>https://github.com/danurrizad/SkinFirst</a></li>
                            <li>Live web : <a href='https://skin-first.vercel.app/' className='hover:underline'>https://skin-first.vercel.app/</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Project2