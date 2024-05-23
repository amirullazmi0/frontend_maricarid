'use client'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext'

const FormPassword = () => {
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')
    const [alertSuccess, setAlertSuccess] = useState<boolean>(false)
    const Auth: any = useContext(AuthContext)
    const API_URL = process.env.API_URL
    const [access_token, setAccessToken] = useState<string | null>()

    const [Email, setEmail] = useState<string>('')
    const handleUpdatePassword = async () => {
        try {
            const response = await axios.put(`${API_URL}/api/auth/update-password`, {
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

            if (response.data.success == true) {
                setAlertSuccess(true)
                setNewPassword('')
                setConfirmNewPassword(``)
                setTimeout(() => {
                    setAlertSuccess(false)
                }, 10000)
            }
        } catch (error) {
            setNewPassword('')
            setConfirmNewPassword(``)
        }
    }

    useEffect(() => {
        if (Auth.currentUser) {
            setEmail(Auth.currentUser.email)
        }
        if (typeof window !== 'undefined') {
            const token = sessionStorage.getItem('access_token');
            setAccessToken(token);
        }
    }, [Auth.currentUser])

    return (
        <div id='password' className="grid h-fit gap-2 p-4 border border-warning">
            {alertSuccess === true &&
                <div className="p-3 bg-green-200 rounded text-green-700 flex justify-between">
                    <div className="">
                        Update Password Successfully
                    </div>
                    <span className="loading loading-dots loading-sm"></span>
                </div>
            }
            <div className="">
                <div className="text-white text-center border-b-4 uppercase font-bold w-fit ">
                    new password
                </div>
                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" className='input w-full mt-1 rounded-none' />
            </div>
            <div className="">
                <div className="text-white text-center border-b-4 uppercase font-bold w-fit">
                    confirm new password
                </div>
                <input value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} type="password" className='input w-full mt-1 rounded-none' />
            </div>
            {confirmNewPassword && confirmNewPassword.length > 0 && confirmNewPassword !== newPassword &&
                <div className="p-2 rounded-sm border-4 uppercase border-red-600 text-red-500 text-center">
                    confirm password is false !
                </div>
            }

            {confirmNewPassword && confirmNewPassword.length > 0 && confirmNewPassword == newPassword &&
                <div className="p-2 rounded-lg border-4 uppercase border-success text-success text-center">
                    Lets Goo !!
                </div>
            }
            <div className="">
                <button onClick={handleUpdatePassword} className='btn btn-neutral w-full uppercase rounded-none'>update password</button>
            </div>
        </div>
    )
}

export default FormPassword