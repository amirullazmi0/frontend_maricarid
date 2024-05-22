import React from 'react'
import Iframe from 'react-iframe'
import logoShip from "../../public/assets/logoShipAgency.png";
import Image from 'next/image';

const Section = () => {
    return (
        <div className='flex justify-center p-3'>
            <div className="lg:md:w-[80%] w-[100%] p-3">
                {/* <div className="">
                    <Image alt='' src={logoShip} className='h-20 w-fit mb-4' />
                </div> */}
                <div className="relative">
                    <Iframe url="https://www.marinetraffic.com/en/ais/embed/zoom:3/centery:0.5034912349381795/centerx:108.90619900180619/maptype:0/shownames:false/mmsi:0/shipid:0/fleet:/fleet_id:/vtypes:/showmenu:/remember:false"
                        id=""
                        className="w-full h-[70vh] overflow-hidden"
                    // display="block"
                    />
                </div>
            </div>
        </div>
    )
}

export default Section