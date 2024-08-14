import React from 'react'
import Image from 'next/image'
import SlideInFromLeft from './slide_left'
import SlideInFromRight from './slide_right'
import projectsData from '@/data/myProjects.json'; 

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen bg-primary4 2xl:p-40 xl:px-36 lg:px-32 md:px-24 px-4 py-40 '>
        <h1 className='text-center text-primary1 text-[42px] pb-10 font-anton'>Projects</h1>
        <div className='flex flex-col justify-start gap-40'>
            
        {projectsData.projects.slice().reverse().map((project, index) => (
            <div key={project.id}>
                {index % 2 === 0 ? (
                    <SlideInFromLeft>
                        <div 
                            className={`flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between 2xl:gap-20 xl:gap-20 lg:gap-10 gap-4`}>
                            <Image 
                                src={project.image} 
                                alt={project.name} 
                                width={1920} 
                                height={1080}
                                className='h-fit 2xl:w-1/2 xl:w-1/2 lg:w-1/2 border-primary1 border-solid border-4'
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
        ))}




            {/* PROJECT 1 */}
            {/* <SlideInFromLeft>
                <div className='flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between 2xl:gap-20 xl:gap-20 lg:gap-10  gap-4'>
                    <Image width={1920} height={1080} className='h-fit 2xl:w-1/2 xl:w-1/2 lg:w-1/2 border-primary1 border-solid border-4' src="/img/project-1.png" alt="project-1" />
                    <div className='flex flex-col justify-between 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-10 gap-10'>
                        <div className='w-fit ' >
                            <h1 className='2xl:text-[27px] xl:text-[26px] lg:text-[22px] text-[23px] md:text-[36px]'><span className='border-b-4 border-primary1'>Batik Mana</span>gement System</h1>
                            <h2 className='2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] pt-4'>Capstone project from campus which develop a web based application for batik defect detection and sales forecasting.</h2>
                        </div>
                        <div className='flex 2xl:justify-start xl:justify-start lg:justify-start justify-center'>
                            <a href="/project1" className='button 2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] bg-primary2 text-white px-10 py-2 rounded-md'>Project Details</a>
                        </div>
                    </div>
                </div>
            </SlideInFromLeft> */}

            {/* PROJECT 2 */}
            {/* <SlideInFromRight>
                <div className='flex 2xl:flex-row xl:flex-row lg:flex-row flex-col-reverse justify-between 2xl:gap-20 xl:gap-20 lg:gap-10  gap-4'>
                    <div className='flex flex-col justify-between 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-10 gap-10'>
                        <div className='w-fit'>
                            <h1 className='2xl:text-[27px] xl:text-[26px] lg:text-[22px] text-[23px] md:text-[36px]'><span className='border-b-4 border-primary1'>KK</span>N</h1>
                            <h2 className='2xl:text-[21px] xl:text-[20px] lg:text-[16px] text-[17px] md:text-[27px] pt-4'>Community Service Program (KKN) project. Developing website in order to improve the village economy. </h2>
                        </div>
                        <div className='flex 2xl:justify-start xl:justify-start lg:justify-start justify-center'>
                            <a href="/project2" className='button 2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] bg-primary2 text-white px-10 py-2 rounded-md'>Project Details</a>
                        </div>
                    </div>
                    <Image width={1920} height={1080} className='2xl:w-1/2 xl:w-1/2 lg:w-1/2 border-primary1 border-solid border-4' src="/img/project-2.png" alt="project-2" />
                </div>
            </SlideInFromRight> */}

            {/* PROJECT 3 */}
            {/* <SlideInFromLeft>
                <div className='flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between 2xl:gap-20 xl:gap-20 lg:gap-10  gap-4'>
                    <Image width={1920} height={1090} className='2xl:w-1/2 xl:w-1/2 lg:w-1/2 border-primary1 border-solid border-4' src="/img/project-3.png" alt="project-3" />
                    <div className='flex flex-col justify-between 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-10 gap-10'>
                        <div className='w-fit'>
                            <h1 className='2xl:text-[27px] xl:text-[26px] lg:text-[22px] text-[23px] md:text-[36px]'><span className='border-b-4 border-primary1'>Skin </span>First</h1>
                            <h2 className='2xl:text-[21px] xl:text-[20px] lg:text-[16px] text-[17px] md:text-[27px] pt-4'>Project from campus called Senior Project which contains web development, cloud computing, and Artificial Intelligence implementation.</h2>
                        </div>
                        <div className='flex 2xl:justify-start xl:justify-start lg:justify-start justify-center'>
                            <a href="/project3" className='button 2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] bg-primary2 text-white px-10 py-2 rounded-md'>Project Details</a>
                        </div>
                    </div>
                </div>
            </SlideInFromLeft> */}

            {/* PROJECT 4 */}
            {/* <SlideInFromRight>
                <div className='flex 2xl:flex-row xl:flex-row lg:flex-row flex-col-reverse justify-between 2xl:gap-20 xl:gap-20 lg:gap-10 gap-4'>
                    <div className='flex flex-col justify-between 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-10 gap-10'>
                        <div className='w-fit'>
                            <h1 className='2xl:text-[27px] xl:text-[26px] lg:text-[22px] text-[23px] md:text-[36px]'><span className='border-b-4 border-primary1'>NFT Em</span>porium</h1>
                            <h2 className='2xl:text-[21px] xl:text-[20px] lg:text-[16px] text-[17px] md:text-[27px] pt-4'>Project from internship program at PT Graphie Global Interaktif. Web based application for an NFT Marketplace.</h2>
                        </div>
                        <div className='flex 2xl:justify-start xl:justify-start lg:justify-start justify-center'>
                            <a href="/project4" className='button 2xl:text-[21px] xl:text-[18px] lg:text-[16px] text-[17px] md:text-[27px] bg-primary2 text-white px-10 py-2 rounded-md'>Project Details</a>
                        </div>
                    </div>
                    <Image width={1920} height={1080} className='2xl:w-1/2 xl:w-1/2 lg:w-1/2 border-primary1 border-solid border-4' src="/img/project-4.png" alt="project-4" />
                </div>
            </SlideInFromRight> */}
        </div>
    </div>
  )
}

export default Projects