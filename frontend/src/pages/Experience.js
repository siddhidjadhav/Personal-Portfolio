import React from 'react';
import './Experience.css';
import { Link } from 'react-router-dom';

import logo from './logo.jpg'; // Import your logo image (or any image you'd like)
import sidepocketinvest_logo from './sidepocketinvest_logo.jpg'; // Example company icon image
import persistent_systems_logo from './persistent_systems_logo.jpg';

const Experience = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" /> {/* Logo image */}
                    <span className="dot"></span> {/* Red dot */}
                </div>
                <nav className="nav-links">
                    <Link to="/Me">About me</Link> {/* Corrected path */}
                    <Link to="/">Home</Link> {/* Corrected path */}
                    <Link to="/Projects">Projects</Link> {/* Corrected path */}
                </nav>
            </header>
            <div className="experience-container">
                <h1>Experience</h1>
                    <br></br>
                <div className="experience-item">
                    <div className="company-info">
                        <img src={sidepocketinvest_logo} alt="Company Icon" className="company-icon" /> {/* Image before company name */}
                        <div>
                            <h2>Sidepocket Inc</h2>
                            <p className="job-title">Frontend Engineer</p> {/* Job title next to company logo */}
                        </div>
                    </div>
                    <p>
                        As a Frontend Engineer at Sidepocket, I focus on improving the website's UI and overall user experience by collaborating with cross-functional teams,
                        including UX, UI, and QA. My responsibilities include implementing and optimizing website features, ensuring the site's performance, reliability, and visual consistency.
                        I take a proactive role in enhancing the UI by recommending improvements, fixing fonts, and helping implement a standardized color palette.
                        In addition to these responsibilities, I contribute to the development of Progressive Web Applications (PWA) to enhance user engagement and accessibility.
                        By writing clean, maintainable code using Next.js, Tailwind CSS, and React, I build efficient web solutions aligned with industry standards.
                    </p>
                </div>

                <div className="experience-item">
                    <div className="company-info">
                        <img src={persistent_systems_logo} alt="Company Icon" className="company-icon" /> {/* Image before company name */}
                        <div>
                            <h2>
                                <span className="persistent">Persistent</span> <span className="systems">Systems</span>
                            </h2>
                            <p className="job-title">Software Engineer Intern</p> {/* Job title next to company logo */}
                        </div>
                    </div>
                    <p>
                        As a Software Engineer Intern at Persistent Systems in Pune, India, from January 2022 to July 2022, I collaborated closely with the web design and UI teams to enhance the website's user interface and functionality.
                        One of my key contributions was developing a real-time boat location feature that streamlined the booking process, improving the user experience and increasing booking confirmations by 5%.
                        By providing live boat availability, I helped reduce processing time by 7%, making the system more efficient. I also worked on implementing a chat functionality, allowing seamless communication between renters and clients, which improved decision-making and overall customer satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
