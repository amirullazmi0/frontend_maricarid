import React from 'react'

interface props {
    title: string
}

const TronService: React.FC<props> = ({ title }) => {
    return (
        <div className='tron-service p-4 bg-warning flex items-center'>
            <div className="lg:md:w-2/5 w-3/5 grid gap-3 text-white lg:md:pl-10 lg:md:pr-10">
                <div className="text-xl text-gray-100">SERVICES</div>
                <div className="lg:md:text-6xl text-5xl font-bold">{title}</div>
                {/* <button className='btn w-fit btn-warning'>Our Service</button> */}
            </div>
        </div>
    )
}

export default TronService