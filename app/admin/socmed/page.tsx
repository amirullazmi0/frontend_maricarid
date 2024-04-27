import Image from "next/image";
import React from "react";
import Navbar from "../componentAdmin/Navbar";
import Section from "./Section";
import AuthProvider from "../AuthContext";
import SocmedProvider from "./SocmedContext";
import CheckAuthAdmin from "../componentAdmin/CheckAuthAdmin";

export default function Home() {
    return (
        <AuthProvider>
            <CheckAuthAdmin />
            <SocmedProvider>
                <main className="">
                    <Navbar active="socmed" />
                    <Section />
                </main>
            </SocmedProvider>
        </AuthProvider>
    );
}
