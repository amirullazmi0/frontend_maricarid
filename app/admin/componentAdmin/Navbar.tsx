'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import logoWhite from "../../../public/assets/fullWhite.png";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'

const Navbar = ({ active }: { active: string }) => {
    const navigation = useRouter()
    const [dropdown, setDropdown] = useState<boolean>(false)
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const handleNavigation = (e: string) => {
        navigation.push(`/admin/${e}`)
    }

    const handleLogout = () => {
        Cookies.remove('access_token')
        navigation.push('/login')
    }

    const handleDropdown = () => {
        if (dropdown == true) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node | null)) {
                setDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navbarRef])

    const navItem = () => {
        return (
            <React.Fragment>
                <button onClick={() => handleNavigation('')} className={`hover:scale-105 w-fit active:scale-95 duration-200 pl-3 pr-3 ${active === `dashboard` && `border-b-4 border-warning`}`}>Dashboard</button>
                <button onClick={() => handleNavigation('event')} className={`hover:scale-105 w-fit active:scale-95 duration-200 pl-3 pr-3 ${active === `event` && `border-b-4 border-warning`}`}>Event</button>
                <button onClick={() => handleNavigation('client')} className={`hover:scale-105 w-fit active:scale-95 duration-200 pl-3 pr-3 ${active === `client` && `border-b-4 border-warning`}`}>Client</button>
                <button onClick={() => handleNavigation('profile')} className={`hover:scale-105 w-fit active:scale-95 duration-200 pl-3 pr-3 ${active === `profile` && `border-b-4 border-warning`}`}>Profile</button>
                <button onClick={() => handleLogout()} className='btn btn-warning rounded-sm ml-2 mr-2'>Logout</button>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className='fixed w-screen z-50 top-0 left-0' ref={navbarRef}>
                <div className="flex justify-between p-2 items-center text-white gap-6 z-20 lg:pl-52 pr-5 lg:pr-52 relative bg-dark shadow-lg">
                    <div className="">
                        <Image alt='' src={logoWhite} className='h-28 w-fit' />
                    </div>
                    <div className="lg:flex lg:visible hidden">
                        {navItem()}
                    </div>
                    <button onClick={handleDropdown} className='lg:hidden btn btn-ghost text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div ref={navbarRef} className={`lg:hidden visible flex justify-center p-2 bg-[#1f1f1f] w-screen z-10  duration-200 translate-y-[-100%] ${dropdown && `translate-y-[0%]`} shadow-lg`}>
                    <div className="text-white flex flex-col justify-center items-center text-center gap-3">
                        {navItem()}
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar