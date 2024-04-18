import Image from "next/image";
import React from "react";
import Section from "./Section";
import Navbar from "./componentAdmin/Navbar";

export default function Home() {
    return (
        <main className="">
            <Navbar active="dashboard" />
            <Section />
        </main>
    );
}
