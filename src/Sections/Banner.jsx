import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import travel1 from '../assets/Banner/Banner 1.jpg';
import travel2 from '../assets/Banner/Banner 2.jpg';
import travel3 from '../assets/Banner/Banner 3.jpg';
import travel4 from '../assets/Banner/Banner 4.jpg';


const Banner = () => {
    const images = [travel1, travel2, travel3, travel4];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full">
            {/* Carousel Section */}
            <div className="carousel w-full h-[50vh] lg:h-[90vh] overflow-hidden">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`carousel-item w-full h-full ${currentSlide === index ? 'block' : 'hidden'
                            }`}
                    >
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Overlay Section */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-gradient-to-b from-black via-transparent to-black px-4 text-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-lg">
                    Welcome to Jatra Bondhu
                </h1>
                <TypeAnimation
                    sequence={[
                        'Explore the World with Us',
                        1500,
                        'Unforgettable Journeys Await',
                        1500,
                        'Your Trusted Travel Partner',
                        1500,
                        'Best Student Fare Air Tickets Available',
                        1500,
                        'Exclusive Discounts for Students',
                        1500

                    ]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                    className="text-lg md:text-xl lg:text-2xl font-medium mt-4 drop-shadow-lg"
                />
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <button
                        onClick={() => {
                            const targetSection = document.getElementById('services');
                            if (targetSection) {
                                targetSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white font-bold rounded-full shadow-lg"
                    >
                        Discover Our Services
                    </button>
                </div>
            </div>

            {/* Manual Navigation */}
            <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <button
                    onClick={() =>
                        setCurrentSlide(
                            (currentSlide - 1 + images.length) % images.length
                        )
                    }
                    className="btn btn-circle btn-outline text-white"
                >
                    ❮
                </button>
                <button
                    onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
                    className="btn btn-circle btn-outline text-white"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Banner;
