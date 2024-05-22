'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    active: string
}

const Navbar: React.FC<Props> = ({ active }) => {
    const [navbar, setNavbar] = useState<boolean>(false)
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const handleNavbar = () => {
        if (navbar === true) {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }

    const linkItem = () => {
        return (
            <React.Fragment>
                <Link className={`hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3 ${active == 'home' && `border-b-4 border-black`}`} href={'/'}>Home</Link>
                {/* <Link className={`hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3 ${active == 'service' && `border-b-4 border-black`}`} href={'/service'}>Service</Link> */}
                <Link className={`hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3 ${active == 'marineTraffic' && `border-b-4 border-black`}`} href={'/marine-traffic'}>Marine Traffic</Link>
                <Link className={`hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3 ${active == 'event' && `border-b-4 border-black`}`} href={'/event'}>Event</Link>
                <div className="dropdown flex justify-center">
                    <div tabIndex={0} role="button" className={`hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3 ${active == 'service' && ``}`}>Service</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white w-52 rounded-sm grid gap-4 translate-y-10">
                        <Link href={`/service/ship-agency`} className='hover:bg-transparent p-2 active:bg-transparent active:scale-95 hover:scale-105 duration-200 text-center text-md '>Ship Agency</Link>
                        <Link href={`/service/logistic`} className='hover:bg-transparent p-2 active:bg-transparent active:scale-95 hover:scale-105 duration-200 text-center text-md '>Logistics</Link>
                        <Link href={`/service/stevedoring-equipment`} className='hover:bg-transparent p-2 active:bg-transparent active:scale-95 hover:scale-105 duration-200 text-center text-md '>Stevedoring & Equipment</Link>
                    </ul>
                </div>
                <Link className={`hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3 ${active == 'aboutUs' && `border-b-4 border-black`}`} href={'/about-us'}>About Us</Link>
                <Link className={`hover:scale-125 active:scale-105 border-black duration-100 pl-3 pr-3 ${active == 'contactUs' && `border-b-4 border-black`}`} href={'/contact-us'}>Contact Us</Link>
            </React.Fragment>
        )
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
        <React.Fragment>

            <div ref={navbarRef} className='grid grid-cols-10 fixed bg-white w-full shadow-lg z-50'>
                <div className="lg:md:col-span-3 col-span-8 relative grid grid-cols-1 justify-center items-center z-20">
                    <div className="nav-right"></div>
                    <div className="text-3xl font-bold absolute text-white uppercase w-full flex items-center justify-center">
                        <img src="/assets/fullWhite.png" className='w-[65%]' alt="" />
                        <div className="">
                            {/* Maricar<br />Group */}
                        </div>
                    </div>
                </div>
                <div className="lg:md:col-span-7 col-span-2 nav-left items-center justify-center gap-5 grid z-20 bg-white">
                    <div className="gap-5 lg:md:flex hidden text-center">
                        {linkItem()}
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
                    {linkItem()}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar