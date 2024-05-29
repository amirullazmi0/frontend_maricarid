'use client'
import React from 'react'
import logo from "../../../public/assets/LOGO MARICAR logistics1.png";
import Image from 'next/image';

const Section = () => {
    return (
        <div className='flex justify-center p-2 pb-10   '>
            <div className="lg:w-[70%] p-2">
                <Image alt='' src={logo} className='h-32 w-fit' />
                <div className="text-lg text-center">
                    PT Borneo Maricar Logistics is a hyper-personalized supply chain partner. It’s our duty to take care of all logistics needs so our clients may focus on their business expertise.
                    <br /><br />
                    Our global network connection provides the capability to deliver client’s goods safely and accurately around the globe. It is time for client’s to experience more simple and convenient logistics specially tailored to each client’s specific needs.

                </div>
            </div>
        </div>
    )
}

export default Section