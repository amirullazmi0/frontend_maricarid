'use client'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import EventProvider, { EventContext, EventContextDTO } from './EventContext'

interface props {
    modal: boolean
}

const FormEditEvent: React.FC<props> = ({ modal }) => {
    const EventState: any = useContext(EventContext)

    const [name, setName] = useState<string | undefined>('')
    const [desc, setDesc] = useState<string | undefined>('')
    const [images, setImages] = useState<any | undefined>(undefined)
    const [require, setRequire] = useState<boolean>(false)

    const handleCloseModal = () => {
        setName('')
        setDesc('')
        setImages(undefined)
        EventState.setModalEdit(false)
    }
    useEffect(() => {
        if (EventState.editSelect) {
            const select = EventState.editSelect
            setName(select.name)
            setDesc(select.desc)
        }

    }, [EventState.modalEdit])

    const handleAddEvent = async () => {
        if (name && desc) {
            try {
                const API_URL = process.env.API_URL

                const data: eventDTO = {
                    name: name,
                    desc: desc,
                    images: images
                }

                const access_token = sessionStorage.getItem('access_token')
                console.log(access_token);

                const response = await axios.put(`${API_URL}/api/event/${EventState.editSelect.id}`, data, {
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                })

                if (response.data.success == true) {
                    window.scrollTo({
                        top: 0
                    })
                    EventState.setEditStatus(true)
                    setName('')
                    setDesc('')
                    setImages(undefined)
                    EventState.setModalEdit(false)
                    setTimeout(() => {
                        EventState.setEditStatus(false)
                    }, 10000)

                }

            } catch (error) {
                console.log(error);
                window.scrollTo({
                    top: 0
                })
            }
        } else {
            setRequire(true)
            window.scrollTo({
                top: 0
            })
            setTimeout(() => {
                setRequire(false)
            }, 10000)
        }
    }

    if (modal === true) {
        window.document.body.style.overflow = 'hidden'
        return (
            <div className="">
                <div className="fixed w-screen min-h-screen bg-[#000000d8] top-0 left-0 flex items-center justify-center z-50">
                    <button onClick={() => handleCloseModal()} className="btn btn-ghost fixed top-0 right-0 m-4 btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="grid gap-4 lg:min-w-[40vw]">
                        <div className="text-xl uppercase text-white font-bold bg-red-600 p-2 rounded-sm w-fit">
                            Form Edit Event
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
                            <input onChange={(e) => setImages(e.target.files)} type="file" multiple aria-multiline className="file-input file-input-bordered w-full" />
                        </div>
                        <hr />
                        <button onClick={handleAddEvent} className="btn btn-success uppercase">Update</button>
                    </div>
                </div>
            </div>
        )
    } else {
        window.document.body.style.overflow = 'auto'
    }
}

export default FormEditEvent