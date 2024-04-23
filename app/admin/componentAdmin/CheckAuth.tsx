'use client'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext'
import { useRouter, usePathname } from 'next/navigation'

const CheckAuth = () => {
    const auth: any = useContext(AuthContext)
    const router = useRouter()
    useEffect(() => {
        auth.CheckAuth()
        if (auth.Login === true) {
            router.push('/admin')
        }
    }, [auth.Login])

    return null
}

export default CheckAuth