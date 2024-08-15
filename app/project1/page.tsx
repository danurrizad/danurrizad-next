"use client"
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll_top'
import { Carousel } from "@material-tailwind/react";
import Image from "next/image"

const Project1 = () => {
  return (
    <div>
        <Header/>
        <ScrollToTop />
        <div className='min-h-screen bg-primary4 2xl:px-40 xl:px-36 lg:px-32 md:px-24 px-4 py-40 pb-0'>
            <h1 className='text-center text-[37px] pb-10 font-anton'>NFT Emporium</h1>
            <div className='flex justify-center'>
                <Carousel loop autoplay className="rounded-xl 2xl:w-3/4 pb-20 z-0" placeholder={<div>Loading...</div>}>
                   <Image width={1920} height={1080} src="/img/project-4.png" alt="" className="h-full w-full object-cover"/>
                   {/* <img src="/img/project1/project4-.png" alt="" className="h-full w-full object-cover"/> */}
                   <Image width={1920} height={1080} src="/img/project4/project-4-2.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project4/project-4-3.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project4/project-4-4.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project4/project-4-5.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project4/project-4-6.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project4/project-4-7.png" alt="" className="h-full w-full object-cover"/>
                   <Image width={1920} height={1080} src="/img/project4/project-4-8.png" alt="" className="h-full w-full object-cover"/>
                </Carousel>
            </div>

            <section className='pb-20'>
                <h1 className='font-bold 2xl:text-[34px] md:text-[36px] text-[22px]'>Project Overview</h1>
                <p className='2xl:text-[20px] md:text-[27px] text-[17px]'>
                    This project is a project from an internship at the company PT Graphie Global Interactive. 
                    The internship program lasted for 4 months, but this project was developed and completed for approximately 1 month.
                    Starting with the full-stack development of an NFT minting website, the company provided work to continue developing the frontend side of the NFT marketplace website.
                </p>

                <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px]'>Features App</h1>
                <div>
                    <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                        <li>Connect wallet using Metamask</li>
                        <li>Minting token using ERC-20</li>
                        <li>Minting and listing NFT using ERC-721</li>
                        <li>GoerliETH as the cryptocurrency server</li>
                        <li>Trading and transfer ownership</li>
                    </ul>
                </div>
                
                <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px]'>Tech Stack</h1>
                <div className='text-primary1 flex-wrap flex justify-start gap-6 2xl:text-[20px] md:text-[27px] text-[17px]'>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md first-slide'>React</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>TailwindCSS</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Infura</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Web3</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Smart Contract</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Solidity</span>
                    <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Github</span>
                </div>
                
                <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px]'>Link to Projects</h1>
                <div>
                    <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                        <li>Repository: <a href='https://github.com/danurrizad/web-nft-marketplace' className='hover:underline'>https://github.com/danurrizad/web-nft-marketplace</a></li>
                        {/* <li>Live web : <a href='' className='hover:underline'></a></li> */}
                    </ul>
                </div>
            </section>
        </div>
        <Footer/>
    </div>
  )
}

export default Project1