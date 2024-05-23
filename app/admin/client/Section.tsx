'use client'
import React, { useContext } from 'react'
import Alert from './Alert'
import TableClient from './TableClient'
import { useRouter } from 'next/navigation'

const Section = () => {
    const navigation = useRouter()
    const handleNavigation = (e: string) => {
        navigation.push(`/admin/client/${e}`)
    }
    return (
        <div className='bg-admin min-h-[70vh]'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] w-[100%] p-4 bg-black">
                    <Alert />
                    <button onClick={() => handleNavigation('add')} className='btn btn-warning rounded-sm'>Add Client</button>
                    <TableClient />
                </div>
            </div>
        </div>
    )
}

export default Section