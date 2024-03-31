'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [navbar, setNavbar] = useState<boolean>(false)
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const handleNavbar = () => {
        if (navbar === true) {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node | null)) {
                setNavbar(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navbarRef])
    return (
        <div ref={navbarRef} className='grid grid-cols-10 fixed bg-white w-full shadow-lg z-50'>
            <div className="lg:md:col-span-3 col-span-8 relative grid grid-cols-1 justify-center items-center z-20">
                <div className="nav-right"></div>
                <div className="text-3xl font-bold absolute text-white text-center uppercase w-full">
                    Maricar<br />Group
                </div>
            </div>
            <div className="lg:md:col-span-7 col-span-2 nav-left items-center justify-center gap-5 flex z-20 bg-white">
                <div className="gap-5 lg:md:flex hidden text-center">
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'/'}>Home</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Service</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Marine Traffic</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Event</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>About Us</Link>
                    <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Contact</Link>
                </div>
                <div className="lg:md:hidden visible flex">
                    <button onClick={handleNavbar} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`lg:md:hidden col-span-10 grid justify-center items-center duration-700 ease-in-out text-center p-3 gap-2 ${!navbar ? `mt-[-100%]` : ``} z-10 bg-white`}>
                <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3 w-full' href={'/'}>Home</Link>
                <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Service</Link>
                <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Marine Traffic</Link>
                <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Event</Link>
                <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>About Us</Link>
                <Link className='hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3' href={'#'}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar