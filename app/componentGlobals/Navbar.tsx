import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='grid grid-cols-10'>
            <div className="lg:md:col-span-3 col-span-7 relative grid grid-cols-1 justify-center items-center">
                <div className="nav-right"></div>
                <div className="text-3xl font-bold absolute text-white text-center uppercase w-full">
                    Maricar <br />Group
                </div>
            </div>
            <div className="lg:md:col-span-7 col-span-3 nav-left items-center justify-center gap-5 flex">
                <div className="gap-5 lg:md:flex hidden">
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Home</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Service</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Service</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Event</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>About Us</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Contact</Link>
                </div>
                <div className="lg:md:hidden visible flex">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar