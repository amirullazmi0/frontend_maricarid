'use client'
import Image from "next/image";
import Section from "./Section";
import AuthProvider from "../admin/AuthContext";
import CheckAuth from "../admin/componentAdmin/CheckAuth";

export default function Home() {
    return (
        <AuthProvider>
            <CheckAuth />
            <main className="">
                <Section />
            </main>
        </AuthProvider>
    );
}
