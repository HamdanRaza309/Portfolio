import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                Hi, I’m Hamdan Raza
            </h1>
            <p className="text-lg md:text-2xl mb-6 animate-fade-in">
                A passionate Developer
            </p>
            <div className="flex space-x-4 animate-fade-in">
                <Link
                    to="/projects"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View My Work
                </Link>
                <Link
                    to="/contact"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
};

export default Home;
