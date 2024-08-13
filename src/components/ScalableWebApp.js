import React from 'react';
import Img from '../assets/images/blog1.jpg'
import { Link } from 'react-router-dom';

const ScalableWebApp = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white text-black">
            <header className="mb-8 text-center">
                <h1 className="text-5xl font-bold text-black mb-2">Building a Scalable Web Application with MERN Stack</h1>
                <p className="text-gray-600 mb-4">By Hamdan Raza | August 10, 2024 | 12 Comments</p>
            </header>
            <section className="mb-12">
                <img src={Img} alt="Scalable Web Application Img" />
            </section>
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-black mb-4">Introduction</h2>
                <p className="text-lg leading-relaxed">
                    In today's rapidly evolving digital landscape, scalability is a crucial aspect of web application development. The MERN stack—MongoDB, Express.js, React.js, and Node.js—is an excellent choice for developers looking to create scalable and high-performance applications. In this guide, we'll walk you through each step, from setting up the development environment to deploying your app on a cloud platform, ensuring that even a novice developer can follow along.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-black mb-4">Step 1: Setting Up the Development Environment</h2>
                <p className="text-lg mb-4 leading-relaxed">
                    Before you start coding, you need to set up your development environment. Here’s how you can do it:
                </p>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-red-600 mb-2">Install Node.js and npm</h3>
                    <p className="text-lg mb-2">
                        Visit the <Link target='_blank' to="https://nodejs.org/" className="text-green-500 underline">official Node.js website</Link> and download the latest version of Node.js. This will also install npm (Node Package Manager), which is essential for managing dependencies. After installation, verify the installation by running <code className='text-green-500'>node -v</code> and <code className='text-green-500'>npm -v</code> in your terminal.
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <h3 className="text-2xl font-semibold text-red-600 mb-2">Install MongoDB</h3>
                    <p className="text-lg mb-2">
                        Download MongoDB from the <Link target='_blank' to="https://www.mongodb.com/try/download/community" className="text-green-500 underline">official MongoDB website</Link>. Follow the installation instructions for your operating system. After installation, run <code className='text-green-500'>mongod</code> to start the MongoDB server.
                    </p>
                </div>
                <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg mt-4">
                    <h3 className="text-2xl font-semibold text-red-600 mb-2">Set Up Your Project Structure</h3>
                    <p className="text-lg mb-2">
                        Create a new directory for your project. Inside this directory, initialize a new Node.js project by running <code className='text-green-500'>npm init</code>. This will generate a <code className='text-green-500'>package.json</code> file where you can manage your project’s dependencies.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-black mb-4">Step 2: Creating the Backend with Express.js and Node.js</h2>
                <p className="text-lg leading-relaxed">
                    The backend is the heart of your application, handling business logic, database interactions, and API endpoints.
                </p>
                <div className="list-decimal list-inside text-lg space-y-4">

                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Install Express.js</strong>
                        <p>In your project directory, run <code className='text-green-500'>npm install express</code> to install Express.js, a minimalist web framework for Node.js.</p>
                    </div>

                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Create the Server</strong>
                        <p>Create a file named <code className='text-green-500'>server.js</code> in your project’s root directory. Set up a basic Express server:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm text-green-500">
                            {`const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});`}
                        </pre>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Set Up Routing</strong>
                        <p>Define routes in Express to handle different API requests. For example:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm text-green-500">
                            {`app.get('/api', (req, res) => {
    res.send('Hello, World!');
});`}
                        </pre>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-400">Connect to MongoDB</strong>
                        <p>Install the MongoDB Node.js driver using <code className='text-green-500'>npm install mongoose</code>. Connect to MongoDB using Mongoose in <code className='text-green-500'>server.js</code>:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm text-green-500">
                            {`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));`}
                        </pre>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">
                        <strong className="text-red-400">Define a Data Schema</strong>
                        <p>Create a schema for your data using Mongoose. For example, if you’re building a blog application:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm text-green-500">
                            {`const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);`}
                        </pre>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-black mb-4">Step 3: Building the Frontend with React.js</h2>
                <p className="text-lg leading-relaxed">
                    React.js is used to build the user interface of your application.
                </p>
                <div className="list-decimal list-inside text-lg space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Create a React App</strong>
                        <p>Use the Create React App tool to set up your React project:</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm text-green-500">
                            {`npx create-react-app my-app
cd my-app`}
                        </pre>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Structure Your Components</strong>
                        <p>Organize your React components based on your application’s needs. For instance, you might have components like <code className='text-green-500'>Header</code>, <code className='text-green-500'>Footer</code>, <code className='text-green-500'>BlogList</code>, and <code className='text-green-500'>BlogPost</code>.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Fetching Data from the Backend</strong>
                        <p>Use the <code className='text-green-500'>fetch</code> API or <code className='text-green-500'>axios</code> to make HTTP requests to your Express backend.</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm text-green-500">
                            {`useEffect(() => {
    fetch('/api/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data));
}, []);`}
                        </pre>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Implement Routing</strong>
                        <p>Use <code className='text-green-500'>react-router-dom</code> to handle client-side routing. This allows you to navigate between different pages in your React app without refreshing the page.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-black mb-4">Step 4: Integrating the Frontend and Backend</h2>
                <p className="text-lg leading-relaxed">
                    With the backend and frontend in place, it’s time to integrate them.
                </p>
                <div className="list-decimal list-inside text-lg space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Create API Endpoints</strong>
                        <p>In your Express server, define API endpoints that your React frontend can interact with.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Make HTTP Requests from React</strong>
                        <p>Use the <code className='text-green-500'>fetch</code> API or <code className='text-green-500'>axios</code> to communicate with the backend.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Handle Data Rendering in React</strong>
                        <p>Once you receive data from the backend, update your React state and render the data within your components.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-black mb-4">Step 5: Deploying Your Application</h2>
                <p className="text-lg leading-relaxed">
                    Deploying your application to a cloud platform ensures it’s accessible to users. You can use platforms like Heroku, Vercel, or Netlify for deployment.
                </p>
                <div className="list-decimal list-inside text-lg space-y-4">
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Deploy the Backend</strong>
                        <p>Choose a platform like Heroku to deploy your Express server. Ensure MongoDB is accessible, possibly using MongoDB Atlas for cloud-based MongoDB hosting.</p>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg">

                        <strong className="text-red-400">Deploy the Frontend</strong>
                        <p>Use Vercel or Netlify to deploy your React application. Configure your deployment to connect with your backend API endpoints.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ScalableWebApp;
