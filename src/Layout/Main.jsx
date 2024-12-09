import { Outlet } from "react-router-dom";
import Navbar from "../Sections/NavBar";
import ContactForm from "../Sections/ContactForm";
import Footer from "../Sections/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Main;