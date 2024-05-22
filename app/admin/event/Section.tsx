'use client'
import React, { useContext } from 'react'
import FormAddEvent from './FormAddEvent'
import TableEvent from './TableEvent'
import EventProvider, { EventContext } from './EventContext'
import Alert from './Alert'
import FormEditEvent from './FormEditEvent'


const Section = () => {
    const eventState: any = useContext(EventContext)
    return (
        <div className='bg-admin min-h-screen'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] p-4 bg-[#00000078]">
                    <Alert />
                    <div className="pb-1 pr-5 border-b-4 border-warning w-fit text-2xl font-bold uppercase text-warning mb-2">EVENT Maricar</div>
                    <FormAddEvent />
                    <TableEvent />
                    <FormEditEvent modal={eventState.modalEdit} />
                </div>
            </div>
        </div>
    )
}

export default Section