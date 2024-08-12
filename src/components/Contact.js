import React, { useEffect, useState } from 'react';
// import Img from '../assets/images/contact.png';
import Img from '../assets/images/Hamdan2.jpg';
import { useInView } from 'react-intersection-observer';


export default function ContactForm() {

    const { ref: contactRef, inView: contactVisible } = useInView()
    const [contactAnimationRun, setContactAnimationRun] = useState(false)

    useEffect(() => {
        if (contactVisible && !contactAnimationRun) {
            setContactAnimationRun(true)
        }
    }, [contactVisible, contactAnimationRun])



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <section ref={contactRef} id="contact" className={`flex flex-col-reverse lg:flex-row gap-10 items-center  bg-red-600 text-white ${contactAnimationRun ? 'animate-fade-in' : ''}`}>
            <div className="flex-1 max-w-lg lg:max-w-3xl mx-auto px-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3">
                    Let's <span className='text-red-6'>Talk</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left mb-6 lg:mb-8 text-black">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptatibus cum explicabo, perferendis magni et? Libero accusamus recusandae nam expedita voluptatem aut cumque voluptates dolorem soluta exercitationem nesciunt, dolore perspiciatis.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 p-4 lg:p-8"
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-semibold mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg font-semibold mb-2">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-3 h-32 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Type your message here..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btnForRedBg w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div className="flex-1 flex items-center justify-center lg:justify-end">
                <img src={Img} alt="Contact" className="w-full h-auto lg:w-full lg:h-auto object-cover" />
            </div>
        </section>
    );
}
