import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/logo-white.png";
const Footer = () => {
    return (
        <div className='bg-black text-white p-4 min-h-20 flex items-center justify-center'>
            <div className="w-full text-center">
                <div className="flex justify-center">
                    <Image alt='' src={logo} className='h-24 w-fit' />
                </div>
                <div className="text-xl font-bold">
                    MARICAR ADMIN
                </div>
            </div>
        </div>
    )
}

export default Footer