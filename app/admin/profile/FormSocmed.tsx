'use client'
import React, { useContext, useEffect, useState } from 'react'
import FormEmail from './FormEmail'
import FormTwitter from './formTwitter'
import FormInstagram from './FormInstagram'
import FormFacebook from './FormFacebook'

export const FormSocmed = () => {
    return (
        <div className='w-full mt-4'>
            <div className="text-white font-bold text-2xl uppercase mb-2 pr-5 border-b-4 w-fit">Social Media</div>
            <div className="grid gap-2">
                {/* <FormEmail /> */}
                <FormTwitter />
                <FormInstagram />
                <FormFacebook />
            </div>
        </div>
    )
}
