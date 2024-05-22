import React from 'react'
import tron from "../../public/tron.png";
import Image from 'next/image';
import logo247 from "../../public/icon/247.png";
import trusted from "../../public/icon/mail.png";
import world from "../../public/icon/world.png";
import accept from "../../public/icon/accept.png";
const Features = () => {
    return (
        <div className='max-w-screen lg:md:p-4 p-2 flex justify-center items-center'>
            <div className="min-h-[50vh] lg:md:w-[70vw] w-[90vw] grid grid-cols-10">
                <div className="col-span-2 lg:md:block hidden feature-left h-full bg-[url('/container.jpg')] bg-cover"></div>
                <div className="lg:md:col-span-8 col-span-10 feature-left p-4 grid gap-2 h-full lg:md:pl-8 lg:md:pr-8">
                    <div className="">
                        <div className="uppercase font-bold lg:md:text-lg text-sm text-gray-400">Features</div>
                        <div className="uppercase font-bold lg:md:text-2xl text-xl text-dark">Why Chose Us</div>
                    </div>
                    <div className="flex gap-7 h-max items-center">
                        <div className="grid gap-5 p-4">
                            <div className="flex gap-4">
                                <Image alt='' src={logo247} className='hover:scale-110 duration-200 h-14 w-fit' />
                                <div className="lg:max-w-[70%]">
                                    <div className="font-bold uppercase text-2xl text-cyan-800">24/7 FAST RESPONSE</div>
                                    <div className="">We are always quick to respond customer requests at any time</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Image alt='' src={accept} className='hover:scale-110 duration-200 h-14 w-fit' />
                                <div className="lg:max-w-[70%]">
                                    <div className="font-bold uppercase text-2xl text-cyan-800">Trusted</div>
                                    <div className="">we are trusted by many customers to work on shipping agency and logistics</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Image alt='' src={world} className='hover:scale-110 duration-200 h-14 w-fit' />
                                <div className="lg:max-w-[70%]">
                                    <div className="font-bold uppercase text-2xl text-cyan-800">QHSE PROTECTION</div>
                                    <div className="">we always strive and commit to meet the highest standards in QHSE Protection to fulfill our shipping agency and logistics services our company slogan (provide the best service)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Features