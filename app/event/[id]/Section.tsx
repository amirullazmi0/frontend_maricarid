'use client'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import 'moment/locale/id'; // Import Indonesian locale
const Section = ({ id }: { id: string }) => {
    const [data, setData] = useState<eventDTO>()
    const API_URL = process.env.API_URL

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
        <div className='flex justify-center p-2'>
            <div className="lg:w-[80%] p-2">
                {data ?
                    <React.Fragment>
                        <div className="grid lg:grid-cols-2">
                            <div className="aspect-square">
                                <img className='h-full object-cover' src={data.images ? data.images : '/default.jpg'} alt="" />
                            </div>
                            <div className=" p-4 bg-dark text-white">
                                <div className="text-2xl font-bold uppercase">{data.name}</div>
                                <div className="text-sm text-warning">{moment(data.createdAt).format('DD MMMM YYYY')}</div>
                                <div className="p-3 text-lg text-slate-400">{data.desc}</div>
                            </div>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        not found
                    </React.Fragment>
                }
            </div>
        </div>
    )
}

export default Section