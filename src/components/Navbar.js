import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/images/logo.png';

const Navbar = ({ handleScroll, refs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [bgColor, setBgColor] = useState('bg-red-600');
    const [textColor, setTextColor] = useState('text-white');
    const [hoverTextColor, setHoverTextColor] = useState('hover:text-black');
    const [height, setHeight] = useState('h-28');

    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            if (window.scrollY >= 100) {
                setBgColor('bg-white');
                setTextColor('text-black');
                setHoverTextColor('hover:text-red-600');
                setHeight('h-16');
            } else {
                setBgColor('bg-red-600');
                setTextColor('text-white');
                setHoverTextColor('hover:text-black');
                setHeight('h-28');
            }
        };

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    const goToTop = () => {
        let scrollHeight = window.scrollY; // Get the current scroll position
        const scrollStep = 100; // Step size (pixels to scroll each time)
        const delay = 10; // Delay between steps (milliseconds)

        const scroll = () => {
            if (scrollHeight > 0) {
                window.scrollBy(0, -scrollStep); // Scroll up
                scrollHeight -= scrollStep; // Decrease the scroll height
                setTimeout(scroll, delay); // Continue scrolling after delay
            } else {
                window.scrollTo(0, 0); // Ensure we're at the top
            }
        };

        scroll();
    }

    // Determine if only the Home link should be shown
    const showOnlyHome = ['/ScalableWebApp', '/ResponsiveDesign', '/OptimizingWebPerformance', '/IntroToTailwindCSS'].includes(location.pathname);

    return (
        <nav className={`${bgColor} ${textColor} ${height} sticky w-full z-10 top-0 shadow-md transition-all duration-500`}>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center h-full max-w-full sm:max-w-screen-md md:max-w-screen-lg">
                <div className="text-xl md:text-2xl font-bold">
                    <img className='h-16 w-28' src={Logo} alt="Logo" />
                </div>
                <div className="hidden md:flex space-x-4 items-center h-full">
                    <Link to='/' onClick={goToTop} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>Home</Link>
                    {!showOnlyHome && (
                        <>
                            <Link to='' onClick={() => handleScroll(refs.aboutRef)} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>About</Link>
                            <Link to='' onClick={() => handleScroll(refs.servicesRef)} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>Services</Link>
                            <Link to='' onClick={() => handleScroll(refs.experienceRef)} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>Experience</Link>
                            <Link to='' onClick={() => handleScroll(refs.projectsRef)} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>Projects</Link>
                            <Link to='' onClick={() => handleScroll(refs.pricePlanRef)} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>Pricing</Link>
                            <Link to='' onClick={() => handleScroll(refs.teamRef)} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>Team</Link>
                            <Link to='' onClick={() => handleScroll(refs.customersRef)} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>Review</Link>
                            <Link to='' onClick={() => handleScroll(refs.blogRef)} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>Blog</Link>
                            <Link to='' onClick={() => handleScroll(refs.contactRef)} className={`font-semibold text-sm md:text-base ${hoverTextColor}`}>Contact</Link>
                        </>
                    )}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none text-xl">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-800 text-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to='/' onClick={goToTop} className={`block text-sm font-bold ${hoverTextColor}`}>Home</Link>
                        {!showOnlyHome && (
                            <>
                                <Link to='/' onClick={() => handleScroll(refs.aboutRef)} className={`block text-sm font-bold ${hoverTextColor}`}>About</Link>
                                <Link to='/' onClick={() => handleScroll(refs.servicesRef)} className={`block text-sm font-bold ${hoverTextColor}`}>Services</Link>
                                <Link to='/' onClick={() => handleScroll(refs.experienceRef)} className={`block text-sm font-bold ${hoverTextColor}`}>Experience</Link>
                                <Link to='/' onClick={() => handleScroll(refs.projectsRef)} className={`block text-sm font-bold ${hoverTextColor}`}>Projects</Link>
                                <Link to='/' onClick={() => handleScroll(refs.pricePlanRef)} className={`block text-sm font-bold ${hoverTextColor}`}>Pricing</Link>
                                <Link to='/' onClick={() => handleScroll(refs.teamRef)} className={`block text-sm font-bold ${hoverTextColor}`}>Team</Link>
                                <Link to='/' onClick={() => handleScroll(refs.customersRef)} className={`block text-sm font-bold ${hoverTextColor}`}>Review</Link>
                                <Link to='/' onClick={() => handleScroll(refs.blogRef)} className={`block text-sm font-bold ${hoverTextColor}`}>Blog</Link>
                                <Link to='/' onClick={() => handleScroll(refs.contactRef)} className={`block text-sm font-bold ${hoverTextColor}`}>Contact</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
