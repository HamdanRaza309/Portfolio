import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Banner from "./Banner"


export default function PricePlan() {
    const { ref: pricePlanRef, inView: pricePlanVisible } = useInView();
    const { ref: pricePlanCardRef, inView: pricePlanCardVisible } = useInView();
    const [pricePlanAnimationRun1, setPricePlanAnimationRun1] = useState(false);
    const [pricePlanAnimationRun2, setPricePlanAnimationRun2] = useState(false);
    const [pricePlanCardAnimationRun, setPricePlanCardAnimationRun] = useState(false);

    useEffect(() => {
        if (pricePlanVisible && !pricePlanAnimationRun1) {
            setPricePlanAnimationRun1(true);
        }
    }, [pricePlanVisible, pricePlanAnimationRun1]);

    useEffect(() => {
        if (pricePlanVisible && !pricePlanAnimationRun2) {
            setPricePlanAnimationRun2(true);
        }
    }, [pricePlanVisible, pricePlanAnimationRun2]);

    useEffect(() => {
        if (pricePlanCardVisible && !pricePlanCardAnimationRun) {
            setPricePlanCardAnimationRun(true);
        }
    }, [pricePlanCardVisible, pricePlanCardAnimationRun]);

    const plans = [
        {
            title: 'BASIC',
            price: '49',
            features: ['Website Audit', 'Design', 'Development'],
        },
        {
            title: 'STANDARD',
            price: '99',
            features: [
                'Website Audit', 'Design', 'Development', 'Backups', 'Analytics',
                'Live Chat', 'Search Engine Optimization', 'Content Management',
            ],
        },
        {
            title: 'PREMIUM',
            price: '149',
            features: [
                'Website Audit', 'Design', 'Development', 'Backups', 'Analytics',
                'Live Chat', 'Search Engine Optimization', 'Content Management',
                'Maintenance Agreement', 'eCommerce', 'Email Setup', 'Hosting',
            ],
        },
    ];

    return (
        <div className={`flex flex-col items-center mt-16 mb-10 ${pricePlanAnimationRun2 ? 'animate-fade-in' : ''}`}>
            <div
                ref={pricePlanRef}
                className={`flex flex-col items-center p-5 mb-6 ${pricePlanAnimationRun1 ? 'animate-zoom-in' : ''
                    }`}
            >
                <div className="flex items-center mb-4">
                    <div className="bg-red-600 h-1 w-12 mx-1"></div>
                    <div className="bg-red-600 h-1 w-1"></div>
                    <p className="text-lg font-semibold ml-2">PRICING PLAN</p>
                </div>
                <h1 className="text-5xl font-bold text-center">Affordable Price</h1>
            </div>
            <div className="flex flex-wrap justify-center space-x-8">
                {plans.map((plan, index) => (
                    <div
                        ref={pricePlanCardRef}
                        key={index}
                        className={`relative w-80 p-6 h-full m-4 rounded-md bg-white text-black flex flex-col items-center ${pricePlanCardAnimationRun && index === 0 ? 'animate-slide-in-left' : (pricePlanCardAnimationRun && index === 2 ? 'animate-slide-in-right' : '')} ${index === 1 ? 'shadow-2xl' : 'shadow-md'}`}
                    >
                        <h2 className="text-center text-2xl mb-4">{plan.title}</h2>
                        <h1 className="text-center text-bold text-red-600 text-6xl mb-4">
                            <sup className="text-xl">$</sup>
                            {plan.price}
                            <sub className="text-xl">/mo</sub>
                        </h1>
                        <ul className="mb-4 mt-10">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-center mb-2 text-gray-400">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="btnForWhiteBg">
                            Get Plan
                        </Link>
                    </div>
                ))}
            </div>
            <Banner
                sideHeading={'Transforming Ideas into Reality'}
                heading={<span>Crafting<span className="text-black"> Code </span>with Creativity</span>}
                desc={'Passionate about developing immersive and engaging experiences, I seamlessly blend design with functionality to create impactful digital solutions. With a keen eye for detail and a love for innovation, I strive to push the boundaries of what’s possible and bring unique visions to life. Whether it’s building dynamic web applications or crafting intuitive user interfaces, my goal is to deliver exceptional results that make a difference. Let’s collaborate and build something extraordinary together!'}
                buttonText={'Explore My Work'}
            />
        </div>
    );
}
