import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
        <div className="about-container">        
            <div className="about-section">
                <h2 className="about-section-title">Contact Information</h2>
                <p><strong>Location:</strong> Senkvice, 900 81, Slovakia</p>
                <p><strong>Phone:</strong> +421949421194</p>
                <p><strong>Email:</strong> michalvrablic01@gmail.com</p>
            </div>

            <div className="about-section">
                <h2 className="about-section-title">Education</h2>
                <p><strong>2559M - Intelligent Technologies</strong></p>
                <p><strong>Student at </strong>SPSE Zochova, Bratislava, Slovakia</p>
                <p><strong>Expected Graduation:</strong> June 2025</p>
            </div>

            <div className="about-section">
                <h2 className="about-section-title">Work History</h2>
                <img src='/mcdonalds.png'></img>
                <p><strong>Crew Trainer</strong></p>
                <p>Dejzy S.r.o | Bratislava, Slovakia (09/2022 - 09/2024)</p>
                <ul>
                    <li>Trained employees in customer service, food safety, and performance requirements.</li>
                    <li>Mentored new team members on correct procedures for all operations.</li>
                    <li>Provided feedback to improve crew members' performance during shifts.</li>
                    <li>Set a positive example by delivering high-quality, efficient service.</li>
                </ul>
                <p><strong>Other work expirience: </strong></p>
                <div className='about-work-history'>
                    <div><img src='/bolt.png'></img><p>Pezinok, Slovakia (5/2024 - present)</p></div>
                    <div><img src='/wolt.png'></img><p className='wolt-p'>Pezinok, Slovakia (1/2024 - present)</p></div>

                </div>
            </div>

            <div className="about-section">
                <h2 className="about-section-title">Skills</h2>
                <ul>
                    <li>Customer Service</li>
                    <li>Employee Training</li>
                    <li>Team Leadership</li>
                    <li>Programming</li>
                    <li>Web Development Trends</li>
                    <li>Learning New Technologies</li>
                </ul>
            </div>

            <div className="about-section">
                <h2 className="about-section-title">Professional Summary</h2>
                <p>
                    I was a successful Crew Trainer, skilled at building rapport with new team members and helping them
                    adapt to the environment, customer needs, and restaurant operations. Looking to transition into
                    programming, I am passionate about leveraging my communication, problem-solving, and leadership skills
                    to thrive in the tech industry. I've completed several online courses in JavaScript, React, and full-stack
                    web development to strengthen my programming foundation.
                </p>
            </div>

            <div className="about-section">
                <h2 className="about-section-title">Certifications</h2>
                <img src='/cisco.png'></img>
                <ul>
                    <li>Cisco: CCNA v7 - Enterprise Networking, Security, and Automation <Link to="/ccna1.pdf" target="_blank" rel="noopener noreferrer">View</Link></li>
                    <li>CCNA v7: Switching, Routing, and Wireless Essentials <Link to="/ccna2.pdf" target="_blank" rel="noopener noreferrer">View</Link></li>
                    <li>CCNA v7: Introduction to Networks <Link to="/ccna3.pdf" target="_blank" rel="noopener noreferrer">View</Link></li>
                </ul>
            </div>

            <button className="about-button">Download CV</button>
        </div>
        </div>
    );
};

export default About;
