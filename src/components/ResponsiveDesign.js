import React, { useEffect } from 'react';
import Img from '../assets/images/blog2.jpg';
import CopyButton from './CopyButton';

const ResponsiveDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white text-black">
            <header className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-2">Responsive Design: Best Practices and Techniques</h1>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl">By Hamdan Raza | August 8, 2024 | 8 Comments</p>
            </header>

            <section className="mb-12">
                <img src={Img} alt="Scalable Web Application Img" className="w-full h-auto object-cover" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-6">Introduction</h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                    Responsive design is a cornerstone of modern web development. It ensures that your website or application not only looks great but also functions seamlessly across various devices. This blog will guide you through the best practices and techniques to achieve a truly responsive design that adapts beautifully to any screen size.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-4 text-gray-800">
                    <p className="font-medium">
                        <strong>Tip:</strong> Embrace the mobile-first approach to enhance the performance and user experience on smaller screens.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-6">Step 1: Understanding Responsive Design</h2>
                <p className="text-base sm:text-lg md:text-xl mb-4">
                    Responsive design is centered around creating web pages that adapt to different devices by adjusting their layout and content. Key principles include:
                </p>
                <div className="list-disc list-inside pl-5 space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Fluid Grids:</strong>
                        <p>Use relative units like percentages instead of fixed units like pixels to define the width of elements. This approach ensures that elements scale proportionally across various screen sizes.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Flexible Images:</strong>
                        <p>Ensure images resize within their containers. Set the <code className='text-green-500'>max-width</code> property to <code className='text-green-500'>100%</code> to make images responsive.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Media Queries:</strong>
                        <p>Apply different styles based on device characteristics using CSS media queries. These queries allow you to adjust layouts and content based on screen width, height, and resolution.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-6">Step 2: Best Practices for Responsive Design</h2>
                <p className="text-base sm:text-lg md:text-xl mb-4">
                    Implementing best practices ensures that your responsive design is not only functional but also visually appealing and user-friendly.
                </p>
                <div className="list-disc list-inside pl-5 space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Mobile-First Approach:</strong>
                        <p>Design and develop for the smallest screen sizes first, then progressively enhance for larger screens. This prioritizes essential content and optimizes performance.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mb-4">
                        <strong className="text-red-600 text-lg sm:text-xl md:text-2xl">Viewport Meta Tag:</strong>
                        <p className="text-base sm:text-lg md:text-xl mt-2">Control layout on mobile browsers with the viewport meta tag:</p>
                        <pre className="bg-gray-200 text-green-500 p-4 rounded text-sm sm:text-base md:text-lg overflow-x-auto whitespace-pre-wrap mt-2">
                            {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
                        </pre>
                        <CopyButton text={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`} />
                    </div>

                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Use Responsive Typography:</strong>
                        <p>Employ relative units like <code className='text-green-500'>ems</code> or <code className='text-green-500'>rems</code> for font sizes to ensure text scales properly across devices.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Optimize Images:</strong>
                        <p>Use the <code className='text-green-500'>&lt;picture&gt;</code> element or <code className='text-green-500'>srcset</code> attribute to serve different image resolutions based on device capabilities.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Test on Real Devices:</strong>
                        <p>Validate your design on actual devices, not just browser tools, to ensure proper functionality and appearance.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-6">Step 3: Techniques for Implementing Responsive Design</h2>
                <p className="text-base sm:text-lg md:text-xl mb-4">
                    Employ these techniques to effectively implement responsive design and enhance user experience:
                </p>
                <div className="list-decimal list-inside pl-5 space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">CSS Grid and Flexbox:</strong>
                        <p>Utilize these modern CSS layout tools for responsive designs. Use Flexbox for one-dimensional layouts (e.g., navigation bars) and CSS Grid for more complex two-dimensional arrangements.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Responsive Navigation:</strong>
                        <p>Incorporate a hamburger menu or collapsible navigation for small screens to maintain accessibility without consuming excessive space.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Hide/Show Content:</strong>
                        <p>Adjust content visibility with media queries to prioritize essential information on smaller screens.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Breakpoints:</strong>
                        <p>Define common breakpoints where your design might break and apply targeted CSS rules to address these issues. Typical breakpoints include 480px (mobile), 768px (tablet), and 1024px (desktop).</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Responsive Frameworks:</strong>
                        <p>Leverage frameworks like Bootstrap or Tailwind CSS that come with built-in responsive utilities to streamline your design process.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-6">Step 4: Advanced Responsive Design Techniques</h2>
                <p className="text-base sm:text-lg md:text-xl mb-4">
                    For sophisticated projects, consider these advanced techniques:
                </p>
                <div className="list-decimal list-inside pl-5 space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Adaptive Images:</strong>
                        <p>Serve different images based on screen size or resolution using the <code className='text-green-500'>&lt;picture&gt;</code> element with different <code className='text-green-500'>source</code> elements.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Container Queries:</strong>
                        <p>Apply styles based on the size of a container rather than the viewport to provide more granular control over layout adjustments.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-600">Dynamic Content Loading:</strong>
                        <p>Load content dynamically based on the user's device capabilities to optimize performance and reduce unnecessary data consumption.</p>
                    </div>
                </div>
            </section>

            <section className="text-center">
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
                    By following these practices, you can create a responsive design that ensures a consistent and enjoyable user experience across all devices. Keep refining your approach as new technologies and standards evolve to stay ahead in the world of web design.
                </p>
            </section>
        </div>
    );
};

export default ResponsiveDesign;
