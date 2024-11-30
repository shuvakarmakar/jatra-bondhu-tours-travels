import ContactForm from "../Sections/ContactForm";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/NavBar";

const TermsandConditions = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="py-16 bg-gray-50 px-8">
                <div className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-center mb-6 text-primary">
                        Terms and Conditions
                    </h1>
                    <p className="text-gray-700 mb-4">
                        Welcome to Jatra Bondhu! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        1. General Terms
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Jatra Bondhu offers travel-related services, including flight bookings, hotel reservations, tour packages, and visa assistance. All bookings are subject to availability.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        2. Booking and Payment
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Payments must be made in full at the time of booking. Refunds for cancellations are subject to our refund policy.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        3. Cancellation Policy
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Cancellations must be requested at least 7 days before the travel date to be eligible for a partial refund. Cancellation charges may apply.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        4. Liability
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Jatra Bondhu is not responsible for any losses, damages, or delays caused by unforeseen events, including natural disasters or third-party errors.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        5. Privacy Policy
                    </h2>
                    <p className="text-gray-600 mb-4">
                        We value your privacy. All personal information collected will be used in accordance with our privacy policy.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        6. Governing Law
                    </h2>
                    <p className="text-gray-600 mb-4">
                        These terms and conditions are governed by the laws of [Your Country]. Any disputes will be resolved under the jurisdiction of [Local Courts].
                    </p>

                    <p className="text-gray-700 italic">
                        If you have any questions about these terms, please contact us at <a href="mailto:info@jatrabondhu.com" className="text-blue-500">jatrabondhu@gmail.com</a>.
                    </p>
                </div>
            </div>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </section>
    );
};

export default TermsandConditions;
