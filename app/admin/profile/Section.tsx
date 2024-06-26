import React from 'react'
import FormPassword from './FormPassword'
import FormUsername from './FormUsername'
import FormFacebook from './form_socmed/FormFacebook'
import FormInstagram from './form_socmed/FormInstagram'
import FormVisiMisi from './form_socmed/FormVisiMisi'
import FormTwitter from './form_socmed/FormTwitter'
import FormTelepon from './form_socmed/FormTelepon'
import FormAddress from './form_socmed/FormAddress'
import FormAboutUs from './form_socmed/FormAboutUs'

const Section = () => {
    return (
        <div className='bg-admin min-h-screen'>
            <div className="flex justify-center p-4">
                <div className="lg:w-[70%] w-full p-4 bg-black">
                    <div className="uppercase text-2xl text-warning border-warning font-bold pb-1 pr-5 border-b-4 w-fit">
                        Profile
                    </div>
                    <div className="text-sm breadcrumbs text-white">
                        <ul>
                            <li><a href='#profile'>Profile</a></li>
                            <li><a href='#password'>Change Password</a></li>
                            <li><a href='#socmed'>Socmed</a></li>
                            <li><a href='#visimisi'>Visi&Misi</a></li>
                        </ul>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-2 mt-3">
                        <FormUsername />
                        <FormPassword />
                        <div id='socmed' className="lg:col-span-2">
                            <div className=" uppercase text-2xl text-warning border-warning font-bold pb-1 pr-5 border-b-4 w-fit mb-2">
                                Social Media
                            </div>
                            <div className="grid gap-2">
                                <FormFacebook />
                                <FormInstagram />
                                <FormTwitter />
                                <FormTelepon />
                            </div>
                        </div>
                        <div className="lg:col-span-2" id='visimisi'>
                            <div className=" uppercase text-2xl text-warning border-warning font-bold pb-1 pr-5 border-b-4 w-fit mb-2">
                                Visi & Misi
                            </div>
                            <FormVisiMisi />
                        </div>
                        <div className="lg:col-span-2" id='visimisi'>
                            <div className=" uppercase text-2xl text-warning border-warning font-bold pb-1 pr-5 border-b-4 w-fit mb-2">
                                ADDRESS
                            </div>
                            <FormAddress />
                        </div>
                        <div className="lg:col-span-2" id='visimisi'>
                            <div className=" uppercase text-2xl text-warning border-warning font-bold pb-1 pr-5 border-b-4 w-fit mb-2">
                                BIO
                            </div>
                            <FormAboutUs />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section