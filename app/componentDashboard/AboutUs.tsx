import Image from 'next/image'
import React from 'react'
import signature from "../../public/signature.png";
const AboutUs = () => {
    return (
        <div className="bg-[url('/aboutus.jpg')] bg-cover relative overflow-hidden" >
            <div className="bg-dark-transparant h-full w-full p-4 flex justify-center text-white">
                <div className="pt-3 pb-40 h-max">
                    <div className="grid gap-4">
                        <div className="uppercase font-bold lg:md:text-lg text-sm text-slate-300">About Us</div>
                        <div className="uppercase font-bold lg:md:text-3xl text-xl text-slate-500">WE ARE SHIPPING <br />AGENCY & LOGISTICS SERVICES</div>
                        <div className="m-4 mt-10 lg:md:w-[50%] text-slate-300 lg:md:text-md text-sm">
                            We offer solutions in ship agency and logistics. we provide the best solutions to customers by coordinating on a regular basis and responding quickly to customer requests.
                        </div>
                        <div className="pt-2 grid gap-4">
                            <Image alt='' src={signature} />
                            <div className="grid gap-2">
                                <div className="text-md font-bold uppercase text-slate-200">DAVID ANDERSON</div>
                                <div className="text-xs  text-yellow-300">Founder & CEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutUs  