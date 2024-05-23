'use client'
import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "../../componentAdmin/Navbar";
import EventProvider from "../EventContext";
import AuthProvider from "../../AuthContext";
import CheckAuthAdmin from "../../componentAdmin/CheckAuthAdmin";
import Footer from "../../componentAdmin/Footer";

export default function Home() {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <EventProvider >
                <main className="">
                    <Navbar active="event" />
                    <div className="mt-[20vh]">
                        <Section />
                    </div>
                    <Footer />
                </main>
            </EventProvider>
        </AuthProvider >
    );
}
