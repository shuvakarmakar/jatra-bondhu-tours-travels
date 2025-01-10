import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/Jatra Bondhu Travel.png';

const Navbar = () => {
    // State to handle mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu function
    const handleToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // const handleScrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

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
                <div className="hidden md:flex space-x-8">
                    <NavLink to="/" id="nav-home" className="hover:text-yellow-300 transition">Home</NavLink>
                    {/* <NavLink to="#" onClick={() => handleScrollToSection("services")} className="hover:text-yellow-300 transition">
                        Our Service
                    </NavLink> */}
                    <NavLink to="#" className="hover:text-yellow-300 transition flex items-center space-x-2">
                        <span>Tour Package</span>
                    </NavLink>
                    <NavLink to="/visa-info" id="nav-visa-info" className="hover:text-yellow-300 transition">Visa Info</NavLink>
                </div>

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
                    <div className="flex flex-col space-y-4 p-4">
                        <NavLink to="/" id="nav-home" className="hover:text-yellow-300">Home</NavLink>
                        {/* <NavLink
                            to="#"
                            onClick={() => { handleScrollToSection("services"); setIsMobileMenuOpen(false); }}
                            className="hover:text-yellow-300"
                        >
                            Our Service
                        </NavLink> */}
                        <NavLink to="#" className="hover:text-yellow-300 flex items-center space-x-2">
                            <span>Tour Package</span>
                        </NavLink>
                        <NavLink
                            to="/visa-info"
                            id="nav-visa-info"
                            className="hover:text-yellow-300"
                        >
                            Visa Info
                        </NavLink>
                        <div className="flex flex-col items-start">
                            <span id="contact-number" className="flex items-center space-x-1 text-sm">
                                <FaPhoneAlt /> <span>+8801317290009</span>
                            </span>
                            <span id="address" className="flex items-center space-x-1 text-sm">
                                <FaMapMarkerAlt /> <span>Narayanganj</span>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
