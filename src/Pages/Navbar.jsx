import { useState } from 'react';
import { FaBox, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../public/Jatra Bondhu Travel.png';

const Navbar = () => {
    // State to handle mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu function
    const handleToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo and Name */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Jatra Bondhu Travel" className="h-12 w-auto" />
                    <div className="flex flex-col">
                        <span className="text-3xl font-extrabold" id="logo-name">Jatra Bondhu</span>
                        <span className="text-sm font-light" id="logo-tagline">Tours & Travels</span>
                    </div>
                </div>

                {/* Desktop Menu Items */}
                <ul className="hidden md:flex space-x-8">
                    <li><a href="#" id="nav-home" className="hover:text-yellow-300 transition">Home</a></li>
                    <li><a onClick={() => handleScrollToSection("services")} href="#" id="nav-our-service" className="hover:text-yellow-300 transition">Our Service</a></li>
                    <li className="flex items-center space-x-2">
                        <FaBox />
                        <a href="#" id="nav-tour-package" className="hover:text-yellow-300 transition">Tour Package</a>
                    </li>
                    <li><a href="#" id="nav-visa-info" className="hover:text-yellow-300 transition">Visa Info</a></li>
                    <li><a href="#" id="nav-query" className="hover:text-yellow-300 transition">Query</a></li>
                    <li><a href="#" id="nav-contact" className="hover:text-yellow-300 transition">Contact</a></li>
                </ul>

                {/* Contact Info */}
                <div className="hidden md:flex flex-col items-end space-y-1 text-right">
                    <span id="contact-number" className="flex items-center space-x-1 text-sm">
                        <FaPhoneAlt /> <span>+8801317290009</span>
                    </span>
                    <span id="address" className="flex items-center space-x-1 text-sm">
                        <FaMapMarkerAlt /> <span>Narayanganj</span>
                    </span>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        id="nav-mobile-button"
                        onClick={handleToggle}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Items */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-900">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li><a href="#" id="nav-home" className="hover:text-yellow-300">Home</a></li>
                        <li>
                            <a
                                onClick={() => { handleScrollToSection("services"); setIsMobileMenuOpen(false); }}
                                href="#"
                                id="nav-our-service"
                                className="hover:text-yellow-300"
                            >
                                Our Service
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaBox />
                            <a href="#" id="nav-tour-package" className="hover:text-yellow-300">Tour Package</a>
                        </li>
                        <li>
                            <a
                                onClick={() => { handleScrollToSection("visa-info"); setIsMobileMenuOpen(false); }}
                                href="#"
                                id="nav-visa-info"
                                className="hover:text-yellow-300"
                            >
                                Visa Info
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => { handleScrollToSection("query"); setIsMobileMenuOpen(false); }}
                                href="#"
                                id="nav-query"
                                className="hover:text-yellow-300"
                            >
                                Query
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => { handleScrollToSection("contact"); setIsMobileMenuOpen(false); }}
                                href="#"
                                id="nav-contact"
                                className="hover:text-yellow-300"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="flex flex-col items-start">
                            <span id="contact-number" className="flex items-center space-x-1 text-sm">
                                <FaPhoneAlt /> <span>+8801317290009</span>
                            </span>
                            <span id="address" className="flex items-center space-x-1 text-sm">
                                <FaMapMarkerAlt /> <span>Narayanganj</span>
                            </span>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
