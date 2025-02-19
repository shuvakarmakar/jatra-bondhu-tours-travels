import { Helmet } from "react-helmet-async";

const TermsandConditions = () => {
    return (
        <section className="lg:min-h-screen">
            <Helmet>
                <title>Terms and Conditions</title>
                <meta
                    name="description"
                    content="Review the terms and conditions of Jatra Bondhu Tours & Travels regarding bookings, payments, cancellations, and liabilities."
                />

                {/* Canonical Link */}
                <link rel="canonical" href="https://www.jatrabondhu.com/terms-and-conditions" />

                {/* Additional Meta Tags for SEO */}
                <meta name="keywords" content="Terms and Conditions, Booking Terms, Payment Terms, Cancellation Policy, Travel Terms and Conditions, Liability Disclaimer, Travel Booking Policy, Refund Policy, Travel Agency Terms, Booking Cancellation, Travel Service Terms, Terms of Service, Terms for Travel Packages, Payment Methods, Travel Refunds, Terms and Conditions for Flights, Hotel Bookings, Visa Services, Customer Rights, Travel Agreement, Travel Package Terms, Terms and Conditions Bangladesh, Online Booking Terms, Travel Agency Payment Terms, Conditions for Tour Packages, Travel Liability, Jatra Bondhu Terms, Customer Support Policy, Travel Service Agreement" />
            </Helmet>


            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-900 drop-shadow-md">
                        Terms and Conditions
                    </h1>
                    <p className="text-gray-700 mb-4 text-justify">
                        Welcome to Jatra Bondhu! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        1. General Terms
                    </h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        Jatra Bondhu offers travel-related services, including flight bookings, hotel reservations, tour packages, and visa assistance. All bookings are subject to availability.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        2. Booking and Payment
                    </h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        Payments must be made in full at the time of booking. Refunds for cancellations are subject to our refund policy.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        3. Cancellation Policy
                    </h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        Cancellations must be requested at least 7 days before the travel date to be eligible for a partial refund. Cancellation charges may apply.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        4. Liability
                    </h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        Jatra Bondhu is not responsible for any losses, damages, or delays caused by unforeseen events, including natural disasters or third-party errors.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        5. Privacy Policy
                    </h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        We value your privacy. All personal information collected will be used in accordance with our privacy policy.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-secondary">
                        6. Governing Law
                    </h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        These terms and conditions are governed by the laws of [Your Country]. Any disputes will be resolved under the jurisdiction of [Local Courts].
                    </p>

                    <p className="text-gray-700 italic">
                        If you have any questions about these terms, please contact us at <a href="mailto:info@jatrabondhu.com" className="text-blue-500">jatrabondhu@gmail.com</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TermsandConditions;
