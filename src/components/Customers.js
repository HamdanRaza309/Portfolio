import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Glasses from '../assets/images/glasses.svg';
import { useInView } from 'react-intersection-observer';

const customers = [
    {
        id: 1,
        title: 'Software Development Services',
        testimonial: "You provided exceptional backend development services. Your attention to detail and problem-solving skills greatly improved our system's performance.",
        name: "Michael Thompson",
        profession: "CTO, Tech Solutions Inc.",
        image: require('../assets/images/person.jpeg'),
    },
    {
        id: 2,
        title: 'Front-End Development',
        testimonial: "Your expertise in front-end development transformed our website. The user interface is now more intuitive and visually appealing.",
        name: "Sarah Lee",
        profession: "CEO, Creative Web Agency",
        image: require('../assets/images/person.jpeg'),
    },
    {
        id: 3,
        title: 'UI/UX Design Consultation',
        testimonial: "Your design insights were invaluable in creating a user-friendly interface for our application. You have a keen eye for design.",
        name: "David Green",
        profession: "Product Manager, Innovate Apps",
        image: require('../assets/images/person.jpeg'),
    },
    {
        id: 4,
        title: 'Data Analytics Integration',
        testimonial: "You integrated complex data analytics into our system seamlessly. Your work has provided us with critical insights.",
        name: "Jessica Roberts",
        profession: "Head of Data, Data Insights Corp.",
        image: require('../assets/images/person.jpeg'),
    },
    {
        id: 5,
        title: 'Product Development Support',
        testimonial: "Working with you on product development was a pleasure. Your technical knowledge and professionalism are top-notch.",
        name: "Daniel Wilson",
        profession: "COO, Future Tech Enterprises",
        image: require('../assets/images/person.jpeg'),
    },
    {
        id: 6,
        title: 'Customer Support Enhancement',
        testimonial: "Your contributions to improving our customer support system were outstanding. Our team has seen a significant boost in efficiency.",
        name: "Laura King",
        profession: "Customer Support Manager, ServiceNow Solutions",
        image: require('../assets/images/person.jpeg'),
    },
];

export default function Example() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1; // Set how many items you want per page
    const { ref: customerRef, inView: isCustomerVisible } = useInView()
    const [customerAnimationRun, setCustomerAnimationRun] = useState(false);

    useEffect(() => {
        if (isCustomerVisible && !customerAnimationRun) {
            setCustomerAnimationRun(true)
        }
    }, [isCustomerVisible, customerAnimationRun])

    const totalItems = customers.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentItem = customers[currentPage - 1]; // Get the current item based on page

    // Determine the start and end page numbers for pagination buttons
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    // Adjust start and end pages if there are fewer than 3 pages in total
    if (totalPages <= 3) {
        startPage = 1;
        endPage = totalPages;
    } else if (currentPage === 1) {
        endPage = 3;
    } else if (currentPage === totalPages) {
        startPage = totalPages - 2;
    }

    return (
        <div ref={customerRef} className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 bg-red-600 py-8 px-4 flex flex-col items-center justify-center sm:py-16 sm:px-6 ${customerAnimationRun ? 'animate-fade-in' : ''}`}>
            <div className="text-pink-100 text-3xl sm:text-4xl mb-2">
                <img src={Glasses} alt="Glasses Img" className='h-16 w-auto mb-4 mx-auto sm:h-20' />
            </div>
            {/* Testimonial Card */}
            <div className="relative top-5 mb-4 flex justify-center items-center">
                <div className="bg-transparent rounded-full h-24 w-24 sm:h-32 sm:w-32 flex justify-center items-center">
                    <img
                        src={currentItem.image}
                        alt="Customer Img"
                        className="rounded-full h-full w-full p-1 object-cover border-4 border-white border-dashed"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-white h-56 sm:h-64 rounded-lg shadow-lg p-4 sm:p-8 -mt-8 w-full sm:w-2/3 text-center">
                <p className="italic text-gray-600 mb-4 text-sm sm:text-base">
                    {currentItem.testimonial}
                </p>
                <h3 className="text-red-600 font-bold text-lg sm:text-xl">{currentItem.name}</h3>
                <p className="text-gray-500 text-sm sm:text-base">{currentItem.profession}</p>
            </div>

            {/* Pagination Controls */}
            <div className="mt-6 sm:mt-8">
                <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                    {/* Pagination numbers */}
                    {Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            aria-current={page === currentPage ? 'page' : undefined}
                            className={`relative inline-flex items-center px-3 py-1 text-sm font-semibold ${page === currentPage
                                ? 'z-10 bg-white text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300'
                                : 'text-gray-300 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                    >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </nav>
            </div>
        </div>
    );
}
