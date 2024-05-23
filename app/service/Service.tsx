import Image from 'next/image'
import React from 'react'
import planeIcon from "../../public/icon/plane.png";
import truckIcon from "../../public/icon/truck.png";
import shipIcon from "../../public/icon/ship.png";
import wareHouseIcon from "../../public/icon/warehouse.png";
import storageIcon from "../../public/icon/storage.png";
import bargeIcon from "../../public/icon/barge.png";

const Service = () => {
    return (
        <div className='max-w-screen lg:md:p-4 p-2 flex justify-center items-center'>
            <div className="min-h-[80vh] lg:md:min-w-[70vw] lg:md:max-w-[70vw] min-w-[90vw] grid grid-cols-10 bg-white">
                <div className="col-span-10 feature-left p-4 grid gap-2 h-fit">
                    <div className="grid lg:md:grid-cols-3 grid-cols-2 gap-4">
                        <div className="card-service aspect-square p-2 grid items-center">
                            <div className="absolute cs-item flex justify-center p-2 items-center h-full lg:md:text-sm text-xs">
                                we provide services : Freight forwarding NVOCC Handling container Project cargo Warehousing Local handling Project logistics Reefer.
                            </div>
                            <div className="h-max ">
                                <div className="grid items-center justify-center">
                                    <Image alt='' src={planeIcon} className='lg:md:h-full h-1/2 w-auto' />
                                </div>
                                <div className='lg:md:text-lg text-sm font-bold text-center text-sky-950  '>
                                    AIR FREIGHT / LOGISTICS
                                </div>
                            </div>
                        </div>
                        <div className="card-service aspect-square p-2 grid items-center">
                            <div className="absolute cs-item flex justify-center p-2 items-center h-full lg:md:text-sm text-xs">
                                Provides services in the transportation of goods via land routes, cargo dooring, receiving/delivery.
                            </div>
                            <div className="h-max ">
                                <div className="grid items-center justify-center">
                                    <Image alt='' src={truckIcon} className='lg:md:h-full h-1/2 w-auto' />
                                </div>
                                <div className='lg:md:text-lg text-sm font-bold text-center text-sky-950  '>
                                    ROAD FREIGHT / TRUCKING
                                </div>
                            </div>
                        </div>
                        <div className="card-service aspect-square p-2 grid items-center ">
                            <div className="absolute cs-item flex justify-center p-2 items-center h-full lg:md:text-sm text-xs">
                                Port clearance, crew formalities, Reflagging, Canvassing, Shipbroker, Owner’s Protective Agency
                            </div>
                            <div className="h-max ">
                                <div className="grid items-center justify-center">
                                    <Image alt='' src={shipIcon} className='lg:md:h-full h-1/2 w-auto' />
                                </div>
                                <div className='lg:md:text-lg text-sm font-bold text-center text-sky-950  '>
                                    OCEAN FREIGHT / SHIPPING AGENCY
                                </div>
                            </div>
                        </div>
                        <div className="card-service aspect-square p-2 grid items-center">
                            <div className="absolute cs-item flex justify-center p-2 items-center h-full lg:md:text-sm text-xs">
                                Administrative arrangements in assisting exporters and importers who will take care of customs obligations
                            </div>
                            <div className="h-max ">
                                <div className="grid items-center justify-center">
                                    <Image alt='' src={wareHouseIcon} className='lg:md:h-full h-1/2 w-auto' />
                                </div>
                                <div className='lg:md:text-lg text-sm font-bold text-center text-sky-950  '>
                                    WARE HOUSING / CUSTOMS CLEARANCE
                                </div>
                            </div>
                        </div>
                        <div className="card-service aspect-square p-2 grid items-center">
                            <div className="absolute cs-item flex justify-center p-2 items-center h-full lg:md:text-sm text-xs">
                                We can supply fuel bunker and fresh water bunker service
                            </div>
                            <div className="h-max ">
                                <div className="grid items-center justify-center">
                                    <Image alt='' src={storageIcon} className='lg:md:h-full h-1/2 w-auto' />
                                </div>
                                <div className='lg:md:text-lg text-sm font-bold text-center text-sky-950  '>
                                    STORAGE / BUNKER SUPPLY
                                </div>
                            </div>
                        </div>
                        <div className="card-service aspect-square p-2 grid items-center">
                            <div className="absolute cs-item flex justify-center p-2 items-center h-full lg:md:text-sm text-xs">
                                The company can supply ship needs such as ship equipment, provision, spareparts, tools, etc.
                            </div>
                            <div className="h-max ">
                                <div className="grid items-center justify-center">
                                    <Image alt='' src={bargeIcon} className='lg:md:h-full h-1/2 w-auto' />
                                </div>
                                <div className='lg:md:text-lg text-sm font-bold text-center text-sky-950  '>
                                    PACKAGING / SHIPCHANDLER
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="lg:md:flex hidden col-span-2 feature-left h-full bg-[url('/container.jpg')] bg-cover bg-center relative">
                    <div className="absolute h-full border-t-service border-slate-50 "></div>
                </div> */}
            </div>
        </div>
    )
}

export default Service