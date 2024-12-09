import Banner from "./Banner";
import Contact from "./Contact";
import Service from "./Service";
import TeamIntroduction from "./TeamIntroduction";
import AirlinePartners from "./AirlinePartners";
import TourPackage from "../Pages/TourPackage";
import Loader from "./Loader";
import WhatsAppChat from "./WhatsappChat";

const Home = () => {
    return (
        <div>
            <Loader></Loader>
            <Banner></Banner>
            <Service></Service>
            <TourPackage></TourPackage>
            <AirlinePartners></AirlinePartners>
            <TeamIntroduction></TeamIntroduction>
            <Contact></Contact>
            <WhatsAppChat></WhatsAppChat>
        </div>
    );
};

export default Home;    