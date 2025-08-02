import React, { useEffect, useRef, useState } from 'react';
import Img from '../assets/images/Hamdan1.png';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

export default function ContactForm(props) {
    const { ref: contactRef, inView: contactVisible } = useInView();
    const [contactAnimationRun, setContactAnimationRun] = useState(false);
    const form = useRef();

    useEffect(() => {
        if (contactVisible && !contactAnimationRun) {
            setContactAnimationRun(true);
        }
    }, [contactVisible, contactAnimationRun]);

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_org: '',
        from_services: '',
        ref: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xfxbbv7', 'template_9dwnuwf', form.current, {
                publicKey: '8Pl3wB1WmrUUqviR-',
            })
            .then(
                () => {
                    props.showAlert('Email is Sent Successfully', 'success')
                    setFormData({
                        from_name: '',
                        from_email: '',
                        from_org: '',
                        from_services: '',
                        from_ref: '',
                        message: ''
                    })
                },
                (error) => {
                    props.showAlert('Email is not Sent', 'danger')
                },
            );
    };

    return (
        <section
            ref={contactRef}
            id="contact"
            className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex flex-col-reverse lg:flex-row gap-10 bg-red-600 text-white ${contactAnimationRun ? 'animate-fade-in' : ''}`}
        >
            <div className="flex-1 max-w-lg lg:max-w-3xl mx-auto px-5 py-5">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3">
                    Let's Talk
                </h2>
                <p className="text-sm sm:text-sm md:text-md lg:text-md text-center lg:text-left mb-3 lg:mb-4 text-gray-200">
                    Have a project in mind or just want to say hello? I’d love to hear from you! Whether you have a question, need some advice, or want to collaborate on an exciting project, feel free to drop me a message. Your ideas and feedback are always welcome, and I'm here to help bring your vision to life.
                </p>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-3 p-2 lg:p-4"
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-semibold">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            id="name"
                            value={formData.from_name}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your Name"
                            required
                            aria-label="Your Name"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="from_email"
                            id="email"
                            value={formData.from_email}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your Email"
                            required
                            aria-label="Email Address"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="orgName" className="text-lg font-semibold">
                            Your Organization
                        </label>
                        <input
                            type="text"
                            name="from_org"
                            id="orgName"
                            value={formData.from_org}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your Organization Name"
                            aria-label="Your Organization"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="services" className="text-lg font-semibold">
                            What services are you looking for?
                        </label>
                        <input
                            type="text"
                            name="from_services"
                            id="services"
                            value={formData.from_services}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Web Design, Web Development..."
                            required
                            aria-label="What services are you looking for?"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="ref" className="text-lg font-semibold">
                            How did you hear about us?
                        </label>
                        <select
                            name="from_ref"
                            id="ref"
                            value={formData.from_ref}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-white"
                            required
                            aria-label="How did you hear about us?"
                        >
                            <option value="options">
                                Options*
                            </option>
                            <option value="socialMedia">Social Media</option>
                            <option value="friendsOrColleagues">Friends or Colleagues</option>
                            <option value="internetSearch">Internet Search</option>
                            <option value="referral">Referral</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg font-semibold">
                            Project Overview
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-3 h-32 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Hi Hamdan, can you help me with..."
                            aria-label="Project Overview"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btnForRedBg w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex-1 flex  justify-end lg:justify-end">
                <img src={Img} alt="Contact" className="w-full h-auto lg:w-full lg:h-auto object-cover" />
            </div>
        </section>
    );
}
