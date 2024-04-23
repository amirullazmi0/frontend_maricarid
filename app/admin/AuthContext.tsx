'use client'

import { UserDTO } from '@/model/user.model'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [Login, setLogin] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<UserDTO>()
    const [Alert, setAlert] = useState<boolean>(false)
    const router = useRouter()

    const CheckAuth = async () => {
        try {
            const API_URL = process.env.API_URL
            const access_token = sessionStorage.getItem('access_token')
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