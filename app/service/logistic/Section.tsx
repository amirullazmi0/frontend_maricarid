'use client'
import React from 'react'
import logo from "../../../public/assets/LOGO MARICAR logistics1.png";
import Image from 'next/image';

const Section = () => {
    return (
        <div className='flex justify-center p-2 pb-10   '>
            <div className="lg:w-[70%] p-2">
                <Image alt='' src={logo} className='h-32 w-fit' />
                <div className="text-lg text-center">
                    Maricar ship logistics is Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi esse ea quos illum, omnis odit accusamus sit repellat, iure possimus magni eveniet vitae perspiciatis odio aut dolore, atque animi dolor veniam soluta in sint! Perferendis tempora unde facilis. Facilis illum dolore id modi, vel ducimus amet omnis numquam labore distinctio repellat maxime aspernatur alias incidunt excepturi pariatur nihil libero ut necessitatibus. Dicta, quis. Eligendi possimus voluptatem praesentium eveniet dolores, cupiditate fuga aut omnis. Quasi obcaecati ipsum natus magnam quod eius, velit quos nisi, enim eaque perferendis deserunt unde porro magni, voluptatum consequatur voluptatem optio? Minus voluptate ea inventore hic?
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis repellat ex explicabo assumenda at accusantium laudantium eos! A ducimus illo ipsam rerum laborum tempore, sit laboriosam? Mollitia reiciendis ad libero cupiditate a unde, nostrum nisi beatae possimus sapiente labore odio explicabo accusamus, magnam rem alias perspiciatis minus eos asperiores voluptates, repellat vitae suscipit? Perferendis blanditiis excepturi iste quibusdam?
                </div>
            </div>
        </div>
    )
}

export default Section