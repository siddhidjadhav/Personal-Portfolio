// experience.js
import React from 'react';
import './Experience.css';
import { Link } from 'react-router-dom';

import logo from './logo.jpg'; // Import your logo image
const Experience = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" /> {/* Logo image */}
                    <span className="dot"></span> {/* Red dot */}
                </div>
                <nav className="nav-links">
                    <Link to="./About me">About me</Link>
                    <Link to="/Experience">Experience</Link>
                    <Link to="/Projects">Projects</Link>
                </nav>
            </header>
            <div className="experience-container">
                <h1>My Experience</h1>

                <div className="experience-item">
                    <h2>XYZ Company 1</h2>
                    <p>
                        At XYZ Company 1, I worked as a Software Engineer. My responsibilities included
                        developing web applications, enhancing the user interface using React.js, and collaborating with backend developers to integrate APIs.
                    </p>
                </div>

                <div className="experience-item">
                    <h2>XYZ Company 2</h2>
                    <p>
                        At XYZ Company 2, I was responsible for maintaining existing applications, debugging issues, and optimizing system performance.
                        I also introduced new features to the company's internal tools using Node.js and Express.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
