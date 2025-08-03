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
        from_ref: '',
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
                    });
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
            className={`mb-6 flex flex-col-reverse lg:flex-row gap-8 bg-red-600 text-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 lg:py-10 ${contactAnimationRun ? 'animate-fade-in' : ''}`}
        >
            <div className="flex-1 max-w-full lg:max-w-3xl mx-auto">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 text-center lg:text-left">
                    Let's Talk
                </h2>
                <p className="text-xs sm:text-sm md:text-md text-center lg:text-left mb-4 text-gray-200">
                    Have a project in mind or just want to say hello? I’d love to hear from you! Whether you have a question, need some advice, or want to collaborate on an exciting project, feel free to drop me a message.
                </p>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-4"
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-semibold">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            id="name"
                            value={formData.from_name}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-2 sm:p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your Name"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="from_email"
                            id="email"
                            value={formData.from_email}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-2 sm:p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your Email"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="orgName" className="text-sm font-semibold">
                            Your Organization
                        </label>
                        <input
                            type="text"
                            name="from_org"
                            id="orgName"
                            value={formData.from_org}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-2 sm:p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Enter your Organization Name"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="services" className="text-sm font-semibold">
                            What services are you looking for?
                        </label>
                        <input
                            type="text"
                            name="from_services"
                            id="services"
                            value={formData.from_services}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-2 sm:p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Web Design, Development..."
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="ref" className="text-sm font-semibold">
                            How did you hear about us?
                        </label>
                        <select
                            name="from_ref"
                            id="ref"
                            value={formData.from_ref}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-2 sm:p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        >
                            <option value="">Options*</option>
                            <option value="socialMedia">Social Media</option>
                            <option value="friendsOrColleagues">Friends or Colleagues</option>
                            <option value="internetSearch">Internet Search</option>
                            <option value="referral">Referral</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold">
                            Project Overview
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-gray-700 bg-gray-800 p-2 sm:p-3 w-full text-sm h-32 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Hi Hamdan, can you help me with..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btnForRedBg w-full text-sm sm:text-base"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Image hidden on small devices */}
            <div className="flex-1 hidden sm:flex justify-end">
                <img
                    src={Img}
                    alt="Contact"
                    className="w-full h-auto object-cover max-w-xs sm:max-w-sm md:max-w-md"
                />
            </div>
        </section>
    );
}
