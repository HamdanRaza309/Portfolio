import React, { useState, useEffect } from 'react';
import profile from '../assets/images/profileImg.png';
import Hamdan from '../assets/images/Hamdan.png'
import bgImage from '../assets/images/blob-scatter-haikei.svg';

const roles = ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB", "Supabase"];

const Home = (props) => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleText = () => {
            const fullText = roles[currentRole];
            const updatedText = isDeleting
                ? fullText.substring(0, displayedText.length - 1)
                : fullText.substring(0, displayedText.length + 1);
            setDisplayedText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
            }
        };
        const timer = setTimeout(handleText, isDeleting ? 50 : 150);

        return () => {
            clearTimeout(timer);
        };
    }, [displayedText, isDeleting, currentRole]);

    return (
        <div style={{ backgroundImage: `url(${bgImage})`, minHeight: '110vh' }} className="w-full p-6 sm:p-12 md:p-24 flex items-center justify-center text-white overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 relative">
                <div className="flex flex-col md:w-1/2 space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center animate-zoom-in">
                        <img src={profile} alt="Profile" className="w-14 h-14 sm:w-14 sm:h-14 mr-1 rounded-full" />
                        <span className="ml-4 text-lg sm:text-xl bg-white text-black py-1 px-2 sm:px-4 sm:py-2 rounded-3xl mx-auto md:mx-0">Hello friend!</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl animate-zoom-in">I'm </h3>
                    <h1 className="animate-zoom-in text-4xl sm:text-5xl font-extrabold">Hamdan Raza</h1>
                    <div className="h-16 sm:h-20 animate-zoom-in">
                        <span>My Tech Stack includes</span> <h2 className="text-3xl sm:text-4xl">{displayedText}</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6">
                        {/* Resume Button */}
                        <a
                            href="https://drive.google.com/file/d/1b09PLu_V_CARXeeC9WnG3TYQG65weDtB/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btnForRedBg"
                        >
                            Resume
                        </a>
                        <button className="btnForRedBg" onClick={() => { props.handleScroll(props.refs.contactRef) }}>
                            Let's Talk
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end relative animate-zoom-in">
                    <img src={Hamdan} alt="DP" className="w-64 h-auto sm:w-80 sm:h-auto md:w-auto relative transform scale-x-[-1]" />
                </div>
            </div>
        </div>
    );
};

export default Home;
