'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext'
import { useRouter, usePathname } from 'next/navigation'

const CheckAuthAdmin = () => {
    const auth: any = useContext(AuthContext)
    const router = useRouter()
    useEffect(() => {
        auth.CheckAuth()
    }, [])

    if (auth.Alert === true) {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
        return (
            <>
                <div className={`p-3 fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#000000d7] text-center z-50`}>
                    <div className="">
                        <div className="uppercase text-white font-bold text-3xl">
                            SESSION TIMEOUT
                        </div>
                        <div className="text-warning">
                            Redirect To Login
                        </div>
                        <div className="text-white">
                            <span className="loading loading-dots loading-lg"></span>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = 'auto';
            return null
        }
    }
}

export default CheckAuthAdmin