import Navbar from "../componentGlobals/Navbar";
import Footer from "../componentGlobals/Footer";
import Section from "./Section";
import ContactUs from "../componentDashboard/ContactUs";
import TronEvent from "../componentGlobals/TronEvent";
import AboutUs from "../componentDashboard/AboutUs";
import Features from "../componentDashboard/Features";
import OurClients from "../componentDashboard/OurClients";
import TronAboutUs from "../componentGlobals/TronAboutUs";
import VisiMisi from "./VisiMisi";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar active="aboutUs" />
      <TronAboutUs />
      <Section />
      <VisiMisi />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
}
