import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card } from '@material-tailwind/react'
import Image from 'next/image'
import projectsData from '@/data/myProjects.json'; 

const ProjectCarousel = () => {
  return (
    <div className="flex justify-center h-[800px] bg-primary4">
        <div id="projects" className='z-0 2xl:w-[1200px] w-full 2xl:px-40 xl:px-36 lg:px-32 md:px-24 px-4 pt-20 h-full relative overflow-hidden'>
        <h1 className='text-center text-primary1 text-[42px] pb-10 font-anton'>Projects</h1>
        <Carousel
            opts={{
              align: "start",
            }}
            className="w-100 "
          >
            <CarouselContent className='h-50 w-full'>
              {projectsData.projects.map((data, index) => (
                <CarouselItem key={index}>
                  <div className=" flex h-full items-center justify-center relative overflow-hidden">
                    <Image src={`/img/cover/project-${index+1}-cover.png`} alt={`project-${index+1}-cover`} height={800} width={1600} className=''/>

                    {/* <div className='absolute top-10 left-10'>
                      <div className='flex gap-4'>
                        <h2 className=' bg-primary4 shadow-sm shadow-black w-[150px] text-center rounded-lg'>{data.duration}</h2>
                        <h2 className=' bg-primary4 shadow-sm shadow-black w-[150px] text-center rounded-lg'>{data.type}</h2>
                      </div>
                    </div> */}

                    <div className="absolute top-[60px] left-10">
                      <div className='flex items-center text-primary4 gap-2'>
                        <h1 className='text-[52px]'>0{data.id}</h1>
                        <div className='border-b-[4px] text-[16px] border-solid-primary4 w-[300px]'>{data.date}</div>
                      </div>
                      <div className='text-primary4'>
                        <h1 className='text-[32px] font-anton'>{data.name.toUpperCase()}</h1>
                        <h1 className='text-[16px] w-2/3'>{data.description2}</h1>
                      </div>
                      <div className='mt-2 flex gap-2'>
                        { data.logo.map((logoName, index)=>(
                          <div key={index} className="w-[40px] h-[40px] flex items-center justify-center">
                            <Image loading='lazy' className='2xl:w-16 xl:w-16 lg:w-14  w-14' width={70} height={70}  src={`/img/logo/logo-${logoName}.png`} alt={`logo-${logoName}`}/>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

    </div>
  )
}

export default ProjectCarousel