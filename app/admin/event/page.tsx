'use client'
import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "../componentAdmin/Navbar";
import EventProvider from "./EventContext";
import AuthProvider from "../AuthContext";
import CheckAuthAdmin from "../componentAdmin/CheckAuthAdmin";

export default function Home() {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <EventProvider >
                <main className="">
                    <Navbar active="event" />
                    <Section />
                </main>
            </EventProvider>
        </AuthProvider >
    );
}
