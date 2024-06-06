'use client'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Iframe from 'react-iframe'
import moment from 'moment';
import 'moment/locale/id'; // Import Indonesian locale

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
            <div className="lg:md:w-[80%] w-[100%] p-3 relative text-dark">
                <div className="text-2xl font-bold mb-4 uppercase">Activities & Events</div>
                <div className="capitalize mb-4 lg:w-[60%] lg:p-10 p-4">
                    Welcome to our gallery, where you can experience the excitement and joy happening at <span className='p-1 bg-warning font-bold'>MARICAR</span>. We proudly present a collection of photos and videos that document the various activities and events we have organized. Through this gallery, you can catch a glimpse of the special moments and unforgettable memories we have created together.
                    <br /><br />
                    <span className='font-bold uppercase'>Daily Activities at MARICAR </span>
                    We offer a variety of exciting activities designed to provide the best experience for you. From thrilling racing sessions on city streets to leisurely rides with beautiful scenery, each of our activities is crafted to deliver maximum excitement and satisfaction. We believe that every moment is an opportunity for a new adventure, and we strive to make every activity an extraordinary experience.
                </div>
                <div className="grid lg:md:grid-cols-2 gap-5">
                    {data && data.length > 0 ? data.map((item: eventDTO, index: number) => {
                        const desc = item.desc
                        const truncate = desc?.slice(0, 50) + `...`
                        return (
                            <React.Fragment key={index}>
                                {/* CARD */}
                                <div className="card grid grid-cols-2 bg-dark shadow-xl overflow-hidden rounded-md">
                                    <div className="aspect-square overflow-hidden">
                                        <img className='object-cover h-full w-fit hover:scale-105 duration-200' src={item.images ? item.images[0] : '/default.jpg'} alt="Album" />
                                    </div>
                                    <div className="lg:card-body p-3 aspect-square overflow-hidden">
                                        <button onClick={() => handleNavigation(item.id ? item.id : '')} >
                                            <h3 className="lg:card-title text-white uppercase text-left">{item.name}</h3>
                                        </button>
                                        <h2 className="text-warning font-normal text-xs">{moment(item.createdAt).format(`DD MMMM YYYY`)}</h2>
                                        {/* <p className='text-slate-300 font-thin p-2 lg:text-sm text-xs'>{truncate}</p> */}
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