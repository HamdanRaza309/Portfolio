import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";


const initialProjects = [
    {
        type: "React",
        title: "SparkPress-Latest News",
        description: "A dynamic news application built with React that showcases the latest headlines and articles. Features include real-time updates and an intuitive user interface.",
        image: require('../assets/images/SparkPress.png'),
        liveDemo: "#",
        github: "https://github.com/HamdanRaza309/SparkPress.git",
    },
    {
        type: "Javascript",
        title: "Snake Game-Kids",
        description: "A fun and interactive Snake game designed for kids using vanilla JavaScript. Enjoyable and easy-to-learn gameplay with simple controls.",
        image: require('../assets/images/Snake Game.png'),
        liveDemo: "#",
        github: "#",
    },
    {
        type: "Javascript",
        title: "Pdf Merger",
        description: "A tool for merging multiple PDF files into a single document. Developed using JavaScript, it simplifies the process of managing and combining PDFs.",
        image: require('../assets/images/Pdf Merger.png'),
        liveDemo: "#",
        github: "#",
    },
    {
        type: "Javascript",
        title: "Analogue Clock",
        description: "A classic analogue clock built with JavaScript, displaying current time with real-time updates. Includes a stylish design and accurate timekeeping.",
        image: require('../assets/images/Analogue CLock.png'),
        liveDemo: "#",
        github: "#",
    },
    {
        type: "Full-Stack",
        title: "Cozy Craze",
        description: "An e-commerce platform developed with the Full-Stack. Features product listings, shopping cart, and secure checkout functionalities. A comprehensive solution for online shopping.",
        image: require('../assets/images/cozyCraze.png'),
        liveDemo: "https://cozy-craze-frontend.vercel.app/",
        github: "https://github.com/HamdanRaza309/cozy-craze",
    },
    {
        type: "Full-Stack",
        title: "LogBook-Cloud Storage",
        description: "A cloud-based note-taking application using the Full-Stack. Allows users to securely store and manage their notes with authentication and cloud storage capabilities.",
        image: require('../assets/images/LogBook.png'),
        liveDemo: "#",
        github: "https://github.com/HamdanRaza309/logbook.git",
    },
    {
        type: "React",
        title: "IronEdge-Gym",
        description: "A comprehensive gym management application built with React. Features include membership management, class schedules, and user profiles for a seamless gym experience.",
        image: require('../assets/images/IronEgde.png'),
        liveDemo: "#",
        github: "https://github.com/HamdanRaza309/IronEdge-FitnessGym-UsingAPI.git",
    },
    {
        type: "React",
        title: "Quiz-App",
        description: "An interactive quiz application created with React. Users can test their knowledge on various topics with a responsive design and engaging interface.",
        image: require('../assets/images/QuizApp.png'),
        liveDemo: "#",
        github: "https://github.com/HamdanRaza309/Quiz-App.git",
    },
    {
        type: "React",
        title: "React-CRUD",
        description: "A CRUD (Create, Read, Update, Delete) application built with React. Allows users to manage data entries with a user-friendly interface and efficient data handling.",
        image: require('../assets/images/ReactCRUD.png'),
        liveDemo: "#",
        github: "https://github.com/HamdanRaza309/React-CRUD.git",
    },
    {
        type: "Full-Stack",
        title: "Ai Code Reviewer",
        description: "AI Code Reviewer is a web app that uses Gemini AI to analyze and review code instantly. Users can paste or write code, and the app provides feedback on potential issues, bugs, and best practices — along with suggested improvements.",
        image: require('../assets/images/AiCodeReviewer.png'),
        liveDemo: "https://code-reviewer-black.vercel.app/",
        github: "https://github.com/HamdanRaza309/Handling-API-Professionally.git",
    },
];

