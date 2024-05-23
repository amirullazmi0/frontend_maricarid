'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import signature from "../../public/signature.png";
import { profileDTO } from '@/model/profile.model';
import axios from 'axios';
const AboutUs = () => {
    const [data, setData] = useState<profileDTO>()

    const API_URL = process.env.API_URL

    const getData = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/profile?name=aboutus`)

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
        <div className="bg-dark bg-cover relative overflow-hidden" >
            <div className=" h-full w-full p-4 flex justify-center text-white">
                <div className="pt-10 pb-10 h-max flex justify-center items-center w-full">
                    <div className="lg:w-[60%] h-full">
                        <div className="font-bold text-2xl text-center">MARICAR</div>
                        {data ?
                            <div className="text-lg text-center mt-2 text-slate-300">{data.desc}</div>
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

export default AboutUs  