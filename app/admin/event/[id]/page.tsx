'use client'
import Image from "next/image";
import React from "react";
import Navbar from "../../componentAdmin/Navbar";
import EventProvider from "../EventContext";
import AuthProvider from "../../AuthContext";
import CheckAuthAdmin from "../../componentAdmin/CheckAuthAdmin";
import Footer from "../../componentAdmin/Footer";
import Section from "./Section";


export default function Home({ params }: { params: { id: string } }) {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <EventProvider >
                <main className="">
                    <Navbar active="event" />
                    <div className="mt-[20vh]">
                        <Section id={params.id} />
                    </div>
                    <Footer />
                </main>
            </EventProvider>
        </AuthProvider >
    );
}
