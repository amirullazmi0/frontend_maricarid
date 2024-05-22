'use client'
import React, { useContext } from 'react'
import EventProvider, { ClientContext } from './ClientContext'
import Alert from './Alert'
import FormEditClient from './FormEditClient'
import FormAddClient from './FormAddClient'
import TableClient from './TableClient'


const Section = () => {
    const eventState: any = useContext(ClientContext)
    return (
        <div className='bg-admin min-h-screen'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] p-4 bg-[#00000078]">
                    <Alert />
                    <FormAddClient />
                    <TableClient />
                    <FormEditClient modal={eventState.modalEdit} />
                </div>
            </div>
        </div>
    )
}

export default Section