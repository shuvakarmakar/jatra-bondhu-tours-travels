import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
    {
        name: 'Shuva Karmakar',
        role: 'Founder & CEO',
        image: '/public/TeamMembers/Shuva Karmakar.jpg',
    },
    {
        name: 'Misty Roy',
        role: 'Travel Consultant & Marketing Manager',
        image: '/public/TeamMembers/Misty.jpg',
    },
];

const TeamIntroduction = () => {
    useEffect(() => {
        AOS.init({ duration: 700, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <section className="py-12 bg-gradient-to-r from-blue-100 to-blue-50">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary" data-aos="fade-up">
                Meet Our Team
            </h2>
            <div className="container mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        data-aos="fade-up"
                    >
                        <div className="avatar mb-4 mx-auto w-36 h-36 overflow-hidden rounded-full border-4 border-primary shadow-md">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-primary mb-1">{member.name}</h3>
                        <p className="text-secondary text-sm font-medium mb-2">{member.role}</p>
                        <div className="mt-2 border-t border-gray-200 pt-2">
                            <p className="text-gray-600 text-sm">"Dedicated to creating memorable travel experiences."</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamIntroduction;
