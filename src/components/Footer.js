import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const socialLinks = ["#linkedIn", "#instagram", "#telegram"];

const Footer = () => {
    const [currentSocialLink, setCurrentSocialLink] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleText = () => {
            const fullText = socialLinks[currentSocialLink];
            const updatedText = isDeleting ? fullText.substring(0, displayedText.length - 1) : fullText.substring(0, displayedText.length + 1);
            setDisplayedText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setCurrentSocialLink((prevLink) => (prevLink + 1) % socialLinks.length);
            }
        };
        const timer = setTimeout(handleText, isDeleting ? 50 : 200);

        return () => {
            clearTimeout(timer);
        };
    }, [displayedText, isDeleting, currentSocialLink]);

    return (
        <>
            <div className='flex flex-col items-center py-8 bg-white text-black'>
                <div className='flex flex-col items-center p-5 mb-6 mt-10'>
                    <div className="flex items-center mb-4">
                        <div className="bg-red-600 h-1 w-12 mx-1"></div>
                        <div className="bg-red-600 h-1 w-1"></div>
                        <p className="text-lg font-semibold ml-2">JOIN US NOW</p>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-center">
                        FOLLOW US ON
                    </h1>
                    <div className='h-12'>
                        <h2 className="text-2xl md:text-4xl text-red-600">{displayedText}</h2>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center space-x-6 md:space-x-28'>
                    <div className='flex flex-col items-center'>
                        <Link to="#" className="items-center mb-2">
                            <FontAwesomeIcon icon={faLinkedin} className='text-4xl md:text-5xl mb-2 text-blue-600' />
                        </Link>
                        <p className='text-xl md:text-2xl'>Hamdan Raza</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link to="#" className="items-center mb-2">
                            <FontAwesomeIcon icon={faInstagram} className='text-4xl md:text-5xl mb-2 text-pink-600' />
                        </Link>
                        <p className='text-xl md:text-2xl'>Khan Arman</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link to="#" className="items-center mb-2">
                            <FontAwesomeIcon icon={faTelegram} className='text-4xl md:text-5xl mb-2 text-blue-700' />
                        </Link>
                        <p className='text-xl md:text-2xl'>Hamdan Raza</p>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-wrap justify-between text-center lg:text-left">
                        {/* Left Section */}
                        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                            <div className="flex justify-center lg:justify-start items-center mb-4">
                                <div className="text-4xl font-bold">Hamdan Raza</div>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Crafting innovative solutions and creating elegant experiences. Let's build something amazing together.
                            </p>
                        </div>
                        {/* Right Sections */}
                        <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-between">
                            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                                <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
                                <div className="flex flex-col justify-center items-center lg:items-start">
                                    <Link to="#" className="flex justify-between items-center text-gray-400 hover:text-red-600 mb-2">
                                        Facebook
                                        <FontAwesomeIcon icon={faFacebook} className='ml-2' />
                                    </Link>
                                    <Link to="#" className="flex justify-between items-center text-gray-400 hover:text-red-600 mb-2">
                                        Instagram
                                        <FontAwesomeIcon icon={faInstagram} className='ml-2' />
                                    </Link>
                                    <Link to="#" className="flex justify-between items-center text-gray-400 hover:text-red-600 mb-2">
                                        Twitter
                                        <FontAwesomeIcon icon={faTwitter} className='ml-2' />
                                    </Link>
                                    <Link to="#" className="flex justify-between items-center text-gray-400 hover:text-red-600 mb-2">
                                        Github
                                        <FontAwesomeIcon icon={faGithub} className='ml-2' />
                                    </Link>
                                    <Link to="#" className="flex justify-between items-center text-gray-400 hover:text-red-600 mb-2">
                                        LinkedIn
                                        <FontAwesomeIcon icon={faLinkedin} className='ml-2' />
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                                <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
                                <ul className="text-gray-400 space-y-2">
                                    <li><Link to="/services#web-development" className="hover:text-red-600">Web Development</Link></li>
                                    <li><Link to="/services#ui-ux" className="hover:text-red-600">UI/UX Design</Link></li>
                                    <li><Link to="/services#seo" className="hover:text-red-600">SEO Optimization</Link></li>
                                    <li><Link to="/services#consulting" className="hover:text-red-600">Consulting</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400 text-sm text-center lg:text-left">
                        <p className="mt-2">© 2024 Hamdan Raza. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
