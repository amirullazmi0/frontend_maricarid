'use client'
import React from 'react'
import logo from "../../../public/assets/logo ship agency.png";
import Image from 'next/image';

const Section = () => {
    return (
        <div className='flex justify-center p-2 pb-10   '>
            <div className="lg:w-[70%] p-2">
                <Image alt='' src={logo} className='h-32 w-fit' />
                <div className="text-lg text-center">
                    MARICAR SHIP AGENCY was established in May 2020, which is engaged in ship agency services, the company was originally established to answer the needs of ship owners whose ships would be active in ports.
                    <br /><br />
                    Promoting honesty and teamwork. we provide the best services and solve problems with the solutions we gift for every obstacle on the ship. The team that we have right now is a the best team, experienced, successful advance in their field, have the motivation and dedication in carrying out and completing the work of the client with timely and quality assured so that the client gets its own satisfaction. Supported by The Fleet and His crew are professionals, we hope to give you the satisfaction of our service to you.
                </div>
            </div>
        </div>
    )
}

export default Section