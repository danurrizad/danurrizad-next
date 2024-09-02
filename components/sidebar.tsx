import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";

const Sidebar = () => {
  return (
    // <div className='absolute z-10 2xl:top-[50%] xl:top-[50%] lg:top-[50%] top-[90%] 2xl:left-0 xl:left-0 lg:left-0 left-[50%] 2xl:translate-x-0 xl:translate-x-0 lg:translate-x-0 translate-x-[-50%] 2xl:translate-y-[-50%] xl:translate-y-[-50%] lg:translate-y-[-50%] md:translate-y-[-50%] translate-y-[-100%] '>
    // <div className='absolute z-50 2xl:top-[70%] xl:top-[50%] lg:top-[50%] top-[95%] 2xl:left-0 xl:left-0 lg:left-0 left-[50%] 2xl:translate-x-0 xl:translate-x-0 lg:translate-x-0 translate-x-[-50%] 2xl:translate-y-[-50%] xl:translate-y-[-50%] lg:translate-y-[-50%] md:translate-y-[-50%] translate-y-[-100%] '>
    //     <div className='bg-primary2 rounded-2xl 2xl:p-4 xl:p-3 p-3'>
    //         <div className='text-white flex 2xl:flex-col xl:flex-col lg:flex-col justify-center items-center 2xl:gap-6 xl:gap-4 lg:gap-3 gap-2 2xl:text-[36px] xl:text-[26px] lg:text-[22px] md:text-[48px] text-[32px]'>
    //             <a href='https://www.linkedin.com/in/danurrizad' className='hover:bg-primary4 hover:text-primary1 duration-200'><FaLinkedin/></a>
    //             <a href='https://github.com/danurrizad' className='hover:bg-primary4 hover:text-primary1 duration-200'><FaGithubSquare/></a>
    //             <a href='mailto:danurrizad242@gmail.com' className='hover:bg-primary4 hover:text-primary1 duration-200'><FaSquareEnvelope/></a>
    //         </div>
    //     </div>
    // </div>
    <div className='absolute z-50 2xl:top-[90%] top-[95%] left-1/2 translate-x-[-50%] 2xl:translate-y-[-50%] xl:translate-y-[-50%] lg:translate-y-[-50%] md:translate-y-[-50%] translate-y-[-100%] '>
        <div className='bg-primary4 rounded-2xl 2xl:p-4 xl:p-3 p-3'>
            <div className='text-primary1 flex justify-center items-center 2xl:gap-6 xl:gap-4 lg:gap-3 gap-2 2xl:text-[36px] xl:text-[26px] lg:text-[22px] md:text-[48px] text-[32px]'>
                <a href='https://www.linkedin.com/in/danurrizad' className='hover:bg-primary1 rounded-sm hover:text-primary4 duration-200'><FaLinkedin/></a>
                <a href='https://github.com/danurrizad' className='hover:bg-primary1 rounded-sm hover:text-primary4 duration-200'><FaGithubSquare/></a>
                <a href='mailto:danurrizad242@gmail.com' className='hover:bg-primary1 rounded-sm hover:text-primary4 duration-200'><FaSquareEnvelope/></a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar