'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dataJson from "../componentDashboard/client.json";
import { clientDTO } from '@/model/client.model';
import axios from 'axios';

const OurClients = () => {
    const [dataClient, setDataClient] = useState<clientDTO[]>()
    const API_URL = process.env.API_URL

    const getData = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/client`)
            console.log(response.data);


            if (response.data.success == true) {
                setDataClient(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='min-w-screen pt-4 pb-4'>
            <div className="flex justify-center items-center">
                <div className="max-w-[100vw] min-w-[80vw] uppercase font-bold">
                    <div className="lg:md:text-xl lg:p-0 p-2">
                        Our Clients
                    </div>
                    <div className="flex gap-2 justify-center mt-3">
                        <div className="carousel rounded-box gap-4">

                            {dataClient ? dataClient.map(
                                (item: clientDTO, index: number) => {
                                    // if (index < 3) {
                                    return (
                                        // <div key={index} className="flex justify-center items-center aspect-square shadows-gray rounded-md lg:w-[23%] w-[23%] ">
                                        //     <img className='hover:scale-100 duration-200 scale-90' src={item.images} alt="" />
                                        // </div>
                                        <div className="carousel-item aspect-square h-40 flex items-center">
                                            <img src={item.images} alt="Burger" className='object-cover h-fit w-full' />
                                        </div>
                                    )
                                    // }
                                })
                                :
                                <div className="min-h-[20vh] flex justify-center items-center w-full text-center">
                                    <span className="loading loading-dots loading-lg text-black"></span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClients