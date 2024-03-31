import React from 'react'
import tron from "../../public/tron.png";
const Features = () => {
    return (
        <div className='max-w-screen lg:md:p-4 p-2 flex justify-center items-center'>
            <div className="min-h-[70vh] lg:md:min-w-[70vw] min-w-[90vw] grid grid-cols-10">
                <div className="col-span-3 feature-left h-full bg-[url('/container.jpg')] bg-cover"></div>
                <div className="col-span-7 feature-left p-4 grid gap-2 h-fit lg:md:pl-8 lg:md:pr-8">
                    <div className="uppercase font-bold lg:md:text-lg text-sm text-gray-400">Features</div>
                    <div className="uppercase font-bold lg:md:text-2xl text-xl text-dark">Why Chose Us</div>
                </div>
            </div>
        </div >
    )
}

export default Features