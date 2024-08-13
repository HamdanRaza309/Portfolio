import React from 'react';

const ScalableWebApp = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Building a Scalable Web Application with MERN Stack</h1>
            <p className="text-gray-600 mb-4">By Hamdan Raza | August 10, 2024 | 12 Comments</p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-lg">
                    In today's rapidly evolving digital landscape, scalability is a crucial aspect of web application development. The MERN stack—MongoDB, Express.js, React.js, and Node.js—is an excellent choice for developers looking to create scalable and high-performance applications. In this guide, we'll walk you through each step, from setting up the development environment to deploying your app on a cloud platform, ensuring that even a novice developer can follow along.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 1: Setting Up the Development Environment</h2>
                <p className="text-lg mb-2">
                    Before you start coding, you need to set up your development environment. Here’s how you can do it:
                </p>
                <ol className="list-decimal list-inside text-lg">
                    <li>
                        <strong>Install Node.js and npm:</strong>
                        <p>Visit the <a href="https://nodejs.org/" className="text-blue-500 underline">official Node.js website</a> and download the latest version of Node.js. This will also install npm (Node Package Manager), which is essential for managing dependencies. After installation, verify the installation by running <code>node -v</code> and <code>npm -v</code> in your terminal.</p>
                    </li>
                    <li>
                        <strong>Install MongoDB:</strong>
                        <p>Download MongoDB from the <a href="https://www.mongodb.com/try/download/community" className="text-blue-500 underline">official MongoDB website</a>. Follow the installation instructions for your operating system. After installation, run <code>mongod</code> to start the MongoDB server.</p>
                    </li>
                    <li>
                        <strong>Set Up Your Project Structure:</strong>
                        <p>Create a new directory for your project. Inside this directory, initialize a new Node.js project by running <code>npm init</code>. This will generate a <code>package.json</code> file where you can manage your project’s dependencies.</p>
                    </li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 2: Creating the Backend with Express.js and Node.js</h2>
                <p className="text-lg mb-2">
                    The backend is the heart of your application, handling business logic, database interactions, and API endpoints.
                </p>
                <ol className="list-decimal list-inside text-lg">
                    <li>
                        <strong>Install Express.js:</strong>
                        <p>In your project directory, run <code>npm install express</code> to install Express.js, a minimalist web framework for Node.js.</p>
                    </li>
                    <li>
                        <strong>Create the Server:</strong>
                        <p>Create a file named <code>server.js</code> in your project’s root directory. Set up a basic Express server:</p>
                        <pre className="bg-gray-100 p-4 rounded">
                            {`const express = require('express');\nconst app = express();\nconst port = process.env.PORT || 5000;\n\napp.listen(port, () => {\n    console.log(\`Server running on port \${port}\`);\n});`}
                        </pre>
                    </li>
                    <li>
                        <strong>Set Up Routing:</strong>
                        <p>Define routes in Express to handle different API requests. For example:</p>
                        <pre className="bg-gray-100 p-4 rounded">
                            {`app.get('/api', (req, res) => {\n    res.send('Hello, World!');\n});`}
                        </pre>
                    </li>
                    <li>
                        <strong>Connect to MongoDB:</strong>
                        <p>Install the MongoDB Node.js driver using <code>npm install mongoose</code>. Connect to MongoDB using Mongoose in <code>server.js</code>:</p>
                        <pre className="bg-gray-100 p-4 rounded">
                            {`const mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true })\n    .then(() => console.log('MongoDB connected...'))\n    .catch(err => console.error(err));`}
                        </pre>
                    </li>
                    <li>
                        <strong>Define a Data Schema:</strong>
                        <p>Create a schema for your data using Mongoose. For example, if you’re building a blog application:</p>
                        <pre className="bg-gray-100 p-4 rounded">
                            {`const blogSchema = new mongoose.Schema({\n    title: String,\n    content: String,\n    date: { type: Date, default: Date.now }\n});\n\nconst Blog = mongoose.model('Blog', blogSchema);`}
                        </pre>
                    </li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 3: Building the Frontend with React.js</h2>
                <p className="text-lg mb-2">
                    React.js is used to build the user interface of your application.
                </p>
                <ol className="list-decimal list-inside text-lg">
                    <li>
                        <strong>Create a React App:</strong>
                        <p>Use the Create React App tool to set up your React project:</p>
                        <pre className="bg-gray-100 p-4 rounded">
                            {`npx create-react-app my-app\ncd my-app`}
                        </pre>
                    </li>
                    <li>
                        <strong>Structure Your Components:</strong>
                        <p>Organize your React components based on your application’s needs. For instance, you might have components like <code>Header</code>, <code>Footer</code>, <code>BlogList</code>, and <code>BlogPost</code>.</p>
                    </li>
                    <li>
                        <strong>Fetching Data from the Backend:</strong>
                        <p>Use the <code>fetch</code> API or <code>axios</code> to make HTTP requests to your Express backend.</p>
                        <pre className="bg-gray-100 p-4 rounded">
                            {`useEffect(() => {\n    fetch('/api/blogs')\n        .then(res => res.json())\n        .then(data => setBlogs(data));\n}, []);`}
                        </pre>
                    </li>
                    <li>
                        <strong>Implement Routing:</strong>
                        <p>Use <code>react-router-dom</code> to handle client-side routing. This allows you to navigate between different pages in your React app without refreshing the page.</p>
                    </li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 4: Integrating the Frontend and Backend</h2>
                <p className="text-lg mb-2">
                    With the backend and frontend in place, it’s time to integrate them.
                </p>
                <ol className="list-decimal list-inside text-lg">
                    <li>
                        <strong>Proxy Setup:</strong>
                        <p>In your React project’s <code>package.json</code>, set up a proxy to your Express server:</p>
                        <pre className="bg-gray-100 p-4 rounded">
                            {`"proxy": "http://localhost:5000"`}
                        </pre>
                    </li>
                    <li>
                        <strong>Serve the React App from Express:</strong>
                        <p>In your <code>server.js</code>, add a route to serve your React app:</p>
                        <pre className="bg-gray-100 p-4 rounded">
                            {`app.use(express.static(path.join(__dirname, 'client/build')));\n\napp.get('*', (req, res) => {\n    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));\n});`}
                        </pre>
                    </li>
                    <li>
                        <strong>Test the Integration:</strong>
                        <p>Run both your backend (<code>node server.js</code>) and frontend (<code>npm start</code>) servers. Visit <code>http://localhost:3000</code> to see your integrated application in action.</p>
                    </li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Step 5: Deploying Your Application</h2>
                <p className="text-lg mb-2">
                    Finally, it’s time to deploy your application to make it accessible to users.
                </p>
                <ol className="list-decimal list-inside text-lg">
                    <li>
                        <strong>Choose a Hosting Provider:</strong>
                        <p>Platforms like Heroku, Vercel, or AWS are popular choices for deploying MERN applications.</p>
                    </li>
                    <li>
                        <strong>Configure Environment Variables:</strong>
                        <p>Set environment variables for your MongoDB connection string and other sensitive data.</p>
                    </li>
                    <li>
                        <strong>Deploy the Backend:</strong>
                        <p>Push your backend code to a Git repository, then deploy it to your chosen platform using its CLI or dashboard.</p>
                    </li>
                    <li>
                        <strong>Deploy the Frontend:</strong>
                        <p>Build your React app using <code>npm run build</code>, then deploy the build folder to your hosting provider.</p>
                    </li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                <p className="text-lg">
                    Building a scalable web application using the MERN stack is a powerful approach that leverages modern technologies. By following the steps outlined in this guide, you can develop a full-fledged web application that is both performant and scalable, ready to handle real-world challenges.
                </p>
            </section>
        </div>
    );
}

export default ScalableWebApp;
