'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const handleToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className='relative flex justify-center bg-dark'>
            <footer className="footer w-[75vw] p-10  text-white">
                <aside>
                    <img src="/assets/logoRed.png" className='h-20' alt="" />
                    <p>MARICAR ID<br />Solution Shipowner & Owner Cargo</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link href={'/service/ship-agency'} className="">Ship Agency</Link>
                    <Link href={'/service/logistic'} className="">Logistics</Link>
                    <Link href={'/service/stevedoring-equipment'} className="">Stevedoring & Equipment</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link href={'/about-us'} className="">About us</Link>
                    <Link href={'/contact-us'} className="">Contact</Link>
                    <Link href={'/event'} className="">Our Activity</Link>
                    <Link href={'/marine-traffic'} className="">Marine-traffic</Link>
                </nav>
            </footer>
            <button onClick={handleToTop} className='btn fixed bottom-5 right-5 btn-circle bg-white border-none shadow-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
        </div>
    )
}

export default Footer