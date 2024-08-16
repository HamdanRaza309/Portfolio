import React, { useEffect } from 'react';
import Img from '../assets/images/blog1.jpg';
import { Link } from 'react-router-dom';

const ScalableWebApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 bg-white text-black">
            <header className="mb-8 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
                    Building a Scalable Web Application with MERN Stack
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                    By Hamdan Raza | August 10, 2024 | 12 Comments
                </p>
            </header>
            <section className="mb-12">
                <img src={Img} alt="Scalable Web Application Img" className="w-full h-auto rounded-lg shadow-lg" />
            </section>
            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">Introduction</h2>
                <p className="text-base sm:text-lg leading-relaxed">
                    In today's rapidly evolving digital landscape, scalability is a crucial aspect of web application development. The MERN stack—MongoDB, Express.js, React.js, and Node.js—is an excellent choice for developers looking to create scalable and high-performance applications. In this guide, we'll walk you through each step, from setting up the development environment to deploying your app on a cloud platform, ensuring that even a novice developer can follow along.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">
                    Step 1: Setting Up the Development Environment
                </h2>
                <p className="text-base sm:text-lg mb-4 leading-relaxed">
                    Before you start coding, you need to set up your development environment. Here’s how you can do it:
                </p>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mb-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600 mb-2">
                        Install Node.js and npm
                    </h3>
                    <p className="text-base sm:text-lg mb-2">
                        Visit the <Link target="_blank" to="https://nodejs.org/" className="text-green-500 underline">official Node.js website</Link> and download the latest version of Node.js. This will also install npm (Node Package Manager), which is essential for managing dependencies. After installation, verify the installation by running <code className="text-green-500">node -v</code> and <code className="text-green-500">npm -v</code> in your terminal.
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600 mb-2">
                        Install MongoDB
                    </h3>
                    <p className="text-base sm:text-lg mb-2">
                        Download MongoDB from the <Link target="_blank" to="https://www.mongodb.com/try/download/community" className="text-green-500 underline">official MongoDB website</Link>. Follow the installation instructions for your operating system. After installation, run <code className="text-green-500">mongod</code> to start the MongoDB server.
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600 mb-2">
                        Set Up Your Project Structure
                    </h3>
                    <p className="text-base sm:text-lg mb-2">
                        Create a new directory for your project. Inside this directory, initialize a new Node.js project by running <code className="text-green-500">npm init</code>. This will generate a <code className="text-green-500">package.json</code> file where you can manage your project’s dependencies.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">
                    Step 2: Creating the Backend with Express.js and Node.js
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                    The backend is the heart of your application, handling business logic, database interactions, and API endpoints.
                </p>
                <div className="list-decimal list-inside text-base sm:text-lg space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mb-1">
                        <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Install Express.js</strong>
                        <p className="text-base sm:text-lg mt-2">
                            In your project directory, run <code className="text-green-500">npm install express</code> to install Express.js, a minimalist web framework for Node.js.
                        </p>
                    </div>

                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mb-1">
                        <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Create the Server</strong>
                        <p className="text-base sm:text-lg mt-2">
                            Create a file named <code className="text-green-500">server.js</code> in your project’s root directory. Set up a basic Express server:
                        </p>
                        <pre className="bg-gray-200 text-green-500 p-4 rounded text-sm sm:text-base md:text-lg overflow-x-auto whitespace-pre-wrap mt-2">
                            {`const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});`}
                        </pre>
                    </div>

                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mb-1">
                        <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Set Up Routing</strong>
                        <p className="text-base sm:text-lg mt-2">
                            Define routes in Express to handle different API requests. For example:
                        </p>
                        <pre className="bg-gray-200 text-green-500 p-4 rounded text-sm sm:text-base md:text-lg overflow-x-auto whitespace-pre-wrap mt-2">
                            {`app.get('/api', (req, res) => {
    res.send('Hello, World!');
});`}
                        </pre>
                    </div>

                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mb-1">
                        <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Connect to MongoDB</strong>
                        <p className="text-base sm:text-lg mt-2">
                            Install the MongoDB Node.js driver using <code className="text-green-500">npm install mongoose</code>. Connect to MongoDB using Mongoose in <code className="text-green-500">server.js</code>:
                        </p>
                        <pre className="bg-gray-200 text-green-500 p-4 rounded text-sm sm:text-base md:text-lg overflow-x-auto whitespace-pre-wrap mt-2">
                            {`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));`}
                        </pre>
                    </div>

                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mb-1">
                        <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Define a Data Schema</strong>
                        <p className="text-base sm:text-lg mt-2">
                            Create a schema for your data using Mongoose. For example, if you’re building a blog application:
                        </p>
                        <pre className="bg-gray-200 text-green-500 p-4 rounded text-sm sm:text-base md:text-lg overflow-x-auto whitespace-pre-wrap mt-2">
                            {`const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);`}
                        </pre>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">
                    Step 3: Building the Frontend with React.js
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                    React.js allows you to build dynamic and responsive user interfaces. Here's how to get started:
                </p>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mb-1">
                    <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Set Up Your React App</strong>
                    <p className="text-base sm:text-lg mt-2">
                        Use <code className="text-green-500">create-react-app</code> to bootstrap your React project:
                    </p>
                    <pre className="bg-gray-200 text-green-500 p-4 rounded text-sm sm:text-base md:text-lg overflow-x-auto whitespace-pre-wrap mt-2">
                        {`npx create-react-app myapp`}
                    </pre>
                    <p className="text-base sm:text-lg mt-2">
                        Navigate to your app’s directory and start the development server:
                    </p>
                    <pre className="bg-gray-200 text-green-500 p-4 rounded text-sm sm:text-base md:text-lg overflow-x-auto whitespace-pre-wrap mt-2">
                        {`cd myapp
npm start`}
                    </pre>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Create Components</strong>
                    <p className="text-base sm:text-lg mt-2">
                        In React, components are the building blocks of your application. Create functional components for different parts of your UI, such as headers, footers, forms, etc.
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Manage State with Hooks</strong>
                    <p className="text-base sm:text-lg mt-2">
                        Use React hooks like <code className="text-green-500">useState</code> and <code className="text-green-500">useEffect</code> to manage the state and lifecycle of your components.
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Integrate with Backend</strong>
                    <p className="text-base sm:text-lg mt-2">
                        Use Axios or Fetch API to make HTTP requests from your React app to the Express backend, enabling data exchange between the frontend and backend.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">
                    Step 4: Deploying Your Application
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                    After building and testing your application, it’s time to deploy it to a cloud platform like Heroku, Vercel, or AWS.
                </p>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mb-1">
                    <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Choose a Cloud Platform</strong>
                    <p className="text-base sm:text-lg mt-2">
                        Popular platforms include Heroku, Vercel, and AWS. Each has its own advantages depending on your project’s needs.
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Set Up Continuous Integration</strong>
                    <p className="text-base sm:text-lg mt-2">
                        Use CI/CD tools like GitHub Actions or Travis CI to automate the deployment process whenever you push changes to your repository.
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <strong className="text-lg sm:text-xl md:text-2xl text-red-600">Monitor and Scale</strong>
                    <p className="text-base sm:text-lg mt-2">
                        Once deployed, monitor your application’s performance and scale it as needed using cloud platform tools or third-party services.
                    </p>
                </div>
            </section>

            <footer className="text-center py-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Thank you for following this guide. We hope it helps you build a scalable and efficient web application using the MERN stack. If you have any questions, feel free to reach out in the comments below.
                </p>
            </footer>
        </div>
    );
};

export default ScalableWebApp;
