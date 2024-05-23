'use client'
import { UserDTO } from '@/model/user.model'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export const AuthContext = createContext({})

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [Login, setLogin] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<UserDTO>()
    const [Alert, setAlert] = useState<boolean>(false)
    const router = useRouter()

    const access_token = Cookies.get('access_token')

    const CheckAuth = async () => {
        try {
            const API_URL = process.env.API_URL
            const response = await axios.get(`${API_URL}/api/auth/checkAuth`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            if (response.data.success) {
                setLogin(true)
                setCurrentUser(response.data.data)
            } else {
                setAlert(true)
                setTimeout(() => {
                    setAlert(false)
                    router.push('/login')
                }, 10000)
            }

        } catch (error) {
            console.log(error);
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
                router.push('/login')
            }, 10000)
        }
    }

    return <AuthContext.Provider
        value={{
            Login,
            currentUser,
            CheckAuth,
            Alert
        }}>
        {children}
    </AuthContext.Provider>

}