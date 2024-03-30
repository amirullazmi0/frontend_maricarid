import React from 'react'
import Features from './Features'
import OurServices from './OurServices'
import AboutUs from './AboutUs'
import OurClients from './OurClients'
import ContactUs from './ContactUs'
import Activities from './Activities'

const Section = () => {
    return (
        <div className='grid gap-4 justify-center items-center relative min-h-[40vh] w-full'>
            <Features />
            <OurServices />
            <AboutUs />
            <OurClients />
            <ContactUs />
            <Activities />
        </div>
    )
}

export default Section