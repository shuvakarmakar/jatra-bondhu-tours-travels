import { Helmet } from "react-helmet-async";
import { FaExternalLinkAlt } from 'react-icons/fa';

const websites = [
    {
        name: 'Department of Immigration and Passports',
        link: 'https://www.dip.gov.bd/',
        description: 'Apply for passports or get information about passport-related services.',
    },
    {
        name: 'Bangladesh Consular Services',
        link: 'https://consular.mofa.gov.bd/',
        description: 'Access consular services like visa applications and legalization of documents.',
    },
    {
        name: 'Ministry of Civil Aviation and Tourism',
        link: 'https://www.mocat.gov.bd/',
        description: 'Get insights into travel regulations and tourism opportunities.',
    },
    {
        name: 'Bangladesh Customs',
        link: 'https://www.customs.gov.bd/',
        description: 'Understand customs duties and regulations for international travel.',
    },
    {
        name: 'Bangladesh Parjatan Corporation',
        link: 'https://parjatan.gov.bd/',
        description: 'Explore domestic travel destinations and tourism packages.',
    },
    {
        name: 'International Air Transport Association (IATA)',
        link: 'https://www.iata.org/',
        description: 'Get global travel and aviation-related guidelines.',
    },
];

const ImportantWebsite = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
            {/* Helmet for SEO and Meta Tags */}
            <Helmet>
                <title>Visa Requirements</title>
                <meta name="description" content="Explore visa requirements for Thailand, Malaysia, Cambodia, Vietnam, Maldives, India, Europe, Asia, America, Canada, Australia, New Zealand, Singapore, and more with Jatra Bondhu Tours & Travels. Get detailed information for job holders and business owners." />
                <meta name="keywords" content="Visa Requirements, Thailand Visa, Malaysia Visa, Singapore Visa, Cambodia Visa, Vietnam Visa, Maldives Visa, India Visa, Europe Visa, Asia Visa, America Visa, Canada Visa, Australia Visa, New Zealand Visa, Travel Documents, Jatra Bondhu Tours & Travels, Visa Information, Visa Guide, Visa Assistance, Work Visa, Business Visa, Tourist Visa, Visa Application Process, Visa Fees, Visa for Bangladesh Citizens, Visa Support, Travel Visa, Thailand Visa Application, Malaysia Visa Application, Singapore Visa Application, Cambodia Visa Application, Vietnam Visa Application, Maldives Visa Application, India Visa Application, Europe Visa Application, America Visa Application, Canada Visa Application, Australia Visa Application, New Zealand Visa Application, Travel Agency Visa Assistance, Visa Consultation, Visa Approval Tips, Visa Processing Time, Visa for Job Holders, Business Owner Visa, Immigration Assistance" />
                <link rel="canonical" href="https://jatrabondhu.com/visa-info" />

                {/* Open Graph Tags for Social Media */}
                <meta property="og:title" content="Visa Requirements" />
                <meta property="og:description" content="Get the latest information on visa requirements for countries like Thailand, Malaysia, Singapore, and more with Jatra Bondhu Tours & Travels." />
                <meta property="og:url" content="https://jatrabondhu.com/visa-info" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Jatra Bondhu Tours & Travels" />
            </Helmet>



            <div className="container mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-900 drop-shadow-md">
                    Important Websites for Travelers
                </h1>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {websites.map((website, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50"
                        >
                            <div className="absolute top-4 right-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                                <FaExternalLinkAlt />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">{website.name}</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">{website.description}</p>
                            <a
                                href={website.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-full hover:bg-blue-700 transition"
                            >
                                Visit Website
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImportantWebsite;
