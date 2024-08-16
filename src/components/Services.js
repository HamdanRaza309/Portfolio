import React, { useEffect, useState } from 'react';
import { faLaptopCode, faCode, faCogs, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const services = [
        { name: 'Web Design', description: 'Creating visually appealing and user-friendly web designs.', icon: faDesktop },
        { name: 'Full-Stack Development', description: 'Building complete web applications from front to back.', icon: faLaptopCode },
        { name: 'API Development', description: 'Designing and integrating RESTful APIs for seamless interactions.', icon: faCode },
        { name: 'Frontend Development', description: 'Developing interactive and responsive user interfaces.', icon: faCogs },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { ref: serviceRef, inView: serviceVisible } = useInView({ threshold: 0.1 });
    const [serviceAnimationRun, setServiceAnimationRun] = useState(false);

    useEffect(() => {
        if (serviceVisible && !serviceAnimationRun) {
            setServiceAnimationRun(true);
        }
    }, [serviceVisible, serviceAnimationRun]);

    return (
        <div ref={serviceRef} className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 py-16 px-2 sm:px-3 md:px-5 lg:px-7 ${serviceAnimationRun ? 'animate-fade-in' : ''}`}>
            <div className={`flex flex-col items-center mb-12 ${serviceAnimationRun ? 'animate-zoom-in' : ''}`}>
                <div className='flex items-center mb-4'>
                    <div className='bg-red-600 h-1 w-12 mx-1'></div>
                    <div className='bg-red-600 h-1 w-1'></div>
                    <p className='text-lg font-semibold ml-2'>WHAT I DO</p>
                </div>
                <h1 className='text-5xl font-bold text-center'>Awesome Quality Services</h1>
            </div>
            <div className='flex flex-wrap w-full justify-center'>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-row items-center my-4 w-full sm:w-10/12 lg:w-2/5 px-2`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div
                            className={`flex items-center justify-center bg-transparent sm:w-1/3 sm:h-full h-full`}
                            style={{ border: '1px solid red' }}
                        >
                            <FontAwesomeIcon icon={service.icon} size="3x" className={`p-10 ${hoveredIndex === index ? 'transition-all text-red-600 transform scale-150 duration-1000' : ''}`} />
                        </div>

                        <div className={`flex flex-col justify-center flex-1 sm:h-full h-full px-3
                        ${hoveredIndex === index ? 'text-white animate-bg-change border-t sm:border-t-0 sm:border-l sm:border-r border-b border-red-600' : 'bg-transparent'}`}
                        >
                            <h3 className='text-2xl font-bold mb-2'>{service.name}</h3>
                            <p className='font-xl'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
