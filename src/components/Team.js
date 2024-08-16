import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

export default function Team() {
    const teamMembers = [
        {
            name: 'Ahmed Ali',
            role: 'Full Stack Developer',
            testimonial: 'Ahmed is a passionate developer with a knack for building robust and scalable applications.',
            linkedIn: '/',
            github: '/',
            twitter: '/',
            image: require('../assets/images/member1.jpeg'),
        },
        {
            name: 'Arman Khan',
            role: 'UI/UX Designer',
            testimonial: 'Arman is an innovative designer who transforms ideas into visually stunning and user-friendly designs.',
            linkedIn: '/',
            github: '/',
            twitter: '/',
            image: require('../assets/images/member2.jpeg'),
        },
        {
            name: 'Omar Siddiqui',
            role: 'Backend Developer',
            testimonial: 'Omar specializes in backend development and database management.',
            linkedIn: '/',
            github: '/',
            twitter: '/',
            image: require('../assets/images/member3.jpeg'),
        },
        {
            name: 'Bakhtiyar Muhammad',
            role: 'Frontend Developer',
            testimonial: 'Bakhtiyar excels in creating responsive and dynamic user interfaces.',
            linkedIn: '/',
            github: '/',
            twitter: '/',
            image: require('../assets/images/member4.jpeg'),
        },
    ];

    const [hoverIndex, setHoverIndex] = useState(null);
    const { ref: teamRef, inView: isTeamVisible } = useInView();
    const [mainHeadingAnimationRun, setMainHeadingAnimationRun] = useState(false);
    const [teamMembersAnimationRun, setTeamMembersAnimationRun] = useState(false);

    useEffect(() => {
        if (isTeamVisible && !mainHeadingAnimationRun) {
            setMainHeadingAnimationRun(true);
        }
    }, [isTeamVisible, mainHeadingAnimationRun]);

    useEffect(() => {
        if (isTeamVisible && !teamMembersAnimationRun) {
            setTeamMembersAnimationRun(true);
        }
    }, [isTeamVisible, teamMembersAnimationRun]);

    function getAnimationClass(index) {
        if (!teamMembersAnimationRun) return '';
        const animations = ['animate-slide-in-left', 'animate-slide-in-right'];
        return animations[index % 2];
    }

    return (
        <div ref={teamRef} className='py-4'>
            <div className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex flex-col items-center ${mainHeadingAnimationRun ? 'animate-zoom-in' : ''}`}>
                <div className="flex items-center mb-4">
                    <div className="bg-red-600 h-1 w-12 mx-1"></div>
                    <div className="bg-red-600 h-1 w-1"></div>
                    <p className="text-lg font-semibold ml-2">MY TEAM</p>
                </div>
                <h1 className="text-5xl font-bold text-center">
                    Expert Team Members
                </h1>
            </div>
            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12 w-4/5 mx-auto justify-items-center'>
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center w-full h-full p-4 bg-white ${getAnimationClass(index)}`}
                        onMouseEnter={() => { setHoverIndex(index) }}
                        onMouseLeave={() => { setHoverIndex(null) }}
                    >
                        <div className='flex-1 flex-shrink-0 overflow-hidden'>
                            <img src={member.image} alt="Team Member Img" className={`w-72 h-72 object-cover transition-transform duration-300 ${hoverIndex === index ? 'scale-110' : ''} `} />
                        </div>
                        <div className={`flex-1 flex flex-col justify-center px-5 py-3 h-72 w-72 ${hoverIndex === index ? 'animate-bg-change' : ''} `}>
                            <h2 className={`text-xl font-semibold mb-2 ${hoverIndex === index ? 'text-white' : 'text-red-600'} `}>{member.name}</h2>
                            <h3 className={`text-lg  mb-2 text-black`}>{member.role}</h3>
                            <p className={` mb-4 ${hoverIndex === index ? 'text-white' : 'text-gray-700'} `}>{member.testimonial}</p>
                            <div className='flex space-x-4'>
                                {member.linkedIn && (
                                    <Link to={member.linkedIn} className={`${hoverIndex === index ? 'text-sm font-semibold tracking-wider text-[#EF233C] bg-white border-2 border-transparent rounded-none shadow-inner transition ease-in duration-300 hover:text-white hover:bg-transparent hover:shadow-none hover:border-white' : 'text-sm font-semibold tracking-wider text-white bg-[#EF233C] border-2 border-transparent rounded-none shadow-inner transition ease-in duration-300 hover:text-[#EF233C] hover:bg-transparent hover:shadow-none hover:border-[#EF233C]'} `}>
                                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                    </Link>
                                )}
                                {member.github && (
                                    <Link to={member.github} className={`${hoverIndex === index ? 'text-sm font-semibold tracking-wider text-[#EF233C] bg-white border-2 border-transparent rounded-none shadow-inner transition ease-in duration-300 hover:text-white hover:bg-transparent hover:shadow-none hover:border-white' : 'text-sm font-semibold tracking-wider text-white bg-[#EF233C] border-2 border-transparent rounded-none shadow-inner transition ease-in duration-300 hover:text-[#EF233C] hover:bg-transparent hover:shadow-none hover:border-[#EF233C]'} `}>
                                        <FontAwesomeIcon icon={faGithub} size="lg" />
                                    </Link>
                                )}
                                {member.twitter && (
                                    <Link to={member.twitter} className={`${hoverIndex === index ? 'text-sm font-semibold tracking-wider text-[#EF233C] bg-white border-2 border-transparent rounded-none shadow-inner transition ease-in duration-300 hover:text-white hover:bg-transparent hover:shadow-none hover:border-white' : 'text-sm font-semibold tracking-wider text-white bg-[#EF233C] border-2 border-transparent rounded-none shadow-inner transition ease-in duration-300 hover:text-[#EF233C] hover:bg-transparent hover:shadow-none hover:border-[#EF233C]'} `}>
                                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
