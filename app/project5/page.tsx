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

const Project5 = () => {
  return (
    <div>
        <Header2/>
        <div className="bg-primary4 flex flex-col items-center">
            <ScrollToTop />
            <div className=' 2xl:w-[1200px] w-full 2xl:px-20 xl:px-36 lg:px-32 md:px-24 px-4 pt-40 h-full'>
                <h1 className='text-center text-[37px] pb-10 font-anton text-primary1'>Dengar</h1>
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
                            { Array.from({ length: 8 }, (_, i) => i + 1).map((number, index)=>(
                                <CarouselItem key={index}>
                                    <div className="rounded-xl flex h-full items-center justify-center relative overflow-hidden">
                                    <Image src={`/img/project5/project-5-${index}.png`} alt={`project5-${index}`} height={800} width={1600} className=''/>
                                    </div>
                                </CarouselItem>

                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
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