import Image from "next/image";
import Section from "./componentDashboard/Section";
import Navbar from "./componentGlobals/Navbar";
import Tron from "./componentGlobals/Tron";
import Footer from "./componentGlobals/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Tron />
      <Section />
      <Footer />
    </main>
  );
}
