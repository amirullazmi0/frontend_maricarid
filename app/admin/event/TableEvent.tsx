'use client'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import 'moment/locale/id'; // Import Indonesian locale
import { EventContext } from './EventContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import successIcon from "../../../public/icon/Success.gif";

const TableEvent = () => {
    moment.locale('id');
    const eventState = useContext(EventContext)
    const [dataEvent, setDataEvent] = useState<eventDTO[]>()
    const [AlertDelete, setAlertDelete] = useState<boolean>(false)
    const [deleteStatus, setDeleteStatus] = useState<boolean>(false)
    const [deleteSelect, setDeleteSelect] = useState<eventDTO | null>(null)

    const navigation = useRouter()
    const API_URL = process.env.API_URL

    const getData = async () => {
        try {

            const response = await axios.get(`${API_URL}/api/event`)

            if (response.data.success === true) {
                setDataEvent(response.data.data)
            }
        } catch (error) {

        }
    }

    const [access_token, setAccessToken] = useState<string | null>()

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${API_URL}/api/event/`, {
                data: {
                    id: deleteSelect ? deleteSelect.id : ''
                },
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

            if (response.data) {
                setDeleteStatus(true)
                setTimeout(() => {
                    setDeleteSelect(null)
                    setDeleteStatus(false)
                    setAlertDelete(false)
                }, 5000)
            }
        } catch (error) {

        }
    }

    const renderAlertDelete = () => {
        if (AlertDelete == true && deleteStatus == false) {
            return (
                <div className="fixed w-screen min-h-screen bg-[#000000d8] top-0 left-0 flex items-center justify-center z-50">
                    <button onClick={() => handleCloseAlertDelete()} className="btn btn-ghost fixed top-0 right-0 m-4 btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="grid gap-4 p-4">
                        <div className="card border-4 border-red-600 min-w-[70vw]">
                            <div className="card-body">
                                <div className="">
                                    Are you sure to delete event with name <span className='text-warning'>{eventState.deleteSelect?.name}</span>  ?
                                </div>
                                <div className="flex justify-end mt-4 gap-2">
                                    <button onClick={() => handleCloseAlertDelete()} className='btn btn-info uppercase text-white'>Cancel</button>
                                    <button onClick={() => handleDelete()} className='btn border-none bg-red-600 hover:bg-red-700 uppercase text-white'>Sure</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        if (AlertDelete == true && deleteStatus == true) {
            return (
                <React.Fragment>
                    <div className="fixed w-screen h-screen top-0 left-0 bg-[#000000c9] flex justify-center items-center z-50">
                        <div className=" p-4 text-center min-h-[30%] lg:w-[40%] flex justify-center items-center">
                            <div className="">
                                <div className="flex justify-center">
                                    <Image alt='' src={successIcon} className='h-32 w-fit' />
                                </div>

                                <div className="w-full text-center font-bold uppercase text-xl text-white">
                                    <div className="">
                                        Delete Data Successfully
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

    const handleCloseAlertDelete = () => {
        setDeleteSelect(null)
        setAlertDelete(false)
    }
    const handelAlertDelete = (item: eventDTO) => {
        setDeleteSelect(item)
        setAlertDelete(true)
    }


    const handleNavigation = (e: string) => {
        navigation.push(`/admin/event/${e}`)
    }

    useEffect(() => {
        getData()
        if (typeof window !== 'undefined') {
            const token = sessionStorage.getItem('access_token');
            setAccessToken(token);
        }
    }, [deleteStatus])
    return (
        <div className='text-white mt-4'>
            {renderAlertDelete()}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 z-10">
                {dataEvent && dataEvent.length > 0 ? dataEvent.map((item: eventDTO, index: number) => {
                    const originalDesc = item.desc
                    const truncateDesc: any = originalDesc?.substring(0, 50) + '...'
                    return (
                        <React.Fragment key={index}>
                            {/* CARD */}
                            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-lg">

                                <button className='aspect-square overflow-hidden'>
                                    <img className='object-cover w-full h-full hover:scale-110 duration-200 active:scale-100' src={item.images ? item.images[0] : '/default.jpg'} alt="Shoes" />
                                </button>
                                <div className="card-body bg-dark">
                                    <h2 className="card-title">{item.name}</h2>
                                    <small>last update : <span className='text-warning'>{moment(item.updatedAt).format('DD MMMM YYYY - HH:mm')}</span></small>
                                    <p className='text-sm font-thin'>{truncateDesc}</p>
                                    <div className="card-actions justify-end flex lg:gap-2 gap-1">
                                        <button onClick={() => handleNavigation(`${item.id}`)} className='btn btn-success'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                            </svg>
                                        </button>
                                        <button onClick={() => handleNavigation(`edit/${item.id}`)} className='btn btn-warning'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                            </svg>
                                        </button>
                                        <button onClick={() => handelAlertDelete(item)} className='btn btn-error'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
                    :
                    <div className="lg:col-span-4 col-span-2 flex w-full justify-center min-h-[20vh]">
                        <span className="loading loading-dots loading-lg text-white"></span>
                    </div>
                }
            </div>
        </div>
    )
}

export default TableEvent