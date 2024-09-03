import React from 'react'
import Image from 'next/image'
import SlideInFromLeft from './slide_left'
import SlideInFromRight from './slide_right'

const SlicingWeb = () => {
  return (
    <div className="bg-primary1 flex flex-col justify-center items-center overflow-x-hidden">
        <div id="slicing-web" className="2xl:w-[1200px] w-full h-full 2xl:px-0 px-4 py-40 ">
            <h1 className='text-center text-primary4 text-[42px] pb-10 font-anton'>Slicing Web</h1>
            <div className='flex flex-col justify-start gap-40'>
            {/*slicing 3  */}
              <SlideInFromLeft>
                <div id="slicing3" className="2xl:px-20 ">
                    <div className="relative rounded-2xl">
                        <Image src="/img/slicing3-cover.png" alt="slicing3-cover" height={1080} width={1920} className='shadow-md shadow-black rounded-2xl 2xl:rounded-b-2xl rounded-b-none'/>

                        <div className='bg-white 2xl:h-20 h-12 2xl:bg-opacity-25 backdrop-blur-xl z-30 absolute 2xl:bottom-0 w-full flex justify-center  items-center rounded-b-2xl 2xl:shadow-none shadow-md shadow-black'>
                            <a href="/slicing3" className='button2 2xl:w-fit w-full 2xl:h-fit h-full text-center 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[12px] md:text-[28px]  text-primary1 px-10 2xl:py-2 py-0 rounded-2xl 2xl:rounded-t-2xl rounded-t-none'>
                                Slicing Details
                            </a>
                        </div>

                    </div>
                </div>
              </SlideInFromLeft>

            {/*slicing 2  */}
              <SlideInFromRight>
                <div id="slicing2" className="2xl:px-20 ">
                    <div className="relative rounded-2xl">
                        <Image src="/img/slicing2-cover.png" alt="slicing2-cover" height={1080} width={1920} className='shadow-md shadow-black rounded-2xl 2xl:rounded-b-2xl rounded-b-none'/>

                        <div className='bg-white 2xl:h-20 h-12 2xl:bg-opacity-25 backdrop-blur-xl z-30 absolute 2xl:bottom-0 w-full flex justify-center  items-center rounded-b-2xl 2xl:shadow-none shadow-md shadow-black'>
                            <a href="/slicing2" className='button2 2xl:w-fit w-full 2xl:h-fit h-full text-center 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[12px] md:text-[28px]  text-primary1 px-10 2xl:py-2 py-0 rounded-2xl 2xl:rounded-t-2xl rounded-t-none'>
                                Slicing Details
                            </a>
                        </div>

                    </div>
                </div>
              </SlideInFromRight>

            {/*slicing 1  */}
              <SlideInFromLeft>
                <div id="project1" className="2xl:px-20 ">
                    <div className="relative   rounded-2xl">
                        <Image src="/img/slicing1-cover.png" alt="slicing1-cover" height={1080} width={1920} className='shadow-md shadow-black rounded-2xl 2xl:rounded-b-2xl rounded-b-none'/>

                        <div className='bg-white 2xl:h-20 h-12 2xl:bg-opacity-25 backdrop-blur-xl z-30 absolute 2xl:bottom-0 w-full flex justify-center  items-center rounded-b-2xl 2xl:shadow-none shadow-md shadow-black'>
                            <a href="/slicing1" className='button2 2xl:w-fit w-full 2xl:h-fit h-full text-center 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[12px] md:text-[28px]  text-primary1 px-10 2xl:py-2 py-0 rounded-2xl 2xl:rounded-t-2xl rounded-t-none'>
                                Slicing Details
                            </a>
                        </div>

                    </div>
                </div>
              </SlideInFromLeft>
            </div>
        </div>
    </div>
  )
}

export default SlicingWeb