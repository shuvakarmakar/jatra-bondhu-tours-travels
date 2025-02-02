import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const packages = [
    { title: "Kuala Lumpur + Batam (Indonesia) + Singapore + Vietnam", price: "135000৳", duration: "9 Days & 8 Nights", region: "Asia" },
    { title: "Egypt", price: "94500৳", duration: "4 Days & 3 Nights", region: "Asia" },
    { title: "Singapore + Bali", price: "104500৳", duration: "6 Days & 5 Nights", region: "Asia" },
    { title: "Maldives + Sri Lanka + Egypt + Dubai", price: "189900৳", duration: "10 Days & 9 Nights", region: "Asia" },
    { title: "Singapore + Malaysia + Phuket + Bangkok", price: "19900৳", duration: "9 Days & 8 Nights", region: "Asia" },
    { title: "Singapore + Malaysia + Indonesia", price: "94900৳", duration: "7 Days & 6 Nights", region: "Asia" },
    { title: "Singapore + Malaysia + Langkawi", price: "94500৳", duration: "7 Days & 6 Nights", region: "Asia" },
    { title: "Thailand + Singapore", price: "79500৳", duration: "5 Days & 4 Nights", region: "Asia" },
    { title: "Bangkok + Phuket", price: "65500৳", duration: "5 Days & 4 Nights", region: "Asia" },
    { title: "Bangkok + Phuket + Pattaya", price: "74500৳", duration: "5 Days & 4 Nights", region: "Asia" },
    { title: "Kathmandu + Pokhara", price: "49500৳", duration: "5 Days & 4 Nights", region: "Asia" },
    { title: "Kathmandu + Nagarkot + Pokhara", price: "49500৳", duration: "6 Days & 5 Nights", region: "Asia" },
];

const TourPackage = () => {
    const [visiblePackages, setVisiblePackages] = useState(3);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    const handleShowMore = () => {
        setVisiblePackages(packages.length);
        setShowMore(true);
    };

    const handleShowLess = () => {
        setVisiblePackages(3);
        setShowMore(false);
    };

    return (
        <section className="py-12 bg-gray-50">
            {/* Helmet for SEO and Meta Tags */}
            <Helmet>
                <title>Tour Packages</title>

                <meta
                    name="description"
                    content="Explore a wide range of affordable and unforgettable tour packages across Asia, Europe, and beyond with Jatra Bondhu Tours & Travels. Book your dream vacation today and create lifelong memories!"
                />

                <meta
                    name="keywords"
                    content="Tour Packages, Affordable Travel Packages, Custom Holiday Packages, Jatra Bondhu Tours, Asia Tours, Europe Travel Deals, Honeymoon Packages, Family Vacations, Flight and Hotel Deals, Singapore Tours, Bali Holiday Packages, Egypt Travel Deals, Best Travel Agency in Bangladesh, Budget Travel Packages, Luxury Tour Packages, Group Travel Packages, Luxury Vacations, Exotic Destinations, Adventure Tour Packages, Beach Holidays, International Tour Packages, European Vacations, Best Deals on Tours, Customizable Tours, Tailored Holiday Packages, Worldwide Travel Deals, Seasonal Tour Packages, Adventure Travel, Family Tour Packages, Top Travel Destinations"
                />

                <meta name="author" content="Jatra Bondhu Tours & Travels" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="geo.region" content="BD-D" />
                <meta name="geo.placename" content="Narayanganj" />
                <meta name="geo.position" content="23.6238;90.5019" />
                <meta name="ICBM" content="23.6238, 90.5019" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.jatrabondhu.com/tour-packages" />

                {/* Open Graph Tags for Social Media */}
                <meta property="og:title" content="Tour Packages" />
                <meta property="og:description" content="Discover exclusive tour packages to top destinations like Singapore, Bali, Egypt, and more with Jatra Bondhu Tours & Travels. Experience hassle-free booking and exceptional service." />
                <meta property="og:url" content="https://www.jatrabondhu.com/tour-packages" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Jatra Bondhu Tours & Travels" />
            </Helmet>

            <h2
                className="text-4xl font-bold text-center mb-8 text-blue-900"
                data-aos="fade-up"
            >
                Explore Our Tour Packages
            </h2>
            <div
                className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                data-aos="fade-up"
            >
                {packages.slice(0, visiblePackages).map((pkg, index) => (
                    <div
                        key={index}
                        className="card bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay={`${index * 100}`}
                    >
                        <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">
                            {pkg.title}
                        </h3>
                        <p className="text-gray-600 text-center mb-2">
                            <span className="font-bold">Region:</span> {pkg.region}
                        </p>
                        <p className="text-gray-600 text-center mb-2">
                            <span className="font-bold">Duration:</span> {pkg.duration}
                        </p>
                        <p className="text-gray-800 text-center mb-4 font-bold text-lg">
                            Starting at {pkg.price}
                        </p>
                        <button className="btn btn-primary w-full">View Package</button>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                {!showMore ? (
                    <button
                        className="btn  btn-info  px-6 py-3"
                        onClick={handleShowMore}
                    >
                        View More
                    </button>
                ) : (
                    <button
                        className="btn btn-primary px-6 py-3"
                        onClick={handleShowLess}
                    >
                        Hide
                    </button>
                )}
            </div>
        </section>
    );
};

export default TourPackage;
