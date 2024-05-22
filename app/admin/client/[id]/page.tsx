'use client'
import Image from "next/image";
import React from "react";

import Navbar from "../../componentAdmin/Navbar";
import AuthProvider from "../../AuthContext";
import CheckAuthAdmin from "../../componentAdmin/CheckAuthAdmin";
import Footer from "../../componentAdmin/Footer";
import Section from "./Section";
import ClientProvider from "../ClientContext";


export default function Home({ params }: { params: { id: string } }) {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <ClientProvider >
                <main className="">
                    <Navbar active="event" />
                    <Section id={params.id} />
                    <Footer />
                </main>
            </ClientProvider>
        </AuthProvider >
    );
}
