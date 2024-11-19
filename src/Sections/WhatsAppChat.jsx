const WhatsAppChat = () => {
    const phoneNumber = "+8801317290009";
    const message = "Hello! I'm interested in your services.";

    return (
        <div className="fixed bottom-4 left-4 z-50">
            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 text-white py-3 px-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 space-x-2"
            >
                {/* WhatsApp Text */}
                <span className="font-medium">Chat with us</span>
            </a>
        </div>
    );
};

export default WhatsAppChat;
