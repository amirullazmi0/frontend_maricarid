import React from 'react'

const Section = () => {
    return (
        <div className='bg-admin min-h-screen'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] p-4 bg-[#00000078]">
                    <div className="lg:grid grid-cols-3 gap-2">
                        <button className='aspect-square bg-[#00000078] rounded-lg hover:bg-[#000000c5] active:scale-95 duration-200'>
                            <div className="flex justify-center items-center text-gray-300 text-xl uppercase font-bold">
                                Event
                            </div>
                        </button>
                        <button className='aspect-square bg-[#00000078] rounded-lg hover:bg-[#000000c5] active:scale-95 duration-200'>
                            <div className="flex justify-center items-center text-gray-300 text-xl uppercase font-bold">
                                Social Media
                            </div>
                        </button>
                        <button className='aspect-square bg-[#00000078] rounded-lg hover:bg-[#000000c5] active:scale-95 duration-200'>
                            <div className="flex justify-center items-center text-gray-300 text-xl uppercase font-bold">
                                Profile
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section