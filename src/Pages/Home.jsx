import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import Navbar from "./NavBar";
import Service from "./Service";
import Footer from "./Footer";
import TeamIntroduction from "./TeamIntroduction";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <TeamIntroduction></TeamIntroduction>
            <Contact></Contact>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;    