/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import SlideInFromLeft from './slide_left'
import SlideInFromRight from './slide_right'
import ScrollToTop from './scroll_top'
import { FaFilePdf } from "react-icons/fa6";

export default function About() {
  
  const handleDownload = () =>{

  }

    return (
    // <div id='about' className='min-h-screen bg-primary1 2xl:px-40 xl:px-36 lg:px-32 md:px-32 px-4 pt-40'>
    <div className="bg-primary1 flex flex-col items-center overflow-x-hidden">
        <div id='about' className='justify-center pt-40 2xl:w-[1200px]  w-full 2xl:px-0 px-2'>
            <h1 className='text-center text-primary4 text-[42px] pb-10 font-anton'>About Me</h1>
            <div className='text-primary4 flex 2xl:flex-row xl:flex-row lg:flex-row flex-col items-center justify-between gap-0'>
                    <SlideInFromRight>
                        {/* <div className=' 2xl:pl-20 xl:pl-20 lg:pl-20 flex flex-col justify-between 2xl:gap-20 xl:gap-10 lg:gap-10 md:gap-20 gap-20 2xl:text-[21px] xl:text-[15px] lg:text-[16px] md:text-[27px] text-[17px]'> */}
                        <div className=' grid 2xl:grid-cols-2 2xl:px-20 2xl:gap-40 xl:gap-10 lg:gap-10 md:gap-20 gap-20 2xl:text-[21px] xl:text-[15px] lg:text-[16px] md:text-[27px] text-[17px]'>
                            <div className='flex flex-col gap-4 justify-center'>
                                <h2 className=' 2xl:text-left xl:text-left lg:text-left text-center' >I'm a fresh graduate from Information Engineering at Universitas Gadjah Mada with 1.5 years of experience in frontend web development. I have a strong passion in software engineering, especially <span className=' font-extrabold'>Frontend Web Development</span>. </h2>
                                <div className="flex gap-2 items-center 2xl:justify-center xl::justify-center lg:justify-center justify-center px-4 py-2 2xl:w-full xl:w-full lg:w-full rounded-md bg-primary4 text-primary1">
                                    <FaFilePdf/>
                                    My Resume : <a href="/files/Resume_Danurrizad Ryan Darmoko.pdf" download="Resume-Danurrizad Ryan Darmoko.pdf" className="hover:underline ">Download</a>
                                </div>
                            </div>
                            <div className='w-full pb-10 2xl:text-[21px] xl:text-[15px] lg:text-[16px] md:text-[27px] text-[17px]' >
                                <h1 className='text-center text-primary4 p-4 font-bold pt-10' >My Skills</h1>
                                <div className='text-primary1 flex-wrap 2xl:px-0 xl:px-0 lg:px-0 md:px-0 px-4 flex justify-center lg:gap-4 gap-6'>
                                    <div className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md first-slide'>
                                        <Image loading='lazy' className='2xl:w-16 xl:w-14 lg:w-12  w-14' width={70} height={70}  src="/img/logo/logo-html.png" alt="logo-html"/>
                                        <span className="gradient-text">HTML</span>
                                    </div>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-16 xl:w-14 lg:w-12  w-14' width={70} height={70}  src="/img/logo/logo-css.png" alt="logo-css"/>
                                        <span className="gradient-text">CSS</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-16 xl:w-14 lg:w-12  w-14' width={70} height={70}  src="/img/logo/logo-js.png" alt="logo-js"/>
                                        <span className="gradient-text">JavaScript</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-24 xl:w-20 lg:w-16  w-20' width={100} height={70}  src="/img/logo/logo-tailwind.png" alt="logo-tailwind"/>
                                        <span className="gradient-text">TailwindCSS</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-16 xl:w-16 lg:w-16  w-16' width={50} height={50}  src="/img/logo/logo-bootstrap.png" alt="logo-bootstrap"/>
                                        <span className="gradient-text">Bootstrap</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-16 xl:w-16 lg:w-14  w-14' width={70} height={70}  src="/img/logo/logo-react.png" alt="logo-react"/>
                                        <span className="gradient-text">ReactJS</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-14 xl:w-16 lg:w-14  w-14' width={70} height={70}  src="/img/logo/logo-node.png" alt="logo-node"/>
                                        <span className="gradient-text">NodeJS</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-16 xl:w-16 lg:w-14  w-14' width={70} height={70}  src="/img/logo/logo-next.png" alt="logo-next"/>
                                        <span className="gradient-text">NextJS</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-16 xl:w-16 lg:w-14  w-14' width={70} height={70}  src="/img/logo/logo-mssql.png" alt="logo-mssql"/>
                                        <span className="gradient-text">MS SQL</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-16 xl:w-16 lg:w-14  w-14' width={70} height={70}  src="/img/logo/logo-mongodb.png" alt="logo-mongodb"/>
                                        <span className="gradient-text">MongoDB</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-16 xl:w-16 lg:w-14  w-14' width={70} height={70}  src="/img/logo/logo-wordpress.png" alt="logo-wordpress"/>
                                        <span className="gradient-text">Wordpress</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-15 xl:w-16 lg:w-16  w-14' width={90} height={90}  src="/img/logo/logo-firebase.png" alt="logo-firebase"/>
                                        <span className="gradient-text">Firebase</span>
                                    </span>
                                    <span className='hover:bg-primary2 hover:border-primary4 text-container border-2 cursor-pointer flex flex-col items-center justify-between bg-primary4 duration-300 2xl:px-4 px-2 py-2 rounded-md'>
                                        <Image loading='lazy' className='2xl:w-20 xl:w-16 lg:w-16  w-14' width={90} height={90}  src="/img/logo/logo-figma.png" alt="logo-figma"/>
                                        <span className="gradient-text">Figma</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SlideInFromRight>
            </div>
            <div >
                {/* <SlideInFromLeft>
                    
                </SlideInFromLeft> */}
            </div>
        </div>
    </div>
  )
}