'use client'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import 'moment/locale/id'; // Import Indonesian locale

const Section = ({ id }: { id: string }) => {
    const API_URL = process.env.API_URL
    const [data, setData] = useState<eventDTO>()

    const getData = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/event?id=${id}`)

            if (response.data.data) {
                setData(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='flex justify-center items-center p-2 min-h-[70vh]'>
            <div className="lg:w-[80%] w-[100%] p-2 rounded-sm bg-black text-white">
                <div className="uppercase font-bold border-white w-fit text-xl">
                    Detail Event
                </div>
                {data ?
                    <React.Fragment>
                        <div className="flex flex-wrap mt-5">
                            <div className="lg:w-[30%] aspect-square overflow-hidden ">
                                <img src={data.images ? data.images : './default.jpg'} alt="" className='object-cover h-full w-full hover:scale-110 duration-200' />
                            </div>
                            <div className="lg:w-[60%] p-2">
                                <div className="font-bold text-warning text-xl uppercase">{data.name}</div>
                                <div className=""> Last Update : <span>{moment(data.createdAt).format('DD MMMM YYYY - HH:mm')}</span></div>
                                <div className="p-2">{data.desc}</div>
                            </div>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div className="flex justify-center">
                            <span className="loading loading-dots loading-lg"></span>
                        </div>
                    </React.Fragment>
                }

            </div>
        </div>
    )
}

export default Section