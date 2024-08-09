import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";


const initialProjects = [
    {
        type: "React",
        title: "SparkPress-Latest News",
        description: "A brief description of Project One.",
        image: require('../assets/images/SparkPress.png'),
        liveDemo: "#",
        github: "https://github.com/HamdanRaza309/SparkPress.git",
    },
    {
        type: "Javascript",
        title: "Snake Game-Kids",
        description: "A brief description of Project Two.",
        image: require('../assets/images/Snake Game.png'),
        liveDemo: "#",
        github: "#",
    },
    {
        type: "Javascript",
        title: "Pdf Merger",
        description: "A brief description of Project One.",
        image: require('../assets/images/Pdf Merger.png'),

        liveDemo: "#",
        github: "#",
    },
    {
        type: "Javascript",
        title: "Analogue Clock",
        description: "A brief description of Project One.",
        image: require('../assets/images/Analogue CLock.png'),
        liveDemo: "#",
        github: "#",
    },
    {
        type: "Mern Stack",
        title: "Shopingoo-eCommerce",
        description: "A brief description of Project Two.",
        image: require('../assets/images/Shopingoo.png'),
        liveDemo: "#",
        github: "https://github.com/HamdanRaza309/22PWBCS0926-WP-ASSIGNMENT-04.git",
    },
    {
        type: "Mern Stack",
        title: "LogBook-Cloud Storage",
        description: "A brief description of Project One.",
        image: require('../assets/images/LogBook.png'),
        liveDemo: "#",
        github: "https://github.com/HamdanRaza309/logbook.git",
    },
    {
        type: "React",
        title: "IronEdge-Gym",
        description: "A brief description of Project Two.",
        image: require('../assets/images/IronEgde.png'),

        liveDemo: "#",
        github: "https://github.com/HamdanRaza309/IronEdge-FitnessGym-UsingAPI.git",
    },
];

const Projects = () => {
    const [projects, setProjects] = useState(initialProjects);
    const [selectedImage, setSelectedImage] = useState(null);
    const [githubLink, setGithubLink] = useState(null);
    const [mainHeadingsAnimationRun, setMainHeadingsAnimationRun] = useState(false);
    const { ref: mainHeadingsRef, inView: mainHeadingsVisible } = useInView();
    const [projectsAnimationRun, setProjectsAnimationRun] = useState(false);
    const { ref: projectsRef, inView: projectsVisible } = useInView();
    const [projectCardAnimationRun, setProjectCardAnimationRun] = useState(false);
    const { ref: projectCardRef, inView: projectCardVisible } = useInView();


    // Animations 
    useEffect(() => {
        if (mainHeadingsVisible && !mainHeadingsAnimationRun) {
            setMainHeadingsAnimationRun(true)
        }
    }, [mainHeadingsVisible, mainHeadingsAnimationRun])

    useEffect(() => {
        if (projectsVisible && !projectsAnimationRun) {
            setProjectsAnimationRun(true)
        }
    }, [projectsVisible, projectsAnimationRun])

    useEffect(() => {
        if (projectCardVisible && !projectCardAnimationRun) {
            setProjectCardAnimationRun(true)
        }
    }, [projectCardVisible, projectCardAnimationRun])


    // Open Project's Image or Redirect to Github
    const handleImgClick = ([image, github]) => {
        setSelectedImage(image);
        setGithubLink(github)
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setGithubLink(null);
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
            initialProjects.filter((project) => project.type === "Mern Stack")
        );
    };

    return (
        <div ref={projectsRef} className={`text-gray-800 min-h-screen flex flex-col items-center py-16 ${projectsAnimationRun ? 'animate-fade-in' : ''}`}>
            <div ref={mainHeadingsRef} className={`flex flex-col items-center p-5 mb-6 ${mainHeadingsAnimationRun ? 'animate-zoom-in' : ''
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
            <div className="flex mb-8">
                <button onClick={showAllProjects} className="btnForWhiteBg mx-1">
                    All
                </button>
                <button onClick={showJavascriptProjects} className="btnForWhiteBg mx-1">
                    Javascript
                </button>
                <button onClick={showReactProjects} className="btnForWhiteBg mx-1">
                    React
                </button>
                <button onClick={showMernStack} className="btnForWhiteBg mx-1">
                    Mern Stack
                </button>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div ref={projectCardRef} key={index} className={`relative bg-white overflow-hidden ${projectCardAnimationRun ? 'animate-fade-in' : ''}`}>
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
                                    onClick={() => handleImgClick([project.image, project.github])}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-sm max-w-lg relative">
                        <button
                            className="absolute top-0 right-0 btnForWhiteBg text-lg text-gray-600 hover:text-gray-900"
                            onClick={handleCloseModal}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <Link
                            className="absolute top-0 left-0 btnForWhiteBg text-lg text-gray-600 hover:text-gray-900"
                            to={githubLink}
                            target="_blank"
                        >
                            Github
                        </Link>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
