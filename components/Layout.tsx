import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.svg'


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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
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
                <li><a>Our Services</a></li>
                <li><a>Pricing</a></li>
                <li><a>Why Stage with Us?</a></li>
                <li><a>About Us</a></li>
                <li><a>Contact</a></li>
                </ul>
            </div>
            </div>
            </div>
            <main className='bg-white container mx-auto'>{children}</main>
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