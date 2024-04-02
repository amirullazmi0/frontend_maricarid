'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import dataJson from "../componentDashboard/client.json";
const OurClients = () => {
    const dataClient = dataJson

    return (
        <div className='min-w-screen pt-4 pb-4'>
            <div className="flex justify-center items-center">
                <div className="lg:md:w-[80vw] w-[90vw] uppercase font-bold">
                    <div className="lg:md:text-xl">
                        Our Clients
                    </div>
                    <div className="grid lg:md:grid-cols-5 grid-cols-2 gap-2 ">
                        {dataClient && dataClient.map(
                            (item: { name: string, url: string }, index: number) => {
                                return (
                                    <div key={index} className="flex justify-center items-center shadows-gray rounded-md">
                                        <Image alt={item.name} src={item.url} width={200} height={100} />
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients