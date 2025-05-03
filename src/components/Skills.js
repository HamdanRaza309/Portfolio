// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "./constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
    <section
        id="skills"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
        <div className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex flex-col items-center`}>
            <div className="flex items-center mb-4">
                <div className="bg-red-600 h-1 w-12 mx-1"></div>
                <div className="bg-red-600 h-1 w-1"></div>
                <p className="text-lg font-semibold ml-2">SKILLS</p>
            </div>
            <h1 className="text-4xl font-bold text-center">
                My technical skills, shaped by real-world projects.
            </h1>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
            {SkillsInfo.map((category) => (
                <div
                    key={category.title}
                    className="group bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] border-l-8 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:border-red-600 transition-all duration-800"
                >
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center group-hover:text-red-600 transition-colors duration-1000">
                        {category.title}
                    </h3>

                    {/* Skill Items - 3 per row on larger screens */}
                    <Tilt
                        key={category.title}
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                                >
                                    <img
                                        src={skill.logo}
                                        alt={`${skill.name} logo`}
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                    />
                                    <span className="text-xs sm:text-sm text-gray-300">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Tilt>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;