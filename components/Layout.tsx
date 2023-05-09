import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.svg'
import Footer from './Footer'


const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="drawer">
        
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col sticky bg-white">
            {/* Navbar */}
            <div className="w-full navbar bg-white text-black h-20 lg:h-28 p-4 lg:p-12 z-50 absolute">
                <div className='flex w-full lg:container lg:mx-auto'>
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div> 
            <div className="flex-1 px-2 justify-center lg:justify-start mx-2">
                <div className='w-28 lg:w-36 mx-auto hover:cursor-pointer'>
                    <Link href="/">
                        <Image 
                            src={Logo}     
                            layout="responsive"
                            priority={true}
                        />
                    </Link>
                </div>
            </div>
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal font-yadon-regular text-xl">
                {/* Navbar content */}
                <li tabIndex={0}>
                    <span>Our Services</span>
                    <ul className='p-2 pt-[30px] bg-white border-l-[6px] border-purple-400'>
                        <li><Link href="/staging">Home Staging</Link></li>
                        <li><Link href="/interior-design">Interior Design</Link></li>
                        <li><Link href="/leasing">Furniture Leasing</Link></li>
                    </ul>
                </li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/why-us">Why Stage with Us?</Link></li>
                <li tabIndex={0}>
                    <span>About Us</span>
                    <ul className='p-4 bg-white border-t-[6px] border-purple-400'>
                        <li><Link href="/our-story">Our Story</Link></li>
                        <li><Link href="/before-after">Before and Afters</Link></li>
                        <li><Link href="/reviews">Reviews</Link></li>
                    </ul>
                </li>
                <li><a>Contact</a></li>
                </ul>
            </div>
            </div>
            </div>
            <main className='bg-white mx-auto'>
                {children}    
            </main>
            <Footer />
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-80 bg-white text-black font-yadon-regular text-2xl">
            <h1 className='text-3xl font-extrabold font-chic text-center'>SBS Staging</h1>
            {/* Sidebar */}
            <span className="text-3xl font-bold underline underline-offset-2">Our Services</span>
            <li><Link href="/staging">Home Staging</Link></li>
            <li><Link href="/interior-design">Interior Design</Link></li>
            </ul>    
        </div>
    </div>  
)

}

export default Layout