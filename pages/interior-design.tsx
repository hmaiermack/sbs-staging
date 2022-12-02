import Image from 'next/image'
import React from 'react'
import Divider from '../components/Divider'
import Hero from '../public/Image01.jpg'

const interiorDesign = () => {
  return (
    <div className='relative left-0 top-0'>
        <div className='container mx-auto'>

            {/* For parallax effect */}
            <div className="h-[50vh] w-full relative left-0 top-0 bg-fixed bg-cover bg-center flex justify-center items-center" style={{
                backgroundImage:`url(${Hero.src})`
            }}>
            </div>
            <div className='flex flex-col justify-center items-center flex-wrap sm:flex-row w-full py-8 mb-8'>
                <div className='w-5/6 mb-4 sm:mb-0 sm:px-4 sm:w-1/2 sm:text-left sm:pr-12 sm:pl-0'>
                <h2 className='text-2xl font-chic font-extrabold'> Interior Design</h2>
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
                <h2 className='text-2xl font-chic font-extrabold'> Services</h2>
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
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='text-2xl text-center font-chic font-extrabold'>Featured Project</h1>
                <Divider style='SMALL' />
                <p className='mt-2 w-4/5 mb-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eum quo quae expedita illo possimus? Error fugiat a aliquid similique, ipsum nostrum omnis nemo ducimus provident aliquam? Architecto fuga culpa inventore suscipit. Quaerat dicta minima voluptatem incidunt repellendus deserunt modi illum accusamus quibusdam amet at libero perferendis consequuntur tenetur, nam odio quasi veritatis. Nesciunt voluptates inventore illum excepturi praesentium culpa ut tenetur velit distinctio! Molestiae iure odio nobis quisquam, explicabo rerum beatae facilis quod. Ipsum cupiditate quam expedita, velit in cum aspernatur, nobis doloremque 
                </p>
                <div className='w-10/12 mb-16'>
                    <Image 
                        src={Hero}
                    />
                </div>
            </div>
        </div>

        <div className='relative w-screen'>
        <div className='absolute z-50 w-3/5 left-[20%] mt-16'>
            <h1 className='text-4xl text-center text-white font-chic font-extrabold'>Frequently Asked Questions</h1>
            <Divider style="SMALL" />
            <div className='flex flex-col w-full mt-8'>
                <div className='w-full flex flex-col'>
                    <div className='flex'>
                    <div className='w-10 h-10 bg-purple-400 rounded-full mr-8' />
                    <span className='text-4xl text-left text-white font-chic font-extrabold'>This is a question</span>
                    </div>
                    <div className='flex mt-4'>
                        <span className='text-lg text-left text-white ml-[4.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero facilis officia consectetur sit quam consequuntur saepe iure corrupti voluptas, temporibus quas? Earum ullam, praesentium dolor assumenda officia, at explicabo nemo nesciunt dolorum repellat sit, similique fugit vel laborum nam!</span>
                    </div>
                </div>
                <div className='w-full flex flex-col mt-8'>
                    <div className='flex'>
                    <div className='w-10 h-10 bg-purple-400 rounded-full mr-8' />
                    <span className='text-4xl text-left text-white font-chic font-extrabold'>This is a question</span>
                    </div>
                    <div className='flex mt-4'>
                        <span className='text-lg text-left text-white ml-[4.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero facilis officia consectetur sit quam consequuntur saepe iure corrupti voluptas, temporibus quas? Earum ullam, praesentium dolor assumenda officia, at explicabo nemo nesciunt dolorum repellat sit, similique fugit vel laborum nam!</span>
                    </div>
                </div>
                <div className='w-full flex flex-col mt-8'>
                    <div className='flex'>
                    <div className='w-10 h-10 bg-purple-400 rounded-full mr-8' />
                    <span className='text-4xl text-left text-white font-chic font-extrabold'>This is a question</span>
                    </div>
                    <div className='flex mt-4'>
                        <span className='text-lg text-left text-white ml-[4.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero facilis officia consectetur sit quam consequuntur saepe iure corrupti voluptas, temporibus quas? Earum ullam, praesentium dolor assumenda officia, at explicabo nemo nesciunt dolorum repellat sit, similique fugit vel laborum nam!</span>
                    </div>
                </div>
            </div>
        </div>

                    <div className='h-full w-full -z-10 overflow-hidden brightness-50'>
                        <Image 
                            src={Hero}
                            placeholder="blur"
                            sizes='100vw'
                            objectFit='cover'
                        />
                    </div>
      </div>
    </div>
  )
}

export default interiorDesign