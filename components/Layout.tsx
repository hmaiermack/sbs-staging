import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Link from 'next/link'


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
                <div className='w-28 lg:w-36 mx-auto'>
                <Image 
                    src={Logo}     
                    layout="responsive"
                />
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
            <main className='bg-white container mx-auto'>{children}</main>
                                  {/* Footer */}
            <footer className="footer p-10 bg-gray-200 text-gray-600 w-screen">
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

        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-80 bg-white text-black font-yadon-regular text-2xl">
            {/* Sidebar */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>  
            </ul>    
        </div>
    </div>  
)

}

export default Layout