import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Jatra Bondhu Travel.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo and Branding */}
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="Jatra Bondhu Travel" className="h-12 w-auto" />
                    <div className="flex flex-col">
                        <span className="text-2xl font-extrabold tracking-wide">
                            Jatra Bondhu
                        </span>
                        <span className="text-sm font-light italic">Tours & Travels</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <NavLink
                            to="/"
                            className="text-white hover:text-yellow-300 font-semibold transition"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tour-packages"
                            className="text-white hover:text-yellow-300 font-semibold transition"
                        >
                            Tour Packages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/visa-info"
                            className="text-white hover:text-yellow-300 font-semibold transition"
                        >
                            Visa Info
                        </NavLink>
                    </li>
                </ul>

                {/* Contact Info */}
                <div className="hidden md:flex flex-col items-end text-right space-y-1">
                    <span className="flex items-center space-x-2 text-sm">
                        <FaPhoneAlt className="text-yellow-400" />
                        <span>+8801317290009</span>
                    </span>
                    <span className="flex items-center space-x-2 text-sm">
                        <FaMapMarkerAlt className="text-yellow-400" />
                        <span>Narayanganj</span>
                    </span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={handleToggle}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="bg-blue-800 md:hidden">
                    <ul className="flex flex-col p-4 space-y-4">
                        <li>
                            <NavLink
                                to="/"
                                className="text-white hover:text-yellow-300 font-semibold transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/tour-packages"
                                className="text-white hover:text-yellow-300 font-semibold transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Tour Packages
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/visa-info"
                                className="text-white hover:text-yellow-300 font-semibold transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Visa Info
                            </NavLink>
                        </li>
                        <div className="flex flex-col items-start space-y-2">
                            <span className="flex items-center space-x-2 text-sm">
                                <FaPhoneAlt className="text-yellow-400" />
                                <span>+8801317290009</span>
                            </span>
                            <span className="flex items-center space-x-2 text-sm">
                                <FaMapMarkerAlt className="text-yellow-400" />
                                <span>Narayanganj</span>
                            </span>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
