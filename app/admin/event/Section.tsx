import React from 'react'

const Section = () => {
    return (
        <div className='bg-admin min-h-screen'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] p-4 bg-[#00000078]">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="grid gap-4">
                            <div className="text-warning text-2xl uppercase font-bold">Add Event</div>
                            <div className="">
                                <div className="text-white mb-1">Event Name</div>
                                <input type="text" placeholder="event name" className="input input-bordered w-full" />
                            </div>
                            <div className="">
                                <div className="text-white mb-1">Event Description</div>
                                <textarea className="textarea textarea-bordered w-full" placeholder="event description"></textarea>
                            </div>
                            <div className="">
                                <div className="text-white mb-1">Event Description</div>
                                <input type="file" multiple aria-multiline className="file-input file-input-bordered w-full" />
                            </div>
                            <hr />
                            <button className="btn btn-neutral uppercase">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section