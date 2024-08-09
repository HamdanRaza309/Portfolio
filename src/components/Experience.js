import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom';
import Banner from './Banner';

export default function Experience() {

    const { ref: experienceRef, inView: experienceVisible } = useInView();
    const [experienceAnimationRun, setExperienceAnimationRun] = useState(false);
    const [resumeAnimationRun, setResumeAnimationRun] = useState(false);
    const [cardLeftAnimationRun, setCardLeftAnimationRun] = useState(false);
    const [cardRightAnimationRun, setCardRightAnimationRun] = useState(false);
    const [activeCardIndex, setActiveCardIndex] = useState(null);

    useEffect(() => {
        if (experienceVisible && !experienceAnimationRun) {
            setExperienceAnimationRun(true);
        }
    }, [experienceVisible, experienceAnimationRun]);

    useEffect(() => {
        if (experienceVisible && !resumeAnimationRun) {
            setResumeAnimationRun(true);
        }
    }, [experienceVisible, resumeAnimationRun]);

    useEffect(() => {
        if (experienceVisible && !cardLeftAnimationRun) {
            setCardLeftAnimationRun(true);
        }
    }, [experienceVisible, cardLeftAnimationRun]);

    useEffect(() => {
        if (experienceVisible && !cardRightAnimationRun) {
            setCardRightAnimationRun(true);
        }
    }, [experienceVisible, cardRightAnimationRun]);

    const handleCardClick = (index) => {
        setActiveCardIndex(index);
    };

    return (
        <>
            <Banner
                sideHeading={'Welcome to My Creative Space'}
                heading={<span>Turning <span className="text-black">Ideas</span><span> into Digital Art.</span></span>}
                desc={`Welcome to my digital playground, where creativity meets technology. I'm Hamdan Raza, a developer dedicated to weaving together design and code to craft unforgettable digital experiences. My mission is to transform innovative concepts into stunning, functional solutions that captivate and engage. From designing sleek interfaces to building robust applications, I’m here to make your vision a reality. Ready to embark on a journey of creativity and tech? Let’s create something remarkable together!`}
                buttonText={'Discover More'}
            />
            <div ref={experienceRef} className={`flex flex-col px-10 py-5 ${experienceAnimationRun ? 'animate-fade-in' : ''}`}>
                <div className={`flex flex-col items-center mb-16 ${resumeAnimationRun ? 'animate-zoom-in' : ''}`}>
                    <div className='flex items-center mb-4'>
                        <div className='bg-red-600 h-1 w-12 mx-1'></div>
                        <div className='bg-red-600 h-1 w-1'></div>
                        <p className='text-lg font-semibold ml-2'>MY RESUME</p>
                    </div>
                    <h1 className='text-5xl font-bold text-center'>Working Experience</h1>
                </div>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                    {/* Cards */}
                    {[{
                        position: "right",
                        role: "Web Developer",
                        date: "08/11/2022",
                        location: "Soft Agency, San Francisco, CA",
                        description: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
                    }, {
                        position: "left",
                        role: "Web Developer",
                        date: "09/02/2023",
                        location: "Soft Agency, San Francisco, CA",
                        description: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
                    }, {
                        position: "right",
                        role: "Web Developer",
                        date: "10/05/2023",
                        location: "Soft Agency, San Francisco, CA",
                        description: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
                    }, {
                        position: "left",
                        role: "Web Developer",
                        date: "12/08/2023",
                        location: "Soft Agency, San Francisco, CA",
                        description: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
                    }, {
                        position: "right",
                        role: "Web Developer",
                        date: "04/01/2024",
                        location: "Soft Agency, San Francisco, CA",
                        description: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
                    }].map((card, index) => (
                        <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ${card.position === "right" ? (cardRightAnimationRun ? 'animate-slide-in-right' : '') : (cardLeftAnimationRun ? 'animate-slide-in-left' : '')}`}>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 ${activeCardIndex === index ? 'group-[.is-active]:bg-red-600' : 'group-[.is-active]:bg-indigo-500'} text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                    <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                </svg>
                            </div>
                            <div
                                className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow ${activeCardIndex === index ? 'text-white animate-bg-change border-t border-r border-b border-red-600 transform scale-105 duration-1000' : 'bg-transparent'}`}
                                onMouseEnter={() => handleCardClick(index)}
                                onMouseLeave={() => setActiveCardIndex(null)}
                            >
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="text-xl">{card.role}</div>
                                    <time className={`font-caveat font-bold ${activeCardIndex === index ? 'text-indigo-500' : 'text-red-600'}`}>{card.date}</time>
                                </div>
                                <div className="italic">{card.location}</div>
                                <div>{card.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
