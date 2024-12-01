import Marquee from "react-fast-marquee";
import airline1 from "../assets/Airline Partners/Biman_Bangladesh_Airlines.png";
import airline2 from "../assets/Airline Partners/Turkish_Airlines.png";
import airline3 from "../assets/Airline Partners/Qatar_Airways.png";
import airline4 from "../assets/Airline Partners/emirates-airlines.png";
import airline5 from "../assets/Airline Partners/Gulf-Air.png";
import airline6 from "../assets/Airline Partners/Kuwait_Airways.png";
import airline7 from "../assets/Airline Partners/Ethiopian_Airlines.png";
import airline8 from "../assets/Airline Partners/Thai_Airways.png";
import airline9 from "../assets/Airline Partners/SriLankan_Airlines.png";
import airline10 from "../assets/Airline Partners/EgyptAir-Logo.png";
import airline11 from "../assets/Airline Partners/Malaysia-Airlines.png";
import airline12 from "../assets/Airline Partners/China_Southern_Airlines.png";
import airline13 from "../assets/Airline Partners/Singapore_Airlines.png";
import airline14 from "../assets/Airline Partners/IndiGo_Airlines.png";
import airline15 from "../assets/Airline Partners/Saudi-Arabian.png";
import airline16 from "../assets/Airline Partners/Air-Canada.png";

const airlines = [
    { name: "Biman Bangladesh Airlines", logo: airline1 },
    { name: "Turkish Airlines", logo: airline2 },
    { name: "Qatar Airways", logo: airline3 },
    { name: "Emirates Airlines", logo: airline4 },
    { name: "Gulf Air", logo: airline5 },
    { name: "Kuwait Airways", logo: airline6 },
    { name: "Ethiopian Airlines", logo: airline7 },
    { name: "Thai Airways", logo: airline8 },
    { name: "SriLankan Airlines", logo: airline9 },
    { name: "Egypt Air", logo: airline10 },
    { name: "Malaysia Airlines", logo: airline11 },
    { name: "China Southern Airlines", logo: airline12 },
    { name: "Singapore Airlines", logo: airline13 },
    { name: "IndiGo Airlines", logo: airline14 },
    { name: "Saudi Arabian Airlines", logo: airline15 },
    { name: "Air Canada", logo: airline16 },
];

const AirlinePartners = () => {
    return (
        <section className="py-16 bg-gray-50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-8 text-blue-800">
                Our Airline Partners
            </h2>
            <div className="container mx-auto">
                <Marquee gradient={false} speed={40}>
                    {airlines.map((airline, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-110"
                        >
                            <img
                                src={airline.logo}
                                alt={airline.name}
                                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain"
                            />
                            <p className="mt-2 text-sm font-medium text-gray-700">{airline.name}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default AirlinePartners;
