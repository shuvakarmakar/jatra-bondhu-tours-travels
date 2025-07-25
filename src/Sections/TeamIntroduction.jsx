import { useEffect } from 'react';
import member1 from '../assets/Team/Shuva Karmakar.jpg';
import member2 from '../assets/Team/Misty.jpg';
import member4 from '../assets/Team/Joynal Abedin.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
    {
        name: 'Shuva Karmakar',
        role: 'Founder & CEO',
        image: member1,
        quote: 'Dedicated to creating memorable travel experiences.'
    },
    {
        name: 'Misty Roy',
        role: 'Travel Consultant & Marketing Manager',
        image: member2,
        quote: 'Passionate about connecting people to their dream journeys.'
    },
    {
        name: 'Joynal Abedin',
        role: 'IT Support Engineer',
        image: member4,
        quote: 'Ensuring seamless tech support for our travel solutions.'
    }
];

const TeamIntroduction = () => {
    useEffect(() => {
        AOS.init({ duration: 700, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-50">
            <h2
                className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-12"
                data-aos="fade-up"
            >
                Meet Our Team
            </h2>

            <div className="container mx-auto px-4 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        data-aos="fade-up"
                    >
                        <div className="mx-auto w-36 h-36 rounded-full overflow-hidden border-4 border-blue-600 shadow-md mb-6">
                            <img
                                src={member.image}
                                alt={`${member.name} photo`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-2xl font-semibold text-blue-800 mb-1">{member.name}</h3>
                        <p className="inline-block text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
                            {member.role}
                        </p>

                        <blockquote className="text-gray-700 italic text-sm leading-relaxed">
                            “{member.quote}”
                        </blockquote>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamIntroduction;
