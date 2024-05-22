import Navbar from "../componentGlobals/Navbar";
import Footer from "../componentGlobals/Footer";
import ContactUs from "../componentDashboard/ContactUs";
import TronAboutUs from "../componentGlobals/TronAboutUs";
import Section from "../service/Section";
import TronContactUs from "../componentGlobals/TronContactUs";


export default function Home() {
  return (
    <main className="">
      <Navbar active="contactUs" />
      <TronContactUs />
      <ContactUs />
      {/* <OurClients /> */}
      <Section />
      <Footer />
    </main>
  );
}
