import Link from 'next/link'
import React from 'react'

const TronEventItem = () => {
    return (
        <div className='tron-event-item p-4 bg-warning flex items-center'>
            <div className="lg:md:w-4/5 w-3/5 grid gap-3 text-white lg:md:pl-10 lg:md:pr-10">
                {/* <div className="text-xl text-gray-100">EVENT</div> */}
                <div className="lg:md:text-6xl text-5xl font-bold">ACTIVITY & EVENT</div>
                <Link href={'/about-us'} className='btn w-fit btn-warning rounded-sm'>About Us</Link>
            </div>
        </div>
    )
}

export default TronEventItem