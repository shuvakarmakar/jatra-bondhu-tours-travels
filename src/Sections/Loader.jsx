import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Simulate loading time
        }, 3000); // Loader will disappear after 3 seconds
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null; // If not loading, don't show the loader

    // Keyframes for shake effect
    const screenShake = {
        initial: { x: 0 },
        animate: {
            x: [0, -10, 10, -5, 5, 0], // Reduced amplitude for smoother shake
            transition: {
                repeat: Infinity,
                duration: 0.6,
            },
        },
    };

    return (
        <motion.div
            {...screenShake} // Apply shake animation
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-slate-800"
        >
            <div className="flex flex-col items-center space-y-4 px-4 text-center">
                {/* Airplane Icon */}
                <FontAwesomeIcon
                    icon={faPlane}
                    className="text-cyan-400 text-6xl md:text-8xl lg:text-9xl animate-bounce"
                />
                {/* Loader Text */}
                <h2 className="text-cyan-300 text-lg md:text-2xl lg:text-3xl font-bold tracking-wide animate-pulse">
                    🌍 Preparing Your Adventure... ✈️
                </h2>
                <p className="text-cyan-500 text-sm md:text-lg italic">
                    Fasten Your Seatbelt For Takeoff!
                </p>
            </div>
        </motion.div>
    );
};

export default Loader;
