import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamdan from '../assets/images/Hamdan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref: aboutRef, inView: aboutVisible } = useInView();
    const { ref: progressRef, inView: progressVisible } = useInView();
    const { ref: rocketRef, inView: rocketVisible } = useInView();
    const [rocketAnimated, setRocketAnimated] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (rocketVisible && !rocketAnimated) {
            setRocketAnimated(true)
        }
    }, [rocketVisible, rocketAnimated])


    return (
        <div ref={aboutRef} className={`${aboutVisible ? 'animate-fade-in' : ''} bg-white text-gray-800 min-h-screen flex flex-col lg:flex-row items-center`}>
            <img className='flex-1 object-cover m-0 w-96 h-auto transform scale-x-[-1]' src={Hamdan} alt="About Me" />
            <div className='flex-1 flex flex-col py-3 px-10'>
                <div className='flex items-center mb-8 '>
                    <div className='bg-red-600 h-1 w-12 mx-1'></div>
                    <div className='bg-red-600 h-1 w-1'></div>
                    <p className='text-lg font-semibold ml-2'>Learn About Me</p>
                </div>
                <div className='flex flex-col mb-8'>
                    <h1 className='text-5xl font-bold mb-4'>10 Years Experience</h1>

                    <p className='text-base leading-relaxed'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos eum perferendis laudantium numquam odio ducimus, commodi nisi voluptatibus voluptatem dolorum sint ad quasi architecto quis corporis praesentium delectus dolor, ullam fugit suscipit. Iure, ad?
                    </p>
                </div>
                <div ref={progressRef} className="w-full py-3 px-10">
                    <div className="mb-6">
                        <div className="flex justify-between">
                            <p className="font-bold">HTML5 & CSS3</p>
                            <p className="font-bold">95%</p>
                        </div>
                        <div className="h-3 bg-gray-300 rounded-full">
                            <div
                                className={`progress-bar h-full rounded-full bg-red-500 ${progressVisible ? 'animate-progress-95' : ''}`}
                                role="progressbar"
                                aria-valuenow="95"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: progressVisible ? '95%' : '0%' }}
                            ></div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between">
                            <p className="font-bold">JavaScript (ES6+)</p>
                            <p className="font-bold">85%</p>
                        </div>
                        <div className="h-3 bg-gray-300 rounded-full">
                            <div
                                className={`progress-bar h-full rounded-full bg-red-500 ${progressVisible ? 'animate-progress-85' : ''}`}
                                role="progressbar"
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: progressVisible ? '85%' : '0%' }}
                            ></div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between">
                            <p className="font-bold">Express</p>
                            <p className="font-bold">75%</p>
                        </div>
                        <div className="h-3 bg-gray-300 rounded-full">
                            <div
                                className={`progress-bar h-full rounded-full bg-red-500 ${progressVisible ? 'animate-progress-75' : ''}`}
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: progressVisible ? '75%' : '0%' }}
                            ></div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between">
                            <p className="font-bold">React</p>
                            <p className="font-bold">80%</p>
                        </div>
                        <div className="h-3 bg-gray-300 rounded-full">
                            <div
                                className={`progress-bar h-full rounded-full bg-red-500 ${progressVisible ? 'animate-progress-80' : ''}`}
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: progressVisible ? '80%' : '0%' }}
                            ></div>
                        </div>
                    </div>
                    <div className="mb-6 flex items-center lg:items-start">
                        <Link
                            className="bg-red-500 text-white px-5 py-3 font-bold text-center lg:text-left hover:bg-transparent hover:text-red-500 hover:border hover:border-black hover:animate-slide-in transition duration-300"
                        >
                            Learn More
                        </Link>
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
    );
};

export default About;
