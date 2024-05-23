'use client'
import { clientDTO } from '@/model/client.model';
import axios from 'axios';
import { createContext, useState, Dispatch, SetStateAction, ReactNode, useEffect } from 'react';

interface BaseContextType {
    addStatus: boolean;
    setAddStatus: Dispatch<SetStateAction<boolean>>;
    errorStatus: boolean;
    setErrorStatus: Dispatch<SetStateAction<boolean>>;
    deleteSelect: clientDTO | undefined;
    setDeleteSelect: Dispatch<SetStateAction<clientDTO | undefined>>;
    deleteStatus: boolean;
    setDeleteStatus: Dispatch<SetStateAction<boolean>>;
    modalEdit: boolean;
    setModalEdit: Dispatch<SetStateAction<boolean>>;
    editSelect: clientDTO | undefined;
    setEditSelect: Dispatch<SetStateAction<clientDTO | undefined>>;
    editStatus: boolean;
    setEditStatus: Dispatch<SetStateAction<boolean>>;
    handleDeleteClient: () => Promise<void>; // Updated type
}

export const ClientContext = createContext<BaseContextType>({
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
    handleDeleteClient: async () => { } // Empty function as placeholder
});

export default function ClientProvider({ children }: { children: ReactNode }) {
    const [addStatus, setAddStatus] = useState<boolean>(false);
    const [errorStatus, setErrorStatus] = useState<boolean>(false);

    const [deleteSelect, setDeleteSelect] = useState<clientDTO | undefined>(undefined);
    const [deleteStatus, setDeleteStatus] = useState<boolean>(false);

    const [modalEdit, setModalEdit] = useState<boolean>(false);
    const [editSelect, setEditSelect] = useState<clientDTO | undefined>(undefined);
    const [editStatus, setEditStatus] = useState<boolean>(false);

    const handleDeleteClient = async () => { // Updated function signature
        if (deleteSelect) {
            try {
                const API_URL = process.env.API_URL;
                const access_token = sessionStorage.getItem('access_token');
                const response = await axios.delete(`${API_URL}/api/client`, {
                    data: {
                        id: deleteSelect.id
                    },
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    }
                });
                if (response.data.success == true) {
                    setDeleteStatus(true)
                    setDeleteSelect(undefined)
                    setTimeout(() => {
                        setDeleteStatus(false);
                    }, 5000);
                }
            } catch (error) {
                // Handle error
            }
        }
    };

    return (
        <ClientContext.Provider
            value={{
                addStatus,
                setAddStatus,
                errorStatus,
                setErrorStatus,
                deleteSelect,
                setDeleteSelect,
                deleteStatus,
                setDeleteStatus,
                handleDeleteClient,
                modalEdit,
                setModalEdit,
                editSelect,
                setEditSelect,
                editStatus,
                setEditStatus
            }}
        >
            {children}
        </ClientContext.Provider>
    );
}
