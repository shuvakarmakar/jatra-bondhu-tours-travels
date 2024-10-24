import heroImage from '../../public/image.jpg'; 

const Banner = () => {
    return (
        <div className="banner-container">
            {/* Hero Section */}
            <section id="hero" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0"></div>
                <div className="container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to Jatra Bondhu</h1>
                    <p className="text-lg md:text-2xl mb-8">Your Trusted Partner for Unforgettable Journeys</p>
                    <a href="#services" className="btn bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
                        Explore Our Services
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Banner;
