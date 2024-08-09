import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Banner(props) {

    const { ref: bannerRef, inView: bannerVisible } = useInView();
    const [bannerAnimationRun, setBannerAnimationRun] = useState(false)

    useEffect(() => {
        if (bannerVisible && !bannerAnimationRun) {
            setBannerAnimationRun(true)
        }
    }, [bannerVisible, bannerAnimationRun])


    return (
        <div ref={bannerRef} className={`bg-red-600 w-screen ${bannerAnimationRun ? 'animate-fade-in' : ''}`}>
            <div className={`flex flex-col gap-6  items-center justify-center  text-white h-96 ${bannerAnimationRun ? 'animate-zoom-in' : ''}`}>
                <p className='font-bold text-xl text-black'>{props.sideHeading}</p>
                <h1 className='text-5xl font-bold'>{props.heading}</h1>
                <p className="text-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-52">
                    {props.desc}
                </p>
                <button className="btnForRedBg">{props.buttonText}</button>
            </div>
        </div>
    );
}
