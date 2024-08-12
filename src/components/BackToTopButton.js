import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopButton = () => {
    const scrollToTop = () => {
        let scrollHeight = window.scrollY; // Get the current scroll position
        const scrollStep = 50; // Step size (pixels to scroll each time)
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
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-red-700 text-white w-12 h-12 flex items-center justify-center text-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-red-800 focus:outline-none"
        >
            <FontAwesomeIcon icon={faAngleUp} />
        </button>
    );
};

export default BackToTopButton;
