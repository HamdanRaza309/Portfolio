import React, { useEffect } from 'react';
import Img from '../assets/images/blog3.jpg'

const OptimizingWebPerformance = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container mx-auto px-4 py-8 bg-white text-black">
            <header className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Optimizing Web Performance</h1>
                <p className="text-sm md:text-base text-gray-600 mb-4">By Hamdan Raza | August 5, 2024 | 15 Comments</p>
            </header>

            <section className="mb-12">
                <img src={Img} alt="Scalable Web Application Img" className="w-full h-auto rounded-lg shadow-lg" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Introduction</h2>
                <p className="text-base md:text-lg leading-relaxed">
                    Web performance optimization is crucial for ensuring that your web application is fast, responsive, and provides a smooth user experience. Slow loading times and unoptimized content can lead to higher bounce rates and poor user engagement. In this blog, we will explore various strategies and techniques that you can use to optimize your web application's performance, making it faster and more efficient.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Step 1: Code Splitting</h2>
                <p className="text-base md:text-lg mb-4 leading-relaxed">
                    Code splitting is a powerful technique to improve the loading speed of your web application by breaking down your JavaScript bundles into smaller, more manageable pieces. This allows your application to load only the necessary code for the current page or component, reducing the initial load time.
                </p>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">Dynamic Imports</h3>
                    <p className="text-base md:text-lg mb-2">
                        Use dynamic imports to load JavaScript modules only when they are needed:
                    </p>
                    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-green-500 text-sm md:text-base">
                        {`import('./MyComponent').then(module => {
    const MyComponent = module.default;
    // Use MyComponent
});`}
                    </pre>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">React Lazy and Suspense</h3>
                    <p className="text-base md:text-lg mb-2">
                        React provides built-in support for code splitting with <code className='text-green-500'>React.lazy()</code> and <code className='text-green-500'>Suspense</code>:
                    </p>
                    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-green-500 text-sm md:text-base">
                        {`const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <MyComponent />
        </React.Suspense>
    );
}`}
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Step 2: Lazy Loading</h2>
                <p className="text-base md:text-lg mb-4 leading-relaxed">
                    Lazy loading is a technique that delays the loading of non-essential resources until they are needed. This is particularly useful for images, videos, and other media content, as it reduces the initial page load time and improves overall performance.
                </p>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">Lazy Loading Images</h3>
                    <p className="text-base md:text-lg mb-2">
                        Use the <code className='text-green-500'>loading="lazy"</code> attribute for images:
                    </p>
                    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-green-500 text-sm md:text-base">
                        {`<img src="image.jpg" alt="Example" loading="lazy" />`}
                    </pre>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">Lazy Loading Components</h3>
                    <p className="text-base md:text-lg mb-2">
                        Similar to code splitting, you can lazy load components in React:
                    </p>
                    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-green-500 text-sm md:text-base">
                        {`const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </React.Suspense>
    );
}`}
                    </pre>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Step 3: Minimizing HTTP Requests</h2>
                <p className="text-base md:text-lg mb-4 leading-relaxed">
                    Reducing the number of HTTP requests your application makes can significantly improve load times. Each request adds to the overall load time, so minimizing these can lead to a more performant application.
                </p>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">Combine Files</h3>
                    <p className="text-base md:text-lg mb-2">
                        Where possible, combine multiple CSS or JavaScript files into a single file:
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">Use CSS Sprites</h3>
                    <p className="text-base md:text-lg mb-2">
                        Combine multiple images into a single image sprite:
                    </p>
                    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-green-500 text-sm md:text-base">
                        {`.icon {
    background-image: url('sprite.png');
    background-size: cover;
    width: 50px;
    height: 50px;
}

.icon-1 {
    background-position: 0 0;
}

.icon-2 {
    background-position: -50px 0;
}`}
                    </pre>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">Reduce Third-Party Requests</h3>
                    <p className="text-base md:text-lg mb-2">
                        Limit the use of third-party scripts and resources:
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">Step 4: Optimize Images</h2>
                <p className="text-base md:text-lg mb-4 leading-relaxed">
                    Images often account for a significant portion of a web page’s total load size. Optimizing images can greatly reduce load times and improve performance.
                </p>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">Image Compression</h3>
                    <p className="text-base md:text-lg mb-2">
                        Use tools to compress your images without sacrificing quality:
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-2">Use Next-Gen Formats</h3>
                    <p className="text-base md:text-lg mb-2">
                        Consider using next-generation image formats like WebP for better compression:
                    </p>
                    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto text-green-500 text-sm md:text-base">
                        {`<img src="image.webp" alt="Example" />`}
                    </pre>
                </div>
            </section>
        </div>
    )
}

export default OptimizingWebPerformance;
