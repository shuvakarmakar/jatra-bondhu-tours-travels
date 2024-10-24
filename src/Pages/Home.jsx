import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Navbar from "./NavBar";
import Service from "./Service";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;    