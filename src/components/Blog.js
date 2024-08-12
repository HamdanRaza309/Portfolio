import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTags, faCalendarAlt, faComments, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

export default function Blog() {

    const blogs = [
        {
            title: 'Building a Scalable Web Application with MERN Stack',
            admin: 'Hamdan Raza',
            topic: 'Web Development',
            date: 'August 10, 2024',
            noOfComments: '12 Comments',
            testimonial: 'In this blog, we explore how to build a scalable web application using the MERN stack. From setting up the development environment to deploying the app on a cloud platform, every step is covered in detail.',
            image: require('../assets/images/blog1.jpg')
        },
        {
            title: 'Responsive Design: Best Practices and Techniques',
            admin: 'Hamdan Raza',
            topic: 'UI/UX Design',
            date: 'August 8, 2024',
            noOfComments: '8 Comments',
            testimonial: 'Responsive design is crucial for modern web applications. This blog discusses the best practices and techniques for creating a responsive user interface that works seamlessly across all devices.',
            image: require('../assets/images/blog2.jpg')
        },
        {
            title: 'Optimizing Web Performance: Tips and Tricks',
            admin: 'Hamdan Raza',
            topic: 'Web Optimization',
            date: 'August 5, 2024',
            noOfComments: '15 Comments',
            testimonial: 'Learn how to optimize your web application for performance. This blog covers various strategies, including code splitting, lazy loading, and minimizing HTTP requests, to make your app faster and more efficient.',
            image: require('../assets/images/blog3.jpg')
        },
        {
            title: 'Introduction to TailwindCSS: Simplifying Your Styles',
            admin: 'Hamdan Raza',
            topic: 'CSS Frameworks',
            date: 'August 3, 2024',
            noOfComments: '10 Comments',
            testimonial: 'TailwindCSS is a utility-first CSS framework that has taken the web development community by storm. In this blog, we introduce TailwindCSS and demonstrate how it can simplify your styling process.',
            image: require('../assets/images/blog4.jpg')
        }
    ];

    const { ref: blogsRef, inView: isBlogsVisible } = useInView();
    const [mainHeadingAnimationRun, setMainHeadingAnimationRun] = useState(false);
    const [blogCardsAnimationRun, setBlogCardsAnimationRun] = useState(false)
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {
        if (isBlogsVisible && !mainHeadingAnimationRun) {
            setMainHeadingAnimationRun(true)
        }
    }, [isBlogsVisible, mainHeadingAnimationRun])

    useEffect(() => {
        if (isBlogsVisible && !blogCardsAnimationRun) {
            setBlogCardsAnimationRun(true)
        }
    }, [isBlogsVisible, blogCardsAnimationRun])

    function getAnimationClass(blogCardsAnimationRun, index) {
        if (!blogCardsAnimationRun) return '';
        const animations = ['animate-slide-in-left', 'animate-slide-in-right', 'animate-slide-in-left', 'animate-slide-in-right'];
        return animations[index];
    }


    return (
        <div ref={blogsRef}>
            <div className={`flex flex-col items-center p-5 mb-6 mt-10 ${mainHeadingAnimationRun ? 'animate-zoom-in' : ''}`}>
                <div className="flex items-center mb-4">
                    <div className="bg-red-600 h-1 w-12 mx-1"></div>
                    <div className="bg-red-600 h-1 w-1"></div>
                    <p className="text-lg font-semibold ml-2">FROM BLOG</p>
                </div>
                <h1 className="text-5xl font-bold text-center">
                    Latest Articles
                </h1>
            </div>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className={`flex flex-col bg-white w-full mx-auto h-full p-4 ${getAnimationClass(blogCardsAnimationRun, index)}`}
                        onMouseEnter={() => { setHoverIndex(index) }}
                        onMouseLeave={() => { setHoverIndex(null) }}
                    >
                        <div className='overflow-hidden'>
                            <img
                                src={blog.image}
                                alt="Blog Img"
                                className={`w-full h-64 md:h-80 object-cover transition-transform duration-300 ${hoverIndex === index ? 'scale-110' : ''}`} />
                        </div>
                        <div className={`flex flex-col flex-grow border-l-2 border-b-2 border-r border-gray-100 p-4 ${hoverIndex === index ? 'animate-bg-change border-none' : ''}`}>
                            <h1 className='text-2xl font-bold'>{blog.title}</h1>
                            <div className='flex flex-wrap text-sm mb-4'>
                                <div className='flex items-center mr-4'>
                                    <FontAwesomeIcon icon={faUser} className={`mr-1 ${hoverIndex === index ? 'text-white' : 'text-red-600 '}`} />
                                    <h5>{blog.admin}</h5>
                                </div>
                                <div className='flex items-center mr-4'>
                                    <FontAwesomeIcon icon={faTags} className={`mr-1 ${hoverIndex === index ? 'text-white' : 'text-red-600 '}`} />
                                    <h5>{blog.topic}</h5>
                                </div>
                                <div className='flex items-center mr-4'>
                                    <FontAwesomeIcon icon={faCalendarAlt} className={`mr-1 ${hoverIndex === index ? 'text-white' : 'text-red-600 '}`} />
                                    <h5>{blog.date}</h5>
                                </div>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faComments} className={`mr-1 ${hoverIndex === index ? 'text-white' : 'text-red-600 '}`} />
                                    <h5>{blog.noOfComments}</h5>
                                </div>
                            </div>
                            <p className={`mb-4 flex-grow ${hoverIndex === index ? 'text-white' : ''}`}>{blog.testimonial}</p>
                            <div className='mt-auto'>
                                <button className={` ${hoverIndex === index ? 'btnForRedBg' : 'btnForWhiteBg'}`}>
                                    Read More
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
