import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaFacebook, FaFileContract, FaInfoCircle, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiWebex } from "react-icons/si";


const ContactForm = () => {

    useEffect(() => {
        // Load Trustpilot script dynamically
        const script = document.createElement("script");
        script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_service,
                import.meta.env.VITE_template,
                form.current,
                import.meta.env.VITE_public
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log('Message Sent');
                    form.current.reset();

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Message Has Been Sent Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    console.log(error.text);

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Please try again.',
                    });
                }
            );
    };

    return (
        <section id="contact-form" className="py-12 px-4 bg-gray-50">
            {/* Centered Headline */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
                <p className="text-gray-600 mt-2">
                    We’re here to help! Reach out to us with any questions or feedback.
                </p>
            </div>
            {/* Contact Form and Social Media Links */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg">
                {/* Left Side - Form */}
                <div className="w-full md:w-1/2 p-8 bg-gradient-to-r from-teal-600 to-blue-500 text-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                className="w-full p-3 rounded bg-white text-gray-700 outline-none"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                className="w-full p-3 rounded bg-white text-gray-700 outline-none"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Message</label>
                            <textarea
                                name="message"
                                className="w-full p-3 h-32 rounded bg-white text-gray-700 outline-none resize-none"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side - Social Media and Quick Links */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8 text-center md:text-left md:pl-8 p-6">
                    <div className='mt-6'>
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">Connect With Us</h2>
                        <p className="text-gray-700 mb-4">
                            Reach out to us on social media or chat with us directly!
                        </p>

                        <div className="flex flex-col space-y-4 w-full">
                            <a
                                href="https://www.facebook.com/JatraBondhu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center md:justify-start space-x-3 text-blue-600 hover:text-blue-800 transition"
                            >
                                <FaFacebook className="text-2xl" />
                                <span>Facebook</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/jatra-bondhu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center md:justify-start space-x-3 text-blue-500 hover:text-blue-700 transition"
                            >
                                <FaLinkedin className="text-2xl" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://wa.me/+8801317290009"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center md:justify-start space-x-3 text-green-500 hover:text-green-700 transition"
                            >
                                <FaWhatsapp className="text-2xl" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="">
                        <h2 className="text-2xl sm:text-2xl font-bold text-blue-600 mb-4">Quick Links</h2>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="/about-us"
                                    className="flex items-center space-x-3 hover:text-blue-600 transition"
                                >
                                    <FaInfoCircle className="text-blue-600 text-xl sm:text-2xl" />
                                    <span className="font-semibold text-base sm:text-lg">About Us</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms-and-conditions"
                                    className="flex items-center space-x-3 hover:text-blue-600 transition"
                                >
                                    <FaFileContract className="text-blue-600 text-xl sm:text-2xl" />
                                    <span className="font-semibold text-base sm:text-lg">Terms and Conditions</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/important-websites"
                                    className="flex items-center space-x-3 hover:text-blue-600 transition"
                                >
                                    <SiWebex className="text-blue-600 text-xl sm:text-2xl" />
                                    <span className="font-semibold text-base sm:text-lg">Important Website</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Trustpilot Review Collector Widget */}
                    <div className="w-full flex justify-start mt-0">
                        <div className="w-full p-0">
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">
                                Customer Reviews
                            </h2>
                            <div
                                className="trustpilot-widget"
                                data-locale="en-US"
                                data-template-id="56278e9abfbbba0bdcd568bc"
                                data-businessunit-id="67ac89225186fc26ff27610c"
                                data-style-height="150px"
                                data-style-width="100%"
                                data-theme="light"
                            >
                                <a
                                    href="https://www.trustpilot.com/review/jatrabondhu.com"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-blue-600 hover:underline"
                                >
                                    See our reviews on Trustpilot
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactForm;
