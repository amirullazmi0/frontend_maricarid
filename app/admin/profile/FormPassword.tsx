'use client'
import React, { useState } from 'react'

const FormPassword = () => {
    const [newPassword, setNewPassword] = useState<string>('')
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('')
    return (
        <div>
            <div className="lg:grid grid-cols-2 mt-3 gap-2">
                <div className=""></div>
                <div className="grid  gap-2">
                    <div className="">
                        <div className="text-white text-center border-b-4 text-xl uppercase font-bold w-fit">
                            new password
                        </div>
                        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" className='input w-full mt-1' />
                    </div>
                    <div className="">
                        <div className="text-white text-center border-b-4 text-xl uppercase font-bold w-fit">
                            confirm new password
                        </div>
                        <input value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} type="password" className='input w-full mt-1' />
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
                        <button className='btn btn-neutral w-full uppercase'>update password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPassword