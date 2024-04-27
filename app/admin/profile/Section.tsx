import React from 'react'
import FormPassword from './FormPassword'
import { FormSocmed } from './FormSocmed'

const Section = () => {
    return (
        <div className='bg-admin min-h-screen'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] w-full p-4 bg-[#00000078]">
                    <div className="uppercase text-2xl text-warning border-warning font-bold pb-1 pr-5 border-b-4 w-fit ">
                        Profile
                    </div>
                    <FormPassword />
                    <FormSocmed />
                </div>
            </div>
        </div>
    )
}

export default Section