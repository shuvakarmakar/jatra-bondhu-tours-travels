import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Thailand from "../assets/Visa/Thailand.jpg";
import Malaysia from "../assets/Visa/Malaysia.jpg";
import Singapore from "../assets/Visa/Singapore.jpg";

const countries = [
    {
        name: "Thailand",
        image: Thailand,
        details: `
            **Job Holders**:
            - 7 Months Valid Passport (with old passport if available).
            - 2 recent passport-sized photos (35mm x 45mm, white background).
            - NOC (No Objection Certificate) from employer.
            - Salary bank statement or salary certificate.
            - Employee ID card copy & visiting card.
            - Marriage certificate copy (if spouse's name isn’t mentioned in the passport).
            
            **Business Owners**:
            - 7 Months Valid Passport (with old passport if available).
            - Trade license (renewed, notarized, and translated).
            - Company letterhead pad and Memorandum (for limited companies).
            - Bank statement (last 6 months, minimum balance: BDT 70,000).
        `,
    },
    {
        name: "Malaysia",
        image: Malaysia,
        details: `
            - Passport validity: Minimum 6 months.
            - Visa types: Tourist, transit, and employment visa.
            - Required documents: Passport, photographs, application form, hotel booking, etc.
        `,
    },
    {
        name: "Singapore",
        image: Singapore,
        details: `
            - Passport validity: 6 months.
            - Visa types: Tourist, business, and employment visa.
            - Required documents: Passport, return ticket, photographs, etc.
        `,
    },
];

const Visa = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    return (
        <section className="py-12 bg-gray-100">
            <h2
                className="text-4xl font-bold text-center mb-8 text-blue-900"
                data-aos="fade-up"
            >
                Visa Requirements
            </h2>
            <div
                className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                data-aos="fade-up"
            >
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="card bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                        data-aos="zoom-in"
                    >
                        <img
                            src={country.image}
                            alt={country.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-800 mb-4">
                            {country.name}
                        </h3>
                        <button
                            className="btn btn-primary w-full"
                            onClick={() => setSelectedCountry(country)}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for Country Details */}
            {selectedCountry && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
                    data-aos="zoom-in"
                >
                    <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
                            onClick={() => setSelectedCountry(null)}
                        >
                            &times;
                        </button>
                        <h3 className="text-3xl font-bold text-blue-800 mb-4 text-center">
                            {selectedCountry.name} Visa Requirements
                        </h3>
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                            {selectedCountry.details}
                        </p>
                        <button
                            className="btn btn-secondary mt-6 mx-auto block"
                            onClick={() => setSelectedCountry(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Visa;
