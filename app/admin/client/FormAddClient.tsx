'use client'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import EventProvider, { ClientContext } from './ClientContext'

const FormAddClient = () => {
    const EventState: any = useContext(ClientContext)

    const [Modal, setModal] = useState<boolean>(false)

    const [name, setName] = useState<string | undefined>('')
    const [desc, setDesc] = useState<string | undefined>('')
    const [images, setImages] = useState<any | undefined>('')
    const [imagesPreview, setImagesPreview] = useState<any | null>(null)
    const [require, setRequire] = useState<boolean>(false)

    const handleCloseModal = () => {
        setName('')
        setDesc('')
        setImages('')
        setImagesPreview(null)
        setModal(false)
    }

    const handleFileChange = (client: any) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagesPreview(reader.result as string);
        };
        reader.readAsDataURL(client.target.files[0]);
        setImages(client.target.files[0]);

    };

    const handleAddEvent = async () => {
        if (name) {
            try {
                const API_URL = process.env.API_URL
                const formData = new FormData
                formData.append('name', name)
                formData.append('images', images)
                const data: eventDTO = {
                    name: name,
                    desc: desc,
                    images: images
                }

                const access_token = sessionStorage.getItem('access_token')

                const response = await axios.post(`${API_URL}/api/client`, formData, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    }
                })

                if (response.data.success == true) {
                    window.scrollTo({
                        top: 0
                    })
                    EventState.setAddStatus(true)
                    setName('')
                    setDesc('')
                    setImages('')
                    setImagesPreview(null)
                    setModal(false)
                    setTimeout(() => {
                        EventState.setAddStatus(false)
                    }, 10000)
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

    const renderModal = () => {
        if (Modal == true) {
            window.document.body.style.overflow = 'hidden'
            return (
                <>
                    <div className="fixed w-screen min-h-screen bg-[#000000d8] top-0 left-0 flex justify-center items-center z-50 p-4">
                        <div className="flex justify-end fixed top-0 right-0">
                            <button onClick={() => handleCloseModal()} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="grid  gap-4 lg:w-[40vw] m-4 ">
                            <div className="text-xl uppercase text-white font-bold bg-red-600 p-2 rounded-sm w-fit">
                                Form Add Client
                            </div>
                            {require == true &&
                                <div className=" border-red-600 border-4 text-red-600 uppercase font-bold p-3 rounded-sm text-center flex justify-between">
                                    <div className="">
                                        Name not be null
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                    </svg>

                                </div>
                            }
                            <div className="">
                                <div className="text-white mb-1">Client Name</div>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="event name" className="input input-bordered w-full rounded-sm" />
                            </div>
                            {/* <div className="">
                                <div className="text-white mb-1">Event Description</div>
                                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="textarea textarea-bordered w-full" placeholder="event description" rows={10}></textarea>
                            </div> */}
                            <div className="">
                                <div className="text-white mb-1">Client Logo</div>
                                <input accept="image/*" onChange={handleFileChange} type="file" className="file-input file-input-bordered w-full rounded-sm" />
                            </div>
                            <div className="">
                                <div className=" lg:w-28 w-28 aspect-square">
                                    {!imagesPreview ?
                                        <img src="/default.jpg" alt="" className='object-cover h-full' />

                                        :
                                        <img src={imagesPreview} alt="" className='object-cover h-full' />
                                    }
                                </div>
                            </div>
                            <hr />
                            <button onClick={handleAddEvent} className="btn btn-success uppercase rounded-sm">Save</button>
                        </div>
                    </div>
                </>
            )
        } else {
            window.document.body.style.overflow = 'auto'
        }
    }
    return (
        <div>
            {renderModal()}
            <button onClick={() => setModal(true)} className='btn btn-info rounded-sm'>Add Event</button>
        </div>
    )
}

export default FormAddClient