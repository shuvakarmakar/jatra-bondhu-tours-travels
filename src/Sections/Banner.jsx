import heroImage from '../assets/image.jpg';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="banner-container">
            {/* Hero Section */}
            <section
                id="hero"
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="bg-opacity-60 h-full flex items-center">
                    <div className="container mx-auto flex flex-col justify-center items-center text-white text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Welcome to Jatra Bondhu
                        </h1>

                        {/* Type Animation for tagline */}
                        <TypeAnimation
                            sequence={[
                                'Your Trusted Partner for Unforgettable Journeys', // Initial sentence
                                2000, // Pause for 2 seconds
                                'Explore the World with Us', // Second sentence
                                2000, // Pause for 2 seconds
                                'Travel Beyond Boundaries', // Third sentence
                                2000, // Pause for 2 seconds
                                'Best Travel Agency In Bangladesh', // Fourth sentence
                                2000, // Pause for 2 seconds
                            ]}
                            wrapper="p"
                            className="text-lg md:text-2xl mb-8"
                            cursor={true}
                            repeat={Infinity} // Infinite repeat for the animation loop
                        />

                        <a
                            href="#services"
                            className="btn bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
                        >
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
