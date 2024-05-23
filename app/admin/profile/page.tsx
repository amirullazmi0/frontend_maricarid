import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "../componentAdmin/Navbar";
import AuthProvider from "../AuthContext";
import CheckAuthAdmin from "../componentAdmin/CheckAuthAdmin";


export default function Home() {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <main className="">
                <Navbar active="profile" />
                <div className="mt-[20vh]">
                    <Section />
                </div>
            </main>
        </AuthProvider>
    );
}
