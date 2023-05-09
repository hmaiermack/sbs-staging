import type { NextPage } from 'next'
import Image from 'next/image'
import Divider from '../components/Divider'
import Layout from '../components/Layout'
import Hero from '../public/Image01.jpg'



const Home: NextPage = () => {
  return (
    <div className='container mx-auto'>
      <div className="hero min-h-screen container -z-10">
        <Image 
          src={Hero}
          layout="fill"
          objectFit='cover'
          quality={100}
        />
      </div>

      {/* service boxes */}
      <div className='xl:py-16 pt-12'>
        <h1 className='text-center text-8xl px-4 font-chic text-gray-700 font-black'>Home Staging and Interiors</h1>
        <Divider style='LARGE'/>
      </div>
      <div className='flex flex-col items-center mx-auto md:flex-row md:justify-between md:items-start gap-10 pb-12 text-gray-600'>
        <div className='w-4/5 lg:w-1/4 block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-4xl text-gray-700 font-[1000] text-center'>Home Staging</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Inspire buyers by showing them a finished home that feels both elegant and welcoming.
            </p>
        </div>
        <div className='w-4/5 lg:w-1/4 block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-4xl text-gray-700 font-[1000] text-center'>Interior Design</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Work with us to create the space of your dreams - perfectly styled to fit your specific taste.
            </p>
        </div>
        <div className='w-4/5 lg:w-1/4 block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-4xl text-gray-700 font-[1000] text-center'>Furniture Leasing</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Rent our high-end furniture and transform your space into a luxury home.
            </p>
        </div>
        <div className='w-4/5 lg:w-1/4 block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-4xl text-gray-700 font-[1000] text-center'>Consultation</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Consult with us for any of your design needs.
            </p>
        </div>
      </div>
      <div>
        <h1 className='text-center px-4 text-6xl font-chic pt-8 text-gray-700 font-[1000] font-black'>Featured Homes</h1>
        <Divider style='LARGE'/>
      </div>
      <div className='flex flex-col items-center mx-auto sm:flex-row sm:justify-between sm:items-start sm:flex-wrap gap-10 lg:gap-4 pb-12'>
        <div className='w-4/5 sm:w-[45%] block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-4xl text-gray-700 font-[1000] text-center'>Home 1</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque distinctio explicabo dicta, ipsam ullam sit quod eaque ea sint aspernatur.
            </p>
        </div>
        <div className='w-4/5 sm:w-[45%] block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-4xl text-gray-700 font-[1000] text-center'>Home 2</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non exercitationem labore aliquid dolorum eveniet explicabo doloremque commodi. Dicta, unde.
            </p>
        </div>
        <div className='w-4/5 sm:w-[45%] block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-4xl text-gray-700 font-[1000] text-center'>Home 3</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores neque tenetur officia ab porro ipsum recusandae dignissimos tempora animi ullam?
            </p>
        </div>
        <div className='w-4/5 sm:w-[45%] block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-4xl text-gray-700 font-[1000] text-center'>Home 4</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ex officia tempora dolor odit commodi nihil ullam at fuga similique.
            </p>
        </div>
      </div>
      </div>
  )
}

export default Home
