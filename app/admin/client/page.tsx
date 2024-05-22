'use client'
import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "../componentAdmin/Navbar";

import AuthProvider from "../AuthContext";
import CheckAuthAdmin from "../componentAdmin/CheckAuthAdmin";
import ClientProvider from "./ClientContext";

export default function Home() {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <ClientProvider >
                <main className="">
                    <Navbar active="client" />
                    <Section />
                </main>
            </ClientProvider>
        </AuthProvider >
    );
}
