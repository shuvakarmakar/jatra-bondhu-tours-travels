import { FaPlaneDeparture, FaHotel, FaMapMarkedAlt, FaTrain, FaPassport, FaHeart } from 'react-icons/fa';

const Services = () => {
    return (
        <section id="services" className="bg-gradient-to-r from-yellow-50 to-blue-50 py-16 px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-blue-900">Our Exclusive Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Flight Booking */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                        <div className="flex items-center justify-center mb-4 text-blue-600 text-5xl">
                            <FaPlaneDeparture />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Flight Booking</h3>
                        <p className="text-gray-700">
                            Book flights with ease through our partnerships with top airlines. Competitive prices guaranteed.
                        </p>
                    </div>

                    {/* Hotel Reservations */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                        <div className="flex items-center justify-center mb-4 text-blue-600 text-5xl">
                            <FaHotel />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Hotel Reservations</h3>
                        <p className="text-gray-700">
                            Book luxurious hotels worldwide with exclusive discounts for our customers.
                        </p>
                    </div>

                    {/* Custom Tour Packages */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                        <div className="flex items-center justify-center mb-4 text-blue-600 text-5xl">
                            <FaMapMarkedAlt />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Custom Tour Packages</h3>
                        <p className="text-gray-700">
                            Create a travel experience unique to you with our custom-tailored tour packages.
                        </p>
                    </div>

                    {/* Indian Railway Tickets */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                        <div className="flex items-center justify-center mb-4 text-blue-600 text-5xl">
                            <FaTrain />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Indian Railway Tickets</h3>
                        <p className="text-gray-700">
                            Effortlessly book Indian Railway tickets with our fast and secure booking system. Travel across India with ease.
                        </p>
                    </div>

                    {/* Visa Assistance */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                        <div className="flex items-center justify-center mb-4 text-blue-600 text-5xl">
                            <FaPassport />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Visa Assistance</h3>
                        <p className="text-gray-700">
                            We offer fast and reliable visa processing to ensure a smooth travel experience.
                        </p>
                    </div>
                    {/* Honeymoon Packages */}
                    <div className="card bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                        <div className="flex items-center justify-center mb-4 text-blue-600 text-5xl">
                            <FaHeart />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Honeymoon Packages</h3>
                        <p className="text-gray-700">
                            Make your honeymoon unforgettable with our exclusive romantic getaway deals at beautiful destinations.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services;
