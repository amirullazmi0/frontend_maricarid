'use client'
import { eventDTO } from '@/model/event.model'
import axios from 'axios'
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

interface BaseContextType {
    addStatus: boolean;
    setAddStatus: Dispatch<SetStateAction<boolean>>;
    errorStatus: boolean;
    setErrorStatus: Dispatch<SetStateAction<boolean>>;
    deleteSelect: eventDTO | undefined;
    setDeleteSelect: Dispatch<SetStateAction<eventDTO | undefined>>;
    deleteStatus: boolean;
    setDeleteStatus: Dispatch<SetStateAction<boolean>>;
    modalEdit: boolean;
    setModalEdit: Dispatch<SetStateAction<boolean>>;
    editSelect: eventDTO | undefined;
    setEditSelect: Dispatch<SetStateAction<eventDTO | undefined>>;
    editStatus: boolean;
    setEditStatus: Dispatch<SetStateAction<boolean>>;
    handleDeleteEvent: () => Promise<void>; // Updated type
}
export const EventContext = createContext<BaseContextType>({
    addStatus: false,
    setAddStatus: () => { },
    errorStatus: false,
    setErrorStatus: () => { },
    deleteSelect: undefined,
    setDeleteSelect: () => { },
    deleteStatus: false,
    setDeleteStatus: () => { },
    modalEdit: false,
    setModalEdit: () => { },
    editSelect: undefined,
    setEditSelect: () => { },
    editStatus: false,
    setEditStatus: () => { },
    handleDeleteEvent: async () => { } // Empty function as placeholder
})


export default function EventProvider({ children }: { children: React.ReactNode }) {
    const [addStatus, setAddStatus] = useState<boolean>(false)
    const [errorStatus, setErrorStatus] = useState<boolean>(false)

    const [deleteSelect, setDeleteSelect] = useState<eventDTO | undefined>(undefined)
    const [deleteStatus, setDeleteStatus] = useState<boolean>(false)

    const [modalEdit, setModalEdit] = useState<boolean>(false)
    const [editSelect, setEditSelect] = useState<eventDTO | undefined>(undefined)
    const [editStatus, setEditStatus] = useState<boolean>(false)

    const API_URL = process.env.API_URL
    const access_token = Cookies.get('access_token')

    const handleDeleteEvent = async () => {
        if (deleteSelect) {
            try {
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
