import React, { useState, useEffect } from 'react';
import profile from '../assets/images/profileImg.png';
import bgImage from '../assets/images/blob-scatter-haikei.svg';

const roles = ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB"];

const Home = (props) => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleText = () => {
            const fullText = roles[currentRole];
            const updatedText = isDeleting ? fullText.substring(0, displayedText.length - 1) : fullText.substring(0, displayedText.length + 1);
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
        <div style={{ backgroundImage: `url(${bgImage})`, height: '110vh' }} className=" z-10 p-24 flex items-center justify-center text-white overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 relative">
                <div className="flex flex-col md:w-1/2 space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center animate-zoom-in">
                        <img src={profile} alt="Profile" className="w-16 h-16 mr-1 rounded-full" />
                        <span className="ml-4 text-xl bg-white text-black p-4 rounded-full mx-auto md:mx-0">Hello friend!</span>
                    </div>
                    <h3 className="text-3xl md:text-3xl animate-zoom-in">I'm </h3>
                    <h1 className="animate-zoom-in text-5xl md:text-5xl font-extrabold">Hamdan Raza</h1>
                    <div className="h-20 animate-zoom-in">
                        <h2 className="text-4xl md:text-4xl">{displayedText}</h2>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
                        <button className="btnForRedBg">Hire Me</button>
                        <button className="btnForRedBg" onClick={() => { props.handleScroll(props.refs.contactRef) }}>Contact Me</button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end relative animate-zoom-in">
                    <img src={profile} alt="DP" className="h-96 md:w-full relative " />
                </div>
            </div>
        </div>
    );
};

export default Home;
