import Image from 'next/image'
import React from 'react'
import logoShip from "../../public/assets/logoShipAgency.png";
import Link from 'next/link';

const TronMarineTraffic = () => {
    return (
        <div className='tron-marine-traffic p-4 bg-warning flex items-center'>
            <div className="lg:md:w-2/5 w-3/5 grid gap-3 text-white lg:md:pl-10 lg:md:pr-10">
                <div className="text-xl text-gray-100">MARICAR</div>
                {/* <div className="">
                    <Image alt='' src={logoShip} className='lg:md:h-24 w-fit' />
                </div> */}
                <div className="lg:md:text-6xl text-5xl font-bold">MARINE TRAFFIC</div>
                <Link href={''} className='btn w-fit btn-warning rounded-sm'>About Us</Link>
            </div>
        </div>
    )
}

export default TronMarineTraffic