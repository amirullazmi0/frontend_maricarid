import Navbar from "../componentGlobals/Navbar";
import Footer from "../componentGlobals/Footer";
import Section from "./Section";
import ContactUs from "../componentDashboard/ContactUs";
import TronEvent from "../componentGlobals/TronEvent";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar active="event" />
      <TronEvent />
      <Section />
      <ContactUs />
      <Footer />
    </main>
  );
}
