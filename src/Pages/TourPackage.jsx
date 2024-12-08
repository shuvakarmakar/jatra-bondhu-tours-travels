import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const packages = [
    {
        title: "Kuala Lumpur + Batam (Indonesia) + Singapore + Vietnam",
        price: "135000৳",
        duration: "9 Days & 8 Nights",
        region: "Asia",
    },
    {
        title: "Egypt",
        price: "94500৳",
        duration: "4 Days & 3 Nights",
        region: "Asia",
    },
    {
        title: "Singapore + Bali",
        price: "104500৳",
        duration: "6 Days & 5 Nights",
        region: "Asia",
    },
    {
        title: "Maldives + Sri Lanka + Egypt + Dubai",
        price: "189900৳",
        duration: "10 Days & 9 Nights",
        region: "Asia",
    },
    {
        title: "Singapore + Malaysia + Phuket + Bangkok",
        price: "19900৳",
        duration: "9 Days & 8 Nights",
        region: "Asia",
    },
    {
        title: "Singapore + Malaysia + Indonesia",
        price: "94900৳",
        duration: "7 Days & 6 Nights",
        region: "Asia",
    },
    {
        title: "Singapore + Malaysia + Langkawi",
        price: "94500৳",
        duration: "7 Days & 6 Nights",
        region: "Asia",
    },
    {
        title: "Thailand + Singapore",
        price: "79500৳",
        duration: "5 Days & 4 Nights",
        region: "Asia",
    },
    {
        title: "Bangkok + Phuket",
        price: "65500৳",
        duration: "5 Days & 4 Nights",
        region: "Asia",
    },
    {
        title: "Bangkok + Phuket + Pattaya",
        price: "74500৳",
        duration: "5 Days & 4 Nights",
        region: "Asia",
    },
    {
        title: "Kathmandu + Pokhara",
        price: "49500৳",
        duration: "5 Days & 4 Nights",
        region: "Asia",
    },
    {
        title: "Kathmandu + Nagarkot + Pokhara",
        price: "49500৳",
        duration: "6 Days & 5 Nights",
        region: "Asia",
    },
];

const TourPackage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <section className="py-12 bg-gray-50">
            <h2
                className="text-4xl font-bold text-center mb-8 text-blue-900"
                data-aos="fade-up"
            >
                Explore Our Tour Packages
            </h2>
            <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {packages.map((pkg, index) => (
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
                        <button className="btn btn-primary w-full">
                            View Package
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TourPackage;
