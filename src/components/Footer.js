import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">© 2024 Hamdan Raza</div>
                <div className="flex space-x-4">
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-gray-400" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
