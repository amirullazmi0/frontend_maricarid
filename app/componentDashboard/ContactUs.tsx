'use client'
import axios from 'axios'
import React, { useState } from 'react'

const ContactUs = () => {
    const [subject, setSubject] = useState<string>('')
    const [fullName, setFullname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [alertSuccess, setAlertSuccess] = useState<boolean>(false)
    const API_URL = process.env.API_URL

    const handleSendMail = async () => {
        try {
            const response = await axios.post(`${API_URL}/api/mail/send`, {
                subject: subject,
                message: `${fullName} | ${email} | ${phone} | ${message}`
            })

            if (response.data.success == true) {
                setAlertSuccess(true)
                setEmail('')
                setFullname('')
                setPhone('')
                setMessage('')
                setSubject('')
                setTimeout(() => {
                    setAlertSuccess(false)
                }, 3000)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='min-w-screen pt-4 pb-4 bg-gray'>
            <div className="flex justify-center items-center">
                <div className="lg:md:w-[80vw] w-[90vw] ">
                    <div className="uppercase font-bold ">
                        <div className="lg:md:text-xl text-slate-400">
                            Contact Us
                        </div>
                        <div className="lg:md:text-2xl text-dark">KEEP IN TOUCH</div>
                    </div>
                    <div className="lg:md:grid grid-cols-2 min-h-[50vh]">
                        <div className="p-4 text-slate-600 lg:md:w-[80%] flex items-center">
                            <div className="">
                                <div className="">
                                    <span className='text-black uppercase font-bold p-1 bg-warning'>Maricar Group</span> is widely trusted by customers because it provides the best offers for Shipping Agency and Logistics Services.
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-10 text-black">
                            <div className="col-span-2 bg-[url('/aboutus.jpg')] bg-cover bg-center"></div>
                            <div className="col-span-8 bg-white lg:md:p-4 p-2">
                                <div className="grid lg:md:grid-cols-2 grid-cols-1 gap-3">
                                    {alertSuccess &&
                                        <div className="lg:col-span-2 p-2 bg-lime-100 uppercase font-bold text-center">
                                            Send Email To Maricar Successfully
                                        </div>
                                    }
                                    <div className="col-span-1 grid gap-1">
                                        <div className="text-sm font-normal">Full Name</div>
                                        <input type="text" value={fullName} onChange={(e) => setFullname(e.target.value)} className="input bg-white  input-bordered  w-full rounded-sm" />
                                    </div>
                                    <div className="grid gap-1">
                                        <div className="text-sm font-normal">Email</div>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input bg-white  input-bordered  w-full rounded-sm" />
                                    </div>
                                    <div className="grid gap-1">
                                        <div className="text-sm font-normal">Subject</div>
                                        <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className="input bg-white  input-bordered  w-full rounded-sm" />
                                    </div>
                                    <div className="grid gap-1">
                                        <div className="text-sm font-normal">Phone</div>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="input bg-white  input-bordered  w-full rounded-sm" />
                                    </div>
                                    <div className="lg:md:col-span-2 grid gap-1">
                                        <div className="text-sm font-normal">Comment</div>
                                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="textarea textarea-bordered rounded-sm bg-white" rows={5} style={{ resize: 'none' }} ></textarea>
                                    </div>
                                    <div className="lg:md:col-span-2 grid gap-1">
                                        <button onClick={handleSendMail} className="btn btn-sm btn-neutral rounded-sm uppercase text-white">
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