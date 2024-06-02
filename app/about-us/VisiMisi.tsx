'use client'
import { profileDTO } from '@/model/profile.model'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VisiMisi = () => {
    const [visi, setVisi] = useState<profileDTO>()
    const [misi, setMisi] = useState<profileDTO>()

    const API_URL = process.env.API_URL

    const getVisi = async () => {
        const response = await axios.get(`${API_URL}/api/profile?name=visi`)

        if (response.data.data) {
            setVisi(response.data.data)
        }
    }

    const getMisi = async () => {
        const response = await axios.get(`${API_URL}/api/profile?name=misi`)

        if (response.data.data) {
            setMisi(response.data.data)
        }
    }

    useEffect(() => {
        getVisi()
        getMisi()
    }, [])

    return (
        <div className=" bg-sky-700" >
            <div className="h-full w-full p-4 flex justify-center">
                <div className="pt-10 pb-10 h-max flex justify-center items-center w-full">
                    <div className="lg:w-[60%] h-full grid">
                        <div className="font-bold text-2xl text-center text-white ">VISION</div>
                        {visi ? <div className="text-lg text-center mt-2 text-slate-300" dangerouslySetInnerHTML={{ __html: visi.desc ? visi.desc : '' }} />
                            :
                            <div className="min-h-[10vh] flex justify-center items-center w-full text-center">
                                <span className="loading loading-dots loading-lg text-white"></span>
                            </div>

                        }
                        {/* misi */}
                        <div className="font-bold text-2xl text-center mt-4 text-white">MISSION</div>
                        {misi ? <div className="text-lg text-center mt-2 text-slate-300" dangerouslySetInnerHTML={{ __html: misi.desc ? misi.desc : "" }} />
                            :
                            <div className="min-h-[10vh] flex justify-center items-center w-full text-center">
                                <span className="loading loading-dots loading-lg text-white"></span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VisiMisi