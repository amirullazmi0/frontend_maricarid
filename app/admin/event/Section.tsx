'use client'
import React from 'react'
import TableEvent from './TableEvent'
import Alert from './Alert'
import { useRouter } from 'next/navigation'


const Section = () => {
    const navigation = useRouter()
    const handleNavigation = (e: string) => {
        navigation.push(`/admin/event/${e}`)
    }
    return (
        <div className='bg-admin min-h-screen'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] w-[100%] p-4 bg-black">
                    <Alert />
                    <div className="pb-1 pr-5 border-b-4 border-white w-fit text-2xl font-bold uppercase text-white mb-2">Gallery Maricar</div>
                    <button onClick={() => handleNavigation('add')} className='btn btn-warning rounded-sm'>Add Event</button>
                    <TableEvent />
                </div>
            </div>
        </div>
    )
}

export default Section