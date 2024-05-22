'use client'
import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "../componentAdmin/Navbar";

import AuthProvider from "../AuthContext";
import CheckAuthAdmin from "../componentAdmin/CheckAuthAdmin";
import ClientProvider from "./ClientContext";
import Footer from "../componentAdmin/Footer";

export default function Home() {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <ClientProvider >
                <main className="">
                    <Navbar active="client" />
                    <Section />
                    <Footer />
                </main>
            </ClientProvider>
        </AuthProvider >
    );
}
