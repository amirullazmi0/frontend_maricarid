import React from 'react'
import { FormSocmed } from './FormSocmed'

const Section = () => {
    return (
        <div className='bg-admin min-h-screen'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] w-full p-4 bg-[#00000078]">
                    <FormSocmed />
                </div>
            </div>
        </div>
    )
}

export default Section