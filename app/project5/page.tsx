"use client"
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll_top'
import { Carousel } from "@material-tailwind/react";
import Image from "next/image"

const Project5 = () => {
  return (
    <div>
        <Header/>
        <ScrollToTop />
        <div className='min-h-screen bg-primary4 2xl:px-40 xl:px-36 lg:px-32 md:px-24 px-4 py-40 pb-0'>
            <h1 className='text-center text-[37px] pb-10 font-anton'>Dengar</h1>
            <div className='flex justify-center'>
                <Carousel loop autoplay className="rounded-xl 2xl:w-3/4 pb-20 z-0" placeholder={<div>Loading...</div>}>
                   <Image width={1920} height={1080} src="/img/project-5.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project5/project-5-1.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project5/project-5-2.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project5/project-5-3.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project5/project-5-5.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project5/project-5-6.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project5/project-5-7.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project5/project-5-8.png" alt="" className="h-full w-full object-cover"/>
                </Carousel>
            </div>

            <section className='pb-20'>
                <h1 className='font-bold 2xl:text-[34px] md:text-[36px] text-[22px]'>Project Overview</h1>
                <p className='2xl:text-[20px] md:text-[27px] text-[17px]'>
                    This project is a freelance project from BPJS Ketenagakerjaan. Developed for approximately 2 months. 
                    Starting with designin the interface using Figma and then start to develop the frontend using Next.js.
                </p>

                <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px]'>Features App</h1>
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
                
                <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px]'>Tech Stack</h1>
                <div className='text-primary1 flex-wrap flex justify-start gap-6 2xl:text-[20px] md:text-[27px] text-[17px]'>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md first-slide'>Next.js</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Figma</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>TailwindCSS</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Firebase</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Github</span>
                </div>
                
                <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px]'>Link to Projects</h1>
                <div>
                    <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                        {/* <li>Repository: <a href='https://github.com/danurrizad/web-nft-marketplace' className='hover:underline'>https://github.com/danurrizad/web-nft-marketplace</a></li> */}
                        {/* <li>Live web : <a href='https://dengar-bpjs.vercel.app' className='hover:underline'>https://dengar-bpjs.vercel.app</a></li> */}
                    </ul>
                </div>
            </section>
        </div>
        <Footer/>
    </div>
  )
}

export default Project5