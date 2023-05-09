import Image from 'next/image'
import React from 'react'
import Logo from '../public/logo.svg'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-200 text-gray-600">
    <div>
            <div className='w-28 lg:w-36 mx-auto'>
                <Image 
                    src={Logo}     
                />
            </div>
    </div> 
    <div className='flex flex-row  w-full justify-around items-start'>
        <div className='flex flex-col gap-1'>
            <span className="footer-title text-purple-400">Services</span> 
            <a className="link link-hover">Branding</a> 
            <a className="link link-hover">Design</a> 
            <a className="link link-hover">Marketing</a> 
            <a className="link link-hover">Advertisement</a>
        </div> 
        <div className='flex flex-col gap-1'>
            <span className="footer-title text-purple-400">Company</span> 
            <a className="link link-hover">About us</a> 
            <a className="link link-hover">Contact</a> 
            <a className="link link-hover">Jobs</a> 
            <a className="link link-hover">Press kit</a>
        </div> 
        <div className='flex flex-col gap-1'>
            <span className="footer-title text-purple-400">Legal</span> 
            <a className="link link-hover">Terms of use</a> 
            <a className="link link-hover">Privacy policy</a> 
            <a className="link link-hover">Cookie policy</a>
        </div>
    </div>
</footer>

)
}

export default Footer