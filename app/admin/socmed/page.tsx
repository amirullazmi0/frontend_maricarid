import Image from "next/image";
import React from "react";
import Navbar from "../componentAdmin/Navbar";
import Section from "./Section";


export default function Home() {
    return (
        <main className="">
            <Navbar active="socmed" />
            <Section />
        </main>
    );
}
