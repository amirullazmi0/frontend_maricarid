'use client'
import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "../componentAdmin/Navbar";
import AuthProvider from "../AuthContext";
import CheckAuthAdmin from "../componentAdmin/CheckAuthAdmin";
import Footer from "../componentAdmin/Footer";
import ClientProvider from "./ClientContext";

export default function Home() {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <ClientProvider >
                <main className="">
                    <Navbar active="client" />
                    <div className="mt-[20vh]">
                        <Section />
                    </div>
                    <Footer />
                </main>
            </ClientProvider>
        </AuthProvider >
    );
}
