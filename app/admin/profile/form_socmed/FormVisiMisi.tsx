'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
const FormVisiMisi = () => {
    const API_URL = process.env.API_URL
    const access_token = Cookies.get('access_token')
    const [AlertSuccessVisiMisi, setAlertSuccessVisiMisi] = useState<boolean>(false)
    const [visi, setVisi] = useState<string>('')
    const [misi, setMisi] = useState<string>('')

    const handleUpdateVisiMisi = async () => {
        try {
            const response = await axios.put(`${API_URL}/api/profile/update/visimisi`, {
                descVisi: visi,
                descMisi: misi
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

    const getVisi = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/profile/?name=visi`)
            if (response.data.success == true) {
                setVisi(response.data.data.desc)
            }
        } catch (error) {

        }
    }

    const getMisi = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/profile/?name=misi`)
            if (response.data.success == true) {
                setMisi(response.data.data.desc)
            }
        } catch (error) {

        }
    }

    const handleUpdate = () => {
        handleUpdateVisiMisi()
    }

    useEffect(() => {
        getVisi()
        getMisi()
    }, [])

    return (
        <div id='visi' className="grid gap-1">
            <div className="grid gap-1">
                {AlertSuccessVisiMisi === true &&
                    <div className="p-3 bg-green-200 rounded text-green-700 flex justify-between">
                        <div className="">
                            Update Visi & Misi Successfully
                        </div>
                        <span className="loading loading-dots loading-sm"></span>
                    </div>
                }
                <div className="">
                    <div className="text-slate-300 uppercase font-thin">Misi</div>
                    <textarea value={visi} onChange={(e) => setVisi(e.target.value)} rows={5} className='textarea w-full rounded-none'></textarea>
                </div>
                <div className="">
                    <div className="text-slate-300 uppercase font-thin">Misi</div>
                    <textarea value={misi} onChange={(e) => setMisi(e.target.value)} rows={5} className='textarea w-full rounded-none'></textarea>
                </div>
            </div>
            <button onClick={handleUpdate} className='btn btn-neutral rounded-t-none rounded-b-lg uppercase'>update visi & misi</button>
        </div>
    )
}

export default FormVisiMisi