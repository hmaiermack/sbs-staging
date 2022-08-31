import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Divider from '../components/Divider'
import Layout from '../components/Layout'
import Hero from '../public/Image01.jpg'
import Logo from '../public/logo.svg'



const Home: NextPage = () => {
  return (
    <Layout>
      <div className="hero min-h-screen container -z-10">
        <Image 
          src={Hero}
          layout="fill"
          objectFit='cover'
          quality={100}
        />
      </div>

      {/* service boxes */}
      <div>
        <h1 className='text-center text-4xl font-chic pt-8 text-gray-700 font-black'>Home Staging and Interiors</h1>
        <Divider style='LARGE'/>
      </div>
      <div className='flex flex-col items-center mx-auto md:flex-row md:justify-between md:items-start gap-10 pb-12 text-gray-500'>
        <div className='w-4/5 lg:w-1/4 block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-2xl text-gray-600 text-center'>Home Staging</div>
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
            <div className='w-full mt-4 mx-auto font-chic text-2xl text-gray-600 text-center'>Interior Design</div>
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
            <div className='w-full mt-4 mx-auto font-chic text-2xl text-gray-600 text-center'>Furniture Leasing</div>
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
            <div className='w-full mt-4 mx-auto font-chic text-2xl text-gray-600 text-center'>Consultation</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Consult with us for any of your design needs.
            </p>
        </div>
      </div>
      <div>
        <h1 className='text-center text-4xl font-chic pt-8 text-gray-700 font-black'>Featured Homes</h1>
        <Divider style='LARGE'/>
      </div>
      <div className='flex flex-col items-center mx-auto sm:flex-row sm:justify-between sm:items-start sm:flex-wrap gap-10 lg:gap-4 pb-12'>
        <div className='w-4/5 sm:w-[45%] block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-2xl text-gray-600 text-center'>Home Staging</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Inspire buyers by showing them a finished home that feels both elegant and welcoming.
            </p>
        </div>
        <div className='w-4/5 sm:w-[45%] block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-2xl text-gray-600 text-center'>Interior Design</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Work with us to create the space of your dreams - perfectly styled to fit your specific taste.
            </p>
        </div>
        <div className='w-4/5 sm:w-[45%] block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-2xl text-gray-600 text-center'>Furniture Leasing</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Rent our high-end furniture and transform your space into a luxury home.
            </p>
        </div>
        <div className='w-4/5 sm:w-[45%] block'>
          <Image 
            src={Hero}
            layout="responsive"
            />
            <div className='w-full mt-4 mx-auto font-chic text-2xl text-gray-600 text-center'>Consultation</div>
            <Divider style='SMALL'/>
            <p className='text-center max-w-prose text-lg font-yadon-regular'>
              Consult with us for any of your design needs.
            </p>
        </div>
      </div>

              {/* Footer */}
              <footer className="footer p-10 bg-gray-200 text-gray-600 w-screen absolute left-0">
  <div>
    <p className='max-w-prose'>
    <div className='w-28 lg:w-36 mx-auto text-white'>
                <Image 
                    src={Logo}     
                    layout="responsive"
                />
                </div>

      <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illum inventore, cum, aliquam facilis libero repudiandae maxime deserunt soluta dolorum optio? Tempore dolores iste distinctio dolorum ipsa temporibus minus exercitationem id explicabo, voluptatibus, cumque quidem. Possimus veniam sit soluta facere.</p>
  </div> 
  <div>
    <span className="footer-title text-purple-400">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title text-purple-400">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title text-purple-400">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>


    </Layout>
  )
}

export default Home
