const Contact = () => {
    return (
        <section id="contact-form" className="py-16 bg-blue-800 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 leading-snug">Ready to Embark on Your Next Journey?</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">Book with Jatra Bondhu today and travel without worries!</p>
                <a
                    href="#contact-form"
                    className="btn bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
                >
                    Contact Us
                </a>
            </div>
        </section>
    );
};

export default Contact;