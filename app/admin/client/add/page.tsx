'use client'
import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "../../componentAdmin/Navbar";
import ClientProvider from "../ClientContext";
import AuthProvider from "../../AuthContext";
import CheckAuthAdmin from "../../componentAdmin/CheckAuthAdmin";
import Footer from "../../componentAdmin/Footer";

export default function Home() {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <ClientProvider >
                <main className="">
                    <Navbar active="event" />
                    <Section />
                    <Footer />
                </main>
            </ClientProvider>
        </AuthProvider >
    );
}
