import Navbar from "../../componentGlobals/Navbar";
import Footer from "../../componentGlobals/Footer";
import Section from "./Section";
import ContactUs from "../../componentDashboard/ContactUs";
import TronEventItem from "@/app/componentGlobals/TronEventItem";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className="bg-white">
      <Navbar active="event" />
      <TronEventItem />
      <Section id={params.id} />
      <ContactUs />
      <Footer />
    </main>
  );
}
