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

    const handleDownloadResume = () => {
        fetch(`/files/Resume.pdf`).then(res => res.blob()).then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]));
            const aTag = document.createElement('a');
            aTag.href = blobURL;
            aTag.setAttribute('download', 'Hamdan Raza Resume.pdf');
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        });
    };

    return (
        <div style={{ backgroundImage: `url(${bgImage})`, minHeight: '110vh' }} className="w-full p-6 sm:p-12 md:p-24 flex items-center justify-center text-white overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 relative">
                <div className="flex flex-col md:w-1/2 space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center animate-zoom-in">
                        <img src={profile} alt="Profile" className="w-16 h-16 sm:w-20 sm:h-20 mr-1 rounded-full" />
                        <span className="ml-4 text-lg sm:text-xl bg-white text-black p-2 sm:p-4 rounded-3xl mx-auto md:mx-0">Hello friend!</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl animate-zoom-in">I'm </h3>
                    <h1 className="animate-zoom-in text-4xl sm:text-5xl font-extrabold">Hamdan Raza</h1>
                    <div className="h-16 sm:h-20 animate-zoom-in">
                        <h2 className="text-3xl sm:text-4xl">{displayedText}</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6">
                        <button
                            onClick={handleDownloadResume}
                            className="btnForRedBg"
                        >
                            Download Resume
                        </button>
                        <button className="btnForRedBg" onClick={() => { props.handleScroll(props.refs.contactRef) }}>
                            Contact Me
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end relative animate-zoom-in">
                    <img src={profile} alt="DP" className="w-64 h-64 sm:w-80 sm:h-80 md:w-full relative" />
                </div>
            </div>
        </div>
    );
};

export default Home;
