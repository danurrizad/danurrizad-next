"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import SlideInFromLeft from './slide_left'
import SlideInFromRight from './slide_right'
import projectsData from '@/data/myProjects.json'; 
import { FaAnglesDown, FaAnglesUp  } from "react-icons/fa6";


const Projects = () => {
    const [isShow, setIsShow] = useState({
        project1: false,
        project2: false,
        project3: false,
        project4: false,
        project5: false,    
    })
    const [isShowMobile, setIsShowMobile] = useState({
        project1: false,
        project2: false,
        project3: false,
        project4: false,
        project5: false,    
    })

  return (
    // <div id='projects' className='min-h-screen bg-primary4 2xl:p-40 xl:px-36 lg:px-32 md:px-24 px-4 py-40 '>
    <div className="bg-primary4 flex flex-col items-center z-20 relative">
        <div id='projects' className=' 2xl:w-[1200px] w-full 2xl:px-0 px-4 py-40 '>
            <h1 className='text-center text-primary1 text-[42px] pb-10 font-anton'>Projects</h1>
            <div className='flex flex-col justify-start gap-40'>
                
              {/*project 5  */}
              {/* <div id="project5" className="px-20">
                <div className="relative  bg-[#0078C1]">
                    <Image className="shadow-lg shadow-black" src="/img/tes-cover-baru (2).png" alt="project5-cover" height={1080} width={1920}/>

                    <div className='bg-white bg-opacity-75 backdrop-blur-md h-20 bottom-0 z-30 absolute w-full'>
                        <div className={`${isShowMobile.project5 ? "hidden" : "absolute"} z-20 left-1/4  -translate-y-1/3 flex flex-col items-center justify-center`}>
                            <button className={` bg-white p-2 rounded-full text-primary1`} onClick={() => setIsShow(prevState => ({...prevState, project5: !prevState.project5}))}>
                                {!isShow.project5 ? <FaAnglesUp className="text-[32px]"/> : <FaAnglesDown className=" text-[32px]"/>}
                            </button>
                            <h2 className="font-anton text-primary1">Desktop Design</h2>
                        </div>

                        <div className={`${isShow.project5 ? "hidden" : "absolute"} z-20 right-1/4  -translate-y-1/3 flex flex-col items-center justify-center`}>
                            <button className={` bg-white p-2 rounded-full text-primary1`} onClick={() => setIsShowMobile(prevState => ({...prevState, project5: !prevState.project5}))}>
                                {!isShowMobile.project5 ? <FaAnglesUp className="text-[32px]"/> : <FaAnglesDown className=" text-[32px]"/>}
                            </button>
                            <h2 className="font-anton text-primary1">Mobile Design</h2>
                        </div>
                    </div> */}

                    {/* <div className='flex justify-center 2xl:justify-start bg-black'>
                        <a href="/project5" className='button 2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] bg-primary2 text-white px-10 py-2 rounded-md'>
                            Project Details
                        </a>
                    </div> */}

                    {/* <div className={`${isShow.project5 ? "h-full" : "h-0"} z-10 overflow-hidden duration-300 absolute bottom-0 left-0 w-full bg-black bg-opacity-75`}>
                        <div className="text-white py-10 pt-2">
                            <h1 className="font-anton text-center text-[34px]">NFT Marketplace</h1>
                            <div className="flex overflow-hidden space-x-16 mt-20">
                                <div className="flex space-x-16 animate-loop-scroll ">
                                    <Image src="/img/project5/project-5-1.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-2.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-3.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-4.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-5.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-6.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-7.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-8.png" height={500} width={600} alt="Image 1" />
                                </div>
                                <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
                                    <Image src="/img/project5/project-5-1.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-2.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-3.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-4.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-5.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-6.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-7.png" height={500} width={600} alt="Image 1" />
                                    <Image src="/img/project5/project-5-8.png" height={500} width={600} alt="Image 1" />
                                </div>
                                </div>
                        </div>
                    </div>

                    <div className={`${isShowMobile.project5 ? "h-full" : "h-0"} z-0 overflow-hidden duration-300 absolute bottom-0 left-0 w-full bg-black bg-opacity-75`}>
                        <div className="text-white p-10 pt-2">
                            <h1 className="font-anton text-center text-[34px]">NFT Marketplace</h1>
                        </div>
                    </div>
                </div>
                <a href="/project5" className='button mt-4 w-full text-center 2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] text-primary1 px-10 py-2 rounded-md'>
                    Project Details
                </a>
              </div> */}

              {/*project 5  */}
              <SlideInFromLeft>
              <div id="project5" className="2xl:px-20 ">
                <div className="relative   rounded-2xl">
                    <Image src="/img/project-5-cover.png" alt="project5-cover" height={1080} width={1920} className='shadow-md shadow-black rounded-2xl 2xl:rounded-b-2xl rounded-b-none'/>

                    <div className='bg-white 2xl:h-20 h-12 2xl:bg-opacity-25 backdrop-blur-xl z-30 absolute 2xl:bottom-0 w-full flex justify-center  items-center rounded-b-2xl 2xl:shadow-none shadow-md shadow-black'>
                        <a href="/project5" className='button 2xl:w-fit w-full 2xl:h-fit h-full text-center 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[12px] md:text-[28px]  text-primary1 px-10 2xl:py-2 py-0 rounded-2xl 2xl:rounded-t-2xl rounded-t-none'>
                            Project Details
                        </a>
                    </div>

                </div>
              </div>
              </SlideInFromLeft>

              {/*project 4  */}
              <SlideInFromRight>
              <div id="project4" className="2xl:px-20 ">
                <div className="relative   rounded-2xl">
                    <Image src="/img/project-4-cover.png" alt="project4-cover" height={1080} width={1920} className='shadow-md shadow-black rounded-2xl 2xl:rounded-b-2xl rounded-b-none'/>

                    <div className='bg-white 2xl:h-20 h-12 2xl:bg-opacity-25 backdrop-blur-xl z-30 absolute 2xl:bottom-0 w-full flex justify-center  items-center rounded-b-2xl 2xl:shadow-none shadow-md shadow-black'>
                        <a href="/project4" className='button 2xl:w-fit w-full 2xl:h-fit h-full text-center 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[12px] md:text-[28px]  text-primary1 px-10 2xl:py-2 py-0 rounded-2xl 2xl:rounded-t-2xl rounded-t-none'>
                            Project Details
                        </a>
                    </div>

                </div>
              </div>
              </SlideInFromRight>

              {/*project 3  */}
              <SlideInFromLeft>
              <div id="project3" className="2xl:px-20 ">
                <div className="relative   rounded-2xl">
                    <Image src="/img/project-3-cover.png" alt="project3-cover" height={1080} width={1920} className='shadow-md shadow-black rounded-2xl 2xl:rounded-b-2xl rounded-b-none'/>

                    <div className='bg-white 2xl:h-20 h-12 2xl:bg-opacity-25 backdrop-blur-xl z-30 absolute 2xl:bottom-0 w-full flex justify-center  items-center rounded-b-2xl 2xl:shadow-none shadow-md shadow-black'>
                        <a href="/project3" className='button 2xl:w-fit w-full 2xl:h-fit h-full text-center 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[12px] md:text-[28px]  text-primary1 px-10 2xl:py-2 py-0 rounded-2xl 2xl:rounded-t-2xl rounded-t-none'>
                            Project Details
                        </a>
                    </div>

                </div>
              </div>
              </SlideInFromLeft>

              {/*project 2  */}
              <SlideInFromRight>
              <div id="project2" className="2xl:px-20 ">
                <div className="relative   rounded-2xl">
                    <Image src="/img/project-2-cover.png" alt="project2-cover" height={1080} width={1920} className='shadow-md shadow-black rounded-2xl 2xl:rounded-b-2xl rounded-b-none'/>

                    <div className='bg-white 2xl:h-20 h-12 2xl:bg-opacity-25 backdrop-blur-xl z-30 absolute 2xl:bottom-0 w-full flex justify-center  items-center rounded-b-2xl 2xl:shadow-none shadow-md shadow-black'>
                        <a href="/project2" className='button 2xl:w-fit w-full 2xl:h-fit h-full text-center 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[12px] md:text-[28px]  text-primary1 px-10 2xl:py-2 py-0 rounded-2xl 2xl:rounded-t-2xl rounded-t-none'>
                            Project Details
                        </a>
                    </div>

                </div>
              </div>
              </SlideInFromRight>

              {/*project 1  */}
              <SlideInFromLeft>
              <div id="project1" className="2xl:px-20 ">
                <div className="relative   rounded-2xl">
                    <Image src="/img/project-1-cover.png" alt="project1-cover" height={1080} width={1920} className='shadow-md shadow-black rounded-2xl 2xl:rounded-b-2xl rounded-b-none'/>

                    <div className='bg-white 2xl:h-20 h-12 2xl:bg-opacity-25 backdrop-blur-xl z-30 absolute 2xl:bottom-0 w-full flex justify-center  items-center rounded-b-2xl 2xl:shadow-none shadow-md shadow-black'>
                        <a href="/project1" className='button 2xl:w-fit w-full 2xl:h-fit h-full text-center 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[12px] md:text-[28px]  text-primary1 px-10 2xl:py-2 py-0 rounded-2xl 2xl:rounded-t-2xl rounded-t-none'>
                            Project Details
                        </a>
                    </div>

                </div>
              </div>
              </SlideInFromLeft>

              

            {/* {projectsData.projects.slice().reverse().map((project, index) => (
                <div key={project.id}>
                    {index % 2 === 0 ? (
                        <SlideInFromLeft>
                            <div 
                                id={`project${index+1}`}
                                className={`flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between 2xl:gap-20 xl:gap-20 lg:gap-10 gap-4`}>
                                <Image 
                                    src={project.image} 
                                    alt={project.name} 
                                    width={1920} 
                                    height={1080}
                                    className='h-fit 2xl:w-1/2 xl:w-1/2 lg:w-1/2 border-primary border-solid border-4'
                                />
                                <div className='flex flex-col justify-between gap-10'>
                                    <div className='w-fit'>
                                        <h1 className='2xl:text-[27px] xl:text-[26px] lg:text-[22px] text-[23px] md:text-[36px]'>
                                            <span className='border-b-4 border-primary1'>{project.name.split(' ')[0]} </span> 
                                            {project.name.split(' ').slice(1).join(' ')}
                                        </h1>
                                        <h2 className='2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] pt-4'>
                                            {project.description}
                                        </h2>
                                    </div>
                                    <div className='flex justify-center 2xl:justify-start'>
                                        <a href={project.detailsUrl} className='button 2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] bg-primary2 text-white px-10 py-2 rounded-md'>
                                            Project Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SlideInFromLeft>
                    ) : (
                        <SlideInFromRight>
                            <div 
                                id={`project${index+2}`}
                                className={`flex 2xl:flex-row xl:flex-row lg:flex-row flex-col-reverse justify-between 2xl:gap-20 xl:gap-20 lg:gap-10 gap-4`}>
                                <div className='flex flex-col justify-between gap-10'>
                                    <div className='w-fit'>
                                        <h1 className='2xl:text-[27px] xl:text-[26px] lg:text-[22px] text-[23px] md:text-[36px]'>
                                            <span className='border-b-4 border-primary1'>{project.name.split(' ')[0]} </span> 
                                            {project.name.split(' ').slice(1).join(' ')}
                                        </h1>
                                        <h2 className='2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] pt-4'>
                                            {project.description}
                                        </h2>
                                    </div>
                                    <div className='flex justify-center 2xl:justify-start'>
                                        <a href={project.detailsUrl} className='button 2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] bg-primary2 text-white px-10 py-2 rounded-md'>
                                            Project Details
                                        </a>
                                    </div>
                                </div>
                                <Image 
                                    src={project.image} 
                                    alt={project.name} 
                                    width={1920} 
                                    height={1080}
                                    className='h-fit 2xl:w-1/2 xl:w-1/2 lg:w-1/2 border-primary1 border-solid border-4'
                                />
                            </div>
                        </SlideInFromRight>
                    )}
                </div>
            ))} */}
            </div>
        </div>
    </div>
  )
}

export default Projects