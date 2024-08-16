import React, { useEffect } from 'react';
import Img from '../assets/images/blog4.jpg'
import CopyButton from './CopyButton';

const IntroToTailwindCSS = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="mb-8 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Introduction to TailwindCSS: Simplifying Your Styles</h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">By Hamdan Raza | August 3, 2024 | 10 Comments</p>
            </header>
            <section className="mb-12">
                <img src={Img} alt="Scalable Web Application Img" className="w-full h-auto rounded-lg shadow-lg" />
            </section>
            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Introduction</h2>
                <p className="text-base sm:text-lg md:text-xl">
                    TailwindCSS is a utility-first CSS framework that has revolutionized the way we approach styling in web development. Unlike traditional CSS frameworks that provide pre-designed components, TailwindCSS offers a set of low-level utility classes that can be combined to build custom designs quickly and efficiently. In this blog, we will explore the fundamentals of TailwindCSS, its advantages, and how you can leverage it to streamline your styling process.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">What is TailwindCSS?</h2>
                <p className="text-base sm:text-lg md:text-xl">
                    TailwindCSS is a utility-first CSS framework that emphasizes using utility classes to build custom designs directly in your HTML. This approach allows for rapid prototyping and reduces the need for writing custom CSS. Instead of defining styles in separate CSS files, you apply utility classes directly to your HTML elements.
                </p>
                <div className="space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Utility-First Approach:</strong>
                        <p>TailwindCSS provides utility classes for common CSS properties such as margins, padding, colors, and typography. For example, instead of writing custom CSS for margin and padding, you use utility classes like <code className='text-green-500'>mt-4</code> or <code className='text-green-500'>p-6</code>.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Responsive Design:</strong>
                        <p>TailwindCSS includes responsive utilities that make it easy to design for different screen sizes. You can apply different utility classes at various breakpoints using prefixes like <code className='text-green-500'>sm:</code>, <code className='text-green-500'>md:</code>, and <code className='text-green-500'>lg:</code>.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Setting Up TailwindCSS</h2>
                <p className="text-base sm:text-lg md:text-xl mb-2">
                    To get started with TailwindCSS, you'll need to install it and configure it for your project. Here’s a step-by-step guide to setting up TailwindCSS in a React application.
                </p>
                <div className="space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Install TailwindCSS:</strong>
                        <p>Use npm or yarn to install TailwindCSS:</p>
                        <pre className="bg-gray-100 p-4 rounded text-green-600 overflow-auto">
                            {`npm install tailwindcss
npx tailwindcss init`}
                        </pre>
                        <CopyButton text={`npm install tailwindcss
npx tailwindcss init`} />
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Configure TailwindCSS:</strong>
                        <p>Create a <code className='text-green-500'>tailwind.config.js</code> file and configure your theme, variants, and plugins. TailwindCSS provides a default configuration that you can customize:</p>
                        <pre className="bg-gray-100 p-4 rounded text-green-600 overflow-auto">
                            {`module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                        </pre>
                        <CopyButton text={`module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`} />
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Add Tailwind to Your CSS:</strong>
                        <p>Include the Tailwind directives in your main CSS file:</p>
                        <pre className="bg-gray-100 p-4 rounded text-green-500 overflow-auto">
                            {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                        </pre>
                        <CopyButton text={`@tailwind base;
@tailwind components;
@tailwind utilities;`} />
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Build and Use Tailwind:</strong>
                        <p>Run the build process to generate the final CSS file. You can then include this file in your project and start using TailwindCSS classes in your HTML:</p>
                        <pre className="bg-gray-100 p-4 rounded text-green-500 overflow-auto">
                            {`npx tailwindcss -o build/tailwind.css --watch`}
                        </pre>
                        <CopyButton text={`npx tailwindcss -o build/tailwind.css --watch`} />
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Key Features of TailwindCSS</h2>
                <p className="text-base sm:text-lg md:text-xl">
                    TailwindCSS comes with several features that make it a powerful tool for modern web development:
                </p>
                <div className="space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Customizable:</strong>
                        <p>TailwindCSS is highly customizable. You can define your own color palette, spacing values, and more in the configuration file, allowing you to create a design system that fits your project's needs.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Utility Classes:</strong>
                        <p>TailwindCSS provides a comprehensive set of utility classes for nearly every aspect of CSS, including layout, typography, and spacing. This enables you to style elements quickly without writing custom CSS.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Responsive Design:</strong>
                        <p>The responsive design utilities make it simple to create layouts that work well on all screen sizes. You can easily apply different styles based on breakpoints.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Plugins:</strong>
                        <p>TailwindCSS supports a wide range of plugins that extend its functionality. These plugins can add additional utility classes, components, and more.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Best Practices</h2>
                <p className="text-base sm:text-lg md:text-xl">
                    Here are some best practices to follow when using TailwindCSS:
                </p>
                <div className="space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Use Utility Classes Wisely:</strong>
                        <p>Apply utility classes directly to elements to build custom designs. Avoid overusing utility classes on a single element to maintain readability.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Leverage Tailwind's Responsiveness:</strong>
                        <p>Use responsive utilities to ensure your design looks great on all devices. TailwindCSS makes it easy to create designs that adapt to different screen sizes.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className='text-red-600'>Customize Your Configuration:</strong>
                        <p>Take advantage of TailwindCSS's customization options to create a design system that aligns with your project's branding and design language.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IntroToTailwindCSS;
