import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <section>
            {/* Helmet for SEO and Meta Tags */}
            <Helmet>
                <title>About Us</title>

                <meta
                    name="description"
                    content="Discover Jatra Bondhu Tours & Travels, your trusted travel partner based in Narayanganj, Bangladesh. We specialize in customized travel packages, flight bookings, and unforgettable journeys."
                />

                <meta
                    name="keywords"
                    content="Jatra Bondhu, About Jatra Bondhu, Tours and Travels Bangladesh, Travel Agency Narayanganj, Custom Travel Packages, Flight Booking Bangladesh, Holiday Packages, Trusted Travel Partner Bangladesh"
                />

                <meta name="author" content="Jatra Bondhu Tours & Travels" />
                <meta name="robots" content="index, follow" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.jatrabondhu.com/about-us" />

                {/* Open Graph Tags for Social Media */}
                <meta property="og:title" content="About Us" />
                <meta property="og:description" content="Learn about Jatra Bondhu Tours & Travels, the leading travel agency at Narayanganj in Bangladesh, offering customized tours, flight deals, and unforgettable travel experiences." />
                <meta property="og:url" content="https://www.jatrabondhu.com/about-us" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Jatra Bondhu Tours & Travels" />

            </Helmet>

            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 max-w-4xl text-center">
                    <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-900 drop-shadow-md">
                        About Us
                    </h1>
                    <p className="text-black text-lg leading-relaxed mb-6">
                        Welcome to <span className="font-semibold">Jatra Bondhu Tours & Travels</span>, your trusted partner in creating unforgettable travel experiences. Based in the heart of Narayanganj, we specialize in delivering the best travel services tailored to meet your needs. From booking flights to planning your next vacation, we are dedicated to making your journey seamless, enjoyable, and memorable.
                    </p>
                    <p className="text-black text-lg leading-relaxed mb-6">
                        At Jatra Bondhu, our mission is to provide exceptional customer service and to ensure your travel dreams become a reality. With years of experience and a passion for travel, we aim to be more than just a travel agency—we strive to be your travel companion.
                    </p>

                    {/* Services Section */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            <div className="flex items-start">
                                <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                                    ✈️
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Flight Booking
                                    </h3>
                                    <p className="text-gray-600">
                                        Book flights with ease through our partnerships with top airlines. Competitive prices guaranteed.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-green-500 text-white rounded-full p-3 mr-4">
                                    🏨
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Hotel Reservations
                                    </h3>
                                    <p className="text-gray-600">
                                        Book luxurious hotels worldwide with exclusive discounts for our customers.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-yellow-500 text-white rounded-full p-3 mr-4">
                                    🌍
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Custom Tour Packages
                                    </h3>
                                    <p className="text-gray-600">
                                        Create a travel experience unique to you with our custom-tailored tour packages.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-red-500 text-white rounded-full p-3 mr-4">
                                    🚆
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Indian Railway Tickets
                                    </h3>
                                    <p className="text-gray-600">
                                        Effortlessly book Indian Railway tickets with our fast and secure booking system. Travel across India with ease.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-indigo-500 text-white rounded-full p-3 mr-4">
                                    🛂
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Visa Assistance
                                    </h3>
                                    <p className="text-gray-600">
                                        We offer fast and reliable visa processing to ensure a smooth travel experience.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-pink-500 text-white rounded-full p-3 mr-4">
                                    💑
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Honeymoon Packages
                                    </h3>
                                    <p className="text-gray-600">
                                        Make your honeymoon unforgettable with our exclusive romantic getaway deals at beautiful destinations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Details */}
                    <div className="border-t border-gray-300 mt-8 pt-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Company Details
                        </h2>
                        <p className="text-gray-600">
                            <span className="font-medium">Trade License No:</span>{" "}
                            <span className="font-bold">TRAD/NCC/0002130/2024</span>
                        </p>
                        <p className="text-gray-600">
                            <span className="font-medium">Address:</span>{" "}
                            37 New Chashara, Narayanganj, Dhaka, Bangladesh
                        </p>
                        <p className="text-gray-600">
                            <span className="font-medium">Phone:</span>{" "}
                            +8801317-290009
                        </p>
                        <p className="text-gray-600">
                            <span className="font-medium">Email:</span>{" "}
                            jatrabondhu@gmail.com
                        </p>
                        <p className="text-gray-600">
                            <span className="font-medium">Facebook:</span>{" "}
                            <a
                                href="https://facebook.com/JatraBondhu"
                                className="text-blue-500 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                facebook.com/JatraBondhu
                            </a>
                        </p>
                    </div>

                    {/* Inspirational Quote */}
                    <div className="mt-10">
                        <p className="text-gray-600 italic">
                            "Your journey begins with us. Let us take you to your dream destinations."
                        </p>
                        <p className="font-bold text-gray-800 mt-4">- Jatra Bondhu Team</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
