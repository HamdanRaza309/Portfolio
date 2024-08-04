import React from 'react';

const About = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center py-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-slide-in">
                About Me
            </h2>
            <div className="w-11/12 md:w-2/3 flex flex-col md:flex-row items-center">
                <img
                    src="your-photo-url.jpg"
                    alt="Your Name"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6 md:mb-0 md:mr-8"
                />
                <p className="text-lg animate-slide-in">
                    I am a dedicated developer with a passion for creating beautiful and
                    functional web applications. With experience in React, TailwindCSS,
                    and other modern technologies, I strive to deliver high-quality
                    projects that exceed expectations.
                </p>
            </div>
        </div>
    );
};

export default About;
