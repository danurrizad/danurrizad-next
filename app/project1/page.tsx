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

const Project1 = () => {
  return (
    <div>
        <Header2/>
        <div className="bg-primary4 flex flex-col items-center">
            <ScrollToTop />
            <div className='2xl:w-[1200px] w-full bg-primary4 2xl:px-20 xl:px-36 lg:px-32 md:px-24 px-4 py-40 pb-0'>
                <h1 className='text-center text-[37px] pb-10 font-anton text-primary1'>NFT Emporium</h1>
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
                                    <Image src={`/img/project1/project-1-${index}.png`} alt={`project1-${index+1}`} height={800} width={1600} className=''/>
                                    </div>
                                </CarouselItem>

                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <section className='pt-10 pb-20'>
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] text-[22px] text-primary1'>Project Overview</h1>
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
                    
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Tech Stack</h1>
                    <div className='text-primary1 flex-wrap flex justify-start gap-6 2xl:text-[20px] md:text-[27px] text-[17px]'>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md first-slide'>React</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>TailwindCSS</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Infura</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Web3</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Smart Contract</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Solidity</span>
                        <span className='bg-white border-primary1 border-solid border-2 px-4 py-2 rounded-md'>Github</span>
                    </div>
                    
                    <h1 className='font-bold 2xl:text-[34px] md:text-[36px] pt-10 text-[22px] text-primary1'>Link to Projects</h1>
                    <div>
                        <ul className='list-disc px-4 2xl:text-[20px] md:text-[27px] text-[17px]'>
                            <li>Repository: <a href='https://github.com/danurrizad/web-nft-marketplace' className='hover:underline'>https://github.com/danurrizad/web-nft-marketplace</a></li>
                            {/* <li>Live web : <a href='' className='hover:underline'></a></li> */}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Project1