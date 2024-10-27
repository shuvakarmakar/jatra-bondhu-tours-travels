import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import Navbar from "./NavBar";
import Service from "./Service";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <Contact></Contact>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;    