'use client'

import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import { createContext, useState } from 'react'

export const EventContext = createContext({})

export default function EventProvider({ children }: { children: React.ReactNode }) {
    const [addStatus, setAddStatus] = useState<boolean>(false)
    const [errorStatus, setErrorStatus] = useState<boolean>(false)

    const [deleteSelect, setDeleteSelect] = useState<eventDTO | undefined>(undefined)
    const [deleteStatus, setDeleteStatus] = useState<boolean>(false)

    const [modalEdit, setModalEdit] = useState<boolean>(false)
    const [editSelect, setEditSelect] = useState<eventDTO | undefined>(undefined)
    const [editStatus, setEditStatus] = useState<boolean>(false)

    const handleDeleteEvent = async () => {
        if (deleteSelect) {
            try {
                const API_URL = process.env.API_URL
                const access_token = sessionStorage.getItem('access_token')
                const response = await axios.delete(`${API_URL}/api/event`, {
                    data: {
                        id: deleteSelect.id
                    },
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                })
                if (response.data.success == true) {
                    setDeleteStatus(true)
                    setDeleteSelect(undefined)
                    setTimeout(() => {
                        setDeleteStatus(false)
                    }, 10000)
                }
            } catch (error) {

            }
        }
    }

    return <EventContext.Provider
        value={{
            addStatus, setAddStatus,
            errorStatus, setErrorStatus,
            deleteSelect, setDeleteSelect,
            deleteStatus, setDeleteStatus,
            handleDeleteEvent,
            modalEdit, setModalEdit,
            editSelect, setEditSelect,
            editStatus, setEditStatus

        }}>{children}</EventContext.Provider>
}
