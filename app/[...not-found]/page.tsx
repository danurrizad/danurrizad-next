import React from 'react'
import Header2 from '@/components/header2'
import Footer from '@/components/footer'

const NotFound = () => {
  return (
    <div className="background-pattern2">
      <Header2/>
      <div className="flex flex-col justify-center items-center">
        <div className="h-screen 2xl:w-[1200px] w-full flex flex-col items-center justify-center">
          <h1 className="text-primary4 text-[150px] font-anton">404</h1>
          <h2 className='text-primary4 text-[40px]'>Page not found</h2>
          <h2 className='text-primary4 text-[20px]'>Sorry, nothing to show here</h2>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default NotFound