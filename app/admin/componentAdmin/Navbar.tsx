'use client'
import Image from 'next/image'
import React from 'react'
import logoWhite from "../../../public/assets/fullWhite.png";
import { useRouter } from 'next/navigation';

const Navbar = ({ active }: { active: string }) => {
    const navigation = useRouter()

    const handleNavigation = (e: string) => {
        navigation.push(`/admin/${e}`)
    }

    const handleLogout = () => {
        navigation.push('/login')
    }
    return (
        <div className='bg-dark'>
            <div className="flex justify-center p-2 items-center text-white gap-6">
                <div className="">
                    <Image alt='' src={logoWhite} className='h-28 w-full' />
                </div>
                <button onClick={() => handleNavigation('')} className={`hover:scale-105 active:scale-95 duration-200 pl-3 pr-3 ${active === `dashboard` && `border-b-4 border-warning`}`}>Dashboard</button>
                <button onClick={() => handleNavigation('event')} className={`hover:scale-105 active:scale-95 duration-200 pl-3 pr-3 ${active === `event` && `border-b-4 border-warning`}`}>Event</button>
                <button onClick={() => handleNavigation('socmed')} className={`hover:scale-105 active:scale-95 duration-200 pl-3 pr-3 ${active === `socmed` && `border-b-4 border-warning`}`}>Socmed</button>
                <button onClick={() => handleNavigation('profile')} className={`hover:scale-105 active:scale-95 duration-200 pl-3 pr-3 ${active === `profile` && `border-b-4 border-warning`}`}>Profile</button>
                <button onClick={() => handleLogout()} className='btn btn-warning rounded-sm'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar