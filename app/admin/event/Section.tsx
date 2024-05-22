'use client'
import React, { useContext } from 'react'
import TableEvent from './TableEvent'
import EventProvider, { EventContext } from './EventContext'
import Alert from './Alert'
import { useRouter } from 'next/navigation'


const Section = () => {
    const eventState: any = useContext(EventContext)
    const navigation = useRouter()
    const handleNavigation = (e: string) => {
        navigation.push(`/admin/event/${e}`)
    }
    return (
        <div className='bg-admin min-h-screen'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] p-4 bg-black">
                    <Alert />
                    <div className="pb-1 pr-5 border-b-4 border-white w-fit text-2xl font-bold uppercase text-white mb-2">EVENT Maricar</div>
                    {/* <FormAddEvent /> */}
                    <button onClick={() => handleNavigation('add')} className='btn btn-warning rounded-sm'>Add Event</button>
                    <TableEvent />
                </div>
            </div>
        </div>
    )
}

export default Section