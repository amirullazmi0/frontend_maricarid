import React from 'react'
import OurServices from '../componentDashboard/OurServices'
import Service from './Service'
import ContactUs from '../componentDashboard/ContactUs'

const Section = () => {
    return (
        <div className='flex justify-center p-3'>
            <div className="lg:md:w-[80%] w-[90%] p-3">
                <Service />
                {/* <ContactUs /> */}
            </div>
        </div>
    )
}

export default Section