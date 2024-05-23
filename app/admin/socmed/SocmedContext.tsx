'use client'
import { socmedDTO } from "@/model/socmed.model";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const SocmedContext = createContext({})

export default function SocmedProvider({ children }: { children: React.ReactNode }) {
    const [listSocmed, setListSocmed] = useState<socmedDTO[]>()
    const [failed, setFailed] = useState<boolean | undefined>(false)
    const [updateSelect, setUpdateSelect] = useState<socmedDTO>()
    const [alertUpdate, setAlertUpdate] = useState<boolean | undefined>(false)
    const [access_token, setAccessToken] = useState<string | null>()
    const getSocmed = async () => {
        try {
            const API_URL = process.env.API_URL
            const response = await axios.get(`${API_URL}/api/socmed`, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

            if (response.data.success == true) {
                setListSocmed(response.data.data)
                setFailed(true)
            }

            if (response.data.success == false) {
                setFailed(false)
            }
        } catch (error) {
            console.log(error);
            setFailed(false)
        }
    }

    const updateSocmed = async (name: string, link: string) => {
        try {
            const API_URL = process.env.API_URL
            const access_token = sessionStorage.getItem('access_token')
            const response = await axios.put(`${API_URL}/api/socmed/${name}`, {
                link: link
            }, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

            if (response.data.success == false) {
                setAlertUpdate(true)
                setTimeout(() => {
                    setAlertUpdate(false)
                }, 10000)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = sessionStorage.getItem('access_token');
            setAccessToken(token);
        }
    }, [])

    return (
        <SocmedContext.Provider value={{
            listSocmed,
            failed,
            alertUpdate,
            getSocmed,
            updateSocmed
        }}>
            {children}
        </SocmedContext.Provider>
    )
}