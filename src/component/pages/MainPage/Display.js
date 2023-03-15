import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center gap-5 px-11 sm:grid-cols-1 md:grid-cols-2'>


      <div className='h-[450px]'>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_ybo2yaki.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop controls autoplay></lottie-player>
      </div>

      <div className='md:text-center sm:text-center'>
        <h1 className='text-3xl font-extrabold'>Hi I am Sumit</h1>
        <p className='py-2 text-rose-500 text-lg'>Some Dev, Freelancer, Rounder</p>
        <p className='md:text-justify sm:text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolore est. Vitae maxime quaerat adipisci, doloremque temporibus quasi rerum molestias ullam aliquid iure ex illum consectetur iste, velit exercitationem cum modi dolorem ratione fugiat beatae dolore, incidunt magnam similique repudiandae. Eveniet harum blanditiis rerum consequatur deserunt praesentium, quisquam sapiente velit.</p>
      </div>

    </div>
  )
}

export default Display