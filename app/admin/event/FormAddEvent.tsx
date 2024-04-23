'use client'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import EventProvider, { EventContext } from './EventContext'

const FormAddEvent = () => {
    const EventState: any = useContext(EventContext)

    const [Modal, setModal] = useState<boolean>(false)

    const [name, setName] = useState<string | undefined>('')
    const [desc, setDesc] = useState<string | undefined>('')
    const [images, setImages] = useState<any | undefined>('')
    const [require, setRequire] = useState<boolean>(false)

    const handleCloseModal = () => {
        setName('')
        setDesc('')
        setImages('')
        setModal(false)
    }
    useEffect(() => {
        console.log(images);

    }, [images])

    const handleFileChange = (event: any) => {
        // console.log(event.target.files.length);

        setImages(event.target.files[0]);
    };

    const handleAddEvent = async () => {
        if (name && desc) {
            try {
                const API_URL = process.env.API_URL
                const formData = new FormData
                formData.append('name', name)
                formData.append('desc', desc)
                formData.append('images', images)
                const data: eventDTO = {
                    name: name,
                    desc: desc,
                    images: images
                }

                const access_token = sessionStorage.getItem('access_token')

                const response = await axios.post(`${API_URL}/api/event`, formData, {
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
                    setModal(false)
                    setTimeout(() => {
                        EventState.setAddStatus(false)
                    }, 10000)
                }

                console.log(response.data);


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
                    <div className="fixed w-screen min-h-screen bg-[#000000d8] top-0 left-0 flex items-center justify-center z-50">
                        <button onClick={() => handleCloseModal()} className="btn btn-ghost fixed top-0 right-0 m-4 btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="grid gap-4 lg:min-w-[40vw]">
                            <div className="text-xl uppercase text-white font-bold bg-red-600 p-2 rounded-sm w-fit">
                                Form Add Event
                            </div>
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
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="event name" className="input input-bordered w-full" />
                            </div>
                            <div className="">
                                <div className="text-white mb-1">Event Description</div>
                                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="textarea textarea-bordered w-full" placeholder="event description" rows={10}></textarea>
                            </div>
                            <div className="">
                                <div className="text-white mb-1">Event Description</div>
                                <input accept="image/*" multiple onChange={handleFileChange} type="file" className="file-input file-input-bordered w-full" />
                            </div>
                            <hr />
                            <button onClick={handleAddEvent} className="btn btn-success uppercase">Save</button>
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

export default FormAddEvent