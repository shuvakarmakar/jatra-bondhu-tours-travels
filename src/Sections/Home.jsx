import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import Navbar from "./NavBar";
import Service from "./Service";
import Footer from "./Footer";
import TeamIntroduction from "./TeamIntroduction";
import LiveChat from "./LiveChat";
import Loader from "./Loader";
import WhatsAppChat from "./WhatsappChat";
import AirlinePartners from "./AirlinePartners";
import TourPackage from "../Pages/TourPackage";

const Home = () => {
    return (
        <div>
            <Loader></Loader>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <TourPackage></TourPackage>
            <AirlinePartners></AirlinePartners>
            <TeamIntroduction></TeamIntroduction>
            <Contact></Contact>
            <ContactForm></ContactForm>
            {/* <LiveChat></LiveChat> */}
            <WhatsAppChat></WhatsAppChat>
            <Footer></Footer>
        </div>
    );
};

export default Home;    