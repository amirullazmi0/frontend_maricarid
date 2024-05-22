'use client'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Iframe from 'react-iframe'

const Section = () => {
    const [data, setData] = useState<eventDTO[]>()
    const API_URL = process.env.API_URL

    const navigation = useRouter()

    const getData = async () => {
        try {
            const response = await axios(`${API_URL}/api/event`)

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
        <div className='flex justify-center p-3'>
            <div className="lg:md:w-[80%] w-[100%] p-3 relative">
                <div className="text-2xl font-bold mb-4">ACTIVITY & EVENT</div>
                <div className="capitalize mb-4">this our gallery about activities and events in  <span className=' p-2 bg-warning font-bold'>MARICAR</span>  </div>
                <div className="grid lg:md:grid-cols-2 gap-5">
                    {data && data.length > 0 ? data.map((item: eventDTO, index: number) => {
                        const desc = item.desc
                        const truncate = desc?.slice(0, 50) + `...`
                        return (
                            <React.Fragment key={index}>
                                {/* CARD */}
                                <div className="card grid lg:grid-cols-2 bg-dark shadow-xl overflow-hidden rounded-md">
                                    <div className="aspect-square overflow-hidden">
                                        <img className='object-cover h-full w-fit hover:scale-105 duration-200' src={item.images ? item.images[0] : '/default.jpg'} alt="Album" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-title text-white capitalize">{item.name}</h2>
                                        <p className='text-slate-300 font-thin p-2'>{truncate}</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => handleNavigation(item.id ? item.id : '')} className="btn btn-ghost text-white">Detail</button>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                        :
                        <>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Section