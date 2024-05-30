'use client'
import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../../ClientContext'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import successIcon from "../../../../../public/icon/Success.gif";
import Cookies from 'js-cookie'

const Section = ({ id }: { id: string }) => {
    const clientState = useContext(ClientContext)
    const navigation = useRouter()

    const [name, setName] = useState<string | undefined>('')
    const [desc, setDesc] = useState<string | undefined>('')
    const [images, setImages] = useState<any | undefined>('')
    const [require, setRequire] = useState<boolean>(false)
    const [previewUrl, setPreviewUrl] = useState<any>(null);
    const access_token = Cookies.get('access_token')

    const handleFileChange = (event: any) => {
        const file = event.target.files[0]
        if (file) {
            setImages(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const API_URL = process.env.API_URL

    const getClient = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/client?id=${id}`)

            if (response.data.data) {
                setName(response.data.data.name)
                setDesc(response.data.data.desc)
                // setImages(response.data.data.images)
                setPreviewUrl(response.data.data.images)
            }
        } catch (error) {

        }
    }

    const renderAlertSuccess = () => {
        if (clientState.addStatus === true) {
            return (
                <React.Fragment>
                    <div className="fixed w-screen h-screen top-0 left-0 bg-[#000000c9] flex justify-center items-center">
                        <div className=" p-4 text-center min-h-[30%] lg:w-[40%] flex justify-center items-center">
                            <div className="">
                                <div className="flex justify-center">
                                    <Image alt='' src={successIcon} className='h-32 w-fit' />
                                </div>

                                <div className="w-full text-center font-bold uppercase text-xl text-white">
                                    <div className="">
                                        Update Data Successfully
                                    </div>
                                    <div className="mt-3">
                                        <span className="loading loading-dots loading-md"></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }

    const handleEditClient = async () => {
        if (name) {
            try {
                const formData = new FormData
                formData.append('name', name)
                formData.append('images', images)


                const response = await axios.put(`${API_URL}/api/client/${id}`, formData, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    }
                })

                if (response.data.success == true) {
                    clientState.setAddStatus(true)
                    setTimeout(() => {
                        navigation.push(`/admin/client`)
                        clientState.setAddStatus(false)
                    }, 3000)
                }
            } catch (error) {
                window.scrollTo({
                    top: 0
                })
                console.log(error);
            }
        } else {
            window.scrollTo({
                top: 0
            })
            setRequire(true)
            setTimeout(() => {
                setRequire(false)
            }, 10000)
        }
    }

    useEffect(() => {
        getClient()
    }, [])
    return (
        <div className='bg-admin'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[50%] w-[100%] p-4 bg-black">
                    {renderAlertSuccess()}
                    <div className=" text-xl uppercase text-white font-bold bg-red-600 p-2 rounded-sm w-fit">
                        Form Edit Event
                    </div>
                    <div className="grid gap-2 mt-3">
                        <div className=" grid gap-2">
                            {require == true &&
                                <div className=" border-red-600 border-4 text-red-600 uppercase font-bold p-3 rounded-sm text-center flex justify-between">
                                    <div className="">
                                        Name & Desc not be null
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                    </svg>

                                </div>
                            }
                            <div className="">
                                <div className="text-white mb-1">Event Name</div>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="event name" className="input bg-white  input-bordered  rounded-sm w-full" />
                            </div>
                            {/* <div className="">
                                <div className="text-white mb-1">Event Description</div>
                                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="textarea textarea-bordered w-full rounded-sm" placeholder="event description" rows={5}></textarea>
                            </div> */}
                            <div className="">
                                <div className="text-white mb-1">Event Image</div>
                                <input accept="image/*" onChange={handleFileChange} type="file" className="file-input border-none rounded-sm w-full" />
                            </div>
                            <div className="aspect-square lg:w-[20%] w-[35%] bg-white">
                                <img src={previewUrl ? previewUrl : '/default.jpg'} alt="Image Preview" className='object-cover h-full w-full' />
                            </div>
                            <button onClick={handleEditClient} className=" btn btn-success uppercase rounded-sm">update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section