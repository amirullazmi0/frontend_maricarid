'use client'
import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "../componentAdmin/Navbar";
import EventProvider from "./EventContext";

export default function Home() {
    return (
        <EventProvider >
            <main className="">
                <Navbar active="event" />
                <Section />
            </main>
        </EventProvider>
    );
}
