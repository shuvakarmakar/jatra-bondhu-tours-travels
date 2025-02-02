import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Contact from "./Contact";
import Service from "./Service";
import TeamIntroduction from "./TeamIntroduction";
import AirlinePartners from "./AirlinePartners";
import Loader from "./Loader";
import WhatsAppChat from "./WhatsappChat";
import LiveChat from "./LiveChat";

const Home = () => {
    return (
        <div>
            {/* Helmet for SEO and Meta Tags */}
            <Helmet>
                <title>Jatra Bondhu Tours & Travels | Book Flight Tickets, Hotels & Tour Packages With Us</title>

                <meta
                    name="description"
                    content="Discover top travel packages, flight deals, student discounts, custom tours, honeymoon packages, and more with Jatra Bondhu Tours & Travels. Make your journey unforgettable!"
                />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.jatrabondhu.com" />

                {/* Open Graph Tags for Social Media */}
                <meta property="og:title" content="Jatra Bondhu Tours & Travels | Book Flight Tickets, Hotels & Tour Packages With Us" />
                <meta property="og:description" content="Explore the world with customized tours, affordable flights, and exceptional service from Jatra Bondhu Tours & Travels." />
                <meta property="og:url" content="https://www.jatrabondhu.com" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Jatra Bondhu Tours & Travels" />

                {/* Additional Meta Tags for SEO */}
                <meta name="keywords" content="Travel Packages, Flight Booking, Hotel Deals, Honeymoon Packages, Custom Tours, Affordable Flights, International Travel, Tour Packages Bangladesh, Group Tours, Cheap Flights, Last Minute Travel Deals, Adventure Travel, Family Vacation, Best Holiday Deals, Luxury Hotels, Vacation Packages, Beach Resorts, Holiday Packages, Budget Travel, Travel Deals, Top Tourist Destinations, Travel Agents Bangladesh, International Tour Packages, Domestic Tour Packages, Online Flight Booking, Visa Assistance, Travel Agency Bangladesh, Student Discounts, Student Travel Deals, Student Tour Packages, Cheap Flights for Students, Student Travel Offers, Budget Travel for Students, Discounted Travel Packages for Students, Student Vacation Deals, Youth Travel Packages, Backpacker Travel Deals" />
                <meta name="robots" content="index, follow" />
            </Helmet>


            {/* Components */}
            <Loader />
            <Banner />
            <Service />
            <AirlinePartners />
            <TeamIntroduction />
            <Contact />
            <WhatsAppChat />
            <LiveChat></LiveChat>
        </div>
    );
};

export default Home;
