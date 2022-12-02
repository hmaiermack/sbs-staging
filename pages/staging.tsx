import Image from 'next/image'
import React from 'react'
import Hero from '../public/Image01.jpg'

const staging = () => {
  return (
    <div className='relative left-0 top-0 container mx-auto'>
        {/* For parallax effect */}
        <div className="h-[50vh] w-full relative left-0 top-0 bg-fixed bg-cover bg-center flex justify-center items-center" style={{
            backgroundImage:`url(${Hero.src})`
        }}>
        </div>
    <div className='flex flex-col justify-center items-center flex-wrap sm:flex-row w-full py-8'>
        <div className='w-5/6 mb-4 sm:mb-0 sm:px-4 sm:w-1/2 sm:text-left sm:pr-12 sm:pl-0'>
          <h2 className='text-2xl font-chic font-extrabold'> Home Staging</h2>
          <div className={`w-20 h-1 border-b-2 mt-2 border-purple-400`}></div>
          <p className='my-5'>
            Home staging is the art of furnishing properties for sale. Great staging makes a house feel both chic 
            and welcoming, creating an emotional connection that inspires buyers to bid fast and high.
          </p>
          <p className='my-5'>
            premier home staging company in the nation. Celebrating 25 years designing interiors, we tell 
            each property’s story through alluring, artful décor.
          </p>
          <p className='mt-5'>
            Widely regarded as best in the industry, our expert design team creates seductive interiors in every style: 
            transitional, modern and contemporary, eclectic, traditional, or coastal.
          </p>
        </div>
        <div className='relative min-h-[300px] max-h-[600px] mb-4 sm:mb-0 w-5/6 sm:w-1/2'>
          <Image 
          src={Hero}
          layout="fill"
          objectFit="cover"
          />
        </div>
        <div className='relative min-h-[300px] max-h-[600px] w-5/6 sm:w-1/2'>
          <Image 
          src={Hero}
          layout="fill"
          objectFit="cover"
          />
        </div>
        <div className='w-5/6 mt-8 sm:mt-0 sm:px-4 sm:w-1/2 sm:text-left'>
          <h2 className='text-2xl font-chic font-extrabold'> Why stage with us?</h2>
          <div className={`w-20 h-1 border-b-2 mt-2 border-purple-400`}></div>
          <p className='my-5'>
            List item 1
          </p>
          <p className='my-5'>
            List Item 2
          </p>
          <p className='mt-5'>
            etc...
          </p>
        </div>
      </div>
      </div>
  )
}

export default staging