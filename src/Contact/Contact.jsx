import React, { useState } from 'react';
import './Contact.css'; // Assuming you will style it in this CSS file
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import the EmailJS library

const Contact = () => {
    // State to handle form input
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Sending the email using EmailJS
        emailjs.send('service_5mxc2vi', 'template_478u6kf', formData, 'cBlPtBiGuUaH9IyXj')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email was sent successfully! I will contact you shortly.');
                // Clear the form
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div>
            <div className='img-container'>
                <Link to='https://www.linkedin.com/in/michal-vrablic-302799259/' target='_blank'>
                    <img className='test' src='in.svg' alt='icon' />
                </Link>
                <Link to='https://github.com/erixko' target='_blank'>
                    <img className='test' src='git.svg' alt='icon' />
                </Link>
                <Link to='https://www.instagram.com/taric.erixko/?next=%2F' target='_blank'>
                    <img className='test' src='ig.svg' alt='icon' />
                </Link>
                <img className='test' src='phone.svg' alt='Phone Icon' onClick={() => {
                    const textArea = document.createElement("textarea");
                    textArea.value = '+421949421194';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textArea);
                    alert('Phone copied to clipboard!');
                }} />
                <img className='test' src='gmail.svg' alt='Email Icon' onClick={() => {
                    const textArea = document.createElement("textarea");
                    textArea.value = 'michalvrablic01@gmail.com';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textArea);
                    alert('Email copied to clipboard!');
                }} />
            </div>
            <div className="contact-container">
                <h1>Contact Me</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                    ></textarea>

                    <button type="submit" className="contact-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
