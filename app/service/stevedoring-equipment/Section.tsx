'use client'
import React from 'react'
import logo from "../../../public/assets/LOGO MARICAR stevedoring.png";
import Image from 'next/image';

const Section = () => {
    return (
        <div className='flex justify-center p-2 pb-10   '>
            <div className="lg:w-[70%] p-2">
                <Image alt='' src={logo} className='h-32 w-fit' />
                <div className="text-lg text-center">
                    PT Maricar Stevedoring & Equipment operates in the field of loading and unloading services. As a company that has done a lot of loading and unloading of goods, this is not an easy achievement. Many experiences and learning processes have been passed which have led the company to continue to grow and develop in accordance with the company's plans. In carrying out activities, the company is supported by human resources who are reliable and competent in their fields. Apart from that, it is also supported by adequate equipment, facilities and infrastructure
                </div>
            </div>
        </div>
    )
}

export default Section