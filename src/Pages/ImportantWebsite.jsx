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
                <title>Important Websites for Travelers | Jatra Bondhu Tours & Travels</title>
                <meta
                    name="description"
                    content="Access essential websites for travelers, including passport services, consular services, travel regulations, and more."
                />
                <link rel="canonical" href="https://www.jatrabondhu.com/important-websites" />
                <meta property="og:title" content="Important Websites for Travelers | Jatra Bondhu Tours & Travels" />
                <meta property="og:description" content="Explore vital websites for travelers to ensure smooth travel experiences and access essential services." />
                <meta property="og:image" content="https://www.jatrabondhu.com/images/important-websites.jpg" />
                <meta property="og:url" content="https://www.jatrabondhu.com/important-websites" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Important Websites for Travelers | Jatra Bondhu Tours & Travels" />
                <meta name="twitter:description" content="Discover useful websites for travelers to get passport services, consular help, tourism insights, and more!" />
                <meta name="twitter:image" content="https://www.jatrabondhu.com/images/important-websites.jpg" />
            </Helmet>

            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-900 drop-shadow-md">
                    Important Websites for Travelers
                </h2>
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
