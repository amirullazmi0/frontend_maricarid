import Image from "next/image";
import Navbar from "../../componentGlobals/Navbar";
import Footer from "../../componentGlobals/Footer";
import TronService from "../../componentGlobals/TronService";
import ContactUs from "../../componentDashboard/ContactUs";
import Section from "./Section";

export default function Home() {
  return (
    <main className="">
      <Navbar active="service" />
      <TronService title="Ship Agency" />
      <Section />
      <ContactUs />
      <Footer />
    </main>
  );
}
