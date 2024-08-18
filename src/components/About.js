import React, { useEffect, useState } from 'react';
import Hamdan from '../assets/images/Hamdan2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useInView } from "react-intersection-observer";

const About = (props) => {
    const { ref: aboutRef, inView: aboutVisible } = useInView();
    const { ref: progressRef, inView: progressVisible } = useInView();
    const { ref: rocketRef, inView: rocketVisible } = useInView();
    const [rocketAnimated, setRocketAnimated] = useState(false);
    const [aboutAnimationRun, setAboutAnimationRun] = useState(false);
    const [progressAnimationRun, setProgressAnimationRun] = useState(false);

    useEffect(() => {
        if (rocketVisible && !rocketAnimated) {
            setRocketAnimated(true);
        }
    }, [rocketVisible, rocketAnimated]);

    useEffect(() => {
        if (aboutVisible && !aboutAnimationRun) {
            setAboutAnimationRun(true);
        }
    }, [aboutVisible, aboutAnimationRun]);

    useEffect(() => {
        if (progressVisible && !progressAnimationRun) {
            setProgressAnimationRun(true);
        }
    }, [progressVisible, progressAnimationRun]);

    return (
        <>
            <div ref={aboutRef} className={`${aboutAnimationRun ? 'animate-fade-in' : ''} bg-white text-gray-800 min-h-screen flex flex-col lg:flex-row items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 `}>
                <img
                    // style={{ backgroundImage: `url(${bgImage})` }}
                    className=' flex-1 object-cover m-0 w-96 h-auto transform scale-x-[-1]'
                    src={Hamdan} alt="About Me" />
                <div className='flex-1 flex flex-col py-3 px-10'>
                    <div className='flex items-center mb-8 '>
                        <div className='bg-red-600 h-1 w-12 mx-1'></div>
                        <div className='bg-red-600 h-1 w-1'></div>
                        <p className='text-lg font-semibold ml-2'>Learn About Me</p>
                    </div>
                    <div className='flex flex-col mb-8'>
                        <h1 className='text-5xl font-bold mb-4'>3 Years Experience</h1>

                        <p className='text-base leading-relaxed'>
                            I am Hamdan Raza, a skilled MERN stack developer with 3 years of experience in crafting seamless and user-friendly web applications. My expertise spans MongoDB, Express.js, React.js, and Node.js, where I specialize in building dynamic, responsive, and robust full-stack applications. Driven by a passion for technology, I deliver solutions that are both aesthetically pleasing and highly functional, exceeding client expectations.
                        </p>
                    </div>
                    <div ref={progressRef} className="w-full py-3 px-10">
                        <div className="mb-6">
                            <div className="flex justify-between">
                                <p className="font-bold">MongoDB</p>
                                <p className="font-bold">95%</p>
                            </div>
                            <div className="h-3 bg-gray-300 rounded-full">
                                <div
                                    className={`progress-bar h-full rounded-full bg-red-500 ${progressAnimationRun ? 'animate-progress-95' : ''}`}
                                    role="progressbar"
                                    aria-valuenow="95"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: progressAnimationRun ? '95%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between">
                                <p className="font-bold">ExpressJS</p>
                                <p className="font-bold">75%</p>
                            </div>
                            <div className="h-3 bg-gray-300 rounded-full">
                                <div
                                    className={`progress-bar h-full rounded-full bg-red-500 ${progressAnimationRun ? 'animate-progress-75' : ''}`}
                                    role="progressbar"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: progressAnimationRun ? '75%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between">
                                <p className="font-bold">ReactJS</p>
                                <p className="font-bold">80%</p>
                            </div>
                            <div className="h-3 bg-gray-300 rounded-full">
                                <div
                                    className={`progress-bar h-full rounded-full bg-red-500 ${progressAnimationRun ? 'animate-progress-80' : ''}`}
                                    role="progressbar"
                                    aria-valuenow="80"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: progressAnimationRun ? '80%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between">
                                <p className="font-bold">NodeJS</p>
                                <p className="font-bold">70%</p>
                            </div>
                            <div className="h-3 bg-gray-300 rounded-full">
                                <div
                                    className={`progress-bar h-full rounded-full bg-red-500 ${progressAnimationRun ? 'animate-progress-70' : ''}`}
                                    role="progressbar"
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: progressAnimationRun ? '70%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                        <div className="mb-6 flex items-center lg:items-start">
                            <button
                                onClick={() => { props.handleScroll(props.refs.projectsRef) }}
                                className="btnForWhiteBg"
                            >
                                Explore More
                            </button>
                            <div className="mt-4 mx-2 lg:mt-0 flex justify-center lg:justify-start">
                                <FontAwesomeIcon
                                    ref={rocketRef}
                                    icon={faRocket}
                                    size="3x"
                                    color="#EF4444"
                                    className={`rocket ${rocketAnimated ? 'animateRocket' : ''} `}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
