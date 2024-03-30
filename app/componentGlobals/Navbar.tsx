import React from 'react'

const Navbar = () => {
    return (
        <div className='grid grid-cols-10 min-h-[20vh]'>
            <div className="col-span-3 p-4 bg-sky-600 flex items-center justify-center">
                <div className="text-3xl text-center font-bold">LOGO</div>
            </div>
            <div className="col-span-7 p-4 bg-secondary flex items-center justify-center">
                <div className="text-3xl text-center font-bold">NAVIGATION</div>
            </div>
        </div>
    )
}

export default Navbar