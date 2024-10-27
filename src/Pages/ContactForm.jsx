import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
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

                    // Reset the form after successful submission
                    form.current.reset();

                    // Display success message using Swal
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

                    // Display error message using Swal
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Please try again.',
                    });
                }
            );
    };

    return (
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg">
            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg">
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

            {/* Right Side - Social Media Contacts */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:pl-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">Connect With Us</h2>
                <p className="text-gray-700 mb-4 text-center md:text-left">
                    Reach out to us on social media or chat with us directly!
                </p>
                <div className="flex flex-col space-y-4">
                    <a
                        href="https://www.facebook.com/JatraBondhu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition"
                    >
                        <FaFacebook className="text-2xl" />
                        <span>Facebook</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/jatra-bondhu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-blue-500 hover:text-blue-700 transition"
                    >
                        <FaLinkedin className="text-2xl" />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://wa.me/+8801317290009"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-green-500 hover:text-green-700 transition"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
