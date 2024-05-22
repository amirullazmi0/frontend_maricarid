import React from 'react'

const ContactUs = () => {
    return (
        <div className='min-w-screen pt-4 pb-4 bg-gray'>
            <div className="flex justify-center items-center">
                <div className="lg:md:w-[80vw] w-[90vw] ">
                    <div className="uppercase font-bold ">
                        <div className="lg:md:text-xl text-slate-400">
                            Contact Us
                        </div>
                        <div className="lg:md:text-2xl">KEEP IN TOUCH</div>
                    </div>
                    <div className="lg:md:grid grid-cols-2 min-h-[50vh]">
                        <div className="p-4 text-slate-600 lg:md:w-[80%] flex items-center">
                            <div className="">
                                <div className="">
                                    <span className='text-black uppercase font-bold p-1 bg-warning'>Maricar Group</span> is widely trusted by customers because it provides the best offers for Shipping Agency and Logistics Services.
                                </div>
                                {/* <div className="mt-3">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ex quam consequuntur id voluptatum fugit optio ducimus harum cumque fuga cupiditate nemo nisi iure, quibusdam commodi magnam illum tempora corporis.
                                </div> */}
                            </div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-span-2 bg-[url('/aboutus.jpg')] bg-cover bg-center"></div>
                            <div className="col-span-8 bg-white lg:md:p-4 p-2">
                                <div className="grid lg:md:grid-cols-2 grid-cols-1 gap-3">
                                    <div className="col-span-1 grid gap-1">
                                        <div className="text-sm font-normal">Full Name</div>
                                        <input type="text" className="input input-bordered w-full max-w-xs rounded-sm" />
                                    </div>
                                    <div className="grid gap-1">
                                        <div className="text-sm font-normal">Email</div>
                                        <input type="text" className="input input-bordered w-full max-w-xs rounded-sm" />
                                    </div>
                                    <div className="grid gap-1">
                                        <div className="text-sm font-normal">Subject</div>
                                        <input type="text" className="input input-bordered w-full max-w-xs rounded-sm" />
                                    </div>
                                    <div className="grid gap-1">
                                        <div className="text-sm font-normal">Phone</div>
                                        <input type="text" className="input input-bordered w-full max-w-xs rounded-sm" />
                                    </div>
                                    <div className="lg:md:col-span-2 grid gap-1">
                                        <div className="text-sm font-normal">Comment</div>
                                        <textarea className="textarea textarea-bordered rounded-sm" rows={5} style={{ resize: 'none' }} ></textarea>
                                    </div>
                                    <div className="lg:md:col-span-2 grid gap-1">
                                        <button className="btn btn-sm btn-neutral rounded-sm uppercase">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs