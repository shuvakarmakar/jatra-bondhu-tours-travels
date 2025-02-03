import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";  // Import Helmet
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
        <section className="lg:min-h-screen">
            {/* Helmet for SEO */}
            <Helmet>
                <title>Visa Requirements</title>
                <meta name="description" content="Explore visa requirements for Thailand, Malaysia, Cambodia, Vietnam, Maldives, India, Europe, Asia, America, Canada, Australia, New Zealand, Singapore, and more with Jatra Bondhu Tours & Travels. Get detailed information for job holders and business owners." />
                <meta name="keywords" content="Visa Requirements, Thailand Visa, Malaysia Visa, Singapore Visa, Cambodia Visa, Vietnam Visa, Maldives Visa, India Visa, Europe Visa, Asia Visa, America Visa, Canada Visa, Australia Visa, New Zealand Visa, Travel Documents, Jatra Bondhu Tours & Travels, Visa Information, Visa Guide, Visa Assistance, Work Visa, Business Visa, Tourist Visa, Visa Application Process, Visa Fees, Visa for Bangladesh Citizens, Visa Support, Travel Visa, Thailand Visa Application, Malaysia Visa Application, Singapore Visa Application, Cambodia Visa Application, Vietnam Visa Application, Maldives Visa Application, India Visa Application, Europe Visa Application, America Visa Application, Canada Visa Application, Australia Visa Application, New Zealand Visa Application, Travel Agency Visa Assistance, Visa Consultation, Visa Approval Tips, Visa Processing Time, Visa for Job Holders, Business Owner Visa, Immigration Assistance" />
                <link rel="canonical" href="https://jatrabondhu.com/visa-info" />
            </Helmet>



            <h1
                className="text-3xl sm:text-4xl font-bold text-center m-7 text-blue-900"
                data-aos="fade-up"
            >
                Visa Requirements
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-20">
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="border rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition"
                        data-aos="fade-up"
                        onClick={() => setSelectedCountry(country)}
                    >
                        <img
                            src={country.image}
                            alt={country.name}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h3 className="text-xl font-semibold text-center mt-4">
                            {country.name}
                        </h3>
                    </div>
                ))}
            </div>

            {selectedCountry && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setSelectedCountry(null)}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto"
                        onClick={(e) => e.stopPropagation()}
                        data-aos="fade-up"
                    >
                        <h3 className="text-2xl font-bold mb-4">{selectedCountry.name} Visa Details</h3>
                        <p className="whitespace-pre-line">{selectedCountry.details}</p>
                        <button
                            onClick={() => setSelectedCountry(null)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
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
