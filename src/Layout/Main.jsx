import { Outlet } from "react-router-dom";
import ContactForm from "../Sections/ContactForm";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";

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