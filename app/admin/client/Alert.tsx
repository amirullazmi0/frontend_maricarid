'use client'
import React, { useContext, useEffect } from 'react'
import { ClientContext } from './ClientContext'

const Alert = () => {
    const ClientState = useContext(ClientContext)

    useEffect(() => {
        console.log('add client status', ClientState.addStatus);

    }, [ClientState.addStatus])

    return (
        <>
            {ClientState.addStatus === true &&
                <div className="p-3 rounded-sm bg-success flex justify-between mt-3 mb-3">
                    <div className="text-white uppercase font-bold">
                        Add Event Success
                    </div>
                </div>
            }
            {ClientState.editStatus === true &&
                <div className="p-3 rounded-sm bg-success flex justify-between mt-3 mb-3">
                    <div className="text-white uppercase font-bold">
                        Update Event Success
                    </div>
                </div>
            }
            {ClientState.deleteStatus === true &&
                <div className="p-3 rounded-sm bg-warning flex justify-between mt-3 mb-3">
                    <div className=" uppercase font-bold">
                        Event has been deleted
                    </div>
                </div>
            }
        </>

    )
}

export default Alert