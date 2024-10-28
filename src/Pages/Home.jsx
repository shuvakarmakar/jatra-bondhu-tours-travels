import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import Navbar from "./NavBar";
import Service from "./Service";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <Contact></Contact>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;    