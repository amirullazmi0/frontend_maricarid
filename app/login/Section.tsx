'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'


import React, { useEffect, useState } from 'react'

const Section = () => {
    const [Login, setLogin] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const navigation = useRouter()

    const handleLogin = async () => {
        navigation.push('/admin')

        try {
            const response = await axios.post('', {
                email: email,
                password: password
            })
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        console.log('email', email);
        console.log('password', password);

    }, [email, password])
    return (
        <div className='bg-login '>
            <div className="bg-[#000000bb] w-screen min-h-screen flex justify-center items-center">
                <div className=" rounded-xl lg:w-[60%] w-[90%] bg-white overflow-hidden">
                    <div className="lg:grid grid-cols-2">
                        <div className="min-h-[65vh] flex items-center justify-center">
                            <div className="w-[70%] grid gap-3">
                                <div className="mb-4 mt-4">
                                    <div className="text-dark uppercase font-bold text-5xl">Login</div>
                                    <div className="text-gray-400 uppercase text-xl">Maricar Id</div>
                                </div>
                                <div className="">
                                    <div className="mb-2">Email</div>
                                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered w-full" />
                                </div>
                                <div className="">
                                    <div className="mb-2">Password</div>
                                    <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" className="input input-bordered w-full" />
                                </div>
                                <hr />
                                <div className="flex justify-center">
                                    <button onClick={() => handleLogin()} className='btn btn-neutral btn-wide btn-sm'> Login</button>
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