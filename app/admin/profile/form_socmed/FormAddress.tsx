'use client'
import { profileDTO } from '@/model/profile.model'
import axios from 'axios'
import { headers } from 'next/headers'
import React, { useEffect, useState } from 'react'

const FormAddress = () => {
    const API_URL = process.env.API_URL
    const [access_token, setAccessToken] = useState<string | null>()
    const [AlertSuccessVisiMisi, setAlertSuccessVisiMisi] = useState<boolean>(false)
    const [data, setData] = useState<string>()

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`${API_URL}/api/profile/address`, {
                desc: data
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })


            if (response.data.success === true) {
                setAlertSuccessVisiMisi(true)
                setTimeout(() => {
                    setAlertSuccessVisiMisi(false)
                }, 10000)
            }
        } catch (error) {

        }
    }

    const getData = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/profile/?name=address`)
            if (response.data.success == true) {
                setData(response.data.data.desc)
            }
        } catch (error) {

        }
    }


    useEffect(() => {
        getData()
        if (typeof window !== 'undefined') {
            const token = sessionStorage.getItem('access_token');
            setAccessToken(token);
        }
    }, [])

    return (
        <div id='visi' className="grid gap-1">
            <div className="grid gap-1">
                {AlertSuccessVisiMisi === true &&
                    <div className="p-3 bg-green-200 rounded text-green-700 flex justify-between">
                        <div className="">
                            Update address Successfully
                        </div>
                        <span className="loading loading-dots loading-sm"></span>
                    </div>
                }
                <div className="">
                    <textarea value={data} onChange={(e) => setData(e.target.value)} rows={5} className='textarea w-full rounded-none'></textarea>
                </div>
            </div>
            <button onClick={handleUpdate} className='btn btn-neutral rounded-t-none rounded-b-lg uppercase'>update Address</button>
        </div>
    )
}

export default FormAddress