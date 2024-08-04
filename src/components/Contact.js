import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in">
                Contact Me
            </h2>
            <form className="w-11/12 md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in">
                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="5"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
