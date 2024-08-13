import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Banner(props) {
    const { ref: bannerRef, inView: bannerVisible } = useInView();
    const [bannerAnimationRun, setBannerAnimationRun] = useState(false);

    useEffect(() => {
        if (bannerVisible && !bannerAnimationRun) {
            setBannerAnimationRun(true);
        }
    }, [bannerVisible, bannerAnimationRun]);

    return (
        <div ref={bannerRef} className={`w-full bg-red-600 ${bannerAnimationRun ? 'animate-fade-in' : ''}`}>
            <div className={`flex flex-col gap-4 sm:gap-6 items-center justify-center text-white h-[600px] sm:h-[600px] md:h-[600px] lg:h-[600px] ${bannerAnimationRun ? 'animate-zoom-in' : ''} px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden`}>
                <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-black'>{props.sideHeading}</p>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'>{props.heading}</h1>
                <p className="text-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                    {props.desc}
                </p>
                <button
                    onClick={() => { props.handleScroll(props.refs.teamRef) }}
                    className="btnForRedBg">
                    {props.buttonText}
                </button>
            </div>
        </div>
    );
}
