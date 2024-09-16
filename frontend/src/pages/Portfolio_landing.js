import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio_landing.css';
import sidImage from './sid.JPG'; // Import the image
import logo from './logo.jpg'; // Import your logo image
import githubLogo from './github.png';
import emailLogo from './email.png';
import linkedinLogo from './linkedin.png';
import resumeLogo from './resume.png';

const Landing = () => {
    return (
        <div>
            {/* Header Section */}
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

            {/* Landing Page Content */}
            <div className="landing">
                <div>
                    <h1 className="spacing-left">Siddhi Dilip Jadhav | Full Stack Developer</h1>
                    <p className="spacing-left">Crafting dynamic websites and applications</p>
                    {/* Small Div */}
                    <div className="small-div">
                      <h3>Let's work together.</h3> <p> Please reach out via email — it's the most effective way to connect!</p>
                       <button 
                            className="link-button" 
                            onClick={() => window.open('https://www.linkedin.com/in/your-linkedin', '_blank', 'noopener,noreferrer')}
                        >
                            <img src={emailLogo} alt="LinkedIn" className="button-icon" />
                            LinkedIn
                        </button>
                    </div>
                    <div className="middle-div">
                        <p>Hi, I’m Siddhi Dilip Jadhav. I’m a Full Stack Developer pursuing a Master’s degree in Computer Science from California State University, Chico.
                             I have hands-on experience with both front-end and back-end development and am currently working as a Front-End Engineering Intern at Sidepocket in San Francisco.
                             My technical skills include programming languages like C++, Python, and JavaScript, and I’m proficient in web technologies and frameworks such as React.js, Node.js, and Django.
                             I also have experience with cloud services like AWS and Google Cloud, and tools including Docker, Git, and Figma. Some of my key projects include developing an e-commerce platform and a healthcare management app,
                             where I focused on enhancing user engagement and streamlining processes. With my strong educational background and practical experience, I’m excited to take on new challenges and contribute to innovative tech solutions.
                        </p>
                    </div>
                    <div className="second-div">
                        <p>Where to find me?<br /></p>
                        <div className="button-container">
                            <button 
                                className="link-button" 
                                onClick={() => window.open('https://github.com/your-github', '_blank', 'noopener,noreferrer')}
                            >
                                <img src={githubLogo} alt="GitHub" className="button-icon" />
                                Github
                            </button>
                            <button 
                                className="link-button" 
                                onClick={() => window.open('mailto:your-email@example.com')}
                            >
                                <img src={resumeLogo} alt="Email" className="button-icon" />
                                Resume
                            </button>
                            <button 
                                className="link-button" 
                                onClick={() => window.open('https://www.linkedin.com/in/your-linkedin', '_blank', 'noopener,noreferrer')}
                            >
                                <img src={linkedinLogo} alt="LinkedIn" className="button-icon" />
                                LinkedIn
                            </button>
                        </div>
                    </div>
                    {/* Image Section */}
                    <img src={sidImage} alt="Siddhi Dilip Jadhav" className="landing-image" />
                </div>
            </div>
        </div>
    );
};

export default Landing;
