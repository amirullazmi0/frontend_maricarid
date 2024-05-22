import Image from "next/image";
import Navbar from "../componentGlobals/Navbar";
import Tron from "../componentGlobals/Tron";
import Footer from "../componentGlobals/Footer";
import TronService from "../componentGlobals/TronService";
import Section from "./Section";
import ContactUs from "../componentDashboard/ContactUs";
import TronMarineTraffic from "../componentGlobals/TronMarineTraffic";

export default function Home() {
  return (
    <main className="">
      <Navbar active="marineTraffic" />
      <TronMarineTraffic />
      <Section />
      <ContactUs />
      <Footer />
    </main>
  );
}
