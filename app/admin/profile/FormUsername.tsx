'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext'
import axios from 'axios'
import Cookies from 'js-cookie'

const FormUsername = () => {
    const [fullName, setfullName] = useState<string>('')
    const [Email, setEmail] = useState<string>('')
    const [alertSuccess, setAlertSuccess] = useState<boolean>(false)
    const access_token = Cookies.get('access_token')
    const Auth: any = useContext(AuthContext)


    const API_URL = process.env.API_URL

    const handleUpdateUser = async () => {
        try {
            const response = await axios.put(`${API_URL}/api/auth/update-user`, {
                fullName: fullName,
                email: Email
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

            console.log(response.data.success);

            if (response.data.success === true) {
                setAlertSuccess(true)
                setTimeout(() => {
                    setAlertSuccess(false)
                }, 10000)
                Auth.checkAuth()
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        if (Auth.currentUser) {
            setfullName(Auth.currentUser.fullName)
            setEmail(Auth.currentUser.email)
        }
    }, [Auth.currentUser])
    return (
        <div>
            <div id='profile' className="grid gap-2">
                {alertSuccess === true &&
                    <div className="p-3 bg-green-200 rounded text-green-700 flex justify-between">
                        <div className="">
                            Update User Successfully
                        </div>
                        <span className="loading loading-dots loading-sm"></span>
                    </div>
                }
                <div className="">
                    <div className="text-white text-center border-b-4 uppercase font-bold w-fit">
                        Full Name
                    </div>
                    <input value={fullName} onChange={(e) => setfullName(e.target.value)} type="text" className='input w-full mt-1 rounded-none' />
                </div>
                <div className="">
                    <div className="text-white text-center border-b-4 uppercase font-bold w-fit">
                        Email
                    </div>
                    <input value={Email} onChange={(e) => setEmail(e.target.value)} type="text" className='input w-full mt-1 rounded-none' />
                </div>
                {/* <div className="">
                    <div className="text-white text-center border-b-4 uppercase font-bold w-fit">
                        Bio
                    </div>
                    <textarea className='textarea w-full mt-1 rounded-none' rows={3}></textarea>
                </div> */}
                <div className="">
                    <button onClick={handleUpdateUser} className='btn btn-success w-full uppercase rounded-none'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default FormUsername