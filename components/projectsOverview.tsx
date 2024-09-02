import React from 'react'
import Image from 'next/image'


const ProjectsOverview = () => {
  return (
    <div id="overview" className=" bg-primary4 h-[800px] pt-40 flex flex-col items-center z-10 relative">
        <h1 className='text-center text-primary1 text-[42px] pb-10 font-anton '>Projects Overview</h1>
        <div className="relative bottom-0 bg-primary h-full z-20 overflow-hidde bg-red-100  ">

          {/* card project 1 */}
          <a href="#project5" className="rounded-2xl shadow-md shadow-black transition duration-3000 hover:-translate-y-[20%] absolute z-40 bottom-0 left-1/2 -translate-x-1/2 bg-red-100 w-[300px] h-[400px] flex flex-col justify-center items-center">
            <div className="relative rounded-2xl w-full h-full bg-gradient-to-t from-[#0E5569] to-[#1BA8CF] bg- flex flex-col justify-center items-center gap-20">
              <div className="absolute top-4 left-4">
                <h1 className="text-white font-anton text-[20px]">DENGAR</h1>
                <h2 className="text-white font-exo text-[16px]">Web-based application</h2>
              </div>
              <div className="p-4 mt-10">
                <Image src="/img/project5-card.png" alt="project1-card" height={400} width={300}/>
              </div>
            </div>
          </a>

          {/* card project */}
          <a href="#project4" className="rounded-2xl shadow-md shadow-black transition duration-3000 hover:-translate-y-[15%] hover:translate-x-[40%] absolute z-30 transform rotate-12 overflow-hidden bottom-0 left-1/2 translate-y-[20%] translate-x-1/4 rotate bg-red-200 w-[300px] h-[400px] flex justify-center items-center">
            <div className="relative rounded-2xl w-full h-full bg-gradient-to-t from-[#452F16] to-[#AB7537] bg- flex flex-col justify-center items-center gap-20">
              <div className="absolute top-4 left-4">
                <h1 className="text-white font-anton text-[20px]">Batik Management</h1>
                <h2 className="text-white font-exo text-[16px]">Web-based application</h2>
              </div>
              <div className="p-4 mt-10">
                <Image src="/img/project4-card.png" alt="project1-card" height={400} width={300}/>
              </div>
            </div>
          </a>

          {/* card project */}
          <a href="#project3" className="rounded-2xl shadow-md shadow-black transition duration-3000 hover:-translate-y-[15%] hover:-translate-x-[40%] absolute z-30 transform -rotate-12 overflow-hidden bottom-0 right-1/2 translate-y-[20%] -translate-x-1/4 rotate bg-red-200 w-[300px] h-[400px] flex justify-center items-center">
            <div className="relative rounded-2xl w-full h-full bg-gradient-to-t from-[#68371D] to-[#CE6D39] bg- flex flex-col justify-center items-center gap-20">
              <div className="absolute top-4 left-4">
                <h1 className="text-white font-anton text-[20px]">KKN</h1>
                <h2 className="text-white font-exo text-[16px]">Website</h2>
              </div>
              <div className="p-4 mt-10">
                <Image src="/img/project3-card.png" alt="project1-card" height={400} width={300}/>
              </div>
            </div>
          </a>

          {/* card project */}
          <a href="#project2" className="rounded-2xl shadow-md shadow-black transition duration-3000 hover:translate-y-[15%] hover:translate-x-[90%] absolute z-20 transform rotate-45 overflow-hidden bottom-0 left-1/2 translate-y-[50%] translate-x-2/3 rotate bg-red-300 w-[300px] h-[400px] flex justify-center items-center">
            <div className="relative rounded-2xl w-full h-full bg-gradient-to-t from-[#146C5F] to-[#27D2B9] bg- flex flex-col justify-center items-center gap-20">
              <div className="absolute top-4 left-4">
                <h1 className="text-white font-anton text-[20px]">SkinFirst</h1>
                <h2 className="text-white font-exo text-[16px]">Web-based application</h2>
              </div>
              <div className="p-4 mt-10">
                <Image src="/img/project2-card.png" alt="project1-card" height={400} width={300}/>
              </div>
            </div>
          </a>

          {/* card project */}
          <a href="#project1" className="rounded-2xl shadow-md shadow-black transition duration-3000 hover:translate-y-[15%] hover:-translate-x-[90%] absolute z-20 transform -rotate-45 overflow-hidden bottom-0 right-1/2 translate-y-[50%] -translate-x-2/3 rotate bg-red-300 w-[300px] h-[400px] flex justify-center items-center">
            <div className="relative rounded-2xl w-full h-full bg-gradient-to-t from-[#0F172A] to-[#334F90] bg- flex flex-col justify-center items-center gap-20">
              <div className="absolute top-4 left-4">
                <h1 className="text-white font-anton text-[20px]">NFT Marketplace</h1>
                <h2 className="text-white font-exo text-[16px]">Web-based application</h2>
              </div>
              <div className="p-4 mt-10">
                <Image src="/img/project1-card.png" alt="project1-card" height={400} width={300}/>
              </div>
            </div>
          </a>
        </div>
    </div>
  )
}

export default ProjectsOverview