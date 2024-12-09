import Banner from "./Banner";
import Contact from "./Contact";
import Service from "./Service";
import TeamIntroduction from "./TeamIntroduction";
import AirlinePartners from "./AirlinePartners";
import TourPackage from "../Pages/TourPackage";
import Loader from "./Loader";

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
            {/* <LiveChat></LiveChat> */}
        </div>
    );
};

export default Home;    