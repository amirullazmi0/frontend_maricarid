'use client'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import logo from "../../public/assets/fullWhite.png";
import React, { useContext, useEffect, useState } from 'react'
import 'dotenv/config'
import Cookies from 'js-cookie'
import Link from 'next/link';

const Section = () => {
    const API_URL = process.env.API_URL

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loginStatus, setLoginStatus] = useState<boolean | string>('')
    const navigation = useRouter()

    const handleLogin = async () => {
        if (email.length > 0 && password.length > 0) {
            try {
                const response = await axios.post(`${API_URL}/api/auth/login`, {
                    email: email,
                    password: password
                })

                if (response.data.success == true) {
                    Cookies.set('access_token', response.data.data.token)
                    setLoginStatus(true)
                    setTimeout(() => {
                        navigation.push('/admin')
                    }, 3000)
                } else if (response.data.success == false) {
                    setEmail('')
                    setPassword('')
                    setLoginStatus(false)
                    setTimeout(() => {
                        setLoginStatus('')
                    }, 3000)
                }
            } catch (error) {
                setEmail('')
                setPassword('')
                setLoginStatus(false)
                setTimeout(() => {
                    setLoginStatus('')
                }, 3000)
            }
        }
    }

    const renderAlert = () => {
        if (loginStatus === true) {
            return (
                <div className="p-3 bg-green-200 rounded text-green-700 flex justify-between">
                    <div className="">
                        Login Successfully
                    </div>
                    <span className="loading loading-dots loading-sm"></span>
                </div>
            )
        } else if (loginStatus === false) {
            return (
                <div className="p-3 bg-red-200 rounded text-red-700 flex justify-between">
                    <div className="">
                        Check email & password
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            )
        }
    }

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckboxChange = (e: any) => {
        setIsChecked(e.target.checked);
    };

    return (
        <div className='bg-login '>
            <div className="bg-[#000000bb] w-screen min-h-screen flex justify-center items-center">
                <div className=" rounded-xl lg:w-[60%] w-[90%] bg-white overflow-hidden">
                    <div className="lg:grid grid-cols-2">
                        <div className="min-h-[75vh] flex items-center justify-center p-5">
                            <div className="w-[80%] grid gap-3">
                                <div className="mb-4">
                                    <div className="flex justify-center">
                                        <Image alt='' src={logo} className='h-40 object-cover drop-shadow-lg' />
                                    </div>
                                    <div className="text-dark uppercase font-bold text-5xl">Login</div>
                                </div>

                                {renderAlert()}
                                <div className="">
                                    <div className="mb-2">Email</div>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered w-full" />
                                </div>
                                <div className="">
                                    <div className="mb-2">Password</div>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={isChecked ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full" />
                                </div>
                                <div className=" flex justify-end gap-3 ">
                                    <div >Show Password</div>
                                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="checkbox" />
                                </div>

                                <hr />
                                <div className="flex justify-center mt-5">
                                    <button onClick={() => handleLogin()} type='submit' className='btn btn-neutral btn-wide'> Login</button>
                                </div>
                                <div className="flex justify-center">
                                    <span className='text-sm'>Back to dashboard <Link className='btn btn-sm btn-warning' href={'/'}>Here</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:block hidden bg-login"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section