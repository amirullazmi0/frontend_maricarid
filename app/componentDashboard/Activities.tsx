'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import activity from "../../public/activity.jpeg";
import Link from 'next/link';
import { eventDTO } from '@/model/event.model';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import 'moment/locale/id'; // Import Indonesian locale

const Activities = () => {
    const [data, setData] = useState<eventDTO[]>()
    const API_URL = process.env.API_URL
    const navigation = useRouter()
    const getData = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/event`)

            if (response.data.data) {
                setData(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleNavigation = (e: string) => {
        navigation.push(`/event/${e}`)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='min-w-screen pt-4 pb-4 bg-white text-dark'>
            <div className="flex justify-center items-center">
                <div className="lg:md:w-[80vw] w-[90vw] uppercase font-bold">
                    <div className="lg:md:text-xl ">
                        Our Galleries
                    </div>

                    <div className="flex flex-wrap justify-center lg:gap-4 gap-2 mt-4">
                        {/* <div className=" bg-[url('/container.jpg')] min-h-[50vh] bg-center bg-cover"></div> */}
                        {data && data.length > 0 ? data.map((item: eventDTO, index: number) => {
                            const desc = item.desc
                            const truncate = desc?.slice(0, 30) + `...`
                            if (index < 3) {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="card grid grid-cols-2 bg-dark shadow-xl overflow-hidden rounded-sm lg:md:w-[45%] w-[100%]">
                                            <div className="aspect-square overflow-hidden">
                                                <img className='object-cover h-full hover:scale-105 duration-200' src={item.images ? item.images[0] : '/default.jpg'} alt="Album" />
                                            </div>
                                            <div className="lg:card-body p-3 aspect-square overflow-hidden">
                                                <button onClick={() => handleNavigation(`${item.id}`)}>
                                                    <h3 className="lg:card-title text-white uppercase text-left">{item.name}</h3>
                                                </button>
                                                <h2 className="text-warning font-normal text-xs">{moment(item.createdAt).format(`DD MMMM YYYY`)}</h2>
                                                {/* <p className='text-slate-300 font-thin p-2 lg:text-sm text-xs'>{truncate}</p> */}
                                                <div className="card-actions justify-end">
                                                    <button onClick={() => handleNavigation(`${item.id}`)} className="btn btn-ghost text-white">Detail</button>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        })
                            :
                            <React.Fragment>

                            </React.Fragment>
                        }
                    </div>
                    {data && data.length > 0 &&
                        <div className="flex justify-center w-full">
                            <Link href={`/event`}>
                                <button className="hover:scale-110 active:scale-95 border-black duration-200 p-3 font-light">More {`...`}</button >
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Activities