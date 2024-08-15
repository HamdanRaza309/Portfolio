import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function PricePlan() {
    const { ref: pricePlanRef, inView: pricePlanVisible } = useInView();
    const { ref: pricePlanCardRef, inView: pricePlanCardVisible } = useInView();
    const [pricePlanAnimationRun1, setPricePlanAnimationRun1] = useState(false);
    const [pricePlanAnimationRun2, setPricePlanAnimationRun2] = useState(false);
    const [pricePlanCardAnimationRun, setPricePlanCardAnimationRun] = useState(false);
    const [getPlan, setGetPlan] = useState(false);
    const [pay, setPay] = useState(false);

    const handleCloseGetPlanModal = () => {
        setGetPlan(false);
    };

    const handleClosePayModal = () => {
        setPay(false);
    };

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
        <div className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex flex-col items-center mt-16 ${pricePlanAnimationRun2 ? 'animate-fade-in' : ''}`}>
            <div
                ref={pricePlanRef}
                className={`flex flex-col items-center p-5 mb-6 ${pricePlanAnimationRun1 ? 'animate-zoom-in' : ''}`}
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
                        className={`relative w-80 p-6 h-full m-4 rounded-md bg-white text-black flex flex-col items-center ${pricePlanCardAnimationRun && index === 0 ? 'animate-slide-in-left' : pricePlanCardAnimationRun && index === 2 ? 'animate-slide-in-right' : ''} ${index === 1 ? 'shadow-2xl' : 'shadow-md'}`}
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
                        <button
                            className="btnForWhiteBg"
                            onClick={() => {
                                setGetPlan(true);
                                setPay(false);  // Ensure the Pay modal is closed
                            }}
                        >
                            Get Plan
                        </button>
                    </div>
                ))}
            </div>

            {getPlan && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                        <button
                            className="absolute top-0 right-0 btnForWhiteBg text-lg text-gray-600 hover:text-gray-900"
                            onClick={handleCloseGetPlanModal}
                        >
                            <FontAwesomeIcon icon={faMinus} size="lg" />
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-center">Get Your Plan</h2>
                        <p className="text-gray-700 mb-6">
                            Please fill out the form below to get started with your selected plan. We will get back to you shortly.
                        </p>
                        <form className="space-y-4" onSubmit={(e) => {
                            e.preventDefault();
                            setGetPlan(false);
                            setPay(true);
                        }}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border border-gray-300 rounded"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 border border-gray-300 rounded"
                                required
                            />
                            <textarea
                                placeholder="Additional Information (optional)"
                                className="w-full p-3 border border-gray-300 rounded"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                className="btnForWhiteBg w-full"
                            >
                                Pay
                            </button>
                        </form>
                    </div>
                </div>
            )}
            {pay && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                        <button
                            className="absolute top-0 right-0 btnForWhiteBg text-lg text-gray-600 hover:text-gray-900"
                            onClick={handleClosePayModal}
                        >
                            <FontAwesomeIcon icon={faMinus} size="lg" />
                        </button>
                        <h1 className='text-bold text-2xl'>Payment Method Here</h1>
                        <p>Stay tuned—this feature will be added soon.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
