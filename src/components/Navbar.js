import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white fixed w-full z-10 top-0 shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    Hamdan Raza
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-400">About</Link>
                    <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
                    <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400">Home</Link>
                        <Link to="/about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400">About</Link>
                        <Link to="/projects" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400">Projects</Link>
                        <Link to="/contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
