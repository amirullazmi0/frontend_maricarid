'use client'
import { mediaDTO } from '@/model/media.model'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import twitterLogo from "../../public/icon/twitter.png";
import instagramLogo from "../../public/icon/instagram.png";
import facaebookLogo from "../../public/icon/facebook.png";
import Link from 'next/link'

const Media = () => {
    const API_URL = process.env.API_URL

    const [twitter, setTwitter] = useState<mediaDTO>()
    const getTwitter = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/socmed?name=twitter`)
            if (response.data.data) {
                setTwitter(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const [instagram, setInstagram] = useState<mediaDTO>()
    const getInstagram = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/socmed?name=instagram`)
            if (response.data.data) {
                setInstagram(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const [facebook, setFacebook] = useState<mediaDTO>()
    const getFacebook = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/socmed?name=facebook`)
            if (response.data.data) {
                setFacebook(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTwitter()
        getInstagram()
        getFacebook()
    }, [])

    return (
        <div className='flex justify-center items-center p-2 pb-10 pt-10'>
            <div className="lg:w-[80%] p-2">
                <div className="uppercase font-bold text-xl">Our Media</div>
                <div className="flex flex-wrap mt-5 gap-5">
                    <Link href={twitter?.link ? twitter.link : '#'} target='_blank' className='lg:w-[7%] w-[20%] p-2 rounded-md shadow-lg'>
                        <Image alt='' src={twitterLogo} />
                    </Link>
                    <Link href={instagram?.link ? instagram.link : '#'} target='_blank' className='lg:w-[7%] w-[20%] p-4 rounded-md shadow-lg active:scale-95 duration-200'>
                        <Image alt='' src={instagramLogo} />
                    </Link>
                    <Link href={facebook?.link ? facebook.link : '#'} target='_blank' className='lg:w-[7%] w-[20%] p-4 rounded-md shadow-lg active:scale-95 duration-200'>
                        <Image alt='' src={facaebookLogo} />
                    </Link>
                    {/* <div className="">{twitter ? twitter.link : 'no'}</div> */}
                </div>
            </div>
        </div>
    )
}

export default Media