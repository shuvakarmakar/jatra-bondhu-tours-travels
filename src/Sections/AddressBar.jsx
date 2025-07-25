import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const AddressBar = () => {
    return (
        <div className="w-full px-4 py-6">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 bg-gradient-to-r from-blue-100 via-white to-teal-100 border border-blue-200 rounded-2xl p-6 shadow-2xl text-gray-800 transition-all duration-300 ease-in-out">

                {/* Location */}
                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <div className="bg-teal-100 p-3 rounded-full shadow-sm">
                        <FaMapMarkerAlt className="text-teal-600 text-xl" />
                    </div>
                    <span className="text-base sm:text-lg font-medium leading-snug">
                        37 New Chashara, Jamtola,<br className="block md:hidden" />
                        Narayanganj - 1400
                    </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <div className="bg-teal-100 p-3 rounded-full shadow-sm">
                        <FaPhoneAlt className="text-teal-600 text-xl" />
                    </div>
                    <a
                        href="tel:+8801317290009"
                        className="text-base sm:text-lg font-medium hover:text-teal-700 transition"
                    >
                        +880 1317-290009
                    </a>
                </div>

                {/* Primary Email */}
                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <div className="bg-teal-100 p-3 rounded-full shadow-sm">
                        <FaEnvelope className="text-teal-600 text-xl" />
                    </div>
                    <a
                        href="mailto:contact@jatrabondhu.com"
                        className="text-base sm:text-lg font-medium hover:text-teal-700 transition"
                    >
                        contact@jatrabondhu.com
                    </a>
                </div>

                {/* Secondary Email */}
                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <div className="bg-teal-100 p-3 rounded-full shadow-sm">
                        <FaEnvelope className="text-teal-600 text-xl" />
                    </div>
                    <a
                        href="mailto:jatrabondhu@gmail.com"
                        className="text-base sm:text-lg font-medium hover:text-teal-700 transition"
                    >
                        jatrabondhu@gmail.com
                    </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                    <div className="bg-teal-100 p-3 rounded-full shadow-sm">
                        <FaWhatsapp className="text-teal-600 text-xl" />
                    </div>
                    <a
                        href="https://wa.me/8801317290009"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-medium hover:text-teal-700 transition"
                    >
                        +880 1317-290009 (WhatsApp)
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AddressBar;
