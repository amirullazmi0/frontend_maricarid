import Image from 'next/image'
import React from 'react'
import activity from "../../public/activity.jpeg";
import Link from 'next/link';
import { Router } from 'next/router';


const Activities = () => {
    const handleNavigation = () => {

    }

    return (
        <div className='min-w-screen pt-4 pb-4 bg-white'>
            <div className="flex justify-center items-center">
                <div className="lg:md:w-[80vw] w-[90vw] uppercase font-bold">
                    <div className="lg:md:text-xl">
                        Activities
                    </div>
                    <div className="text-slate-500">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="grid grid-cols-10 gap-2 mt-4">
                        {/* <div className=" bg-[url('/container.jpg')] min-h-[50vh] bg-center bg-cover"></div> */}
                        <div className="col-span-10 grid grid-cols-4 gap-4">
                            <div className="shadow-sm rounded-lg">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
                                <div className="p-2">
                                    <div className="">Lorem, ipsum.</div>
                                    <p className='text-xs font-light'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae, rem dolore eius excepturi et! Nulla quidem omnis fuga natus.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow-sm rounded-lg">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
                                <div className="p-2">
                                    <div className="">Lorem, ipsum.</div>
                                    <p className='text-xs font-light'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae, rem dolore eius excepturi et! Nulla quidem omnis fuga natus.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow-sm rounded-lg">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
                                <div className="p-2">
                                    <div className="">Lorem, ipsum.</div>
                                    <p className='text-xs font-light'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae, rem dolore eius excepturi et! Nulla quidem omnis fuga natus.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow-sm rounded-lg">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
                                <div className="p-2">
                                    <div className="">Lorem, ipsum.</div>
                                    <p className='text-xs font-light'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae, rem dolore eius excepturi et! Nulla quidem omnis fuga natus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-10">
                            <div className="w-full">
                                <Link href={``}>
                                    <button className="hover:scale-110 active:scale-95 border-black duration-200 p-3 font-light">More Activities {`>>>`}</button >
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities