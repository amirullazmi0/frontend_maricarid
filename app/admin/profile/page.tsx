import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "../componentAdmin/Navbar";
import AuthProvider from "../AuthContext";
import CheckAuthAdmin from "../componentAdmin/CheckAuthAdmin";
import Footer from "../componentAdmin/Footer";

export default function Home() {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <main className="bg-white">
                <Navbar active="profile" />
                <div className="mt-[20vh]">
                    <Section />
                </div>
                <Footer />
            </main>
        </AuthProvider>
    );
}
