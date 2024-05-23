'use client'
import { socmedDTO } from '@/model/socmed.model'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FormTelepon = () => {
    const [data, setData] = useState<socmedDTO>({
        name: 'phone',
        link: ''
    })

    const API_URL = process.env.API_URL
    const access_token = sessionStorage.getItem('access_token')
    const [alertSucess, setAlertSuccess] = useState<boolean | undefined>(undefined)

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`${API_URL}/api/socmed/${data.name}`, {
                link: data.link
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

            if (response.data.success == true) {
                setAlertSuccess(true)
                setTimeout(() => {
                    setAlertSuccess(undefined)
                }, 10000)
            }
        } catch (error) {
            console.log(error);
        }

    }

    const getData = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/socmed?name=phone`)
            if (response.data.success == true) {
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
        <div>
            <div className="grid gap-1">
                {alertSucess == true &&
                    <div className="text-green-500 capitalize font-thin flex">
                        <div className="">
                            Update {data.name} success
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>

                    </div>
                }
                <div className="text-slate-300 uppercase font-thin">{data?.name} : </div>
                <div className="flex">
                    <input value={data?.link} onChange={(e) => setData({
                        name: 'phone',
                        link: e.target.value
                    })} type="text" placeholder="Type here" className="input rounded-none input-bordered w-full lg:max-w-lg" />
                    <button onClick={handleUpdate} className='btn btn-neutral rounded-l-none rounded-r-lg uppercase'>update</button>
                </div>
            </div>
        </div>
    )
}

export default FormTelepon