import React, { useState } from 'react';
import '../assets/css/contact_us.css'; // Assuming you have a separate CSS file for styles
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/; // Example for a 10-digit phone number

        if (!formData.name.trim()) newErrors.name = "Please enter your name.";
        if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email.";
        if (!formData.mobileNumber.trim() || !phoneRegex.test(formData.mobileNumber)) newErrors.mobileNumber = "Please enter a valid phone number.";
        if (!formData.message.trim()) newErrors.message = "Please enter your message.";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            // Redirect to confirmation page
            window.location.href = "confirmation.html"; // Update with your actual confirmation page route
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
        <Navbar />
        <div className="container contact-form">
            <div className="contact-image text-center">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
            </div>
            <form onSubmit={handleSubmit}>
                <h3 className="text-center">Drop Us a Message</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Your Email *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="mobileNumber"
                                className="form-control"
                                placeholder="Your Phone Number *"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                            />
                            {errors.mobileNumber && <div className="error">{errors.mobileNumber}</div>}
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btn form-control"
                                value="Send Message"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea
                                name="message"
                                className="form-control"
                                placeholder="Your Message *"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {errors.message && <div className="error">{errors.message}</div>}
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <Footer />
            </>
    );
};

export default ContactForm;
