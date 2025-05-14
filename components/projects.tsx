"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import SlideInFromLeft from './slide_left'
import SlideInFromRight from './slide_right'
import projectsData from '@/data/myProjects.json'; 
import { FaAnglesDown, FaAnglesUp  } from "react-icons/fa6";
import SlideInAnimation from './slide_animation'


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
    <div className="bg-primary4 flex flex-col items-center z-20 relative overflow-x-hidden">
        <div id='projects' className=' 2xl:w-[1200px] w-full 2xl:px-0 px-4 py-40 '>
            <h1 className='text-center text-primary1 text-[42px] pb-10 font-anton'>Projects</h1>
            <div className='flex flex-col justify-start gap-40'>              
              {[...projectsData.projects].reverse().map((project, index) => (
                <div key={project.id}>
                    <SlideInAnimation index={index}>
                    <div id={`project${project.id}`} className="2xl:px-20">
                        <div className="relative rounded-2xl">
                        <Image
                            src={project.image}
                            alt={`project${project.id}-cover`}
                            height={1080}
                            width={1920}
                            className="shadow-md shadow-black rounded-2xl 2xl:rounded-b-2xl rounded-b-none"
                        />

                        <div className="bg-white 2xl:h-20 h-12 2xl:bg-opacity-25 backdrop-blur-xl z-30 absolute 2xl:bottom-0 w-full flex justify-center items-center rounded-b-2xl 2xl:shadow-none shadow-md shadow-black">
                            <a
                            href={project.detailsUrl}
                            className="button 2xl:w-fit w-full 2xl:h-fit h-full text-center 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[12px] md:text-[28px] text-primary1 px-10 2xl:py-2 py-0 rounded-2xl 2xl:rounded-t-2xl rounded-t-none"
                            >
                            Project Details
                            </a>
                        </div>
                        </div>
                    </div>
                    </SlideInAnimation>
                </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Projects