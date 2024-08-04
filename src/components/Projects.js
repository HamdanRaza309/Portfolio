import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        image: 'project-one-url.jpg',
        liveDemo: '#',
        github: '#',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        image: 'project-two-url.jpg',
        liveDemo: '#',
        github: '#',
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center py-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-2/3">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex space-x-4">
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
