import { Outlet } from "react-router-dom";
import ContactForm from "../Sections/ContactForm";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import AddressBar from "../Sections/AddressBar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ContactForm></ContactForm>
            <AddressBar></AddressBar>
            <Footer></Footer>
        </div>
    );
};

export default Main;