const Projects = () => {
    const [projects, setProjects] = useState(initialProjects);
    const [selectedImage, setSelectedImage] = useState(null);
    const [githubLink, setGithubLink] = useState(null);
    const [description, setDescription] = useState(null);
    const [liveDemo, setLiveDemo] = useState(null);
    const { ref: projectsRef, inView: projectsVisible } = useInView();
    const [mainHeadingsAnimationRun, setMainHeadingsAnimationRun] = useState(false);
    const [projectsAnimationRun, setProjectsAnimationRun] = useState(false);


    // Animations 
    useEffect(() => {
        if (projectsVisible && !mainHeadingsAnimationRun) {
            setMainHeadingsAnimationRun(true)
        }
    }, [projectsVisible, mainHeadingsAnimationRun])

    useEffect(() => {
        if (projectsVisible && !projectsAnimationRun) {
            setProjectsAnimationRun(true)
        }
    }, [projectsVisible, projectsAnimationRun])


    // Open Project's Image or Redirect to Github
    const handleImgClick = ([image, github, liveDemo, description]) => {
        setSelectedImage(image);
        setGithubLink(github);
        setLiveDemo(liveDemo);
        setDescription(description)
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setGithubLink(null);
        setLiveDemo(null);
        setDescription(null);
    };

    // Displaying Projects By Type
    const showAllProjects = () => {
        setProjects(initialProjects);
    };

    const showJavascriptProjects = () => {
        setProjects(
            initialProjects.filter((project) => project.type === "Javascript")
        );
    };

    const showReactProjects = () => {
        setProjects(initialProjects.filter((project) => project.type === "React"));
    };

    const showMernStack = () => {
        setProjects(
            initialProjects.filter((project) => project.type === "Full-Stack")
        );
    };

    return (
        <div ref={projectsRef} className={` mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-gray-800 min-h-screen flex flex-col items-center py-16 ${projectsAnimationRun ? 'animate-fade-in' : ''}`}>
            <div ref={projectsRef} className={`flex flex-col items-center p-5 mb-6 ${mainHeadingsAnimationRun ? 'animate-zoom-in' : ''
                }`}>
                <div className="flex items-center mb-4">
                    <div className="bg-red-600 h-1 w-12 mx-1"></div>
                    <div className="bg-red-600 h-1 w-1"></div>
                    <p className="text-lg font-semibold ml-2">MY PORTFOLIO</p>
                </div>
                <h1 className="text-5xl font-bold text-center">
                    My Excellent Projects
                </h1>
            </div>
            <div className="flex flex-wrap mb-8">
                <button onClick={showAllProjects} className="btnForWhiteBg mx-1 my-1">
                    All
                </button>
                <button onClick={showJavascriptProjects} className="btnForWhiteBg mx-1 my-1">
                    Javascript
                </button>
                <button onClick={showReactProjects} className="btnForWhiteBg mx-1 my-1">
                    React
                </button>
                <button onClick={showMernStack} className="btnForWhiteBg mx-1 my-1">
                    Full-Stack
                </button>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className={`relative bg-white overflow-hidden`}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
                            />
                            <div
                                className="flex justify-between items-center bg-white shadow-xl relative bottom-8 left-1/2 transform -translate-x-1/2"
                                style={{ width: "85%" }}
                            >
                                <h3 className="text-lg font-semibold ml-3">{project.title}</h3>
                                <button
                                    className="btnForWhiteBg p-2 m-1 text-xl"
                                    onClick={() => handleImgClick([project.image, project.github, project.liveDemo, project.description])}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-4 md:mx-0 relative p-6 md:p-8">
                        <button
                            className="btnForWhiteBg absolute top-0 right-0"
                            onClick={handleCloseModal}
                        >
                            <FontAwesomeIcon icon={faMinus} className="text-xl" />
                        </button>
                        <div className="flex flex-col gap-10 md:flex-row justify-between items-start md:items-center mb-4 absolute top-2">
                            <Link
                                className="text-gray-600 hover:text-blue-500 transition-colors duration-200 mb-2 md:mb-0 flex items-center underline"
                                to={liveDemo}
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faPlay} className="mr-2" /> Live Demo
                            </Link>
                            <Link
                                className="text-gray-600 hover:text-blue-500 transition-colors duration-200 flex items-center underline"
                                to={githubLink}
                                target="_blank"
                            >
                                {/* <FontAwesomeIcon icon={faGithub} className="mr-2" /> */}
                                Github
                            </Link>
                        </div>
                        <p className="mb-4 text-gray-700">{description}</p>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
