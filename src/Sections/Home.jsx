import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Contact from "./Contact";
import Service from "./Service";
import TeamIntroduction from "./TeamIntroduction";
import AirlinePartners from "./AirlinePartners";
import Loader from "./Loader";
import WhatsAppChat from "./WhatsappChat";

const Home = () => {
    return (
        <div>
            {/* Helmet for SEO and Meta Tags */}
            <Helmet>
                <title>Jatra Bondhu Tours & Travels | Explore the World with Us</title>
                <meta 
                    name="description" 
                    content="Discover the best travel packages, flight deals, and personalized tours with Jatra Bondhu Tours & Travels. Let us make your journey unforgettable!" 
                />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://www.jatrabondhu.com" />
                
                
                {/* Open Graph Tags for Social Media */}
                <meta property="og:title" content="Jatra Bondhu Tours & Travels" />
                <meta property="og:description" content="Explore the world with customized tours, affordable flights, and exceptional service from Jatra Bondhu." />
                <meta property="og:url" content="https://www.jatrabondhu.com" />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Components */}
            <Loader />
            <Banner />
            <Service />
            <AirlinePartners />
            <TeamIntroduction />
            <Contact />
            <WhatsAppChat />
        </div>
    );
};

export default Home;